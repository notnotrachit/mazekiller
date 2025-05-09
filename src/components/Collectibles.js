import * as THREE from "three";

export class Collectibles {
  constructor(scene, soundManager) {
    this.scene = scene;
    this.soundManager = soundManager;

    // Collections of items
    this.storyNotes = [];
    this.collectibleItems = [];

    // Add collection effects queue for performance improvement
    this.noteCollectionQueue = [];
    this.noteCollectionParticles = [];

    // Default story note content (will be overridden by StoryManager content)
    this.noteContent = [
      {
        title: "Lab Report #437-A",
        content:
          "The maze is a test. We're monitoring how subjects navigate under stress while infected. The changing walls are intentional - we're testing adaptation abilities.",
      },
      {
        title: "Dr. Paige's Notes",
        content:
          "The serum works temporarily, but we need a more permanent solution. Grievers are becoming more aggressive at night. Subject 16 shows promise.",
      },
      {
        title: "Teresa's Message",
        content:
          "Thomas, if you find this - I remember now. We helped build this place. WCKD isn't what we thought. The maze is just the beginning. There are more trials.",
      },
      {
        title: "Runner's Map Fragment",
        content:
          "Section 7 changes every 3 days. Section 8 never changes. Found a pattern in the movement - it's not random. The exit only appears when all sections have been mapped.",
      },
      {
        title: "Medical Report",
        content:
          "The infection reaches critical levels at 100%. The blue serum reduces it by ~15%. Symptoms accelerate after 70% - disorientation, aggression, memory loss.",
      },
      {
        title: "Minho's Log",
        content:
          "Day 42: Found another dead Griever. They seem to malfunction near the outer walls. There's something about Section 5 that affects them. Could be useful.",
      },
      {
        title: "WCKD Memo",
        content:
          "PRIORITY ALERT: Subject A2 has escaped containment. Security protocols at maximum. All personnel report to emergency stations. The maze trial must continue.",
      },
      {
        title: "Newt's Journal",
        content:
          "I know now why we were sent here. The maze isn't just a test—it's a way to stimulate our brains while infected. They're studying our responses, our immunity.",
      },
    ];
  }

  createStoryNotes(positions, customNotes = null) {
    // Clear existing notes
    this.storyNotes.forEach((note) => {
      if (note.mesh) {
        this.scene.remove(note.mesh);
      }
    });
    this.storyNotes = [];

    // Use custom notes from StoryManager if provided
    const noteContent = customNotes || this.noteContent;

    // Create story notes at provided positions
    positions.forEach((position, index) => {
      // Create note mesh with appropriate visual indicator based on content
      const note = this.createNoteMesh(
        position,
        noteContent[index % noteContent.length]
      );

      // Store note data
      this.storyNotes.push({
        mesh: note,
        position: position,
        collected: false,
        content: noteContent[index % noteContent.length],
        id: index,
      });

      // Add to scene
      this.scene.add(note);
    });
  }

