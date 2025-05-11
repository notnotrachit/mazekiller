import { Howl, Howler } from "howler";
import * as THREE from "three";

export class SoundManager {
  constructor(camera, loadingManager = null) {
    this.camera = camera;
    this.listener = new THREE.AudioListener();
    this.camera.add(this.listener);
    this.loadingManager = loadingManager;

    this.sounds = {};
    this.music = {};
    this.ambientSounds = {};
    this.cinematicSounds = {}; // New container for cinematic sounds

    // Global volume settings
    this.masterVolume = 1.0;
    this.musicVolume = 0.5;
    this.sfxVolume = 0.8;
    this.ambientVolume = 0.6;
    this.narrativeVolume = 0.9; // New volume control for narrative audio

    // Error handling
    this.loadErrors = false;

    // Delayed initialization flag
    this.initialized = false;

    // Create fallback sounds first, will properly initialize after user interaction
    this.createFallbackSounds();
  }

  // Initialize after user interaction
  initializeAfterUserInteraction() {
    if (this.initialized) return;

    try {
      console.log("Initializing audio after user interaction");

      // Set Howler global volume
      Howler.volume(this.masterVolume);

      // Load all sounds
      this.loadSounds();
      this.loadMusic();
      this.loadAmbientSounds();
      this.loadSfx();
      this.loadCinematicSounds(); // New method for cinematic sounds

      this.initialized = true;
    } catch (error) {
      console.error("Error initializing SoundManager:", error);
      this.loadErrors = true;
    }
  }

  // Original initialize method kept for backwards compatibility
  initialize() {
    // This will be called automatically after user interaction
    // using the initializeAfterUserInteraction method
  }

  createFallbackSounds() {
    // Create empty sound objects that will not throw errors when used
    const silentHowl = {
      play: () => {
        return this;
      },
      stop: () => {},
      pause: () => {},
      volume: () => {
        return this;
      },
      fade: () => {},
      playing: () => false,
    };

    // Create minimal required sounds
    const requiredSounds = [
      "click",
      "hover",
      "footsteps",
      "sprint",
      "jump",
      "land",
      "collectSerum",
      "collectNote",
      "doorOpen",
      "doorLocked",
      "grieverNear",
      "grieverAttack",
      "playerHurt",
      "gameOver",
      "victory",
      "heartbeat",
      "collectMedkit",
      // Add fallbacks for cinematic sounds
      "intro_maze",
      "intro_drpaige",
      "intro_infection",
      "intro_mission",
      "memory_flash",
      "objective",
      "story_reveal",
    ];

    requiredSounds.forEach((sound) => {
      this.sounds[sound] = silentHowl;
    });

    // Create minimal required music
    const requiredMusic = ["main", "chase", "menu", "cinematic"];
    requiredMusic.forEach((track) => {
      this.music[track] = silentHowl;
    });

    // Create minimal required ambient sounds
    const requiredAmbient = ["wind", "night", "rain", "thunder"];
    requiredAmbient.forEach((ambient) => {
      this.ambientSounds[ambient] = silentHowl;
    });

    // Create minimal required cinematic sounds
    const requiredCinematic = [
      "intro_maze",
      "intro_drpaige",
      "intro_infection",
      "intro_mission",
      "memory_flash",
      "objective",
    ];

    this.cinematicSounds = {};
    requiredCinematic.forEach((cinematic) => {
      this.cinematicSounds[cinematic] = silentHowl;
    });
  }

