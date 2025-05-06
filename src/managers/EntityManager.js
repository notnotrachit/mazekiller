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

  // Update grievers (with performance optimization)
  updateGrievers(
    delta,
    playerPosition,
    environmentStatus,
    isProcessingMany,
    serumCollected
  ) {
    const result = {
      playerDied: false,
    };

    // Only process one griever per frame if we're handling many collection effects
    const grieversToProcess =
      isProcessingMany && serumCollected >= 2 ? 1 : this.grievers.length;

    for (let i = 0; i < grieversToProcess; i++) {
      const griever = this.grievers[i];

      // Only process grievers within a reasonable distance
      const distance = griever.position.distanceTo(playerPosition);
      if (distance < 30) {
        // Grievers are more active at night
        const aggressionMultiplier = environmentStatus.isNight
          ? 2.0
          : environmentStatus.isTransitioning
          ? 1.5
          : 1.0;

        griever.update(delta, playerPosition, aggressionMultiplier);

        // Check if griever caught player - only if very close
        if (distance < 3 && griever.checkPlayerCollision(playerPosition)) {
          result.playerWasHit = true;
          result.damage = 34; // One hit takes ~1/3 health
        }
      }
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
