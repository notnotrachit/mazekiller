import "./style.css";
import * as THREE from "three";
import { Player } from "./components/Player.js";
import { GameWorld } from "./components/GameWorld.js";
import { SoundManager } from "./components/SoundManager.js";
import { Griever } from "./components/Griever.js";
import { Collectibles } from "./components/Collectibles.js";

// DOM elements
const loadingScreen = document.querySelector(".loading-screen");
const loadingBar = document.querySelector(".loading-bar");
const introScreen = document.querySelector(".intro-screen");
const startGameBtn = document.getElementById("start-game");
const difficultyBtns = document.querySelectorAll(".difficulty-btn");
const gameUI = document.querySelector(".game-ui");
const objectiveElement = document.getElementById("objective");
const pauseMenu = document.querySelector(".pause-menu");
const resumeBtn = document.getElementById("resume");
const restartFromPauseBtn = document.getElementById("restart-from-pause");
const gameOverScreen = document.querySelector(".game-over");
const gameOverMessage = document.getElementById("game-over-message");
const restartBtn = document.getElementById("restart");
const winScreen = document.querySelector(".win-screen");
const playAgainBtn = document.getElementById("play-again");
const finalTimeElement = document.getElementById("final-time");
const finalInfectionElement = document.getElementById("final-infection");
const storyNotePanel = document.querySelector(".story-note");
const noteTitle = document.querySelector(".note-content h3");
const noteContent = document.querySelector(".note-content p");
const closeNoteBtn = document.querySelector(".close-note");
const interactionPrompt = document.querySelector(".interaction-prompt");
const instructionsPanel = document.querySelector(".instructions");
const vignetteOverlay = document.createElement("div");
const flashlightOverlay = document.createElement("div");
const infectionOverlay = document.createElement("div");
const timeWarningOverlay = document.createElement("div");

// Add overlays to the DOM
vignetteOverlay.className = "vignette-overlay";
flashlightOverlay.className = "flashlight-overlay";
infectionOverlay.className = "infection-overlay";
timeWarningOverlay.className = "time-warning-overlay";
document.body.appendChild(vignetteOverlay);
document.body.appendChild(flashlightOverlay);
document.body.appendChild(infectionOverlay);
document.body.appendChild(timeWarningOverlay);

// Game state
const gameState = {
  difficulty: "normal",
  serumCollected: 0,
  totalSerum: 5,
  notesFound: 0,
  totalNotes: 8,
  gameStarted: false,
  gamePaused: false,
  gameOver: false,
  startTime: 0,
  elapsedTime: 0,
  timeLimit: 300, // 5 minutes in seconds
  flashlightOn: false,
  objectives: [
    "Find serum vials to slow the infection",
    "Collect information about the maze",
    "Find the exit before time runs out",
    "Watch out for Grievers at night",
  ],
  currentObjective: 0,
  objectiveTimer: 0,
  objectiveDisplayTime: 10,
  environmentStatus: {
    isNight: false,
    isTransitioning: false,
  },
};

// Scene setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x080808); // Very dark background

// Check for WebGPU support
async function createRenderer() {
  // Try to use WebGPU first
  if (navigator.gpu) {
    try {
      const renderer = new THREE.WebGPURenderer({ antialias: true });
      await renderer.init();
      console.log("Using WebGPU renderer");
      return renderer;
    } catch (error) {
      console.warn("WebGPU initialization failed:", error);
      console.warn("Falling back to WebGL renderer");
    }
  } else {
    console.warn("WebGPU not supported by this browser, using WebGL instead");
  }

  // Fallback to WebGL
  return new THREE.WebGLRenderer({ antialias: true });
}

// Camera setup
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.y = 1.6; // Player height

// Animation loop variables - initialize them before the animate function
const clock = new THREE.Clock();
const frameRateLimit = 60; // Target frame rate
const frameInterval = 1000 / frameRateLimit;
let lastTime = 0; // Will be properly initialized when renderer is ready

// Create renderer (async)
let renderer;

createRenderer().then((r) => {
  renderer = r;
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  document.body.appendChild(renderer.domElement);

  // Initialize animation variables
  lastTime = performance.now();

  // Initialize the rest of the game now that renderer is ready
  initializeGame();
});

// Loading manager
const loadingManager = new THREE.LoadingManager();
loadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
  const progress = (itemsLoaded / itemsTotal) * 100;
  loadingBar.style.width = `${progress}%`;
  console.log(`Loading: ${progress.toFixed(2)}% - ${url}`);
};