  loadSounds() {
    // Define all sounds with error handling
    const soundDefinitions = {
      // UI Sounds
      click: { url: "assets/sounds/click.mp3", volume: 0.8 },
      hover: { url: "assets/sounds/hover.mp3", volume: 0.8 },

      // Player Sounds
      footsteps: { url: "assets/sounds/footstep.mp3", volume: 0.4, loop: true },
      sprint: {
        url: "assets/sounds/sprint.mp3",
        volume: 0.5,
        loop: true,
        rate: 1.5,
      },
      jump: { url: "assets/sounds/jump.mp3", volume: 0.5 },
      land: { url: "assets/sounds/land.mp3", volume: 0.6 },

      // Item Sounds
      collectSerum: { url: "assets/sounds/collect.mp3", volume: 0.7 },
      collectNote: { url: "assets/sounds/paper.mp3", volume: 0.6 },
      collectMedkit: { url: "assets/sounds/collect.mp3", volume: 0.7 },
      doorOpen: { url: "assets/sounds/door_open.mp3", volume: 0.7 },
      doorLocked: { url: "assets/sounds/door_locked.mp3", volume: 0.6 },

      // Enemy Sounds
      grieverNear: {
        url: "assets/sounds/monster_near.mp3",
        volume: 0.7,
        loop: true,
      },
      grieverAttack: { url: "assets/sounds/monster_attack.mp3", volume: 0.8 },
      playerHurt: { url: "assets/sounds/hurt.mp3", volume: 0.6 },

      // Game State Sounds
      gameOver: { url: "assets/sfx/death.mp3", volume: 0.7 },
      victory: { url: "assets/sounds/victory.mp3", volume: 0.8 },
      heartbeat: {
        url: "assets/sounds/heartbeat.mp3",
        volume: 0.0,
        loop: true,
      },
    };

    // Try to load each sound with error handling
    Object.entries(soundDefinitions).forEach(([key, def]) => {
      try {
        // Track this load with the loading manager
        if (this.loadingManager) {
          this.loadingManager.itemStart(def.url);
        }

        this.sounds[key] = new Howl({
          src: [def.url],
          volume: def.volume * this.sfxVolume,
          loop: def.loop || false,
          rate: def.rate || 1.0,
          onload: () => {
            if (this.loadingManager) {
              this.loadingManager.itemEnd(def.url);
            }
          },
          onloaderror: (id, error) => {
            console.warn(`Failed to load sound: ${key}`, error);
            // Create silent fallback
            this.sounds[key] = this.createSilentSound();
            if (this.loadingManager) {
              this.loadingManager.itemError(def.url);
            }
          },
        });
      } catch (error) {
        console.error(`Error creating sound ${key}:`, error);
        this.sounds[key] = this.createSilentSound();
        if (this.loadingManager) {
          this.loadingManager.itemError(def.url);
        }
      }
    });
  }

  loadMusic() {
    // Define music with error handling
    const musicDefinitions = {
      main: { url: "assets/music/ambient_music.mp3", volume: 0.4, loop: true },
      chase: { url: "assets/music/chase_music.mp3", volume: 0.0, loop: true },
      menu: { url: "assets/music/menu_music.mp3", volume: 0.5, loop: true },
    };

    // Try to load each music track with error handling
    Object.entries(musicDefinitions).forEach(([key, def]) => {
      try {
        // Track this load with the loading manager
        if (this.loadingManager) {
          this.loadingManager.itemStart(def.url);
        }

        this.music[key] = new Howl({
          src: [def.url],
          volume: def.volume * this.musicVolume,
          loop: def.loop || true,
          onload: () => {
            if (this.loadingManager) {
              this.loadingManager.itemEnd(def.url);
            }
          },
          onloaderror: (id, error) => {
            console.warn(`Failed to load music: ${key}`, error);
            this.music[key] = this.createSilentSound();
            if (this.loadingManager) {
              this.loadingManager.itemError(def.url);
            }
          },
        });
      } catch (error) {
        console.error(`Error creating music ${key}:`, error);
        this.music[key] = this.createSilentSound();
        if (this.loadingManager) {
          this.loadingManager.itemError(def.url);
        }
      }
    });
  }

