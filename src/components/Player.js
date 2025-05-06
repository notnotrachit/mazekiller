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

    // Player stats - Adjusted for better movement feel
    this.speed = 8.0;
    this.sprintSpeed = 16.0;
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
    this.tempVector = new THREE.Vector3();
    this.forward = new THREE.Vector3();
    this.right = new THREE.Vector3();

    // Initialize controls first with detailed logging
    console.log("[DEBUG] Camera initial state:", {
      position: camera.position,
      quaternion: camera.quaternion,
      matrix: camera.matrix,
    });

    console.log("[DEBUG] Initializing PointerLockControls with:", {
      domElement: domElement,
      camera: camera,
    });

    this.controls = new PointerLockControls(camera, domElement);
    scene.add(this.controls.getObject());

    console.log("[DEBUG] Controls object state:", {
      isLocked: this.controls.isLocked,
      object: this.controls.getObject().position,
    });

    // Make sure camera and controls are properly connected
    const controlsObject = this.controls.getObject();
    console.log("[DEBUG] Controls-Camera connection:", {
      controlsHasCamera: controlsObject.children.includes(camera),
      cameraParent: camera.parent,
      controlsParent: controlsObject.parent,
    });

    // Make sure we have focus for keyboard events
    if (this.domElement && document.activeElement !== this.domElement) {
      console.log("Focusing game canvas");
      this.domElement.focus();
    }

    // Add camera to player for proper movement
    this.camera = camera;
    camera.position.y = this.height;

    // Ensure controls are properly initialized
    this.controls.isLocked = false;

    // Footstep timing
    this.footstepTimer = 0;
    this.footstepInterval = 0.5; // seconds between footsteps
    this.isMoving = false;
    this.wasMoving = false;

    // Setup event listeners
    this.setupEventListeners();

    // Player model (visible in shadows)
    this.createPlayerModel();

    // Debug keyboard state
    this.keyDebug = true; // Enable debug logging by default
    console.log("Player initialized with controls");

    // REMOVED the window event handlers that were creating the infinite recursion
  }

  setupEventListeners() {
    // Remove any existing event listeners first
    if (this._onKeyDown) {
      document.removeEventListener("keydown", this._onKeyDown);
    }
    if (this._onKeyUp) {
      document.removeEventListener("keyup", this._onKeyUp);
    }

    const onKeyDown = (event) => {
      // CRITICAL FIX: Remove the pointer lock check to allow keyboard input regardless
      // This ensures movement keys work even during debugging

      if (event.repeat) return;

      console.log(`[DEBUG] KeyDown Event - Code: ${event.code}`);

      switch (event.code) {
        case "KeyW":
        case "ArrowUp":
          this.moveForward = true;
          console.log("[DEBUG] moveForward set to true");
          break;
        case "KeyA":
        case "ArrowLeft":
          this.moveLeft = true;
          console.log("[DEBUG] moveLeft set to true");
          break;
        case "KeyS":
        case "ArrowDown":
          this.moveBackward = true;
          console.log("[DEBUG] moveBackward set to true");
          break;
        case "KeyD":
        case "ArrowRight":
          this.moveRight = true;
          console.log("[DEBUG] moveRight set to true");
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
      }

      // Debug: log key states
      if (this.keyDebug) {
        console.log(
          `Key press: ${event.code}, moveForward: ${this.moveForward}, moveBackward: ${this.moveBackward}, moveLeft: ${this.moveLeft}, moveRight: ${this.moveRight}`
        );
      }
    };

    const onKeyUp = (event) => {
      // CRITICAL FIX: Remove the pointer lock check

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

      // Debug: log key states
      if (this.keyDebug) {
        console.log(
          `Key release: ${event.code}, moveForward: ${this.moveForward}, moveBackward: ${this.moveBackward}, moveLeft: ${this.moveLeft}, moveRight: ${this.moveRight}`
        );
      }
    };

    // Store references to event handlers
    this._onKeyDown = onKeyDown;
    this._onKeyUp = onKeyUp;

    // Add event listeners
    document.addEventListener("keydown", this._onKeyDown);
    document.addEventListener("keyup", this._onKeyUp);

    // Debug message
    console.log("Player event listeners set up");

    // Test keyboard input is working by simulating a keydown
    setTimeout(() => {
      console.log("Testing keyboard event handling...");
      const testEvent = new KeyboardEvent("keydown", { code: "KeyW" });
      document.dispatchEvent(testEvent);
      setTimeout(() => {
        const testUpEvent = new KeyboardEvent("keyup", { code: "KeyW" });
        document.dispatchEvent(testUpEvent);
      }, 100);
    }, 2000);
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
    // Get the controls object for positioning
    const controlsObject = this.controls.getObject();
    if (!controlsObject) {
      console.error("[MOVEMENT-DEBUG] Controls object is null");
      return null;
    }

    // Apply gravity
    this.velocity.y -= this.gravity * delta;

    // DIRECT MOVEMENT: Calculate the move vector based on input flags
    let moveX = 0;
    let moveZ = 0;

    if (this.moveForward) moveZ -= 1;
    if (this.moveBackward) moveZ += 1;
    if (this.moveLeft) moveX -= 1;
    if (this.moveRight) moveX += 1;

    // Normalize diagonal movement
    if (moveX !== 0 && moveZ !== 0) {
      const len = Math.sqrt(moveX * moveX + moveZ * moveZ);
      moveX /= len;
      moveZ /= len;
    }

    // Only continue if there's actual movement input
    if (moveX !== 0 || moveZ !== 0) {
      // Apply movement speed
      const speed =
        this.sprint && this.stamina > 0 ? this.sprintSpeed : this.speed;

      // Get camera direction for consistent movement relative to view
      const cameraDirection = new THREE.Vector3();
      this.camera.getWorldDirection(cameraDirection);

      // Create forward and right vectors based on camera direction
      const forward = new THREE.Vector3(
        cameraDirection.x,
        0,
        cameraDirection.z
      ).normalize();
      const right = new THREE.Vector3(-forward.z, 0, forward.x); // Cross product with up vector (0,1,0)

      // Calculate movement vector by combining forward/right with input
      const moveVector = new THREE.Vector3();
      moveVector.addScaledVector(forward, -moveZ); // Forward/backward
      moveVector.addScaledVector(right, moveX); // Left/right

      // Scale by speed and delta time
      const finalMove = moveVector.multiplyScalar(speed * delta);

      // COLLISION HANDLING: Check if new position would cause collision
      const newPosition = new THREE.Vector3()
        .copy(controlsObject.position)
        .add(finalMove);

      if (checkCollision && typeof checkCollision === "function") {
        const hasCollision = checkCollision(newPosition);

        if (!hasCollision) {
          // If no collision, apply the movement
          controlsObject.position.copy(newPosition);
        } else {
          console.log("[COLLISION] Wall collision prevented movement");

          // Try sliding along walls by attempting X and Z movement separately
          // First try moving only in X direction
          const newPositionX = new THREE.Vector3().copy(
            controlsObject.position
          );
          newPositionX.x += finalMove.x;

          if (!checkCollision(newPositionX)) {
            controlsObject.position.copy(newPositionX);
          }

          // Then try moving only in Z direction
          const newPositionZ = new THREE.Vector3().copy(
            controlsObject.position
          );
          newPositionZ.z += finalMove.z;

          if (!checkCollision(newPositionZ)) {
            controlsObject.position.copy(newPositionZ);
          }
        }
      } else {
        // If no collision check function provided, just move
        console.warn("[COLLISION] No collision check function provided");
        controlsObject.position.add(finalMove);
      }
    }

    // Apply gravity (y movement)
    controlsObject.position.y += this.velocity.y * delta;

    // Floor collision
    if (controlsObject.position.y < this.height) {
      this.velocity.y = 0;
      controlsObject.position.y = this.height;
      this.canJump = true;
      if (this.isJumping) {
        if (this.soundManager) {
          this.soundManager.play("land");
        }
        this.isJumping = false;
      }
    }

    // Handle sprinting and stamina
    if (
      this.sprint &&
      (this.moveForward || this.moveBackward || this.moveLeft || this.moveRight)
    ) {
      this.stamina = Math.max(0, this.stamina - this.staminaDrainRate * delta);
      if (this.stamina <= 0) {
        this.sprint = false;
      }
    } else {
      this.stamina = Math.min(
        this.maxStamina,
        this.stamina + this.staminaRegenRate * delta
      );
    }

    // Update UI
    document.querySelector(".stamina-bar").style.width = `${
      (this.stamina / this.maxStamina) * 100
    }%`;

    // Update infection
    this.infection = Math.min(
      this.maxInfection,
      this.infection + this.infectionRate * delta
    );
    document.getElementById("infection").textContent = `Infection: ${Math.floor(
      this.infection
    )}%`;

    // Game over check
    if (this.infection >= 100) {
      return "infected";
    }

    return null;
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
    if (!this.controls.isLocked) {
      console.log("[DEBUG] Requesting pointer lock");

      // Focus the domElement first
      if (this.domElement && document.activeElement !== this.domElement) {
        this.domElement.focus();
      }

      // Add a short delay before requesting lock (can help with browser timing issues)
      setTimeout(() => {
        try {
          console.log("[DEBUG] Actually calling lock() on controls");
          this.controls.lock();

          // Fallback for some browsers - directly request pointer lock if the controls method fails
          if (!this.controls.isLocked && this.domElement.requestPointerLock) {
            console.log(
              "[DEBUG] Fallback: directly calling requestPointerLock"
            );
            this.domElement.requestPointerLock();
          }
        } catch (error) {
          console.error("[DEBUG] Error locking controls:", error);

          // Try the fallback method if the main method throws an error
          if (this.domElement.requestPointerLock) {
            console.log("[DEBUG] Trying fallback after error");
            this.domElement.requestPointerLock();
          }
        }
      }, 100);
    }
  }

  unlock(isInteraction = false) {
    if (this.controls.isLocked) {
      console.log(
        "[DEBUG] Releasing pointer lock" +
          (isInteraction ? " for interaction" : "")
      );
      try {
        this.controls.unlock();

        // Set custom attribute to prevent triggering pause menu on unlock events
        if (isInteraction) {
          this._isInteractionUnlock = true;
        }
      } catch (error) {
        console.error("[DEBUG] Error unlocking controls:", error);
      }
    }
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
  }
}