loadingManager.onLoad = () => {
  console.log("All resources loaded");
  dismissLoadingScreen();
};

loadingManager.onError = (url) => {
  console.error("Error loading:", url);
  // Continue to intro screen even with errors
  dismissLoadingScreen();
};

// Manually track some items to make sure loadingManager has something to track
// This ensures the loading manager will trigger onLoad eventually
loadingManager.itemStart("mazekiller-init");

// Add a backup timeout to dismiss loading screen after 5 seconds
// This ensures users won't get stuck on loading even if something fails
const loadingTimeout = setTimeout(() => {
  console.log("Loading timeout reached, dismissing loading screen anyway");
  dismissLoadingScreen();
}, 5000);

function dismissLoadingScreen() {
  // Clear the timeout if it was triggered properly
  clearTimeout(loadingTimeout);

  // Mark our manual item as complete
  loadingManager.itemEnd("mazekiller-init");

  // Only dismiss once
  if (loadingScreen.style.opacity !== "0") {
    setTimeout(() => {
      loadingScreen.style.opacity = "0";
      setTimeout(() => {
        loadingScreen.style.display = "none";
        introScreen.style.display = "flex";
      }, 500);
    }, 1000);
  }
}

// Create sound manager with error handling
let soundManager;
try {
  soundManager = new SoundManager(camera, loadingManager);
  if (soundManager) {
    soundManager.setMasterVolume(0.7);
  }
} catch (error) {
  console.error("Failed to initialize sound manager:", error);
  soundManager = null;
}

// Initialize game world
const gameWorld = new GameWorld(scene, loadingManager);

// Create player
const player = new Player(scene, camera, document.body, soundManager);

// Set player starting position
player.controls
  .getObject()
  .position.set(
    (-gameWorld.mazeSize / 2 + 1) * gameWorld.cellSize,
    1.6,
    (-gameWorld.mazeSize / 2 + 1) * gameWorld.cellSize
  );

// Initialize collectibles system
const collectibles = new Collectibles(scene, soundManager);

// Generate story notes
collectibles.createStoryNotes(
  generateRandomPositions(
    8,
    gameWorld.maze,
    gameWorld.mazeSize,
    gameWorld.cellSize
  )
);

// Add Grievers based on difficulty
const grievers = [];
function addGrievers() {
  // Clear existing grievers first
  grievers.forEach((griever) => {
    scene.remove(griever.mesh);
  });
  grievers.length = 0;

  let numGrievers = 1; // Easy

  switch (gameState.difficulty) {
    case "easy":
      numGrievers = 1;
      break;
    case "normal":
      numGrievers = 2;
      break;
    case "hard":
      numGrievers = 3;
      break;
  }

  for (let i = 0; i < numGrievers; i++) {
    const position = findGrieverStartPosition();
    const griever = new Griever(
      scene,
      gameWorld.maze,
      gameWorld.mazeSize,
      gameWorld.cellSize,
      position,
      soundManager
    );
    grievers.push(griever);
  }
}

function findGrieverStartPosition() {
  // Find a position far from the player's start
  const playerStartX = (-gameWorld.mazeSize / 2 + 1) * gameWorld.cellSize;
  const playerStartZ = (-gameWorld.mazeSize / 2 + 1) * gameWorld.cellSize;

  let x, z, distance;
  let minDistance = gameWorld.mazeSize * gameWorld.cellSize * 0.5; // Ensure grievers start far away

  do {
    const i = Math.floor(Math.random() * (gameWorld.mazeSize - 2)) + 1;
    const j = Math.floor(Math.random() * (gameWorld.mazeSize - 2)) + 1;

    // Check if this is an empty space in the maze
    if (gameWorld.maze[i][j] === 0) {
      x = (j - gameWorld.mazeSize / 2) * gameWorld.cellSize;
      z = (i - gameWorld.mazeSize / 2) * gameWorld.cellSize;

      // Calculate distance from player start
      distance = Math.sqrt(
        Math.pow(x - playerStartX, 2) + Math.pow(z - playerStartZ, 2)
      );
    } else {
      distance = 0; // Force retry
    }
  } while (distance < minDistance);

  return new THREE.Vector3(x, 1.5, z);
}