  loadAmbientSounds() {
    // Define ambient sounds with error handling
    const ambientDefinitions = {
      wind: { url: "assets/ambient/wind.mp3", volume: 0.4, loop: true },
      night: {
        url: "assets/ambient/night_ambient.mp3",
        volume: 0.0,
        loop: true,
      },
      rain: { url: "assets/ambient/rain.mp3", volume: 0.0, loop: true },
      // Comment out thunder to prevent the error since the file might be missing
      // thunder: { url: "assets/ambient/thunder.mp3", volume: 0.7 },
    };

    // Create a silent thunder sound as a fallback
    this.ambientSounds["thunder"] = this.createSilentSound();

    // Try to load each ambient sound with error handling
    Object.entries(ambientDefinitions).forEach(([key, def]) => {
      try {
        // Track this load with the loading manager
        if (this.loadingManager) {
          this.loadingManager.itemStart(def.url);
        }

        this.ambientSounds[key] = new Howl({
          src: [def.url],
          volume: def.volume * this.ambientVolume,
          loop: def.loop || false,
          onload: () => {
            if (this.loadingManager) {
              this.loadingManager.itemEnd(def.url);
            }
          },
          onloaderror: (id, error) => {
            console.warn(`Failed to load ambient sound: ${key}`, error);
            this.ambientSounds[key] = this.createSilentSound();
            if (this.loadingManager) {
              this.loadingManager.itemError(def.url);
            }
          },
        });
      } catch (error) {
        console.error(`Error creating ambient sound ${key}:`, error);
        this.ambientSounds[key] = this.createSilentSound();
        if (this.loadingManager) {
          this.loadingManager.itemError(def.url);
        }
      }
    });
  }

  loadSfx() {
    // Define sound effects with error handling
    const sfxDefinitions = {
      // Existing sound effects
      collect: { url: "assets/sfx/collect.mp3", volume: 0.7 },
      step: { url: "assets/sfx/step.mp3", volume: 0.3 },
      jump: { url: "assets/sfx/jump.mp3", volume: 0.5 },
      land: { url: "assets/sfx/land.mp3", volume: 0.5 },
      hurt: { url: "assets/sfx/hurt.mp3", volume: 0.7 },
      death: { url: "assets/sfx/death.mp3", volume: 1.0 },
      error: { url: "assets/sfx/error.mp3", volume: 0.5 },
      menu_open: { url: "assets/sfx/menu_open.mp3", volume: 0.5 },
      menu_close: { url: "assets/sfx/menu_close.mp3", volume: 0.5 },
      button: { url: "assets/sound/click.mp3", volume: 0.5 },
      note_open: { url: "assets/sfx/note_open.mp3", volume: 0.5 },
      note_close: { url: "assets/sfx/note_close.mp3", volume: 0.5 },
      griever_nearby: { url: "assets/sfx/griever_nearby.mp3", volume: 0.7 },
      griever_attack: { url: "assets/sfx/griever_attack.mp3", volume: 0.8 },
      portal: { url: "assets/sfx/portal.mp3", volume: 0.7 },
      wall_move: { url: "assets/sfx/wall_move.mp3", volume: 0.6 },
      infection_pulse: { url: "assets/sfx/infection_pulse.mp3", volume: 0.5 },

      // New cinematic/story sound effects
      intro_drpaige: { url: "assets/sfx/intro_drpaige.mp3", volume: 0.9 },
      intro_maze: { url: "assets/sfx/intro_maze.mp3", volume: 0.9 },
      intro_infection: { url: "assets/sfx/intro_infection.mp3", volume: 0.9 },
      intro_mission: { url: "assets/sfx/intro_mission.mp3", volume: 0.9 },
      memory_flash: { url: "assets/sfx/memory_flash.mp3", volume: 0.8 },
      objective: { url: "assets/sfx/objective.mp3", volume: 0.7 },
      story_reveal: { url: "assets/sfx/story_reveal.mp3", volume: 0.8 },
      cinematic_transition: {
        url: "assets/sfx/cinematic_transition.mp3",
        volume: 0.7,
      },
    };

    // Try to load each sound effect with error handling
    Object.entries(sfxDefinitions).forEach(([key, def]) => {
      try {
        // Track this load with the loading manager
        if (this.loadingManager) {
          this.loadingManager.itemStart(def.url);
        }

        this.sounds[key] = new Howl({
          src: [def.url],
          volume: def.volume * this.sfxVolume,
          loop: def.loop || false,
          rate: def.rate || 1.0,
          onload: () => {
            if (this.loadingManager) {
              this.loadingManager.itemEnd(def.url);
            }
          },
          onloaderror: (id, error) => {
            console.warn(`Failed to load sound effect: ${key}`, error);
            // Create silent fallback
            this.sounds[key] = this.createSilentSound();
            if (this.loadingManager) {
              this.loadingManager.itemError(def.url);
            }
          },
        });
      } catch (error) {
        console.error(`Error creating sound effect ${key}:`, error);
        this.sounds[key] = this.createSilentSound();
        if (this.loadingManager) {
          this.loadingManager.itemError(def.url);
        }
      }
    });
  }

