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

    // Global volume settings
    this.masterVolume = 1.0;
    this.musicVolume = 0.5;
    this.sfxVolume = 0.8;
    this.ambientVolume = 0.6;

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
      "flashlightToggle",
      "collectMedkit",
    ];

    requiredSounds.forEach((sound) => {
      this.sounds[sound] = silentHowl;
    });

    // Create minimal required music
    const requiredMusic = ["main", "chase", "menu"];
    requiredMusic.forEach((track) => {
      this.music[track] = silentHowl;
    });

    // Create minimal required ambient sounds
    const requiredAmbient = ["wind", "night", "rain", "thunder"];
    requiredAmbient.forEach((ambient) => {
      this.ambientSounds[ambient] = silentHowl;
    });
  }

  loadSounds() {
    // Define all sounds with error handling
    const soundDefinitions = {
      // UI Sounds
      click: { url: "assets/sounds/click.mp3", volume: 0.5 },
      hover: { url: "assets/sounds/hover.mp3", volume: 0.3 },

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
      gameOver: { url: "assets/sounds/game_over.mp3", volume: 0.7 },
      victory: { url: "assets/sounds/victory.mp3", volume: 0.8 },
      heartbeat: {
        url: "assets/sounds/heartbeat.mp3",
        volume: 0.0,
        loop: true,
      },
      flashlightToggle: { url: "assets/sounds/flashlight.mp3", volume: 0.5 },
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

  // Create a silent sound object that won't throw errors
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

  // Stop a sound effect
  stop(soundName) {
    if (this.sounds[soundName]) {
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

    // Unload all sounds
    Howler.unload();
  }
}