function generateRandomPositions(count, maze, mazeSize, cellSize) {
  const positions = [];
  const emptySpaces = [];

  // Find all empty spaces
  for (let i = 1; i < mazeSize - 1; i++) {
    for (let j = 1; j < mazeSize - 1; j++) {
      if (maze[i][j] === 0) {
        // Skip the start and end positions
        if (
          (i === 1 && j === 1) ||
          (i === mazeSize - 2 && j === mazeSize - 2)
        ) {
          continue;
        }
        emptySpaces.push({ x: j, z: i });
      }
    }
  }

  // Shuffle and pick positions
  shuffleArray(emptySpaces);
  const selectedPositions = emptySpaces.slice(0, count);

  // Convert to world positions
  selectedPositions.forEach((pos) => {
    positions.push(
      new THREE.Vector3(
        (pos.x - mazeSize / 2) * cellSize,
        0.5, // Just above ground
        (pos.z - mazeSize / 2) * cellSize
      )
    );
  });

  return positions;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Difficulty selection
difficultyBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    difficultyBtns.forEach((b) => b.classList.remove("active"));

    // Add active class to clicked button
    btn.classList.add("active");

    // Set difficulty
    gameState.difficulty = btn.dataset.difficulty;

    // Adjust time limit based on difficulty
    switch (gameState.difficulty) {
      case "easy":
        gameState.timeLimit = 420; // 7 minutes
        break;
      case "normal":
        gameState.timeLimit = 300; // 5 minutes
        break;
      case "hard":
        gameState.timeLimit = 180; // 3 minutes
        break;
    }
  });
});

// Start game button
startGameBtn.addEventListener("click", () => {
  startGame();
});

// Add mouse controls instruction and click event handler for the game canvas
const renderer3DCanvas = renderer.domElement;
renderer3DCanvas.addEventListener("click", () => {
  if (gameState.gameStarted && !gameState.gamePaused && !gameState.gameOver) {
    // This click will attempt to lock the pointer if it isn't already locked
    player.lock();
  }
});

// Game functions
function startGame() {
  introScreen.style.opacity = "0";

  setTimeout(() => {
    introScreen.style.display = "none";
    gameUI.style.display = "block";
    instructionsPanel.style.display = "block";

    // Hide instructions after 10 seconds
    setTimeout(() => {
      instructionsPanel.style.opacity = "0";
      setTimeout(() => {
        instructionsPanel.style.display = "none";
      }, 500);
    }, 10000);

    // Lock pointer for player control
    player.lock();

    // Add grievers based on difficulty
    addGrievers();

    // Play ambient music
    if (soundManager) {
      soundManager.playMusic("main");
      soundManager.fadeInAmbient("wind", 0.5);
    }
  }, 500);
}

player.addEventListener("lock", function () {
  if (!gameState.gameStarted) {
    gameState.gameStarted = true;
    gameState.startTime = Date.now();
  }

  gameState.gamePaused = false;
  if (pauseMenu.style.display === "flex") {
    pauseMenu.style.display = "none";
  }
});

player.addEventListener("unlock", function () {
  if (gameState.gameStarted && !gameState.gameOver) {
    showPauseMenu();
  }
});

// Toggle flashlight
document.addEventListener("keydown", function (event) {
  if (event.code === "KeyF" && gameState.gameStarted && !gameState.gameOver) {
    gameState.flashlightOn = !gameState.flashlightOn;
    updateFlashlightOverlay();

    if (soundManager) {
      soundManager.play("flashlightToggle");
    }
  }

  // Pause game with ESC key
  if (event.code === "Escape" && gameState.gameStarted && !gameState.gameOver) {
    if (gameState.gamePaused) {
      resumeGame();
    } else {
      showPauseMenu();
    }
  }

  // Interaction with E key
  if (event.code === "KeyE" && gameState.gameStarted && !gameState.gameOver) {
    checkInteractions();
  }
});

function updateFlashlightOverlay() {
  if (gameState.flashlightOn) {
    flashlightOverlay.style.display = "block";
  } else {
    flashlightOverlay.style.display = "none";
  }
}

function showPauseMenu() {
  player.unlock();
  gameState.gamePaused = true;
  pauseMenu.style.display = "flex";
}

function resumeGame() {
  pauseMenu.style.display = "none";
  player.lock();
}

resumeBtn.addEventListener("click", resumeGame);
restartFromPauseBtn.addEventListener("click", resetGame);
restartBtn.addEventListener("click", resetGame);
playAgainBtn.addEventListener("click", resetGame);
closeNoteBtn.addEventListener("click", hideStoryNote);

