// CinematicManager.js - Manages cinematic sequences and transitions

export class CinematicManager {
  constructor(soundManager, storyContent) {
    this.soundManager = soundManager;
    this.storyContent = storyContent;

    // Cinematic state
    this.cinematicActive = false;
    this.cinematicStep = 0;
    this.skipRequested = false;
    this.cinematicSequence = [];
    this.introCinematicPlayed = false;

    // DOM elements for cinematics
    this.cinematicContainer = null;
    this.cinematicBackground = null;
    this.cinematicTitle = null;
    this.cinematicSubtitle = null;
    this.cinematicText = null;
    this.cinematicSkipBtn = null;
    this.characterPortrait = null;
    this.cinematicProgress = null;
    this.voiceName = null;
    this.memoryFlashback = null;
  }

  initialize() {
    // Get DOM elements for cinematics
    this.cinematicContainer = document.getElementById("cinematic-container");
    this.cinematicBackground = document.getElementById("cinematic-background");
    this.cinematicTitle = document.getElementById("cinematic-title");
    this.cinematicSubtitle = document.getElementById("cinematic-subtitle");
    this.cinematicText = document.getElementById("cinematic-text");
    this.cinematicSkipBtn = document.getElementById("cinematic-skip");
    this.characterPortrait = document.getElementById("character-portrait");
    this.cinematicProgress = document.getElementById("cinematic-progress");
    this.voiceName = document.getElementById("voice-name");
    this.memoryFlashback = document.getElementById("memory-flashback");

    // Initially hide cinematic container
    if (this.cinematicContainer) {
      this.cinematicContainer.style.display = "none";
      this.cinematicContainer.style.opacity = "0";
    }

    // Listen for key events to skip cinematics
    document.addEventListener("keydown", (e) => {
      if ((e.key === "Escape" || e.key === " ") && this.cinematicActive) {
        this.skipCinematic();
      }
    });

    // Set up click listener for skip button
    if (this.cinematicSkipBtn) {
      this.cinematicSkipBtn.addEventListener("click", () => {
        this.skipCinematic();
      });
    }

    console.log("CinematicManager initialized");
  }

  // Start the intro cinematic that plays when the game begins
  startIntroCinematic() {
    if (this.introCinematicPlayed) return; // Don't play it again if already played

    this.cinematicSequence = this.storyContent.getIntroCinematicSequence();
    this.playCinematicSequence();
    this.introCinematicPlayed = true;
  }

  // Play an act transition cinematic
  playActTransition(act) {
    // Don't interrupt existing cinematics
    if (this.cinematicActive) return;

    this.cinematicSequence = this.storyContent.getActCinematicSequence(act);
    if (this.cinematicSequence.length > 0) {
      this.playCinematicSequence();
      return true;
    }
    return false;
  }

  // Play a cinematic sequence
  playCinematicSequence() {
    // Set cinematic flag
    this.cinematicActive = true;
    this.cinematicStep = 0;
    this.skipRequested = false;

    // Show cinematic container
    if (this.cinematicContainer) {
      this.cinematicContainer.style.display = "flex";
      setTimeout(() => {
        this.cinematicContainer.style.opacity = "1";
      }, 100);
    }

    // Start cinematic music
    if (this.soundManager) {
      this.soundManager.fadeToCinematicMusic(2000);
    }

    // Process the first step
    this.processCinematicStep();
  }

