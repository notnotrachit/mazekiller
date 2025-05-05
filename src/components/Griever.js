import * as THREE from "three";

export class Griever {
  constructor(scene, maze, mazeSize, cellSize, position, soundManager) {
    this.scene = scene;
    this.maze = maze;
    this.mazeSize = mazeSize;
    this.cellSize = cellSize;
    this.position = position.clone();
    this.soundManager = soundManager || null;

    // Griever properties
    this.speed = 2;
    this.detectionRange = 15;
    this.chaseRange = 30;
    this.damageRange = 2.5;
    this.rotationSpeed = 2;
    this.state = "patrol"; // patrol, alert, chase

    // Navigation
    this.patrolTarget = null;
    this.pathTimer = 0;
    this.pathUpdateInterval = 2;

    // Target tracking
    this.lastKnownTargetPosition = new THREE.Vector3();
    this.targetVisible = false;
    this.alertTime = 0;

    // Sounds
    this.lastSoundTime = 0;
    this.soundInterval = 5; // seconds between ambient sounds

    // Create the visual representation
    this.createGrieverMesh();
  }

  createGrieverMesh() {
    // Create base group for griever
    this.mesh = new THREE.Group();

    // Main body
    const bodyGeometry = new THREE.SphereGeometry(1.2, 16, 16);
    const bodyMaterial = new THREE.MeshStandardMaterial({
      color: 0x222222,
      roughness: 0.7,
      metalness: 0.5,
    });

    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.castShadow = true;
    this.mesh.add(body);

    // Add mechanical appendages
    this.createAppendages();

    // Add glowing eyes
    this.createEyes();

    // Add spikes
    this.createSpikes();

    // Position the griever
    this.mesh.position.copy(this.position);

    // Add to scene
    this.scene.add(this.mesh);
  }

  createAppendages() {
    // Material for mechanical parts
    const metalMaterial = new THREE.MeshStandardMaterial({
      color: 0x555555,
      roughness: 0.3,
      metalness: 0.8,
    });

    // Add 6 mechanical legs
    const legCount = 6;
    for (let i = 0; i < legCount; i++) {
      const angle = (i / legCount) * Math.PI * 2;

      // Upper leg segment
      const upperLegGeometry = new THREE.CylinderGeometry(0.2, 0.15, 1.4, 8);
      const upperLeg = new THREE.Mesh(upperLegGeometry, metalMaterial);

      // Position and rotate leg segment
      upperLeg.position.set(Math.cos(angle) * 1.2, 0, Math.sin(angle) * 1.2);

      // Rotate to point outward
      upperLeg.rotation.z = Math.PI / 2;
      upperLeg.rotation.y = -angle;

      upperLeg.castShadow = true;
      this.mesh.add(upperLeg);

      // Lower leg segment
      const lowerLegGeometry = new THREE.CylinderGeometry(0.15, 0.1, 1.6, 8);
      const lowerLeg = new THREE.Mesh(lowerLegGeometry, metalMaterial);

      // Position at end of upper leg
      lowerLeg.position.set(
        Math.cos(angle) * 2.5,
        -0.2 + Math.sin(i * 1.3) * 0.2, // Varied height
        Math.sin(angle) * 2.5
      );

      // Rotate to point downward at an angle
      lowerLeg.rotation.z = Math.PI / 2 + Math.PI / 6;
      lowerLeg.rotation.y = -angle;

      lowerLeg.castShadow = true;
      this.mesh.add(lowerLeg);

      // Add sharp claw at the end
      const clawGeometry = new THREE.ConeGeometry(0.15, 0.5, 8);
      const clawMaterial = new THREE.MeshStandardMaterial({
        color: 0x888888,
        roughness: 0.2,
        metalness: 0.9,
      });

      const claw = new THREE.Mesh(clawGeometry, clawMaterial);

      // Position at end of lower leg
      claw.position.set(
        Math.cos(angle) * 3.5,
        -0.6 + Math.sin(i * 1.7) * 0.3, // Varied height
        Math.sin(angle) * 3.5
      );

      // Rotate to point forward
      claw.rotation.x = Math.PI / 2;
      claw.rotation.y = -angle;

      claw.castShadow = true;
      this.mesh.add(claw);
    }

    // Add mechanical tail
    const tailSegments = 5;
    const tailLength = 3;

    for (let i = 0; i < tailSegments; i++) {
      const ratio = i / tailSegments;
      const segmentSize = 0.35 - ratio * 0.2;

      const segmentGeometry = new THREE.SphereGeometry(segmentSize, 12, 12);
      const segment = new THREE.Mesh(segmentGeometry, metalMaterial);

      // Position along tail curve
      segment.position.set(
        -1.2 - ratio * tailLength * 0.7,
        0.8 + ratio * 0.8,
        0
      );

      segment.castShadow = true;
      this.mesh.add(segment);

      // Add stinger at the end
      if (i === tailSegments - 1) {
        const stingerGeometry = new THREE.ConeGeometry(0.15, 0.8, 8);
        const stingerMaterial = new THREE.MeshStandardMaterial({
          color: 0xaa3333, // Reddish
          roughness: 0.2,
          metalness: 0.7,
          emissive: 0x331111,
          emissiveIntensity: 0.3,
        });

        const stinger = new THREE.Mesh(stingerGeometry, stingerMaterial);
        stinger.position.set(
          segment.position.x - 0.6,
          segment.position.y + 0.2,
          0
        );

        stinger.rotation.z = -Math.PI / 4;
        stinger.castShadow = true;
        this.mesh.add(stinger);
      }
    }
  }