function gameWin() {
  gameState.gameOver = true;
  player.unlock();

  if (soundManager) {
    soundManager.playMusic("victory");
  }

  const finalTime = formatTime(gameState.elapsedTime / 1000);
  const finalInfection = Math.floor(player.infection);

  finalTimeElement.textContent = finalTime;
  finalInfectionElement.textContent = `${finalInfection}%`;

  winScreen.style.display = "flex";
}

function gameLose(reason) {
  gameState.gameOver = true;
  player.unlock();

  if (soundManager) {
    soundManager.playMusic("gameOver");
  }

  let message = "";

  switch (reason) {
    case "time":
      message = "Time has run out. The maze walls have closed.";
      break;
    case "infected":
      message = "The infection has taken over your body.";
      break;
    case "griever":
      message = "You have been killed by a Griever.";
      break;
    default:
      message = "Game Over";
  }

  gameOverMessage.textContent = message;
  gameOverScreen.style.display = "flex";
}

function resetGame() {
  // Hide all screens
  pauseMenu.style.display = "none";
  gameOverScreen.style.display = "none";
  winScreen.style.display = "none";

  // Reset game state
  gameState.serumCollected = 0;
  gameState.notesFound = 0;
  gameState.gameOver = false;
  gameState.gamePaused = false;
  gameState.startTime = Date.now();
  gameState.currentObjective = 0;
  gameState.objectiveTimer = 0;
  updateObjective();

  // Reset player
  player.reset();
  player.controls
    .getObject()
    .position.set(
      (-gameWorld.mazeSize / 2 + 1) * gameWorld.cellSize,
      1.6,
      (-gameWorld.mazeSize / 2 + 1) * gameWorld.cellSize
    );

  // Reset world elements
  gameWorld.resetKeys();
  collectibles.reset();

  // Reset UI
  document.getElementById(
    "collected"
  ).textContent = `Serum: 0/${gameState.totalSerum}`;

  // Add grievers based on difficulty
  addGrievers();

  // Reset music
  if (soundManager) {
    soundManager.playMusic("main");
  }

  // Lock pointer and start game
  player.lock();
}

function updateObjective() {
  objectiveElement.textContent =
    gameState.objectives[gameState.currentObjective];
}

function cycleObjective() {
  gameState.currentObjective =
    (gameState.currentObjective + 1) % gameState.objectives.length;
  updateObjective();
  gameState.objectiveTimer = 0;
}

function checkInteractions() {
  // Check for collectible interactions
  const playerPosition = player.getPosition();
  const collectedItems = collectibles.checkCollisions(playerPosition);

  // Handle note collection
  if (collectedItems.note) {
    gameState.notesFound++;
    showStoryNote(collectedItems.note);
  }
}

function showStoryNote(note) {
  gameState.gamePaused = true;
  player.unlock();

  noteTitle.textContent = note.title;
  noteContent.textContent = note.content;
  storyNotePanel.style.display = "flex";
}

function hideStoryNote() {
  storyNotePanel.style.display = "none";
  player.lock();
  gameState.gamePaused = false;
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;
}

function updateInfectionOverlay() {
  // Pulse the infection overlay when infection is high
  if (player.infection > 70) {
    const intensity = ((player.infection - 70) / 30) * 0.6; // max opacity 0.6
    infectionOverlay.style.backgroundColor = `rgba(230, 57, 70, ${intensity})`;
    infectionOverlay.style.animation = "heartbeat 1s infinite";
  } else {
    infectionOverlay.style.backgroundColor = "rgba(230, 57, 70, 0)";
    infectionOverlay.style.animation = "none";
  }
}

function updateTimeWarningOverlay() {
  // Pulse warning when time is running low
  const timeRemaining = gameState.timeLimit - gameState.elapsedTime / 1000;

  if (timeRemaining < 30) {
    const intensity = (1 - timeRemaining / 30) * 0.3; // max opacity 0.3
    timeWarningOverlay.style.backgroundColor = `rgba(255, 183, 3, ${intensity})`;
    timeWarningOverlay.style.animation = "timeWarning 0.5s infinite";
  } else {
    timeWarningOverlay.style.backgroundColor = "rgba(255, 183, 3, 0)";
    timeWarningOverlay.style.animation = "none";
  }
}

