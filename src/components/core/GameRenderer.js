// GameRenderer.js
// Handles Three.js renderer setup and initialization

import * as THREE from "three";

export class GameRenderer {
  constructor() {
    this.renderer = null;
    this.rendererInitialized = false;
    this.domElement = null;
  }

  async initialize() {
    this.renderer = await this.createRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    // Lower pixel ratio to improve performance
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

    // Use basic shadows for performance
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.BasicShadowMap;

    // Simplified tone mapping for better performance
    this.renderer.toneMapping = THREE.LinearToneMapping;
    this.renderer.toneMappingExposure = 1.0;

    // Performance power preference
    this.renderer.powerPreference = "high-performance";

    // Medium precision for better performance
    this.renderer.precision = "mediump";

    document.body.appendChild(this.renderer.domElement);

    // Store canvas reference
    this.domElement = this.renderer.domElement;

    // Setup focus handling
    this.domElement.setAttribute("tabindex", "0");
    this.domElement.style.outline = "none";

    this.rendererInitialized = true;

    return this;
  }

  async createRenderer() {
    // Try to use WebGPU first
    if (navigator.gpu) {
      try {
        const renderer = new THREE.WebGPURenderer({ antialias: true });
        await renderer.init();
        console.log("Using WebGPU renderer");
        return renderer;
      } catch (error) {
        console.warn("WebGPU initialization failed:", error);
        console.warn("Falling back to WebGL renderer");
      }
    } else {
      console.warn("WebGPU not supported by this browser, using WebGL instead");
    }

    // Fallback to WebGL
    return new THREE.WebGLRenderer({ antialias: true });
  }

  handleResize() {
    if (this.renderer) {
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
  }

  render(scene, camera) {
    if (this.renderer) {
      this.renderer.render(scene, camera);
    }
  }

  // Get the canvas element for event handling
  getCanvas() {
    return this.domElement;
  }

  // Check if renderer is initialized
  isInitialized() {
    return this.rendererInitialized;
  }
}
