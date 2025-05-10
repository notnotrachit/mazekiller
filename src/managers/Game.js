// Game.js
// Main Game class - orchestrates all other components

import * as THREE from "three";
import { GameRenderer } from "../components/core/GameRenderer.js";
import { GameState } from "./GameState.js";
import { UIManager } from "../components/ui/UIManager.js";
import { InputManager } from "./InputManager.js";
import { Player } from "../components/Player.js";
import { GameWorld } from "../components/GameWorld.js";
import { SoundManager } from "../components/SoundManager.js";
import { StoryManager } from "../components/StoryManager.js";
import { Collectibles } from "../components/Collectibles.js";
import { Griever } from "../components/Griever.js";
import { EntityManager } from "./EntityManager.js";
import { Utils } from "../components/utils/Utils.js";
import { Minimap } from "../components/ui/Minimap.js";

export class Game {
  constructor() {
    // Core systems
    this.gameState = new GameState();
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x080808); // Very dark background
    this.clock = new THREE.Clock();
    this.frameRateLimit = 60; // Target frame rate
    this.lastTime = 0;
    this.lastRenderTime = 0; // Initialize lastRenderTime to fix gray screen issue
    this.frameCount = 0; // Initialize frameCount here

    // FPS counter
    this.fpsDisplayEnabled = false;
    this.fpsUpdateInterval = 0.5; // Update FPS display every 0.5 seconds
    this.fpsTimer = 0;
    this.framesSinceLastFPSUpdate = 0;

    // Create camera
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.y = 1.6; // Player height

    // Loading management
    this.loadingManager = new THREE.LoadingManager();
    this.setupLoadingManager();

    // Create a backup timeout for loading
    this.loadingTimeout = setTimeout(() => {
      console.log("Loading timeout reached, dismissing loading screen anyway");
      this.ui.dismissLoadingScreen();
    }, 5000);

    // Minimap
    this.minimapEnabled = false;

