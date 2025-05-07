// MemoryEffects.js - Handles memory flashback effects and visual transitions

export class MemoryEffects {
  constructor(soundManager) {
    this.soundManager = soundManager;
    this.memoryFlashback = null;

    // Durations for different intensity levels
    this.durations = {
      low: 1000,
      medium: 1500,
      high: 2500,
    };
  }

  initialize() {
    // Get the memory flashback element
    this.memoryFlashback = document.getElementById("memory-flashback");

    if (!this.memoryFlashback) {
      console.error("Memory flashback element not found in the DOM");
    }
  }

  // Trigger a memory flashback effect with customizable intensity
  triggerMemoryFlashback(intensity = "medium") {
    if (!this.memoryFlashback) return;

    // Set intensity class
    this.memoryFlashback.classList.remove(
      "low-intensity",
      "medium-intensity",
      "high-intensity"
    );
    this.memoryFlashback.classList.add(`${intensity}-intensity`);

    // Play memory flash sound with appropriate variation
    if (this.soundManager) {
      switch (intensity) {
        case "low":
          this.soundManager.playSfx("memory_flash_low");
          break;
        case "high":
          this.soundManager.playSfx("memory_flash_high");
          break;
        case "medium":
        default:
          this.soundManager.playSfx("memory_flash");
          break;
      }
    }

    // Trigger the enhanced flash effect
    this.memoryFlashback.classList.add("memory-active");

    // Remove the effect after animation completes (duration varies by intensity)
    setTimeout(() => {
      this.memoryFlashback.classList.remove("memory-active");
    }, this.durations[intensity] || 1500);
  }
}
