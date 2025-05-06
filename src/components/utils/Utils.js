// Utils.js
// Utility functions for the game

import * as THREE from "three";

export class Utils {
  // Generate random positions for items in the maze
  static generateRandomPositions(count, maze, mazeSize, cellSize) {
    const positions = [];
    const emptySpaces = [];

    // Find all empty spaces
    for (let i = 1; i < mazeSize - 1; i++) {
      for (let j = 1; j < mazeSize - 1; j++) {
        if (maze[i][j] === 0) {
          // Skip the start and end positions
          if (
            (i === 1 && j === 1) ||
            (i === mazeSize - 2 && j === mazeSize - 2)
          ) {
            continue;
          }
          emptySpaces.push({ x: j, z: i });
        }
      }
    }

    // Shuffle and pick positions
    Utils.shuffleArray(emptySpaces);
    const selectedPositions = emptySpaces.slice(0, count);

    // Convert to world positions
    selectedPositions.forEach((pos) => {
      positions.push(
        new THREE.Vector3(
          (pos.x - mazeSize / 2) * cellSize,
          0.5, // Just above ground
          (pos.z - mazeSize / 2) * cellSize
        )
      );
    });

    return positions;
  }

  // Shuffle an array (Fisher-Yates algorithm)
  static shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Format time (seconds) as MM:SS
  static formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  }

  // Calculate distance between two vectors
  static distance(v1, v2) {
    return Math.sqrt(
      Math.pow(v2.x - v1.x, 2) +
        Math.pow(v2.y - v1.y, 2) +
        Math.pow(v2.z - v1.z, 2)
    );
  }

  // Clamp a value between min and max
  static clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  // Linear interpolation
  static lerp(a, b, t) {
    return a + (b - a) * t;
  }
}
