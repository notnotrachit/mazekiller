import * as THREE from "three";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls.js";

export class Player {
  constructor(scene, camera, domElement, soundManager) {
    this.scene = scene;
    this.camera = camera;
    this.domElement = domElement;
    this.soundManager = soundManager || null; // Make soundManager optional

    // Movement state
    this.moveForward = false;
    this.moveBackward = false;
    this.moveLeft = false;
    this.moveRight = false;
    this.sprint = false;
    this.canJump = false;
    this.isJumping = false;

    // Player stats
    this.speed = 4.0;
    this.sprintSpeed = 8.0;
    this.height = 1.6;
    this.jumpHeight = 20;
    this.gravity = 30;
    this.health = 100;
    this.maxHealth = 100;
    this.stamina = 100;
    this.maxStamina = 100;
    this.staminaRegenRate = 10; // per second
    this.staminaDrainRate = 20; // per second
    this.infection = 0;
    this.maxInfection = 100;
    this.infectionRate = 1; // per second

    // Movement physics
    this.velocity = new THREE.Vector3();
    this.direction = new THREE.Vector3();

    // Controls
    this.controls = new PointerLockControls(camera, domElement);
    scene.add(this.controls.getObject());

    // Flashlight
    this.flashlightOn = false;
    this.setupFlashlight();

    // Footstep timing
    this.footstepTimer = 0;
    this.footstepInterval = 0.5; // seconds between footsteps
    this.isMoving = false;
    this.wasMoving = false;

    // Setup event listeners
    this.setupEventListeners();

    // Player model (visible in shadows)
    this.createPlayerModel();
  }

  setupEventListeners() {
    const onKeyDown = (event) => {
      if (event.repeat) return;

      switch (event.code) {
        case "KeyW":
        case "ArrowUp":
          this.moveForward = true;
          break;
        case "KeyA":
        case "ArrowLeft":
          this.moveLeft = true;
          break;
        case "KeyS":
        case "ArrowDown":
          this.moveBackward = true;
          break;
        case "KeyD":
        case "ArrowRight":
          this.moveRight = true;
          break;
        case "Space":
          if (this.canJump) {
            this.velocity.y += this.jumpHeight;
            this.canJump = false;
            this.isJumping = true;
            if (this.soundManager) {
              this.soundManager.play("jump");
            }
          }
          break;
        case "ShiftLeft":
        case "ShiftRight":
          if (this.stamina > 10) {
            this.sprint = true;
          }
          break;
        case "KeyF":
          this.toggleFlashlight();
          break;
      }
    };

    const onKeyUp = (event) => {
      switch (event.code) {
        case "KeyW":
        case "ArrowUp":
          this.moveForward = false;
          break;
        case "KeyA":
        case "ArrowLeft":
          this.moveLeft = false;
          break;
        case "KeyS":
        case "ArrowDown":
          this.moveBackward = false;
          break;
        case "KeyD":
        case "ArrowRight":
          this.moveRight = false;
          break;
        case "ShiftLeft":
        case "ShiftRight":
          this.sprint = false;
          break;
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("keyup", onKeyUp);
  }

  setupFlashlight() {
    // Create a spotlight for the flashlight
    this.flashlight = new THREE.SpotLight(0xffffff, 1, 30, Math.PI / 6, 0.5, 1);
    this.flashlight.position.set(0, 0, 0);
    this.flashlight.target.position.set(0, 0, -1);

    // Add the flashlight to the camera
    this.camera.add(this.flashlight);
    this.camera.add(this.flashlight.target);

    // Position the target in front of the camera
    this.flashlight.target.position.set(0, 0, -1);

    // Turn off initially
    this.flashlight.visible = false;
  }

  toggleFlashlight() {
    this.flashlightOn = !this.flashlightOn;
    this.flashlight.visible = this.flashlightOn;
    if (this.soundManager) {
      this.soundManager.play("flashlightToggle");
    }
  }

  createPlayerModel() {
    // Create a simple cylinder for the player's shadow
    const geometry = new THREE.CylinderGeometry(0.4, 0.4, this.height, 16);
    const material = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0,
      depthWrite: false,
    });

    this.playerModel = new THREE.Mesh(geometry, material);
    this.playerModel.position.y = this.height / 2;
    this.playerModel.castShadow = true;

    // Add the player model to the controls object
    this.controls.getObject().add(this.playerModel);
  }