  // New method to load cinematic sounds
  loadCinematicSounds() {
    // Define cinematic sounds with error handling
    const cinematicDefinitions = {
      // Cinematic narrative voiceovers
      intro_maze: { url: "assets/narrative/intro_maze.mp3", volume: 1.0 },
      intro_drpaige: { url: "assets/narrative/intro_drpaige.mp3", volume: 1.0 },
      intro_infection: {
        url: "assets/narrative/intro_infection.mp3",
        volume: 1.0,
      },
      intro_mission: { url: "assets/narrative/intro_mission.mp3", volume: 1.0 },
      memory_flash: { url: "assets/narrative/memory_flash.mp3", volume: 0.9 },
      objective: { url: "assets/narrative/objective.mp3", volume: 0.9 },

      // Cinematic music - used during story sequences
      cinematic_main: {
        url: "assets/music/cinematic_main.mp3",
        volume: 0.7,
        loop: true,
      },

      // Transition sounds
      transition_in: { url: "assets/sfx/transition_in.mp3", volume: 0.8 },
      transition_out: { url: "assets/sfx/transition_out.mp3", volume: 0.8 },
    };

    // Try to load each cinematic sound with error handling
    Object.entries(cinematicDefinitions).forEach(([key, def]) => {
      try {
        // Track this load with the loading manager
        if (this.loadingManager) {
          this.loadingManager.itemStart(def.url);
        }

        this.cinematicSounds[key] = new Howl({
          src: [def.url],
          volume: def.volume * this.narrativeVolume,
          loop: def.loop || false,
          onload: () => {
            if (this.loadingManager) {
              this.loadingManager.itemEnd(def.url);
            }
          },
          onloaderror: (id, error) => {
            console.warn(`Failed to load cinematic sound: ${key}`, error);
            // Create silent fallback
            this.cinematicSounds[key] = this.createSilentSound();
            if (this.loadingManager) {
              this.loadingManager.itemError(def.url);
            }
          },
        });
      } catch (error) {
        console.error(`Error creating cinematic sound ${key}:`, error);
        this.cinematicSounds[key] = this.createSilentSound();
        if (this.loadingManager) {
          this.loadingManager.itemError(def.url);
        }
      }
    });
  }

  // Create a silent sound as a fallback
  createSilentSound() {
    return {
      play: () => {
        return this;
      },
      stop: () => {},
      pause: () => {},
      volume: () => {
        return this;
      },
      fade: () => {},
      playing: () => false,
    };
  }

  // Play a sound effect with error handling
  play(soundName, rate = 1.0) {
    // Try to initialize if not done yet
    if (!this.initialized) {
      // Don't try to play sounds before initialization is triggered by user interaction
      // console.warn(`SoundManager not initialized, cannot play ${soundName}`);
      // return null;
      // OR attempt initialization, but be aware it might fail silently before interaction
      this.initializeAfterUserInteraction();
    }

    try {
      const sound = this.sounds[soundName];
      if (sound) {
        // Check if the rate method exists before calling it
        if (typeof sound.rate === "function") {
          sound.rate(rate);
        } else if (rate !== 1.0) {
          // Log a warning if a rate was requested but couldn't be set
          console.warn(
            `Sound ${soundName} does not support playback rate changes.`
          );
        }

        // Check if play method exists
        if (typeof sound.play === "function") {
          sound.play();
          return sound;
        } else {
          console.warn(`Sound ${soundName} does not have a play method.`);
        }
      } else {
        console.warn(`Sound ${soundName} not found.`);
      }
    } catch (error) {
      console.warn(`Error playing sound ${soundName}:`, error);
    }
    return null;
  }

