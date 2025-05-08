// InputManager.js
// Manages user inputs (keyboard and mouse) for the game

export class InputManager {
  constructor(domElement, callbacks = {}) {
    this.domElement = domElement;
    this.callbacks = {
      onEscape: callbacks.onEscape || (() => {}),
      onInteract: callbacks.onInteract || (() => {}),
      onToggleMinimap: callbacks.onToggleMinimap || (() => {}),
      onToggleFPS: callbacks.onToggleFPS || (() => {}),
    };

    // Cheat code sequence tracking
    this.lastKeysPressed = [];
    this.cheatCodeSequence = ["KeyM", "KeyA", "KeyP"];

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

    // F key - toggle FPS display
    if (event.code === "KeyF") {
      this.callbacks.onToggleFPS();
    }

    // Track keys for cheat code
    this.trackCheatCode(event.code);
  }

  // Track key presses to detect cheat code sequence
  trackCheatCode(keyCode) {
    // Add the key to the sequence
    this.lastKeysPressed.push(keyCode);

    // Only keep the most recent n keys where n is the length of the cheat code
    if (this.lastKeysPressed.length > this.cheatCodeSequence.length) {
      this.lastKeysPressed.shift();
    }

    // Check if the sequence matches the cheat code
    if (this.isCheatCodeActivated()) {
      console.log("Cheat code activated: Mini-map toggled");
      this.callbacks.onToggleMinimap();
      // Reset the sequence after successful activation
      this.lastKeysPressed = [];
    }
  }

  // Check if the cheat code has been entered
  isCheatCodeActivated() {
    if (this.lastKeysPressed.length !== this.cheatCodeSequence.length) {
      return false;
    }

    for (let i = 0; i < this.cheatCodeSequence.length; i++) {
      if (this.lastKeysPressed[i] !== this.cheatCodeSequence[i]) {
        return false;
      }
    }

    return true;
  }
}
