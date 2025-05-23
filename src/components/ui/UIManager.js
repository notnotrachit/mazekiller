// UIManager.js
// Handles all UI elements and interactions

export class UIManager {
  constructor(gameState, soundManager = null) {
    this.gameState = gameState;
    this.soundManager = soundManager; // Store reference to sound manager

    // DOM elements
    this.loadingScreen = document.querySelector(".loading-screen");
    this.loadingBar = document.querySelector(".loading-bar");
    this.introScreen = document.querySelector(".intro-screen");
    this.startGameBtn = document.getElementById("start-game");
    this.difficultyBtns = document.querySelectorAll(".difficulty-btn");
    this.gameUI = document.querySelector(".game-ui");
    this.objectiveElement = document.getElementById("objective");
    this.pauseMenu = document.querySelector(".pause-menu");
    this.resumeBtn = document.getElementById("resume");
    this.restartFromPauseBtn = document.getElementById("restart-from-pause");
    this.gameOverScreen = document.querySelector(".game-over");
    this.gameOverMessage = document.getElementById("game-over-message");
    this.restartBtn = document.getElementById("restart");
    this.winScreen = document.querySelector(".win-screen");
    this.playAgainBtn = document.getElementById("play-again");
    this.finalTimeElement = document.getElementById("final-time");
    this.finalInfectionElement = document.getElementById("final-infection");
    this.storyNotePanel = document.querySelector(".story-note");
    this.noteTitle = document.querySelector(".note-content h3");
    this.noteContent = document.querySelector(".note-content p");
    this.closeNoteBtn = document.querySelector(".close-note");
    this.interactionPrompt = document.querySelector(".interaction-prompt");
    this.instructionsPanel = document.querySelector(".instructions");

    // Overlays for visual effects
    this.vignetteOverlay = document.createElement("div");
    this.infectionOverlay = document.createElement("div");
    this.timeWarningOverlay = document.createElement("div");

    // Initialize overlays
    this.initializeOverlays();

    // Event callback storage
    this.startCallback = null;
    this.restartCallback = null;
    this.resumeCallback = null;
    this.closeNoteCallback = null;
  }

  // Initialize visual overlay elements
  initializeOverlays() {
    this.vignetteOverlay.className = "vignette-overlay";
    this.infectionOverlay.className = "infection-overlay";
    this.timeWarningOverlay.className = "time-warning-overlay";

    document.body.appendChild(this.vignetteOverlay);
    document.body.appendChild(this.infectionOverlay);
    document.body.appendChild(this.timeWarningOverlay);
  }

