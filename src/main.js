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

// Camera setup with detailed logging
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.y = 1.6; // Player height

console.log("[DEBUG] Camera initialization:", {
  fov: camera.fov,
  aspect: camera.aspect,
  near: camera.near,
  far: camera.far,
  position: camera.position,
  quaternion: camera.quaternion,
});

// Animation loop variables - initialize them before the animate function
const clock = new THREE.Clock();
const frameRateLimit = 60; // Target frame rate
const frameInterval = 1000 / frameRateLimit;
let lastTime = 0; // Will be properly initialized when renderer is ready

// Create renderer (async)
let renderer;
let renderer3DCanvas; // Declare canvas reference at a higher scope
let rendererInitialized = false; // Flag to track renderer initialization

createRenderer().then((r) => {
  renderer = r;
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  document.body.appendChild(renderer.domElement);

  // Store canvas reference as soon as it's created
  renderer3DCanvas = renderer.domElement;

  // Make sure we have focus for keyboard events
  renderer3DCanvas.setAttribute("tabindex", "0");
  renderer3DCanvas.style.outline = "none"; // Remove focus outline

  console.log("[DEBUG] Renderer initialized:", {
    size: {
      width: renderer.domElement.width,
      height: renderer.domElement.height,
    },
    pixelRatio: renderer.getPixelRatio(),
  });

  // Set flag to indicate renderer is ready
  rendererInitialized = true;

  // Initialize animation variables
  lastTime = performance.now();

  // Initialize the rest of the game now that renderer is ready
  initializeGame();

  // Start animation loop explicitly
  animate();
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

// Create player with detailed logging
console.log("[DEBUG] Creating player with parameters:", {
  scene: scene ? "Scene object present" : "Missing scene",
  camera: camera ? "Camera object present" : "Missing camera",
  domElement: document.body ? "DOM element present" : "Missing DOM element",
});

const player = new Player(scene, camera, document.body, soundManager);

// Set player starting position with validation
const startX = (-gameWorld.mazeSize / 2 + 1) * gameWorld.cellSize;
const startZ = (-gameWorld.mazeSize / 2 + 1) * gameWorld.cellSize;

console.log("[DEBUG] Setting player start position:", {
  startX,
  startY: 1.6,
  startZ,
  mazeSize: gameWorld.mazeSize,
  cellSize: gameWorld.cellSize,
});

player.controls.getObject().position.set(startX, 1.6, startZ);

// Verify player position was set correctly
console.log("[DEBUG] Player position after set:", {
  position: player.controls.getObject().position,
  controls: player.controls.isLocked ? "Locked" : "Unlocked",
});

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
function setupEventListeners() {
  if (!renderer || !renderer.domElement) {
    console.warn("[DEBUG] Cannot set up event listeners - renderer not ready");
    return;
  }

  // Store reference to canvas
  renderer3DCanvas = renderer.domElement;

  // Make sure we have focus for keyboard events
  renderer3DCanvas.setAttribute("tabindex", "0");
  renderer3DCanvas.style.outline = "none"; // Remove focus outline
  renderer3DCanvas.focus();

  // Ensure we get focus when clicking the canvas
  renderer3DCanvas.addEventListener("mousedown", () => {
    renderer3DCanvas.focus();
    console.log("[DEBUG] Canvas focused on mousedown");
  });

  // Add a click handler that also ensures focus and pointer lock
  renderer3DCanvas.addEventListener("click", () => {
    renderer3DCanvas.focus();

    // If game is running (not over), handle pointer lock
    if (gameState.gameStarted && !gameState.gameOver) {
      // If game is paused and pause menu is visible, clicking should resume the game
      if (gameState.gamePaused && pauseMenu.style.display === "flex") {
        resumeGame(); // This will hide the pause menu and lock the pointer
      }
      // If not paused, just lock the pointer
      else if (!gameState.gamePaused) {
        player.lock();
      }
      console.log("[DEBUG] Canvas clicked - Focus and pointer lock handled");
    }
  });

  // Log when we lose focus
  renderer3DCanvas.addEventListener("blur", () => {
    console.log("[DEBUG] Canvas lost focus");
  });

  // Log when we gain focus
  renderer3DCanvas.addEventListener("focus", () => {
    console.log("[DEBUG] Canvas gained focus");
  });

  console.log("[DEBUG] Event listeners successfully set up on canvas");
}

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

    // Ensure the DOM element has focus
    renderer.domElement.focus();
    console.log("Game started, canvas focused");

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
  // Check if this is a special interaction unlock
  if (player._isInteractionUnlock) {
    // Reset the flag and don't show pause menu
    player._isInteractionUnlock = false;
    return;
  }

  // Regular unlock behavior - show pause menu if game is active
  if (gameState.gameStarted && !gameState.gameOver && !gameState.noteReading) {
    showPauseMenu();
  }
});

// Toggle flashlight
let lastFlashlightToggleTime = 0;
const flashlightToggleDelay = 300; // Prevent toggling more than once every 300ms

