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
    // Process note collection effects
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

          // Float particles upward
          const positions = particles.geometry.attributes.position.array;
          for (let p = 0; p < positions.length; p += 3) {
            positions[p + 1] += delta * 0.5; // Move upward
          }
          particles.geometry.attributes.position.needsUpdate = true;
        }
      }
    }

    // Update story notes animations - with performance optimization
    this.storyNotes.forEach((note) => {
      if (!note.collected && note.mesh) {
        // Only process notes that are in view (frustum culling)
        if (!frustum || frustum.intersectsObject(note.mesh)) {
          // Floating effect - simplified for better performance
          const time = Date.now() * 0.001;
          // Use integer math to avoid creating new objects every frame
          note.mesh.position.y =
            note.mesh.userData.originalY +
            Math.sin(time + note.mesh.userData.floatOffset) * 0.1;

          // Slow rotation - use delta to ensure smooth animation regardless of framerate
          note.mesh.rotation.y += delta * note.mesh.userData.rotationSpeed;

          // Add a pulse effect to the light if there's one
          const lights = note.mesh.children.filter(
            (child) => child instanceof THREE.PointLight
          );
          if (lights.length > 0) {
            const pulseFactor = (Math.sin(time * 2) + 1) * 0.5; // 0 to 1 pulsing
            lights[0].intensity = 0.3 + pulseFactor * 0.4;
          }
        }
      }
    });

    // Update other collectibles if added in the future
    this.collectibleItems.forEach((item) => {
      if (!item.collected && item.mesh) {
        // Only process items that are in view (frustum culling)
        if (!frustum || frustum.intersectsObject(item.mesh)) {
          // Add animations for other collectibles here
        }
      }
    });
  }

  checkCollisions(playerPosition) {
    const collisionResults = {
      note: null,
    };

    // Performance optimization: Check for notes in vicinity first
    const detectionRadius = 1.5; // Same as previous value

    // Check for collisions with story notes using the same optimization technique from GameWorld
    for (const note of this.storyNotes) {
      if (!note.collected && note.mesh) {
        // First do a quick bounds check to avoid expensive distance calculations
        const xDiff = Math.abs(playerPosition.x - note.position.x);
        const zDiff = Math.abs(playerPosition.z - note.position.z);

        if (xDiff < detectionRadius && zDiff < detectionRadius) {
          // Only do the precise distance check if we're close enough
          const distance = playerPosition.distanceTo(note.position);
          if (distance < 1.5) {
            // PERFORMANCE FIX: Use deferred collection effect processing
            // Just hide the note initially and queue the effect processing
            note.collected = true;
            note.mesh.visible = false;

            // Store the content for UI
            const content = note.content;

            // Queue collection for processing over next few frames
            this.noteCollectionQueue.push({
              note: note,
              time: performance.now(),
              processed: false,
            });

            // Play sound using a small timeout to avoid performance impact
            if (this.soundManager) {
              setTimeout(() => {
                this.soundManager.play("note_open");
              }, 10);
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
      // PERFORMANCE IMPROVEMENT: Reduce particle count even further for third serum
      const particleCount = this.noteCollectionQueue.length <= 2 ? 15 : 8;
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

      // Create particles in a spiral pattern
      const particlePositions = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount; i++) {
        // Spiral upward pattern
        const radius = 0.2 + (i / particleCount) * 0.3;
        const angle = (i / particleCount) * Math.PI * 4;
        const height = (i / particleCount) * 0.8;

        particlePositions[i * 3] =
          effect.note.position.x + radius * Math.cos(angle);
        particlePositions[i * 3 + 1] = effect.note.position.y + 0.2 + height;
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
        lifetime: 1200, // Longer lifetime for more dramatic effect
      };

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