  // Set event handlers
  setupEventListeners(callbacks) {
    // Store callbacks
    this.startCallback = callbacks.onStart;
    this.restartCallback = callbacks.onRestart;
    this.resumeCallback = callbacks.onResume;
    this.closeNoteCallback = callbacks.onCloseNote;

    // Helper function to play click sound
    const playClickSound = () => {
      if (this.soundManager) {
        this.soundManager.play("click");
      }
    };

    // Set click handlers for difficulty buttons
    this.difficultyBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        playClickSound(); // Play click sound

        // Remove active class from all buttons
        this.difficultyBtns.forEach((b) => b.classList.remove("active"));

        // Add active class to clicked button
        btn.classList.add("active");

        // Update game state with new difficulty
        this.gameState.setDifficulty(btn.dataset.difficulty);
      });
    });

    // Start game button
    this.startGameBtn.addEventListener("click", () => {
      playClickSound(); // Play click sound
      if (this.startCallback) this.startCallback();
    });

    // Restart buttons
    this.restartBtn.addEventListener("click", () => {
      playClickSound(); // Play click sound
      // Refresh the page instead of calling restart callback
      window.location.reload();
    });

    this.restartFromPauseBtn.addEventListener("click", () => {
      playClickSound(); // Play click sound
      // Refresh the page instead of calling restart callback
      window.location.reload();
    });

    this.playAgainBtn.addEventListener("click", () => {
      playClickSound(); // Play click sound
      // Refresh the page instead of calling restart callback
      window.location.reload();
    });

    // Resume button with special handling
    this.resumeBtn.addEventListener("click", (event) => {
      playClickSound(); // Play click sound
      event.preventDefault();

      // Hide pause menu immediately
      this.pauseMenu.style.display = "none";
      this.pauseMenu.style.visibility = "hidden";

      if (this.resumeCallback) this.resumeCallback();

      // Prevent the click event from reaching other handlers
      event.stopPropagation();
    });

    // Close note button
    this.closeNoteBtn.addEventListener("click", () => {
      playClickSound(); // Play click sound
      if (this.closeNoteCallback) this.closeNoteCallback();
    });
  }

  // Update the objective display
  updateObjectiveDisplay() {
    this.objectiveElement.textContent = this.gameState.currentObjectiveText;
  }

  // Handle infection overlay effect
  updateInfectionOverlay(infectionLevel) {
    if (infectionLevel > 70) {
      const intensity = ((infectionLevel - 70) / 30) * 0.6; // max opacity 0.6
      this.infectionOverlay.style.backgroundColor = `rgba(230, 57, 70, ${intensity})`;
      this.infectionOverlay.style.animation = "heartbeat 1s infinite";
    } else {
      this.infectionOverlay.style.backgroundColor = "rgba(230, 57, 70, 0)";
      this.infectionOverlay.style.animation = "none";
    }
  }

  // Handle time warning overlay effect
  updateTimeWarningOverlay() {
    const timeRemaining = this.gameState.getRemainingTime();

    if (timeRemaining < 30) {
      const intensity = (1 - timeRemaining / 30) * 0.3; // max opacity 0.3
      this.timeWarningOverlay.style.backgroundColor = `rgba(255, 183, 3, ${intensity})`;
      this.timeWarningOverlay.style.animation = "timeWarning 0.5s infinite";
    } else {
      this.timeWarningOverlay.style.backgroundColor = "rgba(255, 183, 3, 0)";
      this.timeWarningOverlay.style.animation = "none";
    }
  }

  // Format time for display
  formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  }

  // Update the timer display
  updateTimerDisplay() {
    const timeRemaining = this.gameState.getRemainingTime();
    document.getElementById("timer").textContent = `Time: ${this.formatTime(
      timeRemaining
    )}`;
  }

  // Update serum count display
  updateSerumCountDisplay() {
    document.getElementById(
      "serum-count"
    ).textContent = `Serum: ${this.gameState.serumCollected}/${this.gameState.totalSerum}`;
  }

  // Show the start screen
  showStartScreen() {
    this.loadingScreen.style.display = "none";
    this.introScreen.style.display = "flex";
    this.gameUI.style.display = "none";
    this.pauseMenu.style.display = "none";
    this.gameOverScreen.style.display = "none";
    this.winScreen.style.display = "none";
  }

  // Start the game UI
  startGameUI() {
    this.introScreen.style.opacity = "0";

    setTimeout(() => {
      this.introScreen.style.display = "none";
      this.gameUI.style.display = "block";
      this.instructionsPanel.style.display = "block";

      // Hide instructions after 10 seconds
      setTimeout(() => {
        this.instructionsPanel.style.opacity = "0";
        setTimeout(() => {
          this.instructionsPanel.style.display = "none";
        }, 500);
      }, 10000);
    }, 500);
  }

  // Show the pause menu
  showPauseMenu() {
    // Make sure the menu is visible and styled correctly
    this.pauseMenu.style.opacity = "1";
    this.pauseMenu.style.visibility = "visible";
    this.pauseMenu.style.display = "flex";

    // Force a reflow to ensure the browser has applied the style changes
    void this.pauseMenu.offsetWidth;
  }

  // Hide the pause menu
  hidePauseMenu() {
    this.pauseMenu.style.display = "none";
    this.pauseMenu.style.visibility = "hidden";
  }

  // Show the game over screen
  showGameOverScreen(reason) {
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

    // Update the paragraph in the game over screen directly
    const gameOverP = this.gameOverScreen.querySelector("p");
    if (gameOverP) {
      gameOverP.textContent = message;
    }

    // Increase z-index to ensure it appears above other elements
    this.gameOverScreen.style.zIndex = "1100";
    this.gameOverScreen.style.display = "flex";
  }

  // Show the win screen
  showWinScreen(timeElapsed, infectionLevel) {
    const finalTime = this.formatTime(timeElapsed);
    const finalInfection = Math.floor(infectionLevel);

    // Create or update final time and infection elements if they exist
    if (this.finalTimeElement) {
      this.finalTimeElement.textContent = finalTime;
    }

    if (this.finalInfectionElement) {
      this.finalInfectionElement.textContent = `${finalInfection}%`;
    }

    // Update the win message
    const winP = this.winScreen.querySelector("p");
    if (winP) {
      winP.textContent = `You've successfully navigated the maze and controlled the infection. Time: ${finalTime}, Final Infection: ${finalInfection}%`;
    }

    // Increase z-index to ensure it appears above other elements
    this.winScreen.style.zIndex = "1100";
    this.winScreen.style.display = "flex";
  }

  // Show a story note
  showStoryNote(note) {
    this.noteTitle.textContent = note.title;
    this.noteContent.textContent = note.content;
    this.storyNotePanel.style.display = "flex";

    // Add keyboard listener for X key to close the note
    this._noteKeyListener = this._handleNoteKeyPress.bind(this);
    document.addEventListener("keydown", this._noteKeyListener);

    // Add a hint about using X key to close
    const keyHint = document.createElement("div");
    keyHint.className = "key-hint";
    keyHint.textContent = "Press X to close";
    keyHint.style.position = "absolute";
    keyHint.style.bottom = "15px";
    keyHint.style.right = "15px";
    keyHint.style.fontSize = "0.8rem";
    keyHint.style.color = "rgba(255, 255, 255, 0.7)";
    this.storyNotePanel.appendChild(keyHint);

    // Add the visible class to properly handle animations and pointer events
    setTimeout(() => {
      this.storyNotePanel.classList.add("visible");
    }, 10); // Small delay to ensure display:flex has taken effect
  }

  // Handle key press events when a note is open
  _handleNoteKeyPress(event) {
    // Check if X key is pressed
    if (event.key === "x" || event.key === "X") {
      if (this.closeNoteCallback) {
        this.closeNoteCallback();
      }
    }
  }

  // Add the missing showNoteContent method to fix the error
  showNoteContent(note) {
    // This is just an alias for showStoryNote for consistency
    this.showStoryNote(note);
  }

  // Hide a story note
  hideStoryNote() {
    this.storyNotePanel.classList.remove("visible");

    // Remove keyboard listener
    if (this._noteKeyListener) {
      document.removeEventListener("keydown", this._noteKeyListener);
      this._noteKeyListener = null;
    }

    // Remove the key hint element if it exists
    const keyHint = this.storyNotePanel.querySelector(".key-hint");
    if (keyHint) {
      this.storyNotePanel.removeChild(keyHint);
    }

    // Remove display style after animation completes
    setTimeout(() => {
      this.storyNotePanel.style.display = "none";
    }, 500); // Match transition time from CSS
  }

  // Hide all screens (for restart)
  hideAllScreens() {
    this.pauseMenu.style.display = "none";
    this.gameOverScreen.style.display = "none";
    this.winScreen.style.display = "none";
  }

  // Display loading screen
  showLoadingScreen() {
    this.loadingScreen.style.opacity = "1";
    this.loadingScreen.style.display = "flex";
    this.loadingBar.style.width = "0%";
  }

  // Update loading progress bar
  updateLoadingProgress(progress) {
    this.loadingBar.style.width = `${progress}%`;
  }

  // Hide loading screen with nice transition
  dismissLoadingScreen() {
    // Only dismiss once
    if (this.loadingScreen.style.opacity !== "0") {
      setTimeout(() => {
        this.loadingScreen.style.opacity = "0";
        setTimeout(() => {
          this.loadingScreen.style.display = "none";
          this.introScreen.style.display = "flex";
        }, 500);
      }, 1000);
    }
  }
}