  createNoteMesh(position, noteContent) {
    // Create group for note
    const noteGroup = new THREE.Group();

    // Determine note type and appearance based on content
    let paperColor, logoColor, lightColor;

    // Customize appearance based on note title/content
    if (
      noteContent.title.includes("Medical") ||
      noteContent.title.includes("Lab Report")
    ) {
      paperColor = 0xf0f0f0; // White medical paper
      logoColor = 0x2277cc; // Medical blue
      lightColor = 0xaaddff; // Bluish glow
    } else if (
      noteContent.title.includes("Security") ||
      noteContent.title.includes("WCKD Memo")
    ) {
      paperColor = 0xffdddd; // Light red for security/warnings
      logoColor = 0xcc2200; // Warning red
      lightColor = 0xffaaaa; // Red glow
    } else if (
      noteContent.title.includes("Message") ||
      noteContent.content.includes("Journal")
    ) {
      paperColor = 0xf5f5dc; // Beige for personal notes
      logoColor = 0x555555; // Darker ink
      lightColor = 0xffffaa; // Warm glow
    } else {
      paperColor = 0xf5f5dc; // Default beige
      logoColor = 0x058ed9; // Default WCKD blue
      lightColor = 0xffffaa; // Default glow
    }

    // Paper
    const paperGeometry = new THREE.BoxGeometry(0.5, 0.02, 0.7);
    const paperMaterial = new THREE.MeshStandardMaterial({
      color: paperColor,
      roughness: 0.9,
      metalness: 0.1,
    });

    const paper = new THREE.Mesh(paperGeometry, paperMaterial);
    noteGroup.add(paper);

    // Text lines (simplified representation)
    const lineGeometry = new THREE.BoxGeometry(0.4, 0.01, 0.03);
    const lineMaterial = new THREE.MeshStandardMaterial({
      color: 0x333333,
      roughness: 1.0,
      metalness: 0,
    });

    // Vary line pattern based on note type
    const lineCount = noteContent.title.includes("Report") ? 8 : 6;
    const lineSpacing = 0.6 / lineCount;

    // Add several lines of "text"
    for (let i = 0; i < lineCount; i++) {
      // Create lines of different lengths for visual variety
      const lineWidth = 0.2 + Math.random() * 0.2;
      const customLineGeometry = new THREE.BoxGeometry(lineWidth, 0.01, 0.03);

      const line = new THREE.Mesh(customLineGeometry, lineMaterial);
      line.position.y = 0.015;
      line.position.z = -0.25 + i * lineSpacing;
      // Align to left side with some variance
      line.position.x = -0.15 + Math.random() * 0.05;
      noteGroup.add(line);
    }

    // WCKD logo or identifier
    const logoGeometry = new THREE.CircleGeometry(0.08, 16);
    const logoMaterial = new THREE.MeshStandardMaterial({
      color: logoColor,
      roughness: 0.5,
      metalness: 0.5,
    });

    const logo = new THREE.Mesh(logoGeometry, logoMaterial);
    logo.position.y = 0.015;
    logo.position.z = -0.27;
    logo.position.x = 0.17;
    logo.rotation.x = -Math.PI / 2;
    noteGroup.add(logo);

    // Add subtle glow
    const noteLight = new THREE.PointLight(lightColor, 0.5, 2);
    noteLight.position.set(0, 0.2, 0);
    noteGroup.add(noteLight);

    // Position at given location
    noteGroup.position.copy(position);
    noteGroup.position.y = 0.2; // Just above ground

    // Add floating animation data
    noteGroup.userData = {
      originalY: position.y + 0.2,
      floatOffset: Math.random() * Math.PI * 2,
      rotationSpeed: 0.2 + Math.random() * 0.3,
    };

    return noteGroup;
  }

