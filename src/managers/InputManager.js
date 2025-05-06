// InputManager.js
// Manages user inputs (keyboard and mouse) for the game

export class InputManager {
  constructor(domElement, callbacks = {}) {
    this.domElement = domElement;
    this.callbacks = {
      onEscape: callbacks.onEscape || (() => {}),
      onInteract: callbacks.onInteract || (() => {}),
    };

    // Initialize event listeners
    this.setupEventListeners();
  }

  setupEventListeners() {
    // Setup keyboard event listeners
    document.addEventListener("keydown", (event) => this.handleKeyDown(event));

    // Setup focus handling for the game canvas
    if (this.domElement) {
      // Ensure we get focus when clicking the canvas
      this.domElement.addEventListener("mousedown", () => {
        this.domElement.focus();
      });

      // Set up focus related attributes
      this.domElement.setAttribute("tabindex", "0");
      this.domElement.style.outline = "none"; // Remove focus outline

      // Log focus events for debugging
      this.domElement.addEventListener("blur", () => {
        console.log("[DEBUG] Canvas lost focus");
      });

      this.domElement.addEventListener("focus", () => {
        console.log("[DEBUG] Canvas gained focus");
      });
    }
  }

  handleKeyDown(event) {
    // Escape key - pause/resume game
    if (event.code === "Escape") {
      this.callbacks.onEscape();
    }

    // E key - interaction
    if (event.code === "KeyE") {
      this.callbacks.onInteract();
    }
  }
}