  // New method to play cinematic sound effects
  playSfx(soundName, rate = 1.0) {
    // Try to initialize if not done yet
    if (!this.initialized) {
      this.initializeAfterUserInteraction();
    }

    try {
      // Check for cinematic sounds first
      if (this.cinematicSounds[soundName]) {
        const sound = this.cinematicSounds[soundName];
        if (typeof sound.rate === "function") {
          sound.rate(rate);
        }
        sound.play();
        return sound;
      }

      // Then check regular sounds
      if (this.sounds[soundName]) {
        const sound = this.sounds[soundName];
        if (typeof sound.rate === "function") {
          sound.rate(rate);
        }
        sound.play();
        return sound;
      } else {
        console.warn(`Sound effect ${soundName} not found.`);
      }
    } catch (error) {
      console.warn(`Error playing sound effect ${soundName}:`, error);
    }
    return null;
  }

  // Stop a sound effect
  stop(soundName) {
    if (this.sounds[soundName]) {
      this.sounds[soundName].stop();
    }
  }

  // Stop a specific cinematic sound
  stopSfx(soundName) {
    if (this.cinematicSounds[soundName]) {
      this.cinematicSounds[soundName].stop();
    } else if (this.sounds[soundName]) {
      this.sounds[soundName].stop();
    }
  }

  // Play music
  playMusic(trackName) {
    // Try to initialize if not done yet
    if (!this.initialized) {
      this.initializeAfterUserInteraction();
    }

    // Stop all music first
    Object.keys(this.music).forEach((key) => {
      this.music[key].stop();
    });

    // Play the requested track
    if (this.music[trackName]) {
      this.music[trackName].play();
    }
  }

  // Fade between music tracks
  fadeToMusic(trackName, duration = 2000) {
    // Fade out all current music
    Object.keys(this.music).forEach((key) => {
      if (this.music[key].playing()) {
        this.music[key].fade(this.music[key].volume(), 0, duration);
        setTimeout(() => {
          this.music[key].stop();
        }, duration);
      }
    });

    // Fade in the new track
    if (this.music[trackName]) {
      const targetVolume =
        trackName === "main"
          ? 0.4 * this.musicVolume
          : trackName === "chase"
          ? 0.6 * this.musicVolume
          : 0.5 * this.musicVolume;

      this.music[trackName].volume(0);
      this.music[trackName].play();
      this.music[trackName].fade(0, targetVolume, duration);
    }
  }

  // Play cinematic music
  playCinematicMusic() {
    // Stop all music first
    Object.keys(this.music).forEach((key) => {
      this.music[key].stop();
    });

    // Play cinematic music if available
    if (this.cinematicSounds.cinematic_main) {
      this.cinematicSounds.cinematic_main.play();
    }
  }

  // Stop cinematic music
  stopCinematicMusic() {
    if (this.cinematicSounds.cinematic_main) {
      this.cinematicSounds.cinematic_main.stop();
    }
  }

  // Fade to cinematic music
  fadeToCinematicMusic(duration = 2000) {
    // Fade out all current music
    Object.keys(this.music).forEach((key) => {
      if (this.music[key].playing()) {
        this.music[key].fade(this.music[key].volume(), 0, duration);
        setTimeout(() => {
          this.music[key].stop();
        }, duration);
      }
    });

    // Fade in cinematic music
    if (this.cinematicSounds.cinematic_main) {
      this.cinematicSounds.cinematic_main.volume(0);
      this.cinematicSounds.cinematic_main.play();
      this.cinematicSounds.cinematic_main.fade(
        0,
        0.7 * this.narrativeVolume,
        duration
      );
    }
  }

  // Play ambient sound
  playAmbient(ambientName) {
    if (this.ambientSounds[ambientName]) {
      this.ambientSounds[ambientName].play();
    }
  }

  // Stop ambient sound
  stopAmbient(ambientName) {
    if (this.ambientSounds[ambientName]) {
      this.ambientSounds[ambientName].stop();
    }
  }

  // Fade in ambient sound
  fadeInAmbient(ambientName, targetVolume, duration = 2000) {
    if (this.ambientSounds[ambientName]) {
      this.ambientSounds[ambientName].volume(0);
      this.ambientSounds[ambientName].play();
      this.ambientSounds[ambientName].fade(
        0,
        targetVolume * this.ambientVolume,
        duration
      );
    }
  }

