// StoryManager.js - Manages story elements, cinematics, and narrative elements

export class StoryManager {
  constructor(soundManager) {
    this.soundManager = soundManager;

    // Story data and state management
    this.storyNotes = [];
    this.currentObjective = "";
    this.cinematicActive = false;
    this.cinematicStep = 0;
    this.objectiveTimers = [];

    // Cinematic state
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

    // Story state tracking
    this.notesFound = 0;
    this.totalNotes = 0;
    this.currentAct = 1;
    this.storyBeats = new Map(); // Map of story trigger zones
    this.triggeredBeats = new Set(); // Set of already triggered beats

    // Create story notes with lore
    this.createStoryContent();

    // Intro story text
    this.introStory = {
      statusLine: "SUBJECT STATUS: INFECTED (42%)",
      mainText: [
        "You awaken in the maze, disoriented and alone. Your memory is fragmented.",
        "You are a <span class='highlight'>Runner</span> - one of the few who venture into the maze to map its ever-changing corridors.",
        "The evening shadows grow longer. <span class='danger-text'>Grievers</span> have been spotted as daylight fades.",
        "Your body is fighting an unknown infection. Find the <span class='serum-text'>blue serum vials</span> to slow its progress.",
        "WARNING: The maze walls shift in darkness. Find the exit before night falls completely.",
      ],
    };

    // Define the intro cinematic sequence
    this.introCinematicSequence = [
      {
        type: "background",
        backgroundImage: "url('/src/assets/lab-explosion.jpg')",
        duration: 5000,
        title: "WCKD Research Facility",
        subtitle: "Three Days Ago",
        text: "",
        audio: "alarm",
        voiceName: "",
      },
      {
        type: "dialogue",
        backgroundImage: "url('/src/assets/lab-interior.jpg')",
        duration: 6000,
        title: "",
        subtitle: "",
        text: "Emergency protocols activated. Biohazard containment breach in Laboratory B. All personnel evacuate immediately.",
        audio: "alarm_distant",
        portrait: "url('/src/assets/ai-portrait.jpg')",
        voiceName: "WCKD Security System",
      },
      {
        type: "dialogue",
        backgroundImage: "url('/src/assets/scientist-closeup.jpg')",
        duration: 6000,
        title: "",
        subtitle: "",
        text: "We need to lock down the serum samples! The compound is unstable - if it gets out...",
        audio: "panic",
        portrait: "url('/src/assets/dr-paige.jpg')",
        voiceName: "Dr. Paige",
      },
      {
        type: "background",
        backgroundImage: "url('/src/assets/test-subject.jpg')",
        duration: 5000,
        title: "",
        subtitle: "",
        text: "Warning: Test subjects exhibiting advanced symptoms. Aggression levels rising. Cognitive functions deteriorating.",
        audio: "monster_distant",
        voiceName: "WCKD Monitoring System",
      },
      {
        type: "dialogue",
        backgroundImage: "url('/src/assets/security-officer.jpg')",
        duration: 6000,
        title: "",
        subtitle: "",
        text: "We don't have much time. Take these serum vials - they'll slow the infection. The maze protocol is our only option now.",
        audio: "serious",
        portrait: "url('/src/assets/security-portrait.jpg')",
        voiceName: "Chief Security Officer",
      },
      {
        type: "memory",
        backgroundImage: "url('/src/assets/maze-entrance.jpg')",
        duration: 7000,
        title: "Present Day",
        subtitle: "",
        text: "Your memory fades in and out. Images from the past blur with the present. The infection is spreading through your system.",
        audio: "heartbeat",
        memoryFlash: "high",
        voiceName: "",
      },
      {
        type: "dialogue",
        backgroundImage: "url('/src/assets/player-pov.jpg')",
        duration: 5000,
        title: "",
        subtitle: "",
        text: "I need to find those serum vials before it's too late. The lab's emergency exit should still be operational...",
        audio: "ambient_eerie",
        portrait: "url('/src/assets/player-portrait.jpg')",
        voiceName: "You",
      },
      {
        type: "background",
        backgroundImage: "url('/src/assets/griever-shadow.jpg')",
        duration: 6000,
        title: "",
        subtitle: "",
        text: "But I'm not alone in here. The infected researchers - what the security team called 'Grievers' - they're hunting in the darkness.",
        audio: "monster_near",
        memoryFlash: "medium",
        voiceName: "",
      },
      {
        type: "finale",
        backgroundImage: "url('/src/assets/maze-aerial.jpg')",
        duration: 5000,
        title: "THE MAZE",
        subtitle: "Find the serum. Escape the facility. Survive.",
        text: "",
        audio: "dramatic_impact",
        voiceName: "",
      },
    ];
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

    // Set up the intro story text
    this.setIntroStoryText();

    console.log("StoryManager initialized");
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

    // Clear existing content
    storyTextElement.innerHTML = "";

    // Add status line with typewriter effect
    const statusLine = document.createElement("p");
    statusLine.className = "typewriter";
    statusLine.textContent = this.introStory.statusLine;
    storyTextElement.appendChild(statusLine);

    // Add main story paragraphs
    this.introStory.mainText.forEach((text, index) => {
      const paragraph = document.createElement("p");
      paragraph.innerHTML = text;

      // Add warning class to the last paragraph
      if (index === this.introStory.mainText.length - 1) {
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

  createStoryContent() {
    // Story notes that will be scattered throughout the maze
    this.storyNotes = [
      {
        id: 1,
        title: "Lab Entry #143",
        content: `DATE: March 15, 2042\n\nThe research team has made a breakthrough with Compound X-37. The regenerative properties are exceeding all expectations. Dr. Paige believes we can begin human trials within months, not years as initially projected.\n\nHowever, I've noticed some concerning behavior in the lab rats from batch 12. Their aggression has increased, and their tissue seems to be mutating in unexpected ways. I've flagged this for review, but everyone's too excited about the progress to pay much attention to my concerns.`,
        found: false,
      },
      {
        id: 2,
        title: "Security Alert",
        content: `DATE: March 30, 2042\n\nATTENTION ALL PERSONNEL:\n\nA containment breach has occurred in Lab Block C. All personnel must evacuate immediately following biohazard protocols. Security teams will escort scientists to decontamination.\n\nANY CONTACT with escaped test subjects must be reported immediately. Do NOT attempt to handle subjects on your own.\n\nSecurity Level: ALPHA RED\nAuthorization: Director Hammond`,
        found: false,
      },
      {
        id: 3,
        title: "Audio Transcript: Emergency Broadcast",
        content: `DATE: April 2, 2042\n\n[Static]...repeat, this is not a drill. The facility is under complete lockdown. The infection has spread beyond containment measures. If you're hearing this, proceed to emergency extraction point Delta.\n\nMilitary forces have been dispatched and will arrive in [static]...hours. They are authorized to use lethal force to prevent spread to civilian populations.\n\nAll research data on Compound X-37 must be preserved. Dr. Paige has the prototype serum that may slow the infection. Find her if you can. God help us all.`,
        found: false,
      },
      {
        id: 4,
        title: "Dr. Paige's Journal",
        content: `DATE: April 3, 2042\n\nI should have listened to Marcus. The warning signs were there in the data, but I was too focused on the breakthrough to see the danger.\n\nI've developed a serum that seems to slow the progression of the infection - not a cure, but it buys time. I've synthesized a limited batch and hidden vials throughout the facility in secure locations. The keycard to the emergency exit is locked in my office safe.\n\nI'm exhibiting early symptoms now. Memory lapses. Tremors. I need to record what I know before I forget who I am. The entities we're calling "Grievers" seem drawn to sound and movement. They used to be my colleagues. My friends.`,
        found: false,
      },
      {
        id: 5,
        title: "Final Protocol",
        content: `DATE: April 5, 2042\n\nTo whoever finds this:\n\nIf you're reading this, you've survived longer than most. The maze-like layout of this facility was intentional - designed to contain any outbreak and slow its spread. Now it's your prison too.\n\nTo escape:\n1. Collect the serum vials - they'll slow your infection and are needed to power the emergency exit portal\n2. Avoid the Grievers - they're faster in darkness\n3. Find the exit in the northeast quadrant\n\nI'm securing this note near the entrance. I hope it helps someone survive this nightmare.\n\n- Dr. Marcus Chen, Lead Security Officer`,
        found: false,
      },
      {
        id: 6,
        title: "Memory Fragment",
        content: `I remember the day I joined the research team. The promise of changing the world. Dr. Paige's inspiring speech about healing the unhealable.\n\nNow look at us. I'm the only one left who still looks human. The infection is spreading though. I can feel it in my blood.\n\nThe serum works, temporarily. Three doses should be enough to power the emergency evacuation system. If anyone reads this - there's still hope. The military will want to burn this place to the ground, but the research could still save lives if it reaches the right hands.\n\nI'm leaving this note and continuing my search for more serum. If you find this... I'm sorry for what we created.`,
        found: false,
      },
    ];

    this.totalNotes = this.storyNotes.length;
  }

  getStoryNotes() {
    return this.storyNotes;
  }

  // Start the intro cinematic that plays when the game begins
  startIntroCinematic() {
    if (this.introCinematicPlayed) return; // Don't play it again if already played

    this.cinematicSequence = this.introCinematicSequence;
    this.playCinematicSequence();
    this.introCinematicPlayed = true;
  }

  showObjectiveNotification(text) {
    // Clear any existing objective timers
    this.objectiveTimers.forEach((timer) => clearTimeout(timer));
    this.objectiveTimers = [];

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

    // Reset elements
    if (this.characterPortrait) {
      this.characterPortrait.style.display = "none";
      this.characterPortrait.style.backgroundImage = "none";
    }

    // Reset voice indicator
    if (this.voiceName) {
      this.voiceName.parentElement.style.opacity = "0";
      this.voiceName.textContent = "";
    }

    // Set the background image
    if (this.cinematicBackground && step.backgroundImage) {
      this.cinematicBackground.style.backgroundImage = step.backgroundImage;
      this.cinematicBackground.style.animation =
        "cinematic-pan 10s ease-in-out infinite alternate";
    }

    // Set the title
    if (this.cinematicTitle) {
      this.cinematicTitle.textContent = step.title || "";
      this.cinematicTitle.style.opacity = step.title ? "1" : "0";
    }

    // Set the subtitle
    if (this.cinematicSubtitle) {
      this.cinematicSubtitle.textContent = step.subtitle || "";
      this.cinematicSubtitle.style.opacity = step.subtitle ? "1" : "0";
    }

    // Set the text content
    if (this.cinematicText) {
      this.cinematicText.textContent = step.text || "";
      this.cinematicText.style.opacity = step.text ? "1" : "0";
    }

    // Handle character portrait for dialogue steps
    if (step.type === "dialogue" && this.characterPortrait && step.portrait) {
      this.characterPortrait.style.display = "block";
      this.characterPortrait.style.backgroundImage = step.portrait;
      this.characterPortrait.style.animation =
        "fadeInPortrait 1s forwards 0.2s";

      // Set voice name and show voice indicator
      if (this.voiceName && step.voiceName) {
        this.voiceName.textContent = step.voiceName;
        this.voiceName.parentElement.style.opacity = "1";
      }
    }

    // Handle memory flash
    if (step.memoryFlash && this.memoryFlashback) {
      this.memoryFlashback.classList.add(step.memoryFlash + "-intensity");
      this.memoryFlashback.classList.add("active");

      setTimeout(() => {
        this.memoryFlashback.classList.remove("active");
        this.memoryFlashback.classList.remove(step.memoryFlash + "-intensity");
      }, 2000);
    }

    // Play associated audio
    if (step.audio && this.soundManager) {
      this.soundManager.playSfx(step.audio);
    }

    // Update progress bar
    if (this.cinematicProgress) {
      const progressPercent =
        ((this.cinematicStep + 1) / this.cinematicSequence.length) * 100;
      this.cinematicProgress.style.width = `${progressPercent}%`;
      this.cinematicProgress.style.transition = `width ${step.duration}ms linear`;
    }

    // Set timeout for next step
    setTimeout(() => {
      this.cinematicStep++;
      this.processCinematicStep();
    }, step.duration);
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

  // Trigger a memory flashback effect with customizable intensity
  triggerMemoryFlashback(intensity = "medium") {
    if (!this.memoryFlashback) return;

    // Set intensity class
    this.memoryFlashback.classList.remove(
      "low-intensity",
      "medium-intensity",
      "high-intensity"
    );
    this.memoryFlashback.classList.add(`${intensity}-intensity`);

    // Play memory flash sound with appropriate variation
    if (this.soundManager) {
      switch (intensity) {
        case "low":
          this.soundManager.playSfx("memory_flash_low");
          break;
        case "high":
          this.soundManager.playSfx("memory_flash_high");
          break;
        case "medium":
        default:
          this.soundManager.playSfx("memory_flash");
          break;
      }
    }

    // Trigger the flash effect
    this.memoryFlashback.classList.add("active");

    // Remove the effect after animation completes (duration varies by intensity)
    const durations = {
      low: 1000,
      medium: 1500,
      high: 2500,
    };

    setTimeout(() => {
      this.memoryFlashback.classList.remove("active");
    }, durations[intensity] || 1500);
  }

  // Update story progress based on notes found
  updateStoryProgress(noteId) {
    // Find the note and mark it as found
    const note = this.storyNotes.find((note) => note.id === noteId);
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

      // If player reached a new act, trigger act transition
      if (previousAct !== this.currentAct) {
        this.triggerActTransition(this.currentAct);
      }

      // Determine flashback intensity based on note importance
      let intensity = "medium";
      if (note.id === 4 || note.id === 5) {
        // Critical story notes
        intensity = "high";
      } else if (note.id === 1 || note.id === 2) {
        // Less critical notes
        intensity = "low";
      }

      // Trigger appropriate intensity flashback
      this.triggerMemoryFlashback(intensity);

      // Return true if this was a new note
      return true;
    }
    return false;
  }

  // Trigger a cinematic for act transitions
  triggerActTransition(act) {
    // Don't interrupt existing cinematics
    if (this.cinematicActive) return;

    // Define cinematics for each act transition
    if (act === 2) {
      // Act 2 transition - player discovers more about the infection
      this.cinematicSequence = [
        {
          type: "background",
          backgroundImage: "url('/src/assets/revelation.jpg')",
          duration: 1000,
          title: "",
          subtitle: "",
          text: "",
          audio: null,
        },
        {
          type: "dialogue",
          backgroundImage: "url('/src/assets/revelation.jpg')",
          duration: 7000,
          title: "",
          subtitle: "",
          text: "Memories are returning... you were one of the researchers working on Project Lazarus.",
          audio: "act2_revelation",
          portrait: "url('/src/assets/player-portrait.jpg')",
          voiceName: "Your Thoughts",
        },
        {
          type: "dialogue",
          backgroundImage: "url('/src/assets/infection_closeup.jpg')",
          duration: 6000,
          title: "",
          subtitle: "",
          text: "The infection is accelerating. You need to find the remaining serum vials.",
          audio: "act2_warning",
          portrait: "url('/src/assets/player-portrait.jpg')",
          voiceName: "Your Thoughts",
          memoryFlash: "medium",
        },
      ];

      // Play the act 2 cinematic after a small delay
      setTimeout(() => {
        this.playCinematicSequence();
        setTimeout(() => {
          // Update objective after cinematic
          this.showObjectiveNotification(
            "Find the remaining serum vials before time runs out"
          );
        }, 16000); // Total duration of the cinematic + buffer
      }, 500);
    } else if (act === 3) {
      // Act 3 transition - player is close to the end
      this.cinematicSequence = [
        {
          type: "background",
          backgroundImage: "url('/src/assets/final_stage.jpg')",
          duration: 1000,
          title: "",
          subtitle: "",
          text: "",
          audio: null,
        },
        {
          type: "dialogue",
          backgroundImage: "url('/src/assets/final_stage.jpg')",
          duration: 7000,
          title: "",
          subtitle: "",
          text: "You remember everything now. You were Dr. Paige's assistant, entrusted with the final specimens.",
          audio: "act3_finalstage",
          portrait: "url('/src/assets/player-portrait.jpg')",
          voiceName: "Your Thoughts",
        },
        {
          type: "dialogue",
          backgroundImage: "url('/src/assets/exit_portal.jpg')",
          duration: 6000,
          title: "",
          subtitle: "",
          text: "The exit is near. Gather the remaining serum to power the portal and escape with the research.",
          audio: "act3_escape",
          portrait: "url('/src/assets/player-portrait.jpg')",
          voiceName: "Your Thoughts",
          memoryFlash: "high",
        },
      ];

      // Play the act 3 cinematic after a small delay
      setTimeout(() => {
        this.playCinematicSequence();
        setTimeout(() => {
          // Update objective after cinematic
          this.showObjectiveNotification(
            "Find the exit portal and escape the facility"
          );
        }, 16000); // Total duration of the cinematic + buffer
      }, 500);
    }
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
  checkStoryBeatTriggers(playerPosition) {
    // Skip if we're in a cinematic
    if (this.cinematicActive) return;

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
        this.triggerMemoryFlashback("low");
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
          this.triggerMemoryFlashback("high");
          // Update objective
          this.showObjectiveNotification(
            "You're close to the exit. Gather all serum vials!"
          );
        }
      );
    }

    console.log("Story beats initialized");
  }

  // Clean up any DOM elements
  dispose() {
    // Clear any active timers
    this.objectiveTimers.forEach((timer) => clearTimeout(timer));
    this.objectiveTimers = [];
  }
}
