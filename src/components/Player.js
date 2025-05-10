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
    this.speed = 6.0; // Reduced from 8.0 for slower movement
    this.sprintSpeed = 12.0; // Reduced from 16.0 for more balanced sprinting
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
    this.infectionRate = 0.2; // Reduced from 1.0 to 0.3 to slow down infection

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
    scene.add(this.controls.object); // Updated: Using .object instead of getObject()

    console.log("[DEBUG] Controls object state:", {
      isLocked: this.controls.isLocked,
      object: this.controls.object.position, // Updated: Using .object instead of getObject()
    });

    // Make sure camera and controls are properly connected
    const controlsObject = this.controls.object; // Updated: Using .object instead of getObject()
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
    this.controls.object.add(this.playerModel); // Updated: Using .object instead of getObject()
  }

  update(delta, checkCollision) {
    // Get the controls object for positioning
    const controlsObject = this.controls.object; // Updated: Using .object instead of getObject()
    if (!controlsObject) {
      console.error("[MOVEMENT-DEBUG] Controls object is null");
      return null;
    }

    // Apply gravity using delta time
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

      // COLLISION HANDLING: Optimize by reusing vectors instead of creating new ones
      if (!this._tempVector) this._tempVector = new THREE.Vector3();
      const newPosition = this._tempVector
        .copy(controlsObject.position)
        .add(finalMove);

      // Only process collision if function provided
      if (checkCollision && typeof checkCollision === "function") {
        const hasCollision = checkCollision(newPosition);

        if (!hasCollision) {
          // If no collision, apply the movement
          controlsObject.position.copy(newPosition);
        } else {
          // Optimize sliding along walls by caching vectors
          if (!this._tempVectorX) this._tempVectorX = new THREE.Vector3();
          if (!this._tempVectorZ) this._tempVectorZ = new THREE.Vector3();

          // Try moving only in X direction
          const newPositionX = this._tempVectorX.copy(controlsObject.position);
          newPositionX.x += finalMove.x;

          if (!checkCollision(newPositionX)) {
            controlsObject.position.copy(newPositionX);
          }

          // Then try moving only in Z direction
          const newPositionZ = this._tempVectorZ.copy(controlsObject.position);
          newPositionZ.z += finalMove.z;

          if (!checkCollision(newPositionZ)) {
            controlsObject.position.copy(newPositionZ);
          }
        }
      } else {
        // If no collision check function provided, just move
        controlsObject.position.copy(newPosition);
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
    const wasStaminaDepleted = this.stamina < this.maxStamina * 0.3;
    const isRegenerating =
      !this.sprint ||
      !(
        this.moveForward ||
        this.moveBackward ||
        this.moveLeft ||
        this.moveRight
      );

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

    // Get current stamina percentage
    const staminaPercentage = (this.stamina / this.maxStamina) * 100;
    const isStaminaLow = staminaPercentage < 30;

    // Optimize UI updates by using a frame counter to reduce DOM operations
    this.frameCount = (this.frameCount || 0) + 1;
    if (this.frameCount % 3 === 0) {
      // Only update UI every 3 frames
      // Update stamina bar width
      const staminaBar = document.querySelector(".stamina-bar");
      if (staminaBar) {
        staminaBar.style.width = `${staminaPercentage}%`;

        // Add/remove 'recovering' class when stamina is regenerating
        if (isRegenerating && wasStaminaDepleted) {
          staminaBar.classList.add("recovering");
        } else {
          staminaBar.classList.remove("recovering");
        }
      }

      // Update stamina percentage display
      const staminaPercentageDisplay =
        document.getElementById("stamina-percentage");
      if (staminaPercentageDisplay) {
        staminaPercentageDisplay.textContent = `${Math.floor(
          staminaPercentage
        )}%`;
      }
    }

    // Update infection over time
    this.infection = Math.min(
      this.maxInfection,
      this.infection + this.infectionRate * delta
    );

    // Update infection text display and visual effects, also throttled to reduce DOM ops
    if (this.frameCount % 5 === 0) {
      // Spread out UI updates for better performance
      const infectionElement = document.getElementById("infection");
      if (infectionElement) {
        infectionElement.textContent = `Infection: ${Math.floor(
          this.infection
        )}%`;
      }

      // Update infection overlay with optimized visual effects
      const infectionOverlay = document.getElementById("infection-overlay");
      if (infectionOverlay) {
        if (this.infection > 90) {
          infectionOverlay.classList.add("critical-flicker");
          infectionOverlay.classList.remove("severe-flicker");
          if (infectionElement) {
            infectionElement.style.color = "#ff0000";
            infectionElement.style.fontWeight = "bold";
          }
        } else if (this.infection > 75) {
          infectionOverlay.classList.add("severe-flicker");
          infectionOverlay.classList.remove("critical-flicker");
          if (infectionElement) {
            infectionElement.style.color = "#ff6600";
            infectionElement.style.fontWeight = "bold";
          }
        } else {
          infectionOverlay.classList.remove("severe-flicker");
          infectionOverlay.classList.remove("critical-flicker");
          // Reset text color
          if (infectionElement) {
            infectionElement.style.color = "";
            infectionElement.style.fontWeight = "";
          }
        }
      }

      // Update infection level display
      if (this.infection > 0) {
        // Update infection overlay
        const overlay = document.getElementById("infection-overlay");
        if (this.infection >= 75) {
          overlay.className = "infection-overlay critical";
        } else if (this.infection >= 50) {
          overlay.className = "infection-overlay severe";
        } else if (this.infection >= 25) {
          overlay.className = "infection-overlay moderate";
        } else {
          overlay.className = "infection-overlay mild";
        }
      }
    }

    // Check if player is completely infected
    if (this.infection >= this.maxInfection) {
      return "infected";
    }

    return null;
  }

  takeDamage(amount) {
    this.health = Math.max(0, this.health - amount);
    const healthPercentage = (this.health / this.maxHealth) * 100;

    // Update health bar width
    document.querySelector(".health-bar").style.width = `${healthPercentage}%`;

    // Update percentage display
    const healthPercentageDisplay =
      document.getElementById("health-percentage");
    if (healthPercentageDisplay) {
      healthPercentageDisplay.textContent = `${Math.floor(healthPercentage)}%`;
    }

    // Add low health warning effect when below 30%
    const healthBar = document.querySelector(".health-bar");
    if (healthBar) {
      if (healthPercentage < 30) {
        healthBar.classList.add("low");
      } else {
        healthBar.classList.remove("low");
      }
    }

    if (this.soundManager) {
      this.soundManager.play("playerHurt");
    }

    // Screen shake effect
    this.shakeCamera(0.5, 0.5);

    if (this.health <= 0) {
      // Play death sound when health reaches zero
      if (this.soundManager) {
        this.soundManager.play("death");
      }
      return true; // Player died
    }
    return false;
  }

  heal(amount) {
    this.health = Math.min(this.maxHealth, this.health + amount);
    const healthPercentage = (this.health / this.maxHealth) * 100;

    // Update health bar width
    document.querySelector(".health-bar").style.width = `${healthPercentage}%`;

    // Update percentage display
    const healthPercentageDisplay =
      document.getElementById("health-percentage");
    if (healthPercentageDisplay) {
      healthPercentageDisplay.textContent = `${Math.floor(healthPercentage)}%`;
    }

    // Remove low health warning if health is above 30%
    const healthBar = document.querySelector(".health-bar");
    if (healthBar && healthPercentage >= 30) {
      healthBar.classList.remove("low");
    }
  }

  reduceInfection(amount) {
    this.infection = Math.max(0, this.infection - amount);
    document.getElementById("infection").textContent = `Infection: ${Math.floor(
      this.infection
    )}%`;

    // Update infection overlay
    const overlay = document.getElementById("infection-overlay");
    if (this.infection >= 75) {
      overlay.className = "infection-overlay critical";
    } else if (this.infection >= 50) {
      overlay.className = "infection-overlay high";
    } else if (this.infection >= 25) {
      overlay.className = "infection-overlay medium";
    } else if (this.infection > 0) {
      overlay.className = "infection-overlay low";
    } else {
      overlay.className = "infection-overlay";
    }
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
    return this.controls.object.position; // Updated: Using .object instead of getObject()
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

    // Reset health bar
    document.querySelector(".health-bar").style.width = "100%";
    document.querySelector(".health-bar").classList.remove("low");
    const healthPercentageDisplay =
      document.getElementById("health-percentage");
    if (healthPercentageDisplay) {
      healthPercentageDisplay.textContent = "100%";
    }

    // Reset stamina bar
    document.querySelector(".stamina-bar").style.width = "100%";
    document.querySelector(".stamina-bar").classList.remove("recovering");
    const staminaPercentageDisplay =
      document.getElementById("stamina-percentage");
    if (staminaPercentageDisplay) {
      staminaPercentageDisplay.textContent = "100%";
    }

    // Reset infection display
    document.getElementById("infection").textContent = "Infection: 0%";
    document.getElementById("infection-overlay").className =
      "infection-overlay";

    this.velocity.set(0, 0, 0);
    this.moveForward = false;
    this.moveBackward = false;
    this.moveLeft = false;
    this.moveRight = false;
    this.sprint = false;
  }
}