  createSerum(position, id) {
    // Create a bright, glowing serum/key
    const serumGeometry = new THREE.SphereGeometry(0.3, 16, 16);

    // Create a bright, emissive material that glows in the dark
    const serumMaterial = new THREE.MeshStandardMaterial({
      color: this.getSerumColor(id),
      emissive: this.getSerumColor(id),
      emissiveIntensity: 0.8, // Stronger emission
      metalness: 0.9,
      roughness: 0.2,
      transparent: true,
      opacity: 0.9,
    });

    const serum = new THREE.Mesh(serumGeometry, serumMaterial);
    serum.position.copy(position);
    serum.position.y = 0.5; // Raise it slightly above the ground

    // Add a point light to the serum to make it illuminate surroundings
    const serumLight = new THREE.PointLight(this.getSerumColor(id), 1.5, 4);
    serumLight.position.copy(serum.position);
    this.scene.add(serumLight);

    // Create a glowing halo effect around the serum
    const glowGeometry = new THREE.SphereGeometry(0.5, 16, 16);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: this.getSerumColor(id),
      transparent: true,
      opacity: 0.3,
      side: THREE.BackSide,
    });

    const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
    glowMesh.position.copy(serum.position);
    this.scene.add(glowMesh);

    // Add pulsing animation to make the serum more noticeable
    this.animateSerum(serum, glowMesh, serumLight);

    this.scene.add(serum);

    return {
      mesh: serum,
      light: serumLight,
      glow: glowMesh,
      id: id,
      collected: false,
    };
  }

  getSerumColor(id) {
    // Brighter, more saturated colors for better visibility
    const colors = [
      0xff5500, // Bright orange
      0x00ffff, // Cyan
      0xff00ff, // Magenta
      0xffff00, // Yellow
      0x00ff00, // Bright green
    ];

    return colors[id % colors.length];
  }

  animateSerum(serum, glowMesh, light) {
    // Create a floating and pulsing animation for the serum
    const startY = serum.position.y;
    const startTime = Date.now();

    const animate = () => {
      if (!serum.parent) return; // Stop animation if serum is removed

      const time = Date.now() - startTime;

      // Floating motion
      serum.position.y = startY + Math.sin(time * 0.002) * 0.2;
      glowMesh.position.y = serum.position.y;
      light.position.y = serum.position.y;

      // Pulsing glow
      const pulseFactor = 0.7 + Math.sin(time * 0.003) * 0.3;
      glowMesh.scale.set(pulseFactor, pulseFactor, pulseFactor);
      light.intensity = 1.5 * pulseFactor;

      // Continue animation
      requestAnimationFrame(animate);
    };

    animate();
  }

  update(delta, frustum) {
    // Process note collection effects - limited to one per frame
    this.processNoteCollectionEffects();

    // Update and cleanup note collection particles
    if (this.noteCollectionParticles.length > 0) {
      const now = Date.now();
      // Process in reverse order for safe removal
      for (let i = this.noteCollectionParticles.length - 1; i >= 0; i--) {
        const particles = this.noteCollectionParticles[i];
        const age = now - particles.userData.creationTime;

        if (age > particles.userData.lifetime) {
          // Remove expired particles
          this.scene.remove(particles);
          particles.geometry.dispose();
          particles.material.dispose();
          this.noteCollectionParticles.splice(i, 1);
        } else {
          // Fade out particles over their lifetime
          const fade = 1 - age / particles.userData.lifetime;
          particles.material.opacity = fade * 0.7;

          // Use pre-calculated velocities for better performance
          if (particles.userData.velocities) {
            const positions = particles.geometry.attributes.position.array;
            const velocities = particles.userData.velocities;

            // Apply velocities to positions (only update a few particles per frame if there are many)
            const particleCount = positions.length / 3;
            const updateCount = Math.min(particleCount, 10); // Process at most 10 particles per frame
            const startIdx = Math.floor(
              Math.random() * (particleCount - updateCount)
            );

            for (let p = 0; p < updateCount; p++) {
              const idx = (startIdx + p) % particleCount;
              const posIdx = idx * 3;

              positions[posIdx] += velocities[posIdx] * delta;
              positions[posIdx + 1] += velocities[posIdx + 1] * delta;
              positions[posIdx + 2] += velocities[posIdx + 2] * delta;
            }

            particles.geometry.attributes.position.needsUpdate = true;
          }
        }
      }
    }

    // Performance optimization - use frame skipping for non-essential animations
    if (!this._frameCounter) this._frameCounter = 0;
    this._frameCounter++;

    // Only update visual effects every few frames to improve performance
    if (this._frameCounter % 3 !== 0) return;

    // Use requestAnimationFrame internal timing
    const time = performance.now() * 0.001;

    // Only process a limited number of story notes per frame
    const notesToProcess = Math.min(3, this.storyNotes.length);
    const startIndex =
      Math.floor(time * 3) %
      Math.max(1, this.storyNotes.length - notesToProcess);

    // Update story notes animations with improved performance
    for (let i = 0; i < notesToProcess; i++) {
      const noteIndex = (startIndex + i) % this.storyNotes.length;
      const note = this.storyNotes[noteIndex];

      if (!note.collected && note.mesh) {
        // Only do expensive operations if the note is likely in view
        if (!frustum || this.isInView(note.mesh, frustum)) {
          // Simplified animation with cheaper math operations
          const sinVal = Math.sin(time + note.mesh.userData.floatOffset);
          note.mesh.position.y = note.mesh.userData.originalY + sinVal * 0.1;
          note.mesh.rotation.y += delta * 0.3; // Consistent rotation speed
        }
      }
    }

    // Skip updating other collectibles if performance is an issue
    if (this.noteCollectionParticles.length > 0) return;

    // Simplified collectible item updates
    if (this.collectibleItems.length > 0) {
      const itemsToProcess = Math.min(2, this.collectibleItems.length);
      for (let i = 0; i < itemsToProcess; i++) {
        const itemIndex = (startIndex + i) % this.collectibleItems.length;
        const item = this.collectibleItems[itemIndex];
        if (
          !item.collected &&
          item.mesh &&
          (!frustum || this.isInView(item.mesh, frustum))
        ) {
          // Add simplified animations here if needed
        }
      }
    }
  }

  // Helper method for frustum culling check with safety
  isInView(mesh, frustum) {
    if (!mesh || !mesh.geometry) return false;

    // Initialize boundingSphere if it doesn't exist
    if (!mesh.geometry.boundingSphere) {
      mesh.geometry.computeBoundingSphere();
    }

    return mesh.geometry.boundingSphere && frustum.intersectsObject(mesh);
  }

  checkCollisions(playerPosition) {
    const collisionResults = {
      note: null,
    };

    // Performance optimization: Skip collision detection entirely if too many frames are being processed
    if (window.performance && window.performance.now) {
      const currentTime = window.performance.now();

      // Increase the time between checks to reduce CPU load (from 100ms to 200ms)
      if (
        this._lastCollisionCheck &&
        currentTime - this._lastCollisionCheck < 200
      ) {
        return collisionResults;
      }

      this._lastCollisionCheck = currentTime;
    }

    // Performance optimization: Check for notes in vicinity first
    const detectionRadius = 1.5;
    const playerX = playerPosition.x;
    const playerZ = playerPosition.z;

    // Check for collisions with story notes
    // Further reduce the number of notes to check per frame
    const maxNotesToCheck = Math.min(3, this.storyNotes.length);

    // Start checking from a different index each time to eventually check all notes
    const startIndex = Math.floor(Math.random() * this.storyNotes.length);

    for (let i = 0; i < maxNotesToCheck; i++) {
      const noteIndex = (startIndex + i) % this.storyNotes.length;
      const note = this.storyNotes[noteIndex];

      if (!note.collected && note.mesh) {
        // Quick bounds check using cached position values
        const xDiff = Math.abs(playerX - note.position.x);
        const zDiff = Math.abs(playerZ - note.position.z);

        if (xDiff < detectionRadius && zDiff < detectionRadius) {
          // Only do the precise distance check if we're close enough
          // Use squared distance for better performance (avoids square root)
          const dx = playerX - note.position.x;
          const dz = playerZ - note.position.z;
          const distanceSquared = dx * dx + dz * dz;

          if (distanceSquared < 2.25) {
            // 1.5^2 = 2.25
            // Immediately hide the note
            note.collected = true;
            note.mesh.visible = false;

            // If the note has a light, turn it off immediately
            if (note.mesh.children) {
              note.mesh.children.forEach((child) => {
                if (child instanceof THREE.PointLight) {
                  child.intensity = 0;
                }
              });
            }

            // Store the content for UI
            const content = note.content;

            // Queue collection effect with reduced particle count for better performance
            this.noteCollectionQueue.push({
              note: note,
              time: performance.now(),
              processed: false,
              reducedEffects: true, // Always use reduced effects for better performance
            });

            // Play sound using a small timeout to avoid performance impact
            if (this.soundManager) {
              setTimeout(() => {
                this.soundManager.play("note_open");
              }, 100); // Further increased timeout to reduce immediate performance impact
            }

            collisionResults.note = content;
            break;
          }
        }
      }
    }

    return collisionResults;
  }

  // Method to process collection effects across frames - similar to GameWorld
  processNoteCollectionEffects() {
    if (this.noteCollectionQueue.length === 0) return;

    // Process only one collection effect per frame
    const effect = this.noteCollectionQueue[0];

    // If this effect is already processed, remove it and return
    if (effect.processed) {
      this.noteCollectionQueue.shift();
      return;
    }

    // Mark as processed so it gets removed next frame
    effect.processed = true;

    // Create a simple particle effect at the collection point
    if (effect.note && effect.note.position) {
      // MAJOR PERFORMANCE IMPROVEMENT: Significantly reduce particle count
      // Even fewer particles for better performance
      const particleCount = 5; // Drastically reduced particle count

      const particleGeometry = new THREE.BufferGeometry();

      // Determine particle color based on note content
      let particleColor;
      if (
        effect.note.content.title.includes("Medical") ||
        effect.note.content.title.includes("Lab")
      ) {
        particleColor = 0x44aaff; // Blue particles for medical notes
      } else if (
        effect.note.content.title.includes("Security") ||
        effect.note.content.title.includes("WCKD")
      ) {
        particleColor = 0xff4444; // Red particles for security notes
      } else {
        particleColor = 0xffee44; // Yellow-ish particles for personal notes
      }

      const particleMaterial = new THREE.PointsMaterial({
        color: particleColor,
        size: 0.08,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending,
      });

      // Create particles in a simpler pattern to reduce calculations
      const particlePositions = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount; i++) {
        // Super simple particle positioning for maximum performance
        const angle = (i / particleCount) * Math.PI * 2;
        const radius = 0.2; // Smaller radius

        // Position particles in a circle around the collection point
        particlePositions[i * 3] =
          effect.note.position.x + radius * Math.cos(angle);
        particlePositions[i * 3 + 1] = effect.note.position.y + 0.3; // All at same height initially
        particlePositions[i * 3 + 2] =
          effect.note.position.z + radius * Math.sin(angle);
      }

      particleGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(particlePositions, 3)
      );

      // Create the particle system
      const particles = new THREE.Points(particleGeometry, particleMaterial);
      particles.userData = {
        creationTime: Date.now(),
        lifetime: 600, // Even shorter lifetime for better performance
        initialPositions: particlePositions.slice(), // Store initial positions
        velocities: new Float32Array(particleCount * 3), // Pre-calculate velocities
      };

      // Pre-calculate particle velocities to avoid math in update loop
      for (let i = 0; i < particleCount; i++) {
        particles.userData.velocities[i * 3] = (Math.random() - 0.5) * 0.1; // x velocity - reduced
        particles.userData.velocities[i * 3 + 1] = 0.2 + Math.random() * 0.2; // y velocity (up) - reduced
        particles.userData.velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.1; // z velocity - reduced
      }

      // Add temporary particles to scene
      this.scene.add(particles);

      // Store for cleanup
      this.noteCollectionParticles.push(particles);
    }
  }

  reset() {
    // Reset all story notes
    this.storyNotes.forEach((note) => {
      note.collected = false;
      if (note.mesh) {
        note.mesh.visible = true;
      }
    });

    // Reset other collectible items
    this.collectibleItems.forEach((item) => {
      item.collected = false;
      if (item.mesh) {
        item.mesh.visible = true;
      }
    });

    // Clear any pending effects
    this.noteCollectionQueue = [];

    // Clear any existing particle effects
    this.noteCollectionParticles.forEach((particles) => {
      this.scene.remove(particles);
      if (particles.geometry) particles.geometry.dispose();
      if (particles.material) particles.material.dispose();
    });
    this.noteCollectionParticles = [];
  }

  // Get positions of uncollected notes for minimap
  getNotePositions() {
    return this.storyNotes
      .filter((note) => !note.collected)
      .map((note) => note.position);
  }
}