    // Game mode flags
    this.cinematicsShown = false;
    this.introPlayed = false;
  }

  // Initialize the game and all components
  async initialize() {
    // Set up renderer
    this.renderer = new GameRenderer();
    await this.renderer.initialize();

    // Initialize UI
    this.ui = new UIManager(this.gameState, this.soundManager);

    // Initialize minimap
    this.minimap = new Minimap();

    // Initialize sound
    try {
      this.soundManager = new SoundManager(this.camera, this.loadingManager);
      if (this.soundManager) {
        this.soundManager.setMasterVolume(0.7);
      }
    } catch (error) {
      console.error("Failed to initialize sound manager:", error);
      this.soundManager = null;
    }

    // Initialize story manager
    this.storyManager = new StoryManager(this.soundManager);
    this.storyManager.initialize();

    // Initialize game world
    this.gameWorld = new GameWorld(this.scene, this.loadingManager);

    // Initialize player
    const startX = (-this.gameWorld.mazeSize / 2 + 1) * this.gameWorld.cellSize;
    const startZ = (-this.gameWorld.mazeSize / 2 + 1) * this.gameWorld.cellSize;
    this.startPosition = { x: startX, y: 1.6, z: startZ };

    this.player = new Player(
      this.scene,
      this.camera,
      document.body, // This will be updated with canvas
      this.soundManager
    );
    this.player.controls.getObject().position.set(startX, 1.6, startZ);

    // Initialize entity manager
    this.entityManager = new EntityManager(
      this.scene,
      this.gameWorld,
      this.soundManager
    );

    // Initialize collectibles
    this.collectibles = new Collectibles(this.scene, this.soundManager);

    // Create story notes from the StoryManager content
    const storyNotes = this.storyManager.getStoryNotes();
    this.collectibles.createStoryNotes(
      this.generateRandomPositions(
        storyNotes.length,
        this.gameWorld.maze,
        this.gameWorld.mazeSize,
        this.gameWorld.cellSize
      ),
      storyNotes
    );

    // Set up event handlers
    this.setupEvents();

    // Set up input manager
    this.inputManager = new InputManager(this.renderer.getCanvas(), {
      onEscape: () => this.handleEscapeKey(),
      onInteract: () => this.checkInteractions(),
      onToggleMinimap: () => this.toggleMinimap(),
      onToggleFPS: () => this.toggleFPSDisplay(),
    });

    // Set up cinematic completion event
    document.addEventListener("cinematicsComplete", () => {
      this.onCinematicsComplete();
    });

    // Start animation loop
    this.lastTime = performance.now();
    this.animate();

    // Set up window resize handler
    window.addEventListener("resize", () => this.handleResize());

    return this;
  }

  // Called when cinematics complete
  onCinematicsComplete() {
    this.cinematicsShown = true;

    // Display first objective notification
    setTimeout(() => {
      this.storyManager.showObjectiveNotification(
        "Find serum vials to slow the infection"
      );
    }, 1000);

    // Unlock controls first to ensure the player can interact with the UI
    if (this.player) {
      this.player.unlock();

      // Focus canvas and lock controls after a short delay to allow button interaction
      setTimeout(() => {
        this.renderer.getCanvas().focus();
        this.player.lock();

        // Add grievers based on difficulty
        this.entityManager.addGrievers(this.gameState.difficulty);

        // Play ambient music
        if (this.soundManager) {
          this.soundManager.playMusic("main");
          this.soundManager.fadeInAmbient("wind", 0.5);
        }
      }, 500);
    }

    // Resume the game state
    this.gameState.resumeGame();
  }

  // Handle window resize
  handleResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.handleResize();
  }

  // Toggle minimap display (cheat code)
  toggleMinimap() {
    this.minimapEnabled = !this.minimapEnabled;
    this.minimap.toggle();

    // Show cheat activated notification
    this.showCheatNotification(
      "Minimap " + (this.minimapEnabled ? "Activated" : "Deactivated")
    );
  }

  // Display a notification when a cheat is activated
  showCheatNotification(message) {
    // Create notification element
    const notification = document.createElement("div");
    notification.className = "cheat-notification";
    notification.textContent = message;

    // Add to DOM
    document.body.appendChild(notification);

    // Remove after animation completes
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 2000);
  }

  // Update minimap with current game state
  updateMinimap() {
    if (!this.minimapEnabled || !this.minimap) return;

    // Get player position and look direction
    const playerPosition = this.player.getPosition();
    const playerDirection = this.player.getDirection();

    // Get griever positions
    const grievers = this.entityManager
      .getGrievers()
      .map((griever) => griever.position);

    // Get serum positions
    const serums = this.gameWorld.getKeyPositions();

    // Get note positions
    const notes = this.collectibles.getNotePositions();

    // Get exit position
    const exit = this.gameWorld.getExitPosition();

    // Compile all entity data
    const entities = {
      player: playerPosition,
      playerDirection: playerDirection,
      grievers: grievers,
      serums: serums,
      notes: notes,
      exit: exit,
    };

    // Render the minimap
    this.minimap.render(this.gameWorld.maze, entities);
  }

  // Setup loading manager
  setupLoadingManager() {
    this.loadingManager.itemStart("mazekiller-init");

    this.loadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
      const progress = (itemsLoaded / itemsTotal) * 100;
      if (this.ui) {
        this.ui.updateLoadingProgress(progress);
      }
      console.log(`Loading: ${progress.toFixed(2)}% - ${url}`);
    };

    this.loadingManager.onLoad = () => {
      console.log("All resources loaded");
      if (this.ui) {
        this.ui.dismissLoadingScreen();
      }
    };

    this.loadingManager.onError = (url) => {
      console.error("Error loading:", url);
      // Continue to intro screen even with errors
      if (this.ui) {
        this.ui.dismissLoadingScreen();
      }
    };
  }

  // Setup player and UI event handlers
  setupEvents() {
    // Setup UI callbacks
    this.ui.setupEventListeners({
      onStart: () => this.startGame(),
      onRestart: () => this.resetGame(),
      onResume: () => this.resumeGame(),
      onCloseNote: () => this.hideStoryNote(),
    });

    // Set up player event listeners
    this.player.addEventListener("lock", () => {
      if (!this.gameState.gameStarted) {
        this.gameState.startGame();
      }

      this.gameState.gamePaused = false;
      this.ui.hidePauseMenu();
    });

    this.player.addEventListener("unlock", () => {
      // Check if this is a special interaction unlock
      if (this.player._isInteractionUnlock) {
        // Reset the flag and don't show pause menu
        this.player._isInteractionUnlock = false;
        return;
      }

      // Regular unlock behavior - show pause menu if game is active
      if (
        this.gameState.gameStarted &&
        !this.gameState.gameOver &&
        !this.gameState.noteReading
      ) {
        this.showPauseMenu();
      }
    });
  }

  // Reinitialize the player with canvas element
  reinitializePlayer() {
    try {
      // Store the old player position if it exists
      let oldPosition = null;
      if (this.player && this.player.controls) {
        oldPosition = this.player.controls.getObject().position.clone();
      }

      // Create a new player instance with the canvas as the domElement
      console.log("[DEBUG] Re-creating player with canvas element");
      const newPlayer = new Player(
        this.scene,
        this.camera,
        this.renderer.getCanvas(),
        this.soundManager
      );

      // Store the new player
      window.player = newPlayer; // Keep window reference for debugging
      this.player = newPlayer; // Update the actual variable

      // Restore position
      if (oldPosition) {
        this.player.controls.getObject().position.copy(oldPosition);
      } else {
        this.player.controls
          .getObject()
          .position.set(
            this.startPosition.x,
            this.startPosition.y,
            this.startPosition.z
          );
      }

      // Reattach event listeners
      this.setupEvents();

      console.log("[DEBUG] Player successfully recreated with canvas:", {
        controls: this.player.controls ? "Controls attached" : "No controls",
        position: this.player.controls.getObject().position.toArray(),
      });
    } catch (err) {
      console.error("[FATAL] Error recreating player:", err);
    }
  }

  // Start the game
  startGame() {
    this.ui.startGameUI();

    // If we haven't shown the cinematics and this is first start, show them
    if (!this.cinematicsShown && !this.introPlayed) {
      this.introPlayed = true;

      // Pause the game state until cinematics are done
      this.gameState.pauseGame();

      // Start cinematics after a brief delay
      setTimeout(() => {
        // Start the cinematic sequence - using the correct method name
        this.storyManager.startIntroCinematic();
      }, 1000);

      return;
    }

    // Ensure the DOM element has focus
    this.renderer.getCanvas().focus();
    console.log("Game started, canvas focused");

    // Lock pointer for player control
    this.player.lock();

    // Add grievers based on difficulty
    this.entityManager.addGrievers(this.gameState.difficulty);

    // Play ambient music
    if (this.soundManager) {
      this.soundManager.playMusic("main");
      this.soundManager.fadeInAmbient("wind", 0.5);
    }

    // Start game time tracking
    this.gameState.startGame();
  }

  // Resume the game
  resumeGame() {
    // Hide the pause menu completely first
    this.ui.hidePauseMenu();

    // Update game state
    this.gameState.resumeGame();

    // Try locking the pointer multiple times with increasing delays
    setTimeout(() => {
      try {
        this.player.lock();
      } catch (e) {
        console.error("[DEBUG] Error in first lock attempt:", e);
      }
    }, 50);

    setTimeout(() => {
      if (!this.player.isLocked()) {
        try {
          this.player.lock();
        } catch (e) {
          console.error("[DEBUG] Error in second lock attempt:", e);
        }
      }
    }, 150);

    setTimeout(() => {
      if (!this.player.isLocked()) {
        try {
          // Try direct approach if player.lock() isn't working
          const canvas = this.renderer.getCanvas();
          if (canvas && canvas.requestPointerLock) {
            canvas.requestPointerLock();
          }
        } catch (e) {
          console.error("[DEBUG] Error in third lock attempt:", e);
        }
      }
    }, 300);
  }

  // Show pause menu
  showPauseMenu() {
    // Show the pause menu
    this.ui.showPauseMenu();

    // Update game state
    this.gameState.pauseGame();

    // Unlock the pointer
    this.player.unlock();
  }

  // Handle escape key
  handleEscapeKey() {
    // If cinematic is active, it will handle its own ESC key

    if (this.gameState.gameStarted && !this.gameState.gameOver) {
      if (this.gameState.gamePaused) {
        this.resumeGame();
      } else {
        this.showPauseMenu();
      }
    }
  }

  // Check for interactions (E key)
  checkInteractions() {
    // Check for collectible interactions
    const playerPosition = this.player.getPosition();
    const collectedItems = this.collectibles.checkCollisions(playerPosition);

    // Handle note collection
    if (collectedItems.note) {
      this.gameState.incrementNotes();
      this.showStoryNote(collectedItems.note);

      // Show story reveal effect
      if (this.soundManager) {
        this.soundManager.playSfx("story_reveal");
      }

      // Add memory flashback effect for note collection
      this.storyManager.triggerMemoryFlashback();
    }
  }

  // Show a story note
  showStoryNote(note) {
    // Set a specific flag for story notes
    this.gameState.noteReading = true;

    // Unlock controls but use a special method that won't trigger the pause menu
    this.player.unlock(true);

    // Show the note UI
    this.ui.showStoryNote(note);
  }

  // Hide a story note
  hideStoryNote() {
    this.ui.hideStoryNote();
    this.gameState.noteReading = false;
    this.gameState.gamePaused = false;
    this.player.lock();
  }

  // Win the game
  gameWin() {
    this.gameState.endGame();
    this.player.unlock();

    if (this.soundManager) {
      this.soundManager.playMusic("victory");
    }

    // Show the win screen
    this.ui.showWinScreen(
      this.gameState.elapsedTime / 1000,
      this.player.infection
    );
  }

  // Lose the game
  gameLose(reason) {
    this.gameState.endGame();
    this.player.unlock();

    if (this.soundManager) {
      this.soundManager.play("gameOver");
      // Stop any music playing
      Object.keys(this.soundManager.music).forEach((key) => {
        this.soundManager.music[key].stop();
      });
    }

    // Show the game over screen
    this.ui.showGameOverScreen(reason);
  }

  // Reset the game
  resetGame() {
    // Hide all screens
    this.ui.hideAllScreens();

    // Reset game state
    this.gameState.reset();
    this.ui.updateObjectiveDisplay();

    // Reset player
    this.player.reset();
    this.player.controls
      .getObject()
      .position.set(
        this.startPosition.x,
        this.startPosition.y,
        this.startPosition.z
      );

    // Reset world elements
    this.gameWorld.resetKeys();
    this.collectibles.reset();

    // Reset UI
    this.ui.updateSerumCountDisplay();

    // Add grievers based on difficulty
    this.entityManager.addGrievers(this.gameState.difficulty);

    // Reset music
    if (this.soundManager) {
      this.soundManager.playMusic("main");
    }

    // Lock pointer and start game
    this.player.lock();
  }

  // Generate random positions for items in the maze
  generateRandomPositions(count, maze, mazeSize, cellSize) {
    return Utils.generateRandomPositions(count, maze, mazeSize, cellSize);
  }

  // Animation loop optimized for better performance
  animate() {
    // Continue animation loop
    requestAnimationFrame(() => this.animate());

    // Don't proceed if renderer isn't initialized
    if (!this.renderer.isInitialized()) {
      console.warn("[DEBUG] Skipping animation frame - renderer not ready");
      return;
    }

    // Get precise delta time using performance.now for better accuracy
    const now = performance.now();
    // Calculate delta time in seconds, capped at 100ms to prevent huge jumps
    const delta = Math.min((now - this.lastTime) / 1000, 0.1);
    this.lastTime = now;

    // Increment frame counter for staggered updates
    this.frameCount = (this.frameCount || 0) + 1;

    // Update FPS counter regardless of game state
    if (this.fpsDisplayEnabled) {
      this.updateFPSCounter(delta);
    }

    // Always render even if game hasn't started to prevent black screen
    if (this.gameState.gameStarted) {
      // Update game time even when paused
      this.gameState.updateElapsedTime();

      // Only process gameplay when not paused or game over
      if (!this.gameState.gameOver && !this.gameState.gamePaused) {
        // Update time UI every frame for accuracy
        this.ui.updateTimerDisplay();

        // Check for time up
        if (this.gameState.getRemainingTime() <= 0) {
          this.gameLose("time");
          return;
        }

        // Update environment based on time - every 15 frames is enough
        if (this.frameCount % 15 === 0) {
          const environmentStatus = this.gameWorld.updateTimeOfDay(
            this.gameState.elapsedTime / 1000
          );
          this.gameState.environmentStatus = environmentStatus;
        }

        // Update visual effects every 5 frames for better performance
        if (this.frameCount % 5 === 0) {
          this.ui.updateTimeWarningOverlay();
          this.ui.updateInfectionOverlay(this.player.infection);
        }

        // Cycle objectives periodically
        this.gameState.objectiveTimer += delta;
        if (
          this.gameState.objectiveTimer > this.gameState.objectiveDisplayTime
        ) {
          this.gameState.cycleObjective();
          this.ui.updateObjectiveDisplay();
        }

        try {
          // Update player with collision detection
          const playerStatus = this.player.update(delta, (position) => {
            // Only check collisions if position changes significantly
            if (position.distanceTo(this.player.getPosition()) > 0.01) {
              return this.gameWorld.checkWallCollision(position);
            }
            return false;
          });

          // Handle player states from update
          if (playerStatus === "infected") {
            this.gameLose("infected");
            return;
          }
        } catch (error) {
          console.error("[DEBUG] Error in player update:", error);
        }

        // Update game world (already has internal staggering)
        this.gameWorld.update(delta, this.gameState.gamePaused);

        // Update collectibles with frustum culling
        try {
          // Only need frustum calculation every few frames
          const useFrustum = this.frameCount % 3 === 0;
          let frustum = null;

          if (useFrustum) {
            frustum = new THREE.Frustum();
            const matrix = new THREE.Matrix4().multiplyMatrices(
              this.camera.projectionMatrix,
              this.camera.matrixWorldInverse
            );
            frustum.setFromProjectionMatrix(matrix);
          }

          this.collectibles.update(delta, frustum);
        } catch (error) {
          console.error("[DEBUG] Error in collectibles update:", error);
        }

        // Process grievers
        const playerPosition = this.player.getPosition();

        // Optimize griever processing at a reduced rate
        const grieverProcessResult = this.entityManager.updateGrievers(
          delta,
          playerPosition,
          this.gameState.environmentStatus,
          false,
          this.gameState.serumCollected
        );

        // Apply damage from grievers if player was hit
        if (
          grieverProcessResult.playerWasHit &&
          grieverProcessResult.damage > 0
        ) {
          const playerDied = this.player.takeDamage(
            grieverProcessResult.damage
          );
          if (playerDied) {
            this.gameLose("griever");
            return;
          }
        }

        // Check for player collecting keys
        if (this.gameWorld.checkKeyCollection(playerPosition)) {
          console.log("[DEBUG] Key collected!");
          this.gameState.serumCollected++;
          this.ui.updateSerumCountDisplay();
          this.soundManager.play("collect");

          // Update the objective if needed
          if (this.gameState.currentObjective === "collect") {
            this.gameState.cycleObjective();
            this.ui.updateObjectiveDisplay();
          }
        }

        // Check for note collection
        const collisionResult =
          this.collectibles.checkCollisions(playerPosition);
        if (collisionResult.note) {
          console.log("[DEBUG] Note found:", collisionResult.note);
          // Show note in UI
          this.ui.showNoteContent(collisionResult.note);
        }

        // Update minimap only every 3rd frame to reduce overhead
        if (this.frameCount % 3 === 0) {
          this.updateMinimap();
        }

        // Check if player has reached the exit with enough keys
        if (
          this.gameWorld.checkExit(
            playerPosition,
            this.gameState.serumCollected
          )
        ) {
          this.gameWin();
          return;
        }
      } else {
        // Even when paused, render a frame to ensure everything stays properly displayed
        this.gameWorld.update(0, true); // Update with delta 0 and paused=true to maintain visuals without changing state
      }
    }

    // Render the scene - remove frame limiting as it's causing more harm than good
    this.renderer.render(this.scene, this.camera);
  }

  // Toggle FPS counter display
  toggleFPSDisplay() {
    this.fpsDisplayEnabled = !this.fpsDisplayEnabled;
    const fpsCounter = document.getElementById("fps-counter");

    if (fpsCounter) {
      if (this.fpsDisplayEnabled) {
        fpsCounter.classList.remove("hidden");
        // Show notification that FPS counter is enabled
        this.showCheatNotification("FPS Counter Enabled");
      } else {
        fpsCounter.classList.add("hidden");
        // Show notification that FPS counter is disabled
        this.showCheatNotification("FPS Counter Disabled");
      }
    }
  }

  // Update FPS counter
  updateFPSCounter(delta) {
    // Count frames for FPS calculation
    this.framesSinceLastFPSUpdate++;
    this.fpsTimer += delta;

    // Update FPS display at specified interval
    if (this.fpsTimer >= this.fpsUpdateInterval) {
      const fps = Math.round(this.framesSinceLastFPSUpdate / this.fpsTimer);
      const fpsCounter = document.getElementById("fps-counter");

      if (fpsCounter) {
        // Update the counter text
        fpsCounter.textContent = `FPS: ${fps}`;

        // Update color based on performance
        fpsCounter.classList.remove("fps-good", "fps-medium", "fps-bad");

        if (fps >= 50) {
          fpsCounter.classList.add("fps-good");
        } else if (fps >= 30) {
          fpsCounter.classList.add("fps-medium");
        } else {
          fpsCounter.classList.add("fps-bad");
        }
      }

      // Reset counters
      this.framesSinceLastFPSUpdate = 0;
      this.fpsTimer = 0;
    }
  }
}