  // Fade out ambient sound
  fadeOutAmbient(ambientName, duration = 2000) {
    if (
      this.ambientSounds[ambientName] &&
      this.ambientSounds[ambientName].playing()
    ) {
      this.ambientSounds[ambientName].fade(
        this.ambientSounds[ambientName].volume(),
        0,
        duration
      );
      setTimeout(() => {
        this.ambientSounds[ambientName].stop();
      }, duration);
    }
  }

  // Create a positional sound in 3D space
  createPositionalSound(
    soundName,
    position,
    refDistance = 5,
    maxDistance = 30
  ) {
    // Create audio source
    const sound = new THREE.PositionalAudio(this.listener);

    // Create a Howl instance for the sound
    const howl = new Howl({
      src: [`assets/sounds/${soundName}.mp3`],
      volume: 0.7 * this.sfxVolume,
    });

    // Set position
    sound.position.copy(position);

    // Set reference distance and max distance
    sound.setRefDistance(refDistance);
    sound.setMaxDistance(maxDistance);

    return { sound, howl };
  }

  // Update positional sounds based on player position
  updatePositionalSounds(playerPosition, sounds) {
    sounds.forEach((soundObj) => {
      // Calculate distance from player to sound source
      const distance = playerPosition.distanceTo(soundObj.sound.position);

      // Calculate volume based on distance
      const volume = Math.max(
        0,
        1 - distance / soundObj.sound.getMaxDistance()
      );

      // Update volume
      soundObj.howl.volume(volume * 0.7 * this.sfxVolume);
    });
  }

  // Set master volume
  setMasterVolume(volume) {
    this.masterVolume = Math.max(0, Math.min(1, volume));
    Howler.volume(this.masterVolume);
  }

  // Set music volume
  setMusicVolume(volume) {
    this.musicVolume = Math.max(0, Math.min(1, volume));
    Object.keys(this.music).forEach((key) => {
      // Preserve the relative volume of each track
      const relativeVolume = this.music[key].volume() / (this.musicVolume || 1);
      this.music[key].volume(relativeVolume * this.musicVolume);
    });
  }

  // Set SFX volume
  setSfxVolume(volume) {
    this.sfxVolume = Math.max(0, Math.min(1, volume));
    Object.keys(this.sounds).forEach((key) => {
      // Preserve the relative volume of each sound
      const relativeVolume = this.sounds[key].volume() / (this.sfxVolume || 1);
      this.sounds[key].volume(relativeVolume * this.sfxVolume);
    });
  }

  // Set ambient volume
  setAmbientVolume(volume) {
    this.ambientVolume = Math.max(0, Math.min(1, volume));
    Object.keys(this.ambientSounds).forEach((key) => {
      // Preserve the relative volume of each ambient sound
      const relativeVolume =
        this.ambientSounds[key].volume() / (this.ambientVolume || 1);
      this.ambientSounds[key].volume(relativeVolume * this.ambientVolume);
    });
  }

  // Set narrative volume (for story content)
  setNarrativeVolume(volume) {
    this.narrativeVolume = Math.max(0, Math.min(1, volume));
    Object.keys(this.cinematicSounds).forEach((key) => {
      // Preserve the relative volume of each narrative sound
      const relativeVolume =
        this.cinematicSounds[key].volume() / (this.narrativeVolume || 1);
      this.cinematicSounds[key].volume(relativeVolume * this.narrativeVolume);
    });
  }

  // Mute/unmute all sounds
  mute(muted) {
    Howler.mute(muted);
  }

  // Clean up all sounds
  dispose() {
    // Stop all sounds
    Object.keys(this.sounds).forEach((key) => {
      this.sounds[key].stop();
    });

    // Stop all music
    Object.keys(this.music).forEach((key) => {
      this.music[key].stop();
    });

    // Stop all ambient sounds
    Object.keys(this.ambientSounds).forEach((key) => {
      this.ambientSounds[key].stop();
    });

    // Stop all cinematic sounds
    Object.keys(this.cinematicSounds).forEach((key) => {
      this.cinematicSounds[key].stop();
    });

    // Unload all sounds
    Howler.unload();
  }
}
