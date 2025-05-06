// Minimap.js
// Renders a mini-map of the maze with player, grievers, collectibles, and exit

import * as THREE from "three";

export class Minimap {
  constructor() {
    this.isVisible = false;
    this.createMinimap();
  }

  createMinimap() {
    // Create container element
    this.container = document.createElement("div");
    this.container.className = "minimap-container";

    // Create canvas for rendering
    this.canvas = document.createElement("canvas");
    this.canvas.className = "minimap-canvas";
    this.canvas.width = 200;
    this.canvas.height = 200;
    this.ctx = this.canvas.getContext("2d");

    // Create legend
    this.legend = document.createElement("div");
    this.legend.className = "minimap-legend";

    // Add legend items
    const legendItems = [
      { class: "legend-player", text: "Player" },
      { class: "legend-griever", text: "Griever" },
      { class: "legend-serum", text: "Serum" },
      { class: "legend-note", text: "Note" },
      { class: "legend-exit", text: "Exit" },
    ];

    legendItems.forEach((item) => {
      const div = document.createElement("div");
      const span = document.createElement("span");
      span.className = item.class;
      div.appendChild(span);
      div.appendChild(document.createTextNode(item.text));
      this.legend.appendChild(div);
    });

    // Assemble minimap
    this.container.appendChild(this.canvas);
    this.container.appendChild(this.legend);

    // Add to document but keep hidden initially
    document.body.appendChild(this.container);
  }

  toggle() {
    this.isVisible = !this.isVisible;
    this.container.style.display = this.isVisible ? "block" : "none";
  }

  render(maze, entities) {
    if (!this.isVisible) return;

    const ctx = this.ctx;
    const width = this.canvas.width;
    const height = this.canvas.height;
    const mazeSize = maze.length;

    // Clear canvas
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, width, height);

    // Calculate cell size
    const cellSize = Math.min(width / mazeSize, height / mazeSize);

    // Draw maze walls
    ctx.fillStyle = "#444";

    for (let i = 0; i < mazeSize; i++) {
      for (let j = 0; j < mazeSize; j++) {
        if (maze[i][j] === 1) {
          // Wall
          ctx.fillRect(j * cellSize, i * cellSize, cellSize, cellSize);
        }
      }
    }

    // Convert world coordinates to minimap coordinates
    const worldToMap = (worldX, worldZ) => {
      // Assuming maze is centered at origin and goes from -mazeSize/2 to +mazeSize/2
      // and each cell in world is cellSize units
      const worldCellSize = 4; // Assuming this is the cell size in the game world
      const gridX = Math.floor(worldX / worldCellSize + mazeSize / 2);
      const gridZ = Math.floor(worldZ / worldCellSize + mazeSize / 2);

      return {
        x: gridX * cellSize + cellSize / 2,
        y: gridZ * cellSize + cellSize / 2,
      };
    };

    // Draw entities
    if (entities) {
      // Draw exit
      if (entities.exit) {
        const exitPos = worldToMap(entities.exit.x, entities.exit.z);
        ctx.fillStyle = "#4CAF50"; // Green
        ctx.beginPath();
        ctx.arc(exitPos.x, exitPos.y, cellSize / 2, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw serum vials
      if (entities.serums && entities.serums.length > 0) {
        ctx.fillStyle = "#2196F3"; // Blue
        entities.serums.forEach((serum) => {
          const serumPos = worldToMap(serum.x, serum.z);
          ctx.beginPath();
          ctx.arc(serumPos.x, serumPos.y, cellSize / 3, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      // Draw notes
      if (entities.notes && entities.notes.length > 0) {
        ctx.fillStyle = "#FFC107"; // Amber
        entities.notes.forEach((note) => {
          const notePos = worldToMap(note.x, note.z);
          ctx.beginPath();
          ctx.arc(notePos.x, notePos.y, cellSize / 3, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      // Draw grievers
      if (entities.grievers && entities.grievers.length > 0) {
        ctx.fillStyle = "#F44336"; // Red
        entities.grievers.forEach((griever) => {
          const grieverPos = worldToMap(griever.x, griever.z);
          ctx.beginPath();
          ctx.arc(grieverPos.x, grieverPos.y, cellSize / 2.5, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      // Draw player and direction
      if (entities.player) {
        const playerPos = worldToMap(entities.player.x, entities.player.z);

        // Player position
        ctx.fillStyle = "#FFFFFF"; // White
        ctx.beginPath();
        ctx.arc(playerPos.x, playerPos.y, cellSize / 2, 0, Math.PI * 2);
        ctx.fill();

        // Player direction indicator
        if (entities.playerDirection) {
          const dir = entities.playerDirection;
          const dirLength = cellSize * 0.8;

          ctx.strokeStyle = "#FFFFFF";
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(playerPos.x, playerPos.y);
          ctx.lineTo(
            playerPos.x + dir.x * dirLength,
            playerPos.y + dir.z * dirLength
          );
          ctx.stroke();
        }
      }
    }
  }
}
