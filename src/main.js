// main.js - Main entry point for the Maze Killer game
import "./styles/main.css";
import { Game } from "./managers/Game.js";

// Initialize the game when the DOM is loaded
document.addEventListener("DOMContentLoaded", async () => {
  console.log("Initializing Maze Killer game...");

  try {
    // Create and initialize the game
    const game = new Game();
    await game.initialize();

    console.log("Game initialized successfully!");

    // Make the game instance available globally for debugging
    window.game = game;
  } catch (error) {
    console.error("Error initializing game:", error);
  }
});