  createEyes() {
    // Create glowing eyes
    const eyeGeometry = new THREE.SphereGeometry(0.2, 12, 12);
    const eyeMaterial = new THREE.MeshStandardMaterial({
      color: 0xff3300,
      emissive: 0xff0000,
      emissiveIntensity: 1,
      roughness: 0.2,
      metalness: 0.3,
    });

    // Left eye
    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(0.8, 0.5, 0.6);
    this.mesh.add(leftEye);

    // Right eye
    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.8, 0.5, -0.6);
    this.mesh.add(rightEye);

    // Add light source for glow effect
    const eyeLight = new THREE.PointLight(0xff2200, 1, 5);
    eyeLight.position.set(0.8, 0.5, 0);
    this.mesh.add(eyeLight);

    // Store references for animation
    this.leftEye = leftEye;
    this.rightEye = rightEye;
    this.eyeLight = eyeLight;
  }

  createSpikes() {
    // Add spikes on back
    const spikeMaterial = new THREE.MeshStandardMaterial({
      color: 0x333333,
      roughness: 0.5,
      metalness: 0.7,
    });

    const spikeCount = 8;
    for (let i = 0; i < spikeCount; i++) {
      const angle = (i / spikeCount) * Math.PI - Math.PI / 2;
      const height = 0.5 + Math.random() * 0.5;

      const spikeGeometry = new THREE.ConeGeometry(0.15, height, 8);
      const spike = new THREE.Mesh(spikeGeometry, spikeMaterial);

      spike.position.set(
        Math.cos(angle) * 0.8,
        1 + Math.random() * 0.2,
        Math.sin(angle) * 0.8
      );

      // Rotate to point outward from center
      spike.rotation.x = Math.PI / 2;
      spike.rotation.z = -angle + Math.PI / 2;

      spike.castShadow = true;
      this.mesh.add(spike);
    }
  }

  update(delta, playerPosition, aggressionMultiplier = 1.0) {
    // Adjust properties based on aggression
    this.speed = 2 * aggressionMultiplier;
    this.detectionRange = 15 * aggressionMultiplier;
    this.chaseRange = 30 * aggressionMultiplier;

    // Calculate distance to player
    const distanceToPlayer = this.position.distanceTo(playerPosition);

    // Update state based on player distance
    if (distanceToPlayer < this.detectionRange) {
      if (this.canSeePlayer(playerPosition)) {
        this.state = "chase";
        this.lastKnownTargetPosition.copy(playerPosition);
        this.targetVisible = true;
        this.alertTime = 0;

        // Play chase music if close enough
        if (distanceToPlayer < this.detectionRange / 2 && this.soundManager) {
          this.soundManager.fadeToMusic("chase", 3000);

          // Play alert sound when first spotting player
          if (this.state !== "chase") {
            this.soundManager.play("grieverAlert");
          }
        }
      } else if (this.state === "chase") {
        // Lost sight of player, but still alert
        this.state = "alert";
        this.targetVisible = false;
        this.alertTime = 0;
      }
    } else if (this.state === "chase" || this.state === "alert") {
      // Increase alert timer
      this.alertTime += delta;

      // Stay alert for a while after losing the player
      if (this.alertTime > 10) {
        this.state = "patrol";

        // Return to ambient music
        if (this.soundManager) {
          this.soundManager.fadeToMusic("main", 5000);
        }
      }
    }

    // Update movement based on state
    switch (this.state) {
      case "patrol":
        this.updatePatrolMovement(delta);
        break;
      case "alert":
        this.updateAlertMovement(delta);
        break;
      case "chase":
        this.updateChaseMovement(delta, playerPosition);
        break;
    }

    // Update position
    this.mesh.position.copy(this.position);

    // Update sounds
    this.updateSounds(distanceToPlayer, delta);

    // Animate eyes based on state
    this.animateEyes(delta);
  }

  updatePatrolMovement(delta) {
    // Get new patrol target if needed
    if (!this.patrolTarget || this.position.distanceTo(this.patrolTarget) < 1) {
      this.patrolTarget = this.getRandomNavigablePosition();
    }

    // Move toward patrol target
    this.moveToward(this.patrolTarget, delta * this.speed * 0.5);
  }

  updateAlertMovement(delta) {
    // Move toward last known player position
    if (this.position.distanceTo(this.lastKnownTargetPosition) > 1) {
      this.moveToward(this.lastKnownTargetPosition, delta * this.speed * 0.7);
    } else {
      // Look around for player
      this.mesh.rotation.y += delta * this.rotationSpeed * 2;
    }
  }

  updateChaseMovement(delta, playerPosition) {
    // Directly chase player
    this.moveToward(playerPosition, delta * this.speed);
  }

  moveToward(targetPosition, step) {
    // Calculate direction to target
    const direction = new THREE.Vector3()
      .subVectors(targetPosition, this.position)
      .normalize();

    // Calculate new position
    const newPosition = this.position
      .clone()
      .add(direction.multiplyScalar(step));

    // Check for collision with walls
    if (!this.checkWallCollision(newPosition)) {
      this.position.copy(newPosition);
    } else {
      // If collision, try to move along the wall
      const sideStep = new THREE.Vector3(
        -direction.z,
        0,
        direction.x
      ).multiplyScalar(step);
      const sidePosition = this.position.clone().add(sideStep);

      if (!this.checkWallCollision(sidePosition)) {
        this.position.copy(sidePosition);
      }
    }

    // Update rotation to face movement direction
    if (direction.length() > 0.1) {
      const targetRotation = Math.atan2(direction.x, direction.z);

      // Smooth rotation
      let currentRotation = this.mesh.rotation.y;
      const rotationDiff = targetRotation - currentRotation;

      // Normalize angle to -PI to PI
      let normalizedDiff = rotationDiff;
      while (normalizedDiff > Math.PI) normalizedDiff -= Math.PI * 2;
      while (normalizedDiff < -Math.PI) normalizedDiff += Math.PI * 2;

      // Apply smooth rotation
      this.mesh.rotation.y += normalizedDiff * 0.1;
    }
  }

  getRandomNavigablePosition() {
    let x, z;

    // Try to find a navigable position
    for (let attempts = 0; attempts < 20; attempts++) {
      // Get random position in maze
      const i = Math.floor(Math.random() * (this.mazeSize - 2)) + 1;
      const j = Math.floor(Math.random() * (this.mazeSize - 2)) + 1;

      // Check if this is an empty space in the maze
      if (this.maze[i][j] === 0) {
        x = (j - this.mazeSize / 2) * this.cellSize;
        z = (i - this.mazeSize / 2) * this.cellSize;
        break;
      }
    }

    // If no position found, use current position
    if (x === undefined || z === undefined) {
      return this.position.clone();
    }

    return new THREE.Vector3(x, this.position.y, z);
  }

  checkWallCollision(position) {
    const monsterRadius = 1.5;

    // Convert world position to maze grid coordinates
    const gridX = Math.floor(
      (position.x + (this.mazeSize * this.cellSize) / 2) / this.cellSize
    );
    const gridZ = Math.floor(
      (position.z + (this.mazeSize * this.cellSize) / 2) / this.cellSize
    );

    // Check surrounding cells
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        const checkX = gridX + i;
        const checkZ = gridZ + j;

        // Skip if out of bounds
        if (
          checkX < 0 ||
          checkX >= this.mazeSize ||
          checkZ < 0 ||
          checkZ >= this.mazeSize
        ) {
          continue;
        }

        // If there's a wall, check collision
        if (this.maze[checkZ][checkX] === 1) {
          const wallX = (checkX - this.mazeSize / 2) * this.cellSize;
          const wallZ = (checkZ - this.mazeSize / 2) * this.cellSize;

          // Calculate distance from monster to wall center
          const dx = position.x - wallX;
          const dz = position.z - wallZ;

          // Check if monster is colliding with wall
          if (
            Math.abs(dx) < this.cellSize / 2 + monsterRadius &&
            Math.abs(dz) < this.cellSize / 2 + monsterRadius
          ) {
            return true;
          }
        }
      }
    }

    return false;
  }

  canSeePlayer(playerPosition) {
    // Check if player is in line of sight (not behind walls)
    const direction = new THREE.Vector3()
      .subVectors(playerPosition, this.position)
      .normalize();

    const raycaster = new THREE.Raycaster(
      this.position.clone(),
      direction,
      0,
      this.position.distanceTo(playerPosition)
    );

    // Create invisible walls for raycaster
    const walls = [];
    for (let i = 0; i < this.mazeSize; i++) {
      for (let j = 0; j < this.mazeSize; j++) {
        if (this.maze[i][j] === 1) {
          const wallGeometry = new THREE.BoxGeometry(
            this.cellSize,
            this.cellSize * 2,
            this.cellSize
          );
          const wallMesh = new THREE.Mesh(wallGeometry);

          // Position wall
          wallMesh.position.set(
            (j - this.mazeSize / 2) * this.cellSize,
            this.cellSize,
            (i - this.mazeSize / 2) * this.cellSize
          );

          walls.push(wallMesh);
        }
      }
    }

    // Check for intersections
    const intersections = raycaster.intersectObjects(walls);
    return intersections.length === 0;
  }

  checkPlayerCollision(playerPosition) {
    const distanceToPlayer = this.position.distanceTo(playerPosition);
    return distanceToPlayer < this.damageRange;
  }

  updateSounds(distanceToPlayer, delta) {
    if (!this.soundManager) return;

    this.lastSoundTime += delta;

    // Play ambient monster sounds periodically
    if (this.lastSoundTime > this.soundInterval) {
      this.lastSoundTime = 0;

      // Only play if within range of player
      if (distanceToPlayer < this.chaseRange) {
        // Volume based on distance
        const volume = 1 - distanceToPlayer / this.chaseRange;

        if (this.state === "chase") {
          this.soundManager.play("grieverAttack", 1.0);
        } else {
          this.soundManager.play("grieverNear", 1.0);
        }
      }
    }
  }

  animateEyes(delta) {
    // Pulse eyes based on state
    let pulseSpeed = 1;
    let minIntensity = 0.5;
    let maxIntensity = 1.0;

    switch (this.state) {
      case "patrol":
        pulseSpeed = 0.5;
        minIntensity = 0.3;
        maxIntensity = 0.7;
        break;
      case "alert":
        pulseSpeed = 2;
        minIntensity = 0.5;
        maxIntensity = 1.0;
        break;
      case "chase":
        pulseSpeed = 4;
        minIntensity = 0.8;
        maxIntensity = 1.2;
        break;
    }

    // Calculate pulse value
    const pulse =
      minIntensity +
      ((Math.sin(Date.now() * 0.001 * pulseSpeed) + 1) / 2) *
        (maxIntensity - minIntensity);

    // Apply to eyes and light
    this.eyeLight.intensity = pulse;
    this.leftEye.material.emissiveIntensity = pulse;
    this.rightEye.material.emissiveIntensity = pulse;

    // Animate legs for walking
    this.mesh.children.forEach((child, index) => {
      // Only animate legs (first 18 children in our setup)
      if (index < 18) {
        const phase = ((index % 6) / 6) * Math.PI * 2;
        const speed = this.state === "chase" ? 10 : 5;
        child.position.y +=
          Math.sin(Date.now() * 0.01 + phase) * 0.01 * speed * delta;
      }
    });
  }
}
