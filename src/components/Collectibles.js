import * as THREE from "three";

export class Collectibles {
  constructor(scene, soundManager) {
    this.scene = scene;
    this.soundManager = soundManager;

    // Collections of items
    this.storyNotes = [];
    this.collectibleItems = [];

    // Story note content
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

  createStoryNotes(positions) {
    // Clear existing notes
    this.storyNotes.forEach((note) => {
      if (note.mesh) {
        this.scene.remove(note.mesh);
      }
    });
    this.storyNotes = [];

    // Create story notes at provided positions
    positions.forEach((position, index) => {
      // Create note mesh
      const note = this.createNoteMesh(position);

      // Store note data
      this.storyNotes.push({
        mesh: note,
        position: position,
        collected: false,
        content: this.noteContent[index % this.noteContent.length],
        id: index,
      });

      // Add to scene
      this.scene.add(note);
    });
  }

  createNoteMesh(position) {
    // Create group for note
    const noteGroup = new THREE.Group();

    // Paper
    const paperGeometry = new THREE.BoxGeometry(0.5, 0.02, 0.7);
    const paperMaterial = new THREE.MeshStandardMaterial({
      color: 0xf5f5dc, // Beige paper color
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

    // Add several lines of "text"
    for (let i = 0; i < 6; i++) {
      const line = new THREE.Mesh(lineGeometry, lineMaterial);
      line.position.y = 0.015;
      line.position.z = -0.25 + i * 0.1;
      noteGroup.add(line);
    }

    // WCKD logo (simplified)
    const logoGeometry = new THREE.CircleGeometry(0.08, 16);
    const logoMaterial = new THREE.MeshStandardMaterial({
      color: 0x058ed9, // WCKD blue
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
    const noteLight = new THREE.PointLight(0xffffaa, 0.5, 2);
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

  update(delta, frustum) {
    // Update story notes animations
    this.storyNotes.forEach((note) => {
      if (!note.collected && note.mesh) {
        // Only process notes that are in view (frustum culling)
        if (!frustum || frustum.intersectsObject(note.mesh)) {
          // Floating effect
          note.mesh.position.y =
            note.mesh.userData.originalY +
            Math.sin(Date.now() * 0.001 + note.mesh.userData.floatOffset) * 0.1;

          // Slow rotation
          note.mesh.rotation.y += delta * note.mesh.userData.rotationSpeed;
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

    // Check for collisions with story notes
    for (const note of this.storyNotes) {
      if (!note.collected && playerPosition.distanceTo(note.position) < 1.5) {
        note.collected = true;
        note.mesh.visible = false;

        // Play collection sound
        if (this.soundManager) {
          this.soundManager.play("collectNote");
        }

        collisionResults.note = note.content;
        break;
      }
    }

    // Check for collisions with other collectibles in the future

    return collisionResults;
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
  }
}
