// EntityManager.js
// Manages game entities like enemies (Grievers)

import * as THREE from "three";
import { Griever } from "../components/Griever.js";

export class EntityManager {
  constructor(scene, gameWorld, soundManager) {
    this.scene = scene;
    this.gameWorld = gameWorld;
    this.soundManager = soundManager;
    this.grievers = [];
  }

  // Add Grievers based on difficulty
  addGrievers(difficulty) {
    // Clear existing grievers first
    this.clearGrievers();

    // Determine number of grievers based on difficulty
    let numGrievers;
    switch (difficulty) {
      case "easy":
        numGrievers = 1;
        break;
      case "normal":
        numGrievers = 2;
        break;
      case "hard":
        numGrievers = 3;
        break;
      default:
        numGrievers = 1;
    }

    // Create grievers
    for (let i = 0; i < numGrievers; i++) {
      const position = this.findGrieverStartPosition();
      const griever = new Griever(
        this.scene,
        this.gameWorld.maze,
        this.gameWorld.mazeSize,
        this.gameWorld.cellSize,
        position,
        this.soundManager
      );
      this.grievers.push(griever);
    }
  }

  // Clear all grievers
  clearGrievers() {
    this.grievers.forEach((griever) => {
      this.scene.remove(griever.mesh);
    });
    this.grievers = [];
  }

  // Get all grievers
  getGrievers() {
    return this.grievers;
  }

  // Update grievers with better performance optimizations
  updateGrievers(
    delta,
    playerPosition,
    environmentStatus,
    isProcessingMany,
    serumCollected
  ) {
    const result = {
      playerDied: false,
      playerWasHit: false,
      damage: 0,
    };

    // Skip processing if no grievers
    if (!this.grievers || this.grievers.length === 0) {
      return result;
    }

    // Use frame counting for staggered updates
    this.grieverFrameCount = (this.grieverFrameCount || 0) + 1;

    // Ensure we process at least one griever every frame
    // But stagger processing of others to improve performance
    const grieversToProcess = Math.min(
      1 + Math.floor(this.grieverFrameCount % this.grievers.length),
      this.grievers.length
    );

    // Find closest griever to determine priority
    let closestGrieverIndex = 0;
    let closestDistance = Infinity;

    for (let i = 0; i < this.grievers.length; i++) {
      const distance = this.grievers[i].position.distanceTo(playerPosition);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestGrieverIndex = i;
      }
    }

    // Always process the closest griever to ensure responsive AI
    const closestGriever = this.grievers[closestGrieverIndex];
    const aggressionMultiplier = environmentStatus.isNight
      ? 2.0
      : environmentStatus.isTransitioning
      ? 1.5
      : 1.0;

    // Only perform full AI update if griever is close
    if (closestDistance < 30) {
      closestGriever.update(delta, playerPosition, aggressionMultiplier);

      // Check if griever caught player
      if (
        closestDistance < 3 &&
        closestGriever.checkPlayerCollision(playerPosition)
      ) {
        result.playerWasHit = true;
        result.damage = 34; // One hit takes ~1/3 health

        if (this.soundManager) {
          this.soundManager.play("grieverAttack", 1.0);
        }
      }
    } else {
      // Use simplified update for distant griever
      closestGriever.updateSimple(delta);
    }

    // Process additional grievers with spacing (skip the closest one)
    let processedCount = 1;
    const baseIndex = this.grieverFrameCount % this.grievers.length;

    for (
      let i = 1;
      processedCount < grieversToProcess && i < this.grievers.length;
      i++
    ) {
      const index = (baseIndex + i) % this.grievers.length;

      // Skip the closest griever as we already processed it
      if (index === closestGrieverIndex) {
        continue;
      }

      const griever = this.grievers[index];
      const distance = griever.position.distanceTo(playerPosition);

      // Use very simplified update for all other grievers to save CPU
      if (distance > 50) {
        // Only update animations for very distant grievers
        griever.animateEyes(delta);
      } else if (distance < 30) {
        // Use simple update for nearby but not closest grievers
        griever.updateSimple(delta);

        // Check for collisions only with closest ones
        if (distance < 5 && griever.checkPlayerCollision(playerPosition)) {
          result.playerWasHit = true;
          result.damage = 34;

          if (this.soundManager) {
            this.soundManager.play("grieverAttack", 1.0);
          }
        }
      } else {
        // Minimal update for distant grievers
        griever.animateEyes(delta);
      }

      processedCount++;
    }

    return result;
  }

  // Find a suitable starting position for a griever
  findGrieverStartPosition() {
    // Find a position far from the player's start
    const playerStartX =
      (-this.gameWorld.mazeSize / 2 + 1) * this.gameWorld.cellSize;
    const playerStartZ =
      (-this.gameWorld.mazeSize / 2 + 1) * this.gameWorld.cellSize;

    let x, z, distance;
    let minDistance = this.gameWorld.mazeSize * this.gameWorld.cellSize * 0.5; // Ensure grievers start far away

    do {
      const i = Math.floor(Math.random() * (this.gameWorld.mazeSize - 2)) + 1;
      const j = Math.floor(Math.random() * (this.gameWorld.mazeSize - 2)) + 1;

      // Check if this is an empty space in the maze
      if (this.gameWorld.maze[i][j] === 0) {
        x = (j - this.gameWorld.mazeSize / 2) * this.gameWorld.cellSize;
        z = (i - this.gameWorld.mazeSize / 2) * this.gameWorld.cellSize;

        // Calculate distance from player start
        distance = Math.sqrt(
          Math.pow(x - playerStartX, 2) + Math.pow(z - playerStartZ, 2)
        );
      } else {
        distance = 0; // Force retry
      }
    } while (distance < minDistance);

    return new THREE.Vector3(x, 1.5, z);
  }
}
