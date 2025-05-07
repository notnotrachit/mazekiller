// StoryManager.js - Main manager for story elements, cinematics, and narrative

import { StoryContent } from "./story/StoryContent.js";
import { CinematicManager } from "./story/CinematicManager.js";
import { MemoryEffects } from "./story/MemoryEffects.js";
import { StoryProgress } from "./story/StoryProgress.js";

// Add CSS variables for fade transition times to document root
document.documentElement.style.setProperty("--fade-transition-time", "1200ms");
document.documentElement.style.setProperty(
  "--fade-transition-time-slow",
  "1800ms"
);
document.documentElement.style.setProperty(
  "--fade-transition-time-fast",
  "900ms"
);
document.documentElement.style.setProperty("--memory-flash-duration", "2.5s");

export class StoryManager {
  constructor(soundManager) {
    // Create sub-components
    this.storyContent = new StoryContent();
    this.memoryEffects = new MemoryEffects(soundManager);
    this.cinematicManager = new CinematicManager(
      soundManager,
      this.storyContent
    );
    this.storyProgress = new StoryProgress(
      soundManager,
      this.storyContent,
      this.memoryEffects
    );

    // Keep reference to sound manager
    this.soundManager = soundManager;
  }

  initialize() {
    // Initialize sub-components
    this.memoryEffects.initialize();
    this.cinematicManager.initialize();
    this.storyProgress.initialize();

    // Set up the intro story text
    this.storyProgress.setIntroStoryText();

    console.log("StoryManager initialized");
  }

  // Start the intro cinematic
  startIntroCinematic() {
    this.cinematicManager.startIntroCinematic();
  }

  // Set intro story text
  setIntroStoryText() {
    this.storyProgress.setIntroStoryText();
  }

  // Show objective notification
  showObjectiveNotification(text) {
    this.storyProgress.showObjectiveNotification(text);
  }

  // Get all story notes
  getStoryNotes() {
    return this.storyContent.getStoryNotes();
  }

  // Update story progress when a note is found
  updateStoryProgress(noteId) {
    const result = this.storyProgress.updateStoryProgress(noteId);

    if (result.note) {
      // Determine flashback intensity based on note importance
      let intensity = "medium";
      if (result.note.id === 4 || result.note.id === 5) {
        // Critical story notes
        intensity = "high";
      } else if (result.note.id === 1 || result.note.id === 2) {
        // Less critical notes
        intensity = "low";
      }

      // Trigger memory flashback
      this.memoryEffects.triggerMemoryFlashback(intensity);

      // If player reached a new act, trigger act transition
      if (result.transitioned) {
        this.triggerActTransition(result.act);
      }

      return true;
    }

    return false;
  }

  // Trigger an act transition cinematic
  triggerActTransition(act) {
    // Play the act transition cinematic
    if (this.cinematicManager.playActTransition(act)) {
      // After cinematic is done, set new objective text
      // We listen for the cinematic complete event
      const handler = () => {
        if (act === 2) {
          this.storyProgress.showObjectiveNotification(
            "Find the remaining serum vials before time runs out"
          );
        } else if (act === 3) {
          this.storyProgress.showObjectiveNotification(
            "Find the exit portal and escape the facility"
          );
        }

        // Remove event listener after it fires
        document.removeEventListener("cinematicsComplete", handler);
      };

      // Add event listener for cinematic completion
      document.addEventListener("cinematicsComplete", handler);
    }
  }

  // Initialize story beats
  initializeStoryBeats(gameWorld) {
    this.storyProgress.initializeStoryBeats(gameWorld);
  }

  // Check story beat triggers
  checkStoryBeatTriggers(playerPosition) {
    this.storyProgress.checkStoryBeatTriggers(
      playerPosition,
      this.cinematicManager.isCinematicActive()
    );
  }

  // Trigger a memory flashback
  triggerMemoryFlashback(intensity = "medium") {
    this.memoryEffects.triggerMemoryFlashback(intensity);
  }

  // Get current status
  getCurrentStatus() {
    return {
      act: this.storyProgress.getCurrentAct(),
      notesFound: this.storyProgress.getNotesFound(),
      totalNotes: this.storyProgress.getTotalNotes(),
      objective: this.storyProgress.getCurrentObjective(),
      cinematicActive: this.cinematicManager.isCinematicActive(),
    };
  }

  // Check if cinematics are active
  isCinematicActive() {
    return this.cinematicManager.isCinematicActive();
  }

  // Skip current cinematic
  skipCinematic() {
    this.cinematicManager.skipCinematic();
  }

  // Clean up any resources
  dispose() {
    this.storyProgress.dispose();
  }
}
