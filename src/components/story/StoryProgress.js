// StoryProgress.js - Tracks story progression and manages story beats

export class StoryProgress {
  constructor(soundManager, storyContent, memoryEffects) {
    this.soundManager = soundManager;
    this.storyContent = storyContent;
    this.memoryEffects = memoryEffects;

    // Story state tracking
    this.notesFound = 0;
    this.totalNotes = storyContent.getTotalNotes();
    this.currentObjective = "";
    this.currentAct = 1;
    this.storyBeats = new Map(); // Map of story trigger zones
    this.triggeredBeats = new Set(); // Set of already triggered beats
    this.objectiveTimers = [];
  }

  initialize() {
    console.log("StoryProgress initialized");
  }

  // Set the intro story text in the intro screen
  setIntroStoryText() {
    const storyTextElement = document.querySelector(
      ".intro-screen .story-text"
    );

    if (!storyTextElement) {
      console.error("Story text element not found in the DOM");
      return;
    }

    // Get the intro story content
    const introStory = this.storyContent.getIntroStory();

    // Clear existing content
    storyTextElement.innerHTML = "";

    // Add status line with typewriter effect
    const statusLine = document.createElement("p");
    statusLine.className = "typewriter";
    statusLine.textContent = introStory.statusLine;
    storyTextElement.appendChild(statusLine);

    // Add main story paragraphs
    introStory.mainText.forEach((text, index) => {
      const paragraph = document.createElement("p");
      paragraph.innerHTML = text;

      // Add warning class to the last paragraph
      if (index === introStory.mainText.length - 1) {
        paragraph.className = "warning-text";
      }

      storyTextElement.appendChild(paragraph);

      // Add slight delay to create a sequential revealing effect
      paragraph.style.animationDelay = `${(index + 1) * 0.5}s`;
      paragraph.style.opacity = "0";
      paragraph.style.animation = "fadeIn 1s forwards";
    });

    // Add some custom CSS for the animation if not already present
    if (!document.querySelector("#story-text-animations")) {
      const styleElement = document.createElement("style");
      styleElement.id = "story-text-animations";
      styleElement.textContent = `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .story-text p {
          opacity: 0;
          animation: fadeIn 1s forwards;
        }
      `;
      document.head.appendChild(styleElement);
    }

    console.log("Intro story text has been set");
  }

  // Show a notification for new objectives
  showObjectiveNotification(text) {
    // Clear any existing objective timers
    this.objectiveTimers.forEach((timer) => clearTimeout(timer));
    this.objectiveTimers = [];

    // Set current objective text
    this.currentObjective = text;

    // Get notification element
    let notification = document.getElementById("objective-notification");
    if (!notification) {
      console.error("Objective notification element not found");
      return;
    }

    // Update text and show notification
    notification.textContent = text;
    notification.classList.add("active");

    // Play objective sound
    if (this.soundManager) {
      this.soundManager.playSfx("objective");
    }

    // Set timer to hide notification
    const hideTimer = setTimeout(() => {
      notification.classList.remove("active");
    }, 5000);

    this.objectiveTimers.push(hideTimer);
  }

  // Update story progress based on notes found
  updateStoryProgress(noteId) {
    // Find the note and mark it as found
    const note = this.storyContent.getStoryNoteById(noteId);
    if (note && !note.found) {
      note.found = true;
      this.notesFound++;

      // Update current act based on notes found
      const previousAct = this.currentAct;

      if (this.notesFound >= this.totalNotes * 0.75) {
        this.currentAct = 3; // Final act
      } else if (this.notesFound >= this.totalNotes * 0.3) {
        this.currentAct = 2; // Middle act
      }

      // Return current act and whether there was a transition
      return {
        act: this.currentAct,
        transitioned: previousAct !== this.currentAct,
        note: note,
      };
    }
    return { act: this.currentAct, transitioned: false, note: null };
  }

  // Register story beat zones that trigger when player enters them
  registerStoryBeat(id, position, radius, callback) {
    this.storyBeats.set(id, {
      position,
      radius,
      callback,
      triggered: false,
    });
  }

  // Check if player has entered any story beat zones
  checkStoryBeatTriggers(playerPosition, isCinematicActive) {
    // Skip if we're in a cinematic
    if (isCinematicActive) return;

    // Check each story beat zone
    for (const [id, beat] of this.storyBeats.entries()) {
      // Skip already triggered beats
      if (this.triggeredBeats.has(id)) continue;

      // Calculate distance to player
      const dx = beat.position.x - playerPosition.x;
      const dz = beat.position.z - playerPosition.z;
      const distanceSquared = dx * dx + dz * dz;

      // Check if player is within trigger radius
      if (distanceSquared <= beat.radius * beat.radius) {
        // Mark as triggered and call callback
        this.triggeredBeats.add(id);
        beat.callback();
      }
    }
  }

  // Initialize story beats (call this after maze generation)
  initializeStoryBeats(gameWorld) {
    // Get maze information
    const mazeSize = gameWorld.mazeSize;
    const cellSize = gameWorld.cellSize;

    // Register key story beats at specific locations

    // Center of the maze - revelation moment
    const centerX = 0;
    const centerZ = 0;
    this.registerStoryBeat(
      "center_revelation",
      { x: centerX, y: 1.6, z: centerZ },
      cellSize * 1.5,
      () => {
        // Play audio hallucination
        if (this.soundManager) {
          this.soundManager.playSfx("whispers");
        }
        // Show subtle visual effect
        this.memoryEffects.triggerMemoryFlashback("low");
        // Show mysterious message
        this.showObjectiveNotification("Something is watching you...");
      }
    );

    // Near exit location - sense of urgency
    const exitPos = gameWorld.getExitPosition();
    if (exitPos) {
      // Register a beat some distance away from exit
      const approachX = exitPos.x - cellSize * 3;
      const approachZ = exitPos.z - cellSize * 3;

      this.registerStoryBeat(
        "exit_approach",
        { x: approachX, y: 1.6, z: approachZ },
        cellSize * 2,
        () => {
          // Play heartbeat sound
          if (this.soundManager) {
            this.soundManager.playSfx("heartbeat");
          }
          // High intensity flashback
          this.memoryEffects.triggerMemoryFlashback("high");
          // Update objective
          this.showObjectiveNotification(
            "You're close to the exit. Gather all serum vials!"
          );
        }
      );
    }

    console.log("Story beats initialized");
  }

  // Get the current objective
  getCurrentObjective() {
    return this.currentObjective;
  }

  // Get current act
  getCurrentAct() {
    return this.currentAct;
  }

  // Get number of notes found
  getNotesFound() {
    return this.notesFound;
  }

  // Get total notes
  getTotalNotes() {
    return this.totalNotes;
  }

  // Clean up any timers
  dispose() {
    // Clear any active timers
    this.objectiveTimers.forEach((timer) => clearTimeout(timer));
    this.objectiveTimers = [];
  }
}