  update(delta, checkCollision) {
    if (this.controls.isLocked) {
      // Save old position for collision detection
      const oldPosition = this.controls.getObject().position.clone();

      // Apply gravity
      this.velocity.y -= this.gravity * delta;

      // Calculate movement direction
      this.direction.z = Number(this.moveForward) - Number(this.moveBackward);
      this.direction.x = Number(this.moveRight) - Number(this.moveLeft);
      this.direction.normalize();

      // Check if player is moving
      this.isMoving =
        this.moveForward ||
        this.moveBackward ||
        this.moveLeft ||
        this.moveRight;

      // Handle sprinting and stamina
      let currentSpeed = this.speed;
      if (this.sprint && this.stamina > 0 && this.isMoving) {
        currentSpeed = this.sprintSpeed;
        this.stamina = Math.max(
          0,
          this.stamina - this.staminaDrainRate * delta
        );

        // Update UI
        document.querySelector(".stamina-bar").style.width = `${
          (this.stamina / this.maxStamina) * 100
        }%`;

        // Play sprint sound
        if (
          this.soundManager &&
          !this.soundManager.sounds.sprint.playing() &&
          this.isMoving
        ) {
          this.soundManager.stop("footsteps");
          this.soundManager.play("sprint");
        }
      } else {
        // Regenerate stamina when not sprinting
        if (!this.sprint) {
          this.stamina = Math.min(
            this.maxStamina,
            this.stamina + this.staminaRegenRate * delta
          );
          document.querySelector(".stamina-bar").style.width = `${
            (this.stamina / this.maxStamina) * 100
          }%`;
        }

        // Play normal footsteps
        if (this.isMoving && this.canJump) {
          if (
            this.soundManager &&
            !this.soundManager.sounds.footsteps.playing() &&
            !this.soundManager.sounds.sprint.playing()
          ) {
            this.soundManager.stop("sprint");
            this.soundManager.play("footsteps");
          }
        }
      }

      // Stop footstep sounds if not moving or jumping
      if ((!this.isMoving || !this.canJump) && this.wasMoving) {
        if (this.soundManager) {
          this.soundManager.stop("footsteps");
          this.soundManager.stop("sprint");
        }
      }

      this.wasMoving = this.isMoving;

      // Move player based on direction and velocity
      if (this.isMoving) {
        if (this.moveForward || this.moveBackward) {
          this.velocity.z = -this.direction.z * currentSpeed;
        } else {
          this.velocity.z = 0;
        }

        if (this.moveLeft || this.moveRight) {
          this.velocity.x = -this.direction.x * currentSpeed;
        } else {
          this.velocity.x = 0;
        }
      } else {
        this.velocity.x = 0;
        this.velocity.z = 0;
      }

      // Update player position
      this.controls.moveRight(-this.velocity.x * delta);
      this.controls.moveForward(-this.velocity.z * delta);
      this.controls.getObject().position.y += this.velocity.y * delta;

      // Floor collision
      if (this.controls.getObject().position.y < this.height) {
        this.velocity.y = 0;
        this.controls.getObject().position.y = this.height;

        if (this.isJumping) {
          if (this.soundManager) {
            this.soundManager.play("land");
          }
          this.isJumping = false;
        }

        this.canJump = true;
      }

      // Wall collision
      if (
        checkCollision &&
        checkCollision(this.controls.getObject().position)
      ) {
        this.controls.getObject().position.copy(oldPosition);
      }

      // Update infection level over time
      this.infection = Math.min(
        this.maxInfection,
        this.infection + this.infectionRate * delta
      );
      document.getElementById(
        "infection"
      ).textContent = `Infection: ${Math.floor(this.infection)}%`;

      // Update heartbeat sound based on infection level
      if (this.infection > 70) {
        if (
          this.soundManager &&
          !this.soundManager.sounds.heartbeat.playing()
        ) {
          this.soundManager.sounds.heartbeat.volume(
            Math.min(1.0, (this.infection - 70) / 30) * 0.7
          );
          this.soundManager.play("heartbeat");
        } else if (this.soundManager) {
          this.soundManager.sounds.heartbeat.volume(
            Math.min(1.0, (this.infection - 70) / 30) * 0.7
          );
        }
      } else if (
        this.soundManager &&
        this.soundManager.sounds.heartbeat.playing()
      ) {
        this.soundManager.stop("heartbeat");
      }

      // Game over if infection reaches 100%
      if (this.infection >= 100) {
        return "infected";
      }
    }

    return null; // No special state
  }

  takeDamage(amount) {
    this.health = Math.max(0, this.health - amount);
    document.querySelector(".health-bar").style.width = `${
      (this.health / this.maxHealth) * 100
    }%`;

    if (this.soundManager) {
      this.soundManager.play("playerHurt");
    }

    // Screen shake effect
    this.shakeCamera(0.5, 0.5);

    if (this.health <= 0) {
      return true; // Player died
    }
    return false;
  }

  heal(amount) {
    this.health = Math.min(this.maxHealth, this.health + amount);
    document.querySelector(".health-bar").style.width = `${
      (this.health / this.maxHealth) * 100
    }%`;
  }

  reduceInfection(amount) {
    this.infection = Math.max(0, this.infection - amount);
    document.getElementById("infection").textContent = `Infection: ${Math.floor(
      this.infection
    )}%`;
  }

  shakeCamera(intensity, duration) {
    const originalPosition = this.camera.position.clone();
    const startTime = Date.now();

    const shake = () => {
      const elapsed = (Date.now() - startTime) / 1000;

      if (elapsed < duration) {
        const shakeIntensity = intensity * (1 - elapsed / duration);

        this.camera.position.x =
          originalPosition.x + (Math.random() - 0.5) * shakeIntensity;
        this.camera.position.y =
          originalPosition.y + (Math.random() - 0.5) * shakeIntensity;
        this.camera.position.z =
          originalPosition.z + (Math.random() - 0.5) * shakeIntensity;

        requestAnimationFrame(shake);
      } else {
        this.camera.position.copy(originalPosition);
      }
    };

    shake();
  }

  getPosition() {
    return this.controls.getObject().position;
  }

  getDirection() {
    const direction = new THREE.Vector3(0, 0, -1);
    return direction.applyQuaternion(this.camera.quaternion);
  }

  lock() {
    this.controls.lock();
  }

  unlock() {
    this.controls.unlock();
  }

  isLocked() {
    return this.controls.isLocked;
  }

  addEventListener(event, callback) {
    this.controls.addEventListener(event, callback);
  }

  reset() {
    this.health = this.maxHealth;
    this.stamina = this.maxStamina;
    this.infection = 0;

    document.querySelector(".health-bar").style.width = "100%";
    document.querySelector(".stamina-bar").style.width = "100%";
    document.getElementById("infection").textContent = "Infection: 0%";

    this.velocity.set(0, 0, 0);
    this.moveForward = false;
    this.moveBackward = false;
    this.moveLeft = false;
    this.moveRight = false;
    this.sprint = false;

    if (this.flashlightOn) {
      this.toggleFlashlight();
    }
  }
}