  processCinematicStep() {
    // Check if we've reached the end or if skip was requested
    if (
      this.cinematicStep >= this.cinematicSequence.length ||
      this.skipRequested
    ) {
      this.endCinematicSequence();
      return;
    }

    // Get the current step
    const step = this.cinematicSequence[this.cinematicStep];

    // Get transition settings for this step type
    const transitionSettings = this.storyContent.getTransitionSettings();
    const transitionConfig =
      transitionSettings[step.type] || transitionSettings.background;

    // Fade out current content with sequential timing for better visual flow
    if (this.characterPortrait) {
      this.characterPortrait.style.opacity = "0";
      this.characterPortrait.classList.remove(
        transitionConfig.portraitAnimationClass
      );
    }
    if (this.voiceName) {
      this.voiceName.parentElement.style.opacity = "0";
      this.voiceName.classList.remove(transitionConfig.voiceAnimationClass);
    }
    if (this.cinematicTitle) {
      this.cinematicTitle.style.opacity = "0";
      this.cinematicTitle.classList.remove("title-reveal");
    }
    if (this.cinematicSubtitle) {
      this.cinematicSubtitle.style.opacity = "0";
      this.cinematicSubtitle.classList.remove("subtitle-reveal");
    }
    if (this.cinematicText) {
      this.cinematicText.style.opacity = "0";
      this.cinematicText.classList.remove(transitionConfig.textAnimationClass);
    }

    // Create an enhanced cinematic transition container if it doesn't exist
    let transitionContainer = document.querySelector(
      ".cinematic-transition-container"
    );
    if (!transitionContainer && this.cinematicContainer) {
      transitionContainer = document.createElement("div");
      transitionContainer.className = "cinematic-transition-container";
      this.cinematicContainer.appendChild(transitionContainer);
    }

    // Create a new background element for the crossfade with enhanced transition
    if (step.backgroundImage && transitionContainer) {
      const newBackground = document.createElement("div");
      newBackground.className = "cinematic-image cinematic-fade-enter";
      newBackground.style.backgroundImage = step.backgroundImage;

      // Add transition class based on step type for customized transitions
      newBackground.classList.add(transitionConfig.backgroundTransition);

      // Add parallax effect class based on step type
      if (step.type === "memory" || step.type === "finale") {
        newBackground.classList.add("parallax-background");
      }

      // Add it to the transition container
      transitionContainer.appendChild(newBackground);

      // Force reflow to ensure transition works
      void newBackground.offsetWidth;

      // Remove enter class and add active class to fade in
      newBackground.classList.remove("cinematic-fade-enter");
      newBackground.classList.add(
        "cinematic-fade-enter-active",
        "cinematic-image-active"
      );

      // Find existing background images and fade them out
      const oldBackgrounds = transitionContainer.querySelectorAll(
        ".cinematic-image-active:not(:last-child)"
      );
      oldBackgrounds.forEach((bg) => {
        bg.classList.remove(
          "cinematic-image-active",
          "cinematic-fade-enter-active"
        );
        bg.classList.add("cinematic-fade-exit-active");

        // Remove old backgrounds after transition completes
        setTimeout(() => {
          if (bg.parentElement) {
            bg.parentElement.removeChild(bg);
          }
        }, transitionConfig.transitionDuration);
      });

      // Set the new background as the current one
      this.cinematicBackground = newBackground;

      // Add cinematic pulse effect for dramatic moments
      if (
        step.type === "finale" ||
        (step.memoryFlash && step.memoryFlash === "high")
      ) {
        setTimeout(() => {
          newBackground.classList.add("cinematic-pulse");
        }, 600); // Add pulse after fade-in is mostly complete
      }

      // Add parallax effect for memory or finale transitions
      if (step.type === "memory" || step.type === "finale") {
        setTimeout(() => {
          newBackground.style.transform = "scale(1.05) translateZ(-10px)";
          setTimeout(() => {
            newBackground.style.transform = "scale(1) translateZ(0px)";
          }, 3000);
        }, 200);
      }
    }

    // Wait for fade out before updating content with staggered timing for a more polished reveal
    setTimeout(() => {
      // Reset elements
      if (this.characterPortrait) {
        this.characterPortrait.style.display = "none";
        this.characterPortrait.style.backgroundImage = "none";
        this.characterPortrait.style.opacity = "0";
      }

      // Reset voice indicator
      if (this.voiceName) {
        this.voiceName.textContent = "";
        this.voiceName.parentElement.style.opacity = "0";
      }

      // Set the title with enhanced animation class
      if (this.cinematicTitle) {
        this.cinematicTitle.textContent = step.title || "";
        this.cinematicTitle.classList.remove("title-reveal");

        if (step.title) {
          void this.cinematicTitle.offsetWidth; // Force reflow
          this.cinematicTitle.classList.add("title-reveal");
        }
      }

      // Set the subtitle with enhanced animation class
      if (this.cinematicSubtitle) {
        this.cinematicSubtitle.textContent = step.subtitle || "";
        this.cinematicSubtitle.classList.remove("subtitle-reveal");

        if (step.subtitle) {
          void this.cinematicSubtitle.offsetWidth; // Force reflow
          this.cinematicSubtitle.classList.add("subtitle-reveal");
        }
      }

      // Set the text content with enhanced animation
      if (this.cinematicText) {
        this.cinematicText.textContent = step.text || "";
        this.cinematicText.classList.remove(
          "text-reveal",
          "dialogue-text-reveal"
        );

        if (step.text) {
          void this.cinematicText.offsetWidth; // Force reflow
          this.cinematicText.classList.add(transitionConfig.textAnimationClass);
        }
      }

      // Handle character portrait for dialogue steps with improved timing and animation
      if (step.type === "dialogue" && this.characterPortrait) {
        if (step.portrait) {
          // Only show the portrait if one is provided
          this.characterPortrait.style.display = "block";
          this.characterPortrait.style.backgroundImage = step.portrait;
          this.characterPortrait.classList.remove("portrait-reveal");

          void this.characterPortrait.offsetWidth; // Force reflow
          this.characterPortrait.classList.add("portrait-reveal");

          // Set voice name and show voice indicator with animation
          if (this.voiceName && step.voiceName) {
            this.voiceName.textContent = step.voiceName;
            this.voiceName.classList.remove("voice-reveal");

            void this.voiceName.offsetWidth; // Force reflow
            this.voiceName.classList.add("voice-reveal");
            this.voiceName.parentElement.style.opacity = "1";
          }
        } else {
          // If no portrait is provided, ensure it's hidden completely
          this.characterPortrait.style.display = "none";
          this.characterPortrait.style.opacity = "0";
          this.characterPortrait.style.backgroundImage = "none";

          // Still show the voice name if provided
          if (this.voiceName && step.voiceName) {
            this.voiceName.textContent = step.voiceName;
            this.voiceName.classList.remove("voice-reveal");
            this.voiceName.classList.add("voice-reveal");
            this.voiceName.parentElement.style.opacity = "1";

            // Reposition voice indicator when no portrait is shown
            if (this.voiceName.parentElement) {
              this.voiceName.parentElement.style.left = "80px";
            }
          }
        }
      } else if (this.characterPortrait) {
        // Ensure portrait is hidden for non-dialogue steps
        this.characterPortrait.style.display = "none";
        this.characterPortrait.style.opacity = "0";
      }

      // Handle memory flash with improved visual effect
      if (step.memoryFlash && this.memoryFlashback) {
        // Apply the correct intensity class
        this.memoryFlashback.classList.remove(
          "low-intensity",
          "medium-intensity",
          "high-intensity"
        );
        this.memoryFlashback.classList.add(`${step.memoryFlash}-intensity`);

        // Apply the enhanced memory flashback animation
        setTimeout(() => {
          this.memoryFlashback.classList.add("memory-active");
        }, 300);

        setTimeout(
          () => {
            this.memoryFlashback.classList.remove("memory-active");
            this.memoryFlashback.classList.remove(
              `${step.memoryFlash}-intensity`
            );
          },
          step.type === "memory" ? 3000 : 2000
        ); // Longer for memory type
      }

      // Play associated audio with slight delay for better synchronization with visuals
      if (step.audio && this.soundManager) {
        setTimeout(() => {
          this.soundManager.playSfx(step.audio);
        }, 200);
      }

      // Update progress bar with smoother animation
      if (this.cinematicProgress) {
        const progressPercent =
          ((this.cinematicStep + 1) / this.cinematicSequence.length) * 100;
        this.cinematicProgress.style.width = `${progressPercent}%`;
        this.cinematicProgress.style.transition = `width ${step.duration}ms cubic-bezier(0.19, 1, 0.22, 1)`;
      }

      // Set timeout for next step
      setTimeout(() => {
        this.cinematicStep++;
        this.processCinematicStep();
      }, step.duration);
    }, 1000); // Increased wait time for better pacing between content transitions
  }

  endCinematicSequence() {
    // Mark cinematic as inactive
    this.cinematicActive = false;
    this.skipRequested = false;

    // Hide the cinematic container with fade
    if (this.cinematicContainer) {
      this.cinematicContainer.style.opacity = "0";

      // Completely hide after fade animation completes
      setTimeout(() => {
        this.cinematicContainer.style.display = "none";

        // Dispatch event that cinematics are complete
        const event = new CustomEvent("cinematicsComplete");
        document.dispatchEvent(event);
      }, 1000);
    }

    // Return to game music if needed
    if (this.soundManager) {
      this.soundManager.stopCinematicMusic();
      this.soundManager.playMusic("main");
    }
  }

  skipCinematic() {
    // Mark skip as requested and immediately end the sequence
    this.skipRequested = true;
    this.endCinematicSequence();
  }

  isCinematicActive() {
    return this.cinematicActive;
  }

  hasPlayedIntroCinematic() {
    return this.introCinematicPlayed;
  }
}