document.addEventListener("keydown", function (event) {
  const currentTime = performance.now();

  if (event.code === "KeyF" && gameState.gameStarted && !gameState.gameOver) {
    // Throttle flashlight toggle to prevent lag from rapid toggling
    if (currentTime - lastFlashlightToggleTime > flashlightToggleDelay) {
      lastFlashlightToggleTime = currentTime;
      gameState.flashlightOn = !gameState.flashlightOn;
      updateFlashlightOverlay();

      if (soundManager) {
        // Debounce sound playing
        soundManager.play("flashlightToggle");
      }
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

// Update the pause menu display and handling
function showPauseMenu() {
  console.log("[DEBUG] showPauseMenu called");

  // Make sure the menu is visible and styled correctly first
  pauseMenu.style.opacity = "1";
  pauseMenu.style.visibility = "visible";
  pauseMenu.style.display = "flex";

  // Force a reflow to ensure the browser has applied the style changes
  void pauseMenu.offsetWidth;

  // Set the game state
  gameState.gamePaused = true;

  // Unlock the pointer AFTER ensuring menu is visible
  player.unlock();

  console.log("[DEBUG] Pause menu should now be visible:", {
    display: pauseMenu.style.display,
    visibility: pauseMenu.style.visibility,
    opacity: pauseMenu.style.opacity,
  });
}

function resumeGame() {
  console.log("[DEBUG] resumeGame called");

  // Hide the pause menu completely first
  pauseMenu.style.display = "none";
  pauseMenu.style.visibility = "hidden";

  // Update game state
  gameState.gamePaused = false;

  // Use a timeout to ensure the menu is fully hidden before locking pointer
  setTimeout(() => {
    console.log("[DEBUG] Resuming game and locking pointer");

    // Force focus on the canvas
    if (renderer && renderer.domElement) {
      renderer.domElement.focus();
    }

    // Try locking the pointer multiple times with increasing delays
    // This helps overcome issues with browsers requiring a delay after UI changes
    setTimeout(() => {
      try {
        player.lock();
        console.log("[DEBUG] First attempt to lock pointer");
      } catch (e) {
        console.error("[DEBUG] Error in first lock attempt:", e);
      }
    }, 50);

    setTimeout(() => {
      if (!player.isLocked()) {
        try {
          console.log("[DEBUG] Second attempt to lock pointer");
          player.lock();
        } catch (e) {
          console.error("[DEBUG] Error in second lock attempt:", e);
        }
      }
    }, 150);

    setTimeout(() => {
      if (!player.isLocked()) {
        try {
          console.log("[DEBUG] Third attempt to lock pointer");
          // Try direct approach if player.lock() isn't working
          if (renderer.domElement.requestPointerLock) {
            renderer.domElement.requestPointerLock();
          }
        } catch (e) {
          console.error("[DEBUG] Error in third lock attempt:", e);
        }
      }
    }, 300);
  }, 50);
}

restartFromPauseBtn.addEventListener("click", resetGame);
restartBtn.addEventListener("click", resetGame);
playAgainBtn.addEventListener("click", resetGame);
closeNoteBtn.addEventListener("click", hideStoryNote);

// Add direct click handler for resume button
resumeBtn.addEventListener("click", function (event) {
  console.log("[DEBUG] Resume button clicked");
  event.preventDefault();

  // Force setting the game state to not paused
  gameState.gamePaused = false;

  // Hide pause menu immediately
  pauseMenu.style.display = "none";
  pauseMenu.style.visibility = "hidden";

  // Focus the canvas
  if (renderer && renderer.domElement) {
    renderer.domElement.focus();
  }

  // Call resumeGame with a slight delay to ensure UI updates first
  setTimeout(() => {
    resumeGame();
  }, 10);

  // Prevent the click event from reaching other handlers
  event.stopPropagation();
});

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
  // Set a specific flag for story notes rather than using the general pause flag
  gameState.noteReading = true;

  // Don't set gamePaused to avoid triggering the pause menu
  // gameState.gamePaused = true;

  // Unlock controls but use a special method that won't trigger the pause menu
  player.unlock(true); // Pass 'true' to indicate this is a special interaction unlock

  noteTitle.textContent = note.title;
  noteContent.textContent = note.content;
  storyNotePanel.style.display = "flex";
}

function hideStoryNote() {
  storyNotePanel.style.display = "none";
  gameState.noteReading = false; // Clear the special flag
  gameState.gamePaused = false; // Ensure game is not paused
  player.lock();
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

// Track last mouse position for throttling
let lastMouseX = 0;
let lastMouseY = 0;
let lastFlashlightUpdateTime = 0;
const flashlightUpdateThreshold = 20; // Minimum pixel movement needed to update
const flashlightUpdateDelay = 16; // Only update at ~60fps (16ms)

function updateFlashlightPosition(e) {
  // Only update if flashlight is on and visible
  if (!gameState.flashlightOn || flashlightOverlay.style.display !== "block") {
    return;
  }

  const currentTime = performance.now();

  // Throttle updates to reduce performance impact
  if (currentTime - lastFlashlightUpdateTime < flashlightUpdateDelay) {
    return;
  }

  // Only update if mouse has moved significantly to avoid unnecessary redraws
  const xDiff = Math.abs(e.clientX - lastMouseX);
  const yDiff = Math.abs(e.clientY - lastMouseY);

  if (
    xDiff > flashlightUpdateThreshold ||
    yDiff > flashlightUpdateThreshold ||
    currentTime - lastFlashlightUpdateTime > 100
  ) {
    // Force update every 100ms max

    // Update the flashlight position
    flashlightOverlay.style.background = `radial-gradient(
      circle at ${e.clientX}px ${e.clientY}px, 
      transparent 100px, 
      rgba(0, 0, 0, 0.95) 300px
    )`;

    // Save current position and time
    lastMouseX = e.clientX;
    lastMouseY = e.clientY;
    lastFlashlightUpdateTime = currentTime;
  }
}

// Add mouse move listener for flashlight
document.addEventListener("mousemove", updateFlashlightPosition);

// Function to initialize the game after the renderer is ready
function initializeGame() {
  console.log("[DEBUG] Initializing game and animation loop");

  // Don't proceed if renderer isn't ready
  if (!renderer || !renderer.domElement) {
    console.error("[FATAL] Cannot initialize game - renderer not ready");
    return;
  }

  // Set up the canvas event listeners before proceeding
  setupEventListeners();

  // CRITICAL FIX: Re-create the player with the correct DOM element (canvas)
  try {
    // Store the old player position if it exists
    let oldPosition = null;
    if (player && player.controls) {
      oldPosition = player.controls.getObject().position.clone();
    }

    // Create a new player instance with the canvas as the domElement
    console.log("[DEBUG] Re-creating player with canvas element");
    const newPlayer = new Player(
      scene,
      camera,
      renderer.domElement,
      soundManager
    );

    // CRITICAL FIX: Replace the global player reference with the new one
    // This ensures all code using 'player' will now use the new instance
    window.player = newPlayer; // Keep window reference for debugging
    player = newPlayer; // Update the actual variable

    // Restore position if we had one
    if (oldPosition) {
      player.controls.getObject().position.copy(oldPosition);
    } else {
      player.controls.getObject().position.set(startX, 1.6, startZ);
    }

    // Re-establish event listeners for player
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
      // Check if this is a special interaction unlock
      if (player._isInteractionUnlock) {
        // Reset the flag and don't show pause menu
        player._isInteractionUnlock = false;
        return;
      }

      // Regular unlock behavior - show pause menu if game is active
      if (
        gameState.gameStarted &&
        !gameState.gameOver &&
        !gameState.noteReading
      ) {
        showPauseMenu();
      }
    });

    console.log("[DEBUG] Player successfully recreated with canvas:", {
      controls: player.controls ? "Controls attached" : "No controls",
      position: player.controls.getObject().position.toArray(),
    });
  } catch (err) {
    console.error("[FATAL] Error recreating player:", err);
  }

  // Basic scene light (ambient) to ensure something is visible
  const ambientLight = new THREE.AmbientLight(0x404040, 1);
  scene.add(ambientLight);

  // Set camera position explicitly
  camera.position.set(startX, 1.6, startZ);
  camera.lookAt(0, 1.6, 0);

  // Set start time and mark the game as not started yet (will start on player lock)
  gameState.startTime = Date.now();
  gameState.gameStarted = false;

  // Make the loader go away
  dismissLoadingScreen();

  // Focus the canvas
  if (renderer.domElement) {
    renderer.domElement.focus();
    console.log("[DEBUG] Canvas focused during initialization");
  }

  console.log("[DEBUG] Game initialization complete");
}

function animate() {
  // Continue animation loop
  requestAnimationFrame(animate);

  // Don't proceed if renderer isn't initialized
  if (!renderer) {
    console.warn("[DEBUG] Skipping animation frame - renderer not ready");
    return;
  }

  // Get precise delta time
  const now = performance.now();
  const elapsed = now - lastTime;

  // Calculate delta time in seconds, capped at 100ms to prevent huge jumps
  const delta = Math.min(elapsed / 1000, 0.1);
  lastTime = now;

  // Always render even if game hasn't started to prevent black screen
  if (gameState.gameStarted) {
    // Update game time even when paused
    gameState.elapsedTime = Date.now() - gameState.startTime;

    // Only process gameplay when not paused or game over
    if (!gameState.gameOver && !gameState.gamePaused) {
      // Update time UI
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

      try {
        // Update player with collision checking
        const playerStatus = player.update(delta, (position) => {
          // Only check collisions if position changes significantly
          if (position.distanceTo(player.getPosition()) > 0.001) {
            const hasCollision = gameWorld.checkWallCollision(position);
            return hasCollision;
          }
          return false;
        });

        // Handle player states from update
        if (playerStatus === "infected") {
          gameLose("infected");
          return;
        }
      } catch (error) {
        console.error("[DEBUG] Error in player update:", error);
      }

      // Update game world
      gameWorld.update(delta);

      // Update collectibles without frustum to avoid errors
      try {
        collectibles.update(delta, null);
      } catch (error) {
        console.error("[DEBUG] Error in collectibles update:", error);
      }

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
  }

  // Always render scene even if not playing
  renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
