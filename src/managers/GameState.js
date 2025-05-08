// GameState.js
// Manages the game state and provides getters/setters for state values

export class GameState {
  constructor() {
    this.state = {
      difficulty: "normal",
      serumCollected: 0,
      totalSerum: 5,
      notesFound: 0,
      totalNotes: 8,
      gameStarted: false,
      gamePaused: false,
      gameOver: false,
      noteReading: false,
      startTime: 0,
      elapsedTime: 0,
      pausedTime: 0, // Total time spent paused
      pauseStartTime: 0, // Timestamp when pause begins
      timeLimit: 300, // 5 minutes in seconds
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
  }

  // Game initialization functions
  startGame() {
    this.state.gameStarted = true;
    this.state.startTime = Date.now();
  }

  pauseGame() {
    if (!this.state.gamePaused) {
      this.state.gamePaused = true;
      // Record the time when the game was paused
      this.state.pauseStartTime = Date.now();
    }
  }

  resumeGame() {
    if (this.state.gamePaused) {
      this.state.gamePaused = false;
      // Calculate how long the game was paused and add to total pausedTime
      if (this.state.pauseStartTime > 0) {
        this.state.pausedTime += Date.now() - this.state.pauseStartTime;
        this.state.pauseStartTime = 0;
      }
    }
  }

  endGame() {
    this.state.gameOver = true;
  }

  // Getters
  get difficulty() {
    return this.state.difficulty;
  }
  get serumCollected() {
    return this.state.serumCollected;
  }
  get totalSerum() {
    return this.state.totalSerum;
  }
  get notesFound() {
    return this.state.notesFound;
  }
  get totalNotes() {
    return this.state.totalNotes;
  }
  get gameStarted() {
    return this.state.gameStarted;
  }
  get gamePaused() {
    return this.state.gamePaused;
  }
  get gameOver() {
    return this.state.gameOver;
  }
  get noteReading() {
    return this.state.noteReading;
  }
  get elapsedTime() {
    return this.state.elapsedTime;
  }
  get timeLimit() {
    return this.state.timeLimit;
  }
  get objectives() {
    return this.state.objectives;
  }
  get currentObjective() {
    return this.state.currentObjective;
  }
  get objectiveTimer() {
    return this.state.objectiveTimer;
  }
  get objectiveDisplayTime() {
    return this.state.objectiveDisplayTime;
  }
  get environmentStatus() {
    return this.state.environmentStatus;
  }
  get currentObjectiveText() {
    return this.state.objectives[this.state.currentObjective];
  }

  // Setters
  set difficulty(value) {
    this.state.difficulty = value;
    this.updateTimeLimitBasedOnDifficulty();
  }
  set serumCollected(value) {
    this.state.serumCollected = value;
  }
  set notesFound(value) {
    this.state.notesFound = value;
  }
  set gameStarted(value) {
    this.state.gameStarted = value;
  }
  set gamePaused(value) {
    this.state.gamePaused = value;
  }
  set gameOver(value) {
    this.state.gameOver = value;
  }
  set noteReading(value) {
    this.state.noteReading = value;
  }
  set objectiveTimer(value) {
    this.state.objectiveTimer = value;
  }
  set environmentStatus(value) {
    this.state.environmentStatus = value;
  }

  // Update current game time
  updateElapsedTime() {
    if (this.state.gameStarted) {
      if (this.state.gamePaused) {
        // While paused, don't update elapsed time, but still return current value
        return this.state.elapsedTime;
      } else {
        // When active, subtract the total paused time from the calculation
        this.state.elapsedTime =
          Date.now() - this.state.startTime - this.state.pausedTime;
      }
    }
    return this.state.elapsedTime;
  }

  // Get remaining time in seconds
  getRemainingTime() {
    return Math.max(0, this.state.timeLimit - this.state.elapsedTime / 1000);
  }

  // Cycle to the next objective
  cycleObjective() {
    this.state.currentObjective =
      (this.state.currentObjective + 1) % this.state.objectives.length;
    this.state.objectiveTimer = 0;
    return this.currentObjectiveText;
  }

  // Increment serum collected
  incrementSerum() {
    this.state.serumCollected++;
    return this.state.serumCollected;
  }

  // Increment notes found
  incrementNotes() {
    this.state.notesFound++;
    return this.state.notesFound;
  }

  // Set difficulty and adjust time limit
  setDifficulty(difficultyLevel) {
    this.state.difficulty = difficultyLevel;
    this.updateTimeLimitBasedOnDifficulty();
  }

  // Update time limit based on difficulty
  updateTimeLimitBasedOnDifficulty() {
    switch (this.state.difficulty) {
      case "easy":
        this.state.timeLimit = 420; // 7 minutes
        break;
      case "normal":
        this.state.timeLimit = 300; // 5 minutes
        break;
      case "hard":
        this.state.timeLimit = 180; // 3 minutes
        break;
    }
    return this.state.timeLimit;
  }

  // Reset game state for a new game
  reset() {
    this.state.serumCollected = 0;
    this.state.notesFound = 0;
    this.state.gameOver = false;
    this.state.gamePaused = false;
    this.state.startTime = Date.now();
    this.state.elapsedTime = 0;
    this.state.pausedTime = 0; // Reset paused time tracking
    this.state.pauseStartTime = 0; // Reset pause start timestamp
    this.state.currentObjective = 0;
    this.state.objectiveTimer = 0;
    // Don't reset difficulty as that should persist
  }
}