function updateFlashlightPosition(e) {
  if (gameState.flashlightOn && flashlightOverlay.style.display === "block") {
    // Update position only if mouse has moved
    const x = e.clientX;
    const y = e.clientY;

    flashlightOverlay.style.background = `radial-gradient(
      circle at ${x}px ${y}px, 
      transparent 100px, 
      rgba(0, 0, 0, 0.95) 300px
    )`;
  }
}

// Add mouse move listener for flashlight
document.addEventListener("mousemove", updateFlashlightPosition);

// Function to initialize the game after the renderer is ready
function initializeGame() {
  // Add mouse controls event handler for the game canvas
  const renderer3DCanvas = renderer.domElement;
  renderer3DCanvas.addEventListener("click", () => {
    if (gameState.gameStarted && !gameState.gamePaused && !gameState.gameOver) {
      player.lock();
    }
  });

  // Start the animation loop
  animate();
}

function animate() {
  requestAnimationFrame(animate);

  // Throttle rendering for consistent frame rate
  const now = performance.now();
  const elapsed = now - lastTime;

  if (elapsed < frameInterval) {
    return; // Skip this frame to maintain frame rate
  }

  // Calculate delta with frame rate limiting
  const delta = Math.min(clock.getDelta(), 0.1); // Cap delta to avoid huge jumps
  lastTime = now - (elapsed % frameInterval);

  // Only render if the renderer is initialized
  if (!renderer) return;

  if (gameState.gameStarted && !gameState.gameOver && !gameState.gamePaused) {
    // Update game time
    gameState.elapsedTime = Date.now() - gameState.startTime;
    const timeRemaining = Math.max(
      0,
      gameState.timeLimit - gameState.elapsedTime / 1000
    );
    document.getElementById("timer").textContent = `Time: ${formatTime(
      timeRemaining
    )}`;

    // Check for time up
    if (timeRemaining <= 0) {
      gameLose("time");
      return;
    }

    // Update environment based on time
    const environmentStatus = gameWorld.updateTimeOfDay(
      gameState.elapsedTime / 1000
    );
    gameState.environmentStatus = environmentStatus;

    // Update time warning overlay
    updateTimeWarningOverlay();

    // Update infection overlay
    updateInfectionOverlay();

    // Cycle objectives periodically
    gameState.objectiveTimer += delta;
    if (gameState.objectiveTimer > gameState.objectiveDisplayTime) {
      cycleObjective();
    }

    // Update player with collision detection
    const playerStatus = player.update(delta, (position) =>
      gameWorld.checkWallCollision(position)
    );

    // Handle player states from update
    if (playerStatus === "infected") {
      gameLose("infected");
      return;
    }

    // Frustum culling - only update objects in view
    const frustum = new THREE.Frustum();
    const projScreenMatrix = new THREE.Matrix4();
    projScreenMatrix.multiplyMatrices(
      camera.projectionMatrix,
      camera.matrixWorldInverse
    );
    frustum.setFromProjectionMatrix(projScreenMatrix);

    // Update game world
    gameWorld.update(delta);

    // Update collectibles - only those in view
    collectibles.update(delta, frustum);

    // Update grievers - with distance-based processing
    const playerPosition = player.getPosition();
    grievers.forEach((griever) => {
      // Only process grievers within a reasonable distance
      const distance = griever.position.distanceTo(playerPosition);
      if (distance < 30) {
        // Only process grievers within 30 units
        // Grievers are more active at night
        const aggressionMultiplier = gameState.environmentStatus.isNight
          ? 2.0
          : gameState.environmentStatus.isTransitioning
          ? 1.5
          : 1.0;

        griever.update(delta, playerPosition, aggressionMultiplier);

        // Check if griever caught player - only if very close
        if (distance < 3 && griever.checkPlayerCollision(playerPosition)) {
          // Player takes damage
          const playerDied = player.takeDamage(34); // One hit takes ~1/3 health

          if (playerDied) {
            gameLose("griever");
            return;
          }
        }
      }
    });

    // Check for key collection
    if (gameWorld.checkKeyCollection(playerPosition)) {
      gameState.serumCollected++;
      document.getElementById(
        "collected"
      ).textContent = `Serum: ${gameState.serumCollected}/${gameState.totalSerum}`;

      // Slow infection when collecting serum
      player.reduceInfection(15);
    }

    // Check if player reached exit
    if (gameWorld.checkExit(playerPosition, gameState.serumCollected)) {
      gameWin();
    }
  }

  renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
