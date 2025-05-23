import * as THREE from "three";
import { MazeGenerator } from "./MazeGenerator.js";

export class GameWorld {
  constructor(scene, loadingManager = null) {
    this.scene = scene;
    this.mazeSize = 21; // Increased size for a larger maze
    this.cellSize = 4;
    this.wallHeight = 5; // Taller walls for more claustrophobic feel
    this.loadingManager = loadingManager;

    this.walls = new THREE.Group();
    this.keys = [];
    this.portal = null;

    this.keyCount = 5; // More keys to collect
    this.maze = null;

    // Add texture loader with error handling
    this.textureLoader = loadingManager
      ? new THREE.TextureLoader(loadingManager)
      : new THREE.TextureLoader();
    this.textureLoader.crossOrigin = "anonymous";

    // Time of day settings - changed to start in evening
    this.isDaytime = true;
    this.timeOfDay = 0.2; // Evening setting (between day and night)
    this.dayDuration = 300; // 5 minutes of game time = 1 day
    this.dayStartTime = Date.now();

    // Weather effects
    this.isRaining = true;
    this.fogDensity = 0.08; // Slightly increased fog for evening ambiance
    this.rainIntensity = 0.5;

    // Environment objects
    this.trees = [];
    this.rocks = [];
    this.vines = [];
    this.raindrops = [];

    // Maze sections that can change
    this.dynamicWalls = [];
    this.dynamicWallsTimer = 0;
    this.dynamicWallChangeInterval = 30; // seconds

    // Add a queue for processing serum collection effects
    this.collectionEffectsQueue = [];

    this.initialize();
  }

  initialize() {
    // Set lighter fog for better visibility
    this.scene.fog = new THREE.FogExp2(0x353540, this.fogDensity * 0.6);

    // Add global ambient light with increased intensity for better visibility
    this.globalAmbient = new THREE.AmbientLight(0xffffff, 1.2);
    this.scene.add(this.globalAmbient);

    // Create ground
    this.createGround();

    // Generate maze
    const generator = new MazeGenerator(this.mazeSize, this.mazeSize);
    this.maze = generator.generate();

    // Mark some walls as dynamic (can change)
    this.markDynamicWalls();

    // Create walls
    this.createWalls();

    // Add walls to scene
    this.scene.add(this.walls);

    // Create collectible keys
    this.createKeys();

    // Create exit portal
    this.createPortal();

    // Add skybox
    this.createSkybox();

    // Add environmental details
    this.addEnvironmentalDetails();

    // Set up night lighting
    this.setupNightLighting();
  }

  createGround() {
    const groundSize = this.mazeSize * this.cellSize * 1.5;
    const groundGeometry = new THREE.PlaneGeometry(
      groundSize,
      groundSize,
      32,
      32
    );

    // Create a fallback material in case texture loading fails
    const fallbackGroundMaterial = new THREE.MeshStandardMaterial({
      color: 0x333333, // Brighter fallback color
      roughness: 0.9,
      metalness: 0.1,
    });

    // Try to load the texture with error handling
    this.textureLoader.load(
      "https://threejs.org/examples/textures/terrain/grasslight-big.jpg",
      (groundTexture) => {
        groundTexture.wrapS = groundTexture.wrapT = THREE.RepeatWrapping;
        groundTexture.repeat.set(this.mazeSize, this.mazeSize);
        groundTexture.anisotropy = 16;

        // Create mud-like/forest floor material with brighter color
        const groundMaterial = new THREE.MeshStandardMaterial({
          map: groundTexture,
          roughness: 0.8,
          metalness: 0.1,
          color: 0x444444, // Brighter ground color
        });

        const ground = new THREE.Mesh(groundGeometry, groundMaterial);
        ground.rotation.x = -Math.PI / 2;
        ground.receiveShadow = true;
        this.scene.add(ground);

        // Add subtle displacement to the ground for more natural feel
        const displacementLoader = this.loadingManager
          ? new THREE.TextureLoader(this.loadingManager)
          : new THREE.TextureLoader();
        displacementLoader.load(
          "https://threejs.org/examples/textures/terrain/grasslight-big-nm.jpg",
          (texture) => {
            groundMaterial.displacementMap = texture;
            groundMaterial.displacementScale = 0.3;
            groundMaterial.needsUpdate = true;
          }
        );
      },
      undefined,
      (error) => {
        // On error, use the fallback material
        console.error("Error loading ground texture:", error);
        const ground = new THREE.Mesh(groundGeometry, fallbackGroundMaterial);
        ground.rotation.x = -Math.PI / 2;
        ground.receiveShadow = true;
        this.scene.add(ground);
      }
    );
  }

  createWalls() {
    // Fallback wall material in case texture loading fails
    const fallbackWallMaterial = new THREE.MeshStandardMaterial({
      color: 0x333333,
      roughness: 0.8,
      metalness: 0.2,
    });

    // Try to load the texture with error handling
    this.textureLoader.load(
      "https://threejs.org/examples/textures/brick_diffuse.jpg",
      (wallTexture) => {
        wallTexture.wrapS = wallTexture.wrapT = THREE.RepeatWrapping;
        wallTexture.repeat.set(1, 2); // More repeats for taller walls

        // Additional textures for more realism
        const bumpLoader = this.loadingManager
          ? new THREE.TextureLoader(this.loadingManager)
          : new THREE.TextureLoader();
        bumpLoader.load(
          "https://threejs.org/examples/textures/brick_bump.jpg",
          (texture) => {
            // Create cold concrete/metal wall material for Maze Runner feel
            const wallMaterial = new THREE.MeshStandardMaterial({
              map: wallTexture,
              bumpMap: texture,
              bumpScale: 0.2,
              roughness: 0.8,
              metalness: 0.2,
              color: 0x444444, // Darker color for walls
            });

            this.createWallMeshes(wallMaterial);
          }
        );
      },
      undefined,
      (error) => {
        // On error, use the fallback material
        console.error("Error loading wall texture:", error);
        this.createWallMeshes(fallbackWallMaterial);
      }
    );
  }

  createWallMeshes(wallMaterial) {
    // Create normal walls
    const wallGeometry = new THREE.BoxGeometry(
      this.cellSize,
      this.wallHeight,
      this.cellSize
    );

    // Create maze walls
    for (let i = 0; i < this.mazeSize; i++) {
      for (let j = 0; j < this.mazeSize; j++) {
        if (this.maze[i][j] === 1) {
          const wall = new THREE.Mesh(wallGeometry, wallMaterial);

          wall.position.set(
            (j - this.mazeSize / 2) * this.cellSize,
            this.wallHeight / 2,
            (i - this.mazeSize / 2) * this.cellSize
          );

          wall.castShadow = true;
          wall.receiveShadow = true;

          // Check if this is a dynamic wall
          const isDynamic = this.dynamicWalls.some(
            (dw) => dw.i === i && dw.j === j
          );

          // Store reference to dynamic walls
          if (isDynamic) {
            wall.userData.isDynamic = true;
            wall.userData.originalPosition = {
              x: wall.position.x,
              y: wall.position.y,
              z: wall.position.z,
            };

            // Store the grid position for collision detection updates
            wall.userData.gridPosition = { x: j, z: i };
            wall.userData.originalGridPosition = { x: j, z: i };

            // Add some visual distinction to dynamic walls
            const dynamicMaterial = wallMaterial.clone();
            dynamicMaterial.color.set(0x555555);
            dynamicMaterial.emissive.set(0x111111);
            wall.material = dynamicMaterial;

            // Add subtle animation to dynamic walls
            this.animateDynamicWall(wall);
          }

          this.walls.add(wall);
        }
      }
    }

    // Add moss/vines to some walls for atmosphere
    this.addMossToWalls();
  }

  addMossToWalls() {
    const mossGeometry = new THREE.PlaneGeometry(
      this.cellSize * 0.8,
      this.wallHeight * 0.4
    );
    const mossColor = new THREE.Color(0x2d4f1e); // Dark green

    const mossMaterial = new THREE.MeshStandardMaterial({
      color: mossColor,
      roughness: 1.0,
      metalness: 0,
      transparent: true,
      opacity: 0.9,
      side: THREE.DoubleSide,
    });

    // Add moss to ~15% of walls
    this.walls.children.forEach((wall, index) => {
      if (Math.random() > 0.85) {
        const moss = new THREE.Mesh(mossGeometry, mossMaterial);

        // Position on the wall
        const side = Math.floor(Math.random() * 4);
        const yPos = (Math.random() * 0.6 - 0.3) * this.wallHeight;

        switch (side) {
          case 0: // Front
            moss.position.set(0, yPos, this.cellSize / 2 + 0.05);
            break;
          case 1: // Back
            moss.position.set(0, yPos, -this.cellSize / 2 - 0.05);
            moss.rotation.y = Math.PI;
            break;
          case 2: // Left
            moss.position.set(-this.cellSize / 2 - 0.05, yPos, 0);
            moss.rotation.y = -Math.PI / 2;
            break;
          case 3: // Right
            moss.position.set(this.cellSize / 2 + 0.05, yPos, 0);
            moss.rotation.y = Math.PI / 2;
            break;
        }

        wall.add(moss);
        this.vines.push(moss);
      }
    });
  }

  markDynamicWalls() {
    // Mark ~10% of non-border walls as dynamic
    const potentialDynamicWalls = [];

    // Find walls that aren't on the border
    for (let i = 2; i < this.mazeSize - 2; i++) {
      for (let j = 2; j < this.mazeSize - 2; j++) {
        if (this.maze[i][j] === 1) {
          // Skip walls that would disconnect the maze if removed
          let neighborWallCount = 0;
          if (this.maze[i - 1][j] === 1) neighborWallCount++;
          if (this.maze[i + 1][j] === 1) neighborWallCount++;
          if (this.maze[i][j - 1] === 1) neighborWallCount++;
          if (this.maze[i][j + 1] === 1) neighborWallCount++;

          // Only add walls that aren't critical to the maze structure
          if (neighborWallCount < 3) {
            potentialDynamicWalls.push({ i, j });
          }
        }
      }
    }

    // Randomly select ~10% of potential walls
    const numDynamicWalls = Math.floor(potentialDynamicWalls.length * 0.1);
    for (let i = 0; i < numDynamicWalls; i++) {
      const randomIndex = Math.floor(
        Math.random() * potentialDynamicWalls.length
      );
      this.dynamicWalls.push(potentialDynamicWalls[randomIndex]);
      potentialDynamicWalls.splice(randomIndex, 1);
    }
  }

  animateDynamicWall(wall) {
    // Add subtle floating animation
    const originalY = wall.position.y;
    const floatOffset = Math.random() * Math.PI * 2;
    const floatAmplitude = 0.1;
    const floatSpeed = 0.5 + Math.random() * 0.5;

    wall.userData.animate = function (time) {
      wall.position.y =
        originalY + Math.sin(time * floatSpeed + floatOffset) * floatAmplitude;
    };
  }

  updateDynamicWalls(delta) {
    // Don't update if delta is 0 (indicates a paused state)
    if (delta <= 0) return;

    this.dynamicWallsTimer += delta;

    // Move dynamic walls at interval
    if (this.dynamicWallsTimer > this.dynamicWallChangeInterval) {
      this.dynamicWallsTimer = 0;

      // Only move walls at night
      if (this.timeOfDay < 0.3) {
        // Keep track of walls that moved to update the maze grid
        const movedWalls = [];

        this.walls.children.forEach((wall) => {
          if (wall.userData.isDynamic) {
            // 50% chance to move the wall
            if (Math.random() > 0.5) {
              // Store original grid position for updating maze array
              if (wall.userData.gridPosition) {
                // Clear the original position in the maze grid
                const oldPos = wall.userData.gridPosition;
                this.maze[oldPos.z][oldPos.x] = 0; // Mark as empty
                movedWalls.push(wall);
              }

              // Move it to a new position
              const moveDir = Math.floor(Math.random() * 4);
              const moveAmt = this.cellSize;

              switch (moveDir) {
                case 0: // Up
                  wall.position.z -= moveAmt;
                  break;
                case 1: // Down
                  wall.position.z += moveAmt;
                  break;
                case 2: // Left
                  wall.position.x -= moveAmt;
                  break;
                case 3: // Right
                  wall.position.x += moveAmt;
                  break;
              }

              // Calculate new grid position
              const newGridX = Math.floor(
                (wall.position.x + (this.mazeSize * this.cellSize) / 2) /
                  this.cellSize
              );
              const newGridZ = Math.floor(
                (wall.position.z + (this.mazeSize * this.cellSize) / 2) /
                  this.cellSize
              );

              // Store the new grid position
              wall.userData.gridPosition = { x: newGridX, z: newGridZ };

              // Update the maze grid with the new position if within bounds
              if (
                newGridX >= 0 &&
                newGridX < this.mazeSize &&
                newGridZ >= 0 &&
                newGridZ < this.mazeSize
              ) {
                this.maze[newGridZ][newGridX] = 1; // Mark as wall
              }
            } else {
              // Return to original position
              const originalPos = wall.userData.originalPosition;
              wall.position.set(originalPos.x, originalPos.y, originalPos.z);

              // Restore original grid position in maze array
              if (wall.userData.originalGridPosition) {
                const origGrid = wall.userData.originalGridPosition;
                this.maze[origGrid.z][origGrid.x] = 1; // Mark as wall
                wall.userData.gridPosition = { ...origGrid }; // Update current grid position
              }
            }
          }
        });
      }
    }
  }

  createKeys() {
    // Find empty spaces in the maze for keys
    const emptySpaces = [];
    for (let i = 1; i < this.mazeSize - 1; i++) {
      for (let j = 1; j < this.mazeSize - 1; j++) {
        if (this.maze[i][j] === 0) {
          // Skip the start and end positions
          if (
            (i === 1 && j === 1) ||
            (i === this.mazeSize - 2 && j === this.mazeSize - 2)
          ) {
            continue;
          }
          emptySpaces.push({ x: j, z: i });
        }
      }
    }

    // Shuffle and pick positions for keys
    this.shuffleArray(emptySpaces);
    const keyPositions = emptySpaces.slice(0, this.keyCount);

    // Create more detailed serum vials
    for (let i = 0; i < keyPositions.length; i++) {
      const pos = keyPositions[i];
      this.createSerumVial(
        (pos.x - this.mazeSize / 2) * this.cellSize,
        1,
        (pos.z - this.mazeSize / 2) * this.cellSize
      );
    }
  }

  createSerumVial(x, y, z) {
    // Create a more detailed serum vial group
    const vialGroup = new THREE.Group();

    // Glass container
    const vialGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.8, 16);
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.3,
      roughness: 0.1,
      metalness: 0.1,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      transmission: 0.9,
    });

    const vial = new THREE.Mesh(vialGeometry, glassMaterial);
    vialGroup.add(vial);

    // Blue serum inside
    const liquidGeometry = new THREE.CylinderGeometry(0.2, 0.2, 0.6, 16);
    const liquidMaterial = new THREE.MeshStandardMaterial({
      color: 0x0077ff,
      transparent: true,
      opacity: 0.8,
      emissive: 0x0044bb,
      emissiveIntensity: 0.5,
      roughness: 0.3,
    });

    const liquid = new THREE.Mesh(liquidGeometry, liquidMaterial);
    liquid.position.y = -0.05;
    vialGroup.add(liquid);

    // Metal cap
    const capGeometry = new THREE.CylinderGeometry(0.32, 0.32, 0.1, 16);
    const capMaterial = new THREE.MeshStandardMaterial({
      color: 0x888888,
      metalness: 0.8,
      roughness: 0.2,
    });

    const cap = new THREE.Mesh(capGeometry, capMaterial);
    cap.position.y = 0.45;
    vialGroup.add(cap);

    // Add pointlight for glow effect
    const light = new THREE.PointLight(0x0066ff, 2, 2);
    light.position.set(0, 0, 0);
    vialGroup.add(light);

    // Position the vial
    vialGroup.position.set(x, y, z);

    // Add floating animation
    vialGroup.userData = {
      floatOffset: Math.random() * Math.PI * 2,
      rotationSpeed: 0.5 + Math.random() * 0.5,
      collected: false,
    };

    // Add to scene and collection
    this.scene.add(vialGroup);
    this.keys.push(vialGroup);
  }

  createPortal() {
    // Create a more impressive exit portal at the end of the maze
    const portalGroup = new THREE.Group();

    // Outer ring
    const outerRingGeometry = new THREE.TorusGeometry(1.5, 0.2, 16, 32);
    const outerRingMaterial = new THREE.MeshStandardMaterial({
      color: 0x333333,
      metalness: 0.8,
      roughness: 0.2,
      emissive: 0x222222,
      emissiveIntensity: 0.2,
    });

    const outerRing = new THREE.Mesh(outerRingGeometry, outerRingMaterial);
    portalGroup.add(outerRing);

    // Portal effect
    const portalGeometry = new THREE.CircleGeometry(1.3, 32);
    const portalMaterial = new THREE.MeshBasicMaterial({
      color: 0x00aa44, // Green portal color
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.7,
    });

    this.portal = new THREE.Mesh(portalGeometry, portalMaterial);
    portalGroup.add(this.portal);

    // Add swirling portal particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 200;
    const posArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      // Create particles in a circular pattern
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 1.3;

      posArray[i * 3] = Math.cos(angle) * radius;
      posArray[i * 3 + 1] = Math.sin(angle) * radius;
      posArray[i * 3 + 2] = (Math.random() - 0.5) * 0.1;
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: 0x00ff66,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    portalGroup.add(particles);

    // Add pointlight for glow effect
    const portalLight = new THREE.PointLight(0x00ff66, 2, 10);
    portalLight.position.set(0, 0, 0.5);
    portalGroup.add(portalLight);

    // Position the portal at the maze exit
    portalGroup.position.set(
      (this.mazeSize - 2 - this.mazeSize / 2) * this.cellSize,
      1.5,
      (this.mazeSize - 2 - this.mazeSize / 2) * this.cellSize
    );

    // Add to scene
    portalGroup.rotation.x = Math.PI / 2;
    this.scene.add(portalGroup);

    // Store portal group for animations
    this.portalGroup = portalGroup;
  }

  createSkybox() {
    // Create a dynamic skybox
    const skyGeometry = new THREE.SphereGeometry(500, 32, 32);

    // Daytime sky material
    this.daySkyMaterial = new THREE.MeshBasicMaterial({
      color: 0x87ceeb,
      side: THREE.BackSide,
      fog: false,
    });

    // Night sky material
    this.nightSkyMaterial = new THREE.MeshBasicMaterial({
      color: 0x0a0a14,
      side: THREE.BackSide,
      fog: false,
    });

    // Evening sky material - warm orange/purple hues
    this.eveningSkyMaterial = new THREE.MeshBasicMaterial({
      color: 0xd46f4d, // Warm orange/sunset color
      side: THREE.BackSide,
      fog: false,
    });

    // Use evening sky initially
    this.skybox = new THREE.Mesh(skyGeometry, this.eveningSkyMaterial);
    this.scene.add(this.skybox);

    // Add stars (visible at night)
    this.addStars();
  }

  addStars() {
    const starsGeometry = new THREE.BufferGeometry();
    const starCount = 1000;
    const posArray = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i += 3) {
      // Distribute stars around the sky sphere
      const phi = Math.random() * Math.PI * 2;
      const theta = Math.random() * Math.PI;
      const radius = 490; // Just inside the skybox

      posArray[i] = radius * Math.sin(theta) * Math.cos(phi);
      posArray[i + 1] = radius * Math.sin(theta) * Math.sin(phi);
      posArray[i + 2] = radius * Math.cos(theta);
    }

    starsGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );

    const starsMaterial = new THREE.PointsMaterial({
      size: 1.0,
      color: 0xffffff,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
    });

    this.stars = new THREE.Points(starsGeometry, starsMaterial);
    this.scene.add(this.stars);
  }

  setupNightLighting() {
    // Add moon light with increased brightness
    this.moonLight = new THREE.DirectionalLight(0x8888ff, 1.0);
    this.moonLight.position.set(0, 10, -10).normalize();
    this.moonLight.castShadow = true;
    this.moonLight.shadow.mapSize.width = 1024;
    this.moonLight.shadow.mapSize.height = 1024;
    this.scene.add(this.moonLight);

    // Add ambient night light with increased intensity
    this.nightAmbient = new THREE.AmbientLight(0x556677, 0.7);
    this.scene.add(this.nightAmbient);

    // Add additional point lights around the maze for better visibility
    this.addMazeLights();
  }

  addMazeLights() {
    // Add some evenly spaced point lights throughout the maze for better visibility
    const mazeWidth = this.mazeSize * this.cellSize;
    const lightSpacing = mazeWidth / 3; // Create a 3x3 grid of lights

    for (
      let x = -mazeWidth / 2 + lightSpacing / 2;
      x <= mazeWidth / 2;
      x += lightSpacing
    ) {
      for (
        let z = -mazeWidth / 2 + lightSpacing / 2;
        z <= mazeWidth / 2;
        z += lightSpacing
      ) {
        // Create a dimmed light to provide ambient illumination
        const light = new THREE.PointLight(0xccccff, 0.4, mazeWidth / 2);
        light.position.set(x, this.wallHeight + 2, z);
        light.castShadow = false; // Skip shadow casting for performance
        this.scene.add(light);
      }
    }
  }

  addEnvironmentalDetails() {
    // Add trees outside the maze
    this.addTrees();

    // Add rocks inside the maze
    this.addRocks();
  }

  addTrees() {
    const treeCount = 50;
    const outerRadius = this.mazeSize * this.cellSize * 0.8;

    for (let i = 0; i < treeCount; i++) {
      // Position trees in a circle around the maze
      const angle = Math.random() * Math.PI * 2;
      const distance = outerRadius + Math.random() * 30;

      const x = Math.cos(angle) * distance;
      const z = Math.sin(angle) * distance;

      this.createTree(x, 0, z);
    }
  }

  createTree(x, y, z) {
    const treeGroup = new THREE.Group();

    // Tree trunk
    const trunkGeometry = new THREE.CylinderGeometry(0.5, 0.7, 5, 8);
    const trunkMaterial = new THREE.MeshStandardMaterial({
      color: 0x502a2a,
      roughness: 1.0,
      metalness: 0,
    });

    const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
    trunk.position.y = 2.5;
    trunk.castShadow = true;
    treeGroup.add(trunk);

    // Tree foliage (dark and dead looking)
    const foliageGeometry = new THREE.ConeGeometry(2, 6, 8);
    const foliageMaterial = new THREE.MeshStandardMaterial({
      color: 0x0e2711, // Dark green
      roughness: 1.0,
      metalness: 0,
    });

    const foliage = new THREE.Mesh(foliageGeometry, foliageMaterial);
    foliage.position.y = 7;
    foliage.castShadow = true;
    treeGroup.add(foliage);

    treeGroup.position.set(x, y, z);

    // Randomly rotate and scale the tree
    treeGroup.rotation.y = Math.random() * Math.PI * 2;
    const scale = 0.8 + Math.random() * 0.5;
    treeGroup.scale.set(scale, scale, scale);

    this.scene.add(treeGroup);
    this.trees.push(treeGroup);
  }

  addRocks() {
    const rockCount = 40;
    const emptySpaces = [];

    // Find empty spaces
    for (let i = 1; i < this.mazeSize - 1; i++) {
      for (let j = 1; j < this.mazeSize - 1; j++) {
        if (this.maze[i][j] === 0) {
          // Skip key locations
          let isKeyLocation = false;
          for (const key of this.keys) {
            const keyX = (j - this.mazeSize / 2) * this.cellSize;
            const keyZ = (i - this.mazeSize / 2) * this.cellSize;

            if (
              Math.abs(key.position.x - keyX) < 1 &&
              Math.abs(key.position.z - keyZ) < 1
            ) {
              isKeyLocation = true;
              break;
            }
          }

          if (!isKeyLocation) {
            emptySpaces.push({ x: j, z: i });
          }
        }
      }
    }

    // Shuffle and pick positions for rocks
    this.shuffleArray(emptySpaces);
    const rockPositions = emptySpaces.slice(0, rockCount);

    // Create rocks
    rockPositions.forEach((pos) => {
      const x = (pos.x - this.mazeSize / 2) * this.cellSize;
      const z = (pos.z - this.mazeSize / 2) * this.cellSize;

      this.createRock(x, 0, z);
    });
  }

  createRock(x, y, z) {
    // Create a random rock shape
    const rockGroup = new THREE.Group();

    // Each rock is made of 1-3 overlapping geometries
    const segments = 1 + Math.floor(Math.random() * 2);

    for (let i = 0; i < segments; i++) {
      const rockType = Math.floor(Math.random() * 3);
      let geometry;

      // SMALLER ROCKS: Reduced size by 50%
      switch (rockType) {
        case 0: // Round rock
          geometry = new THREE.DodecahedronGeometry(
            (0.3 + Math.random() * 0.3) * 0.5, // 50% smaller
            1
          );
          break;
        case 1: // Angular rock
          geometry = new THREE.OctahedronGeometry(
            (0.3 + Math.random() * 0.3) * 0.5, // 50% smaller
            1
          );
          break;
        case 2: // Flat rock
          geometry = new THREE.CylinderGeometry(
            (0.4 + Math.random() * 0.3) * 0.5, // 50% smaller
            (0.3 + Math.random() * 0.3) * 0.5, // 50% smaller
            (0.2 + Math.random() * 0.2) * 0.5, // 50% smaller
            6
          );
          break;
      }

      // Rock material
      const rockMaterial = new THREE.MeshStandardMaterial({
        color: 0x555555,
        roughness: 0.9,
        metalness: 0.1,
      });

      const rock = new THREE.Mesh(geometry, rockMaterial);

      // Position within group - also scaled down
      rock.position.set(
        (Math.random() - 0.5) * 0.15, // 50% smaller positioning
        Math.random() * 0.1, // 50% smaller positioning
        (Math.random() - 0.5) * 0.15 // 50% smaller positioning
      );

      // Random rotation
      rock.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      rock.castShadow = true;
      rock.receiveShadow = true;
      rockGroup.add(rock);
    }

    // Position at specified location
    rockGroup.position.set(x, y, z);

    // Random rotation
    rockGroup.rotation.y = Math.random() * Math.PI * 2;

    this.scene.add(rockGroup);
    this.rocks.push(rockGroup);
  }

  updateTimeOfDay(gameTime) {
    // Update time of day based on game time, but fixed more towards evening
    const dayProgress = (gameTime % this.dayDuration) / this.dayDuration;

    // Modified cycle to stay in evening/sunset range longer
    // Range is kept between 0.35 and 0.5 (evening) most of the time
    this.timeOfDay = 0.35 + (Math.sin(dayProgress * Math.PI * 2) + 1) * 0.075;

    // Create a warm evening glow in the skybox
    const eveningColor = new THREE.Color(0xd46f4d); // Base sunset orange
    const nightColor = new THREE.Color(0x1a1a2e); // Deep blue night
    const skyColor = new THREE.Color();

    // Blend between sunset and night colors
    skyColor.lerpColors(nightColor, eveningColor, this.timeOfDay);
    this.skybox.material.color.copy(skyColor);

    // Stars slightly visible in evening
    this.stars.material.opacity = this.lerpValue(0.5, 0.1, this.timeOfDay);

    // Keep fog density moderate for evening atmosphere
    this.fogDensity = 0.02 + this.lerpValue(0.02, 0, this.timeOfDay);
    this.scene.fog.density = this.fogDensity;

    // Adjust fog color for evening
    this.scene.fog.color.setHex(0x151425);

    // Evening lighting
    this.moonLight.intensity = 0.3;
    this.moonLight.color.setHex(0xffb04c); // Warm evening light
    this.nightAmbient.intensity = 0.25;
    this.nightAmbient.color.setHex(0x4d5d7a); // Bluish ambient for evening shadows

    // Return state info - always in transitioning state for evening
    return {
      isNight: false,
      isTransitioning: true, // Always in transition state for evening atmosphere
    };
  }

  lerpValue(a, b, t) {
    return a + (b - a) * t;
  }

  checkWallCollision(position) {
    const playerRadius = 0.5;
    // Increased collision tolerance for more robust wall detection
    const collisionTolerance = 0.01;

    // Calculate the grid cell the player is in
    const gridX = Math.floor(
      (position.x + (this.mazeSize * this.cellSize) / 2) / this.cellSize
    );
    const gridZ = Math.floor(
      (position.z + (this.mazeSize * this.cellSize) / 2) / this.cellSize
    );

    // Check current cell and all 8 neighboring cells (including diagonals)
    const neighbors = [
      { x: 0, z: 0 }, // Current cell
      { x: 1, z: 0 }, // Right
      { x: -1, z: 0 }, // Left
      { x: 0, z: 1 }, // Down
      { x: 0, z: -1 }, // Up
      { x: 1, z: 1 }, // Diagonal: Bottom-right
      { x: -1, z: 1 }, // Diagonal: Bottom-left
      { x: 1, z: -1 }, // Diagonal: Top-right
      { x: -1, z: -1 }, // Diagonal: Top-left
    ];

    for (const offset of neighbors) {
      const checkX = gridX + offset.x;
      const checkZ = gridZ + offset.z;

      // Skip if out of bounds
      if (
        checkX < 0 ||
        checkX >= this.mazeSize ||
        checkZ < 0 ||
        checkZ >= this.mazeSize
      ) {
        continue;
      }

      // If there's a wall in the grid, check collision
      if (this.maze[checkZ][checkX] === 1) {
        const wallX = (checkX - this.mazeSize / 2) * this.cellSize;
        const wallZ = (checkZ - this.mazeSize / 2) * this.cellSize;

        // Box-box collision for more accurate collision detection
        // Player box: position ± playerRadius
        // Wall box: position ± cellSize/2
        const playerMinX = position.x - playerRadius;
        const playerMaxX = position.x + playerRadius;
        const playerMinZ = position.z - playerRadius;
        const playerMaxZ = position.z + playerRadius;

        const wallMinX = wallX - this.cellSize / 2 + collisionTolerance;
        const wallMaxX = wallX + this.cellSize / 2 - collisionTolerance;
        const wallMinZ = wallZ - this.cellSize / 2 + collisionTolerance;
        const wallMaxZ = wallZ + this.cellSize / 2 - collisionTolerance;

        // AABB collision check (Axis-Aligned Bounding Box)
        if (
          playerMaxX > wallMinX &&
          playerMinX < wallMaxX &&
          playerMaxZ > wallMinZ &&
          playerMinZ < wallMaxZ
        ) {
          return true;
        }
      }
    }

    // Also check dynamic walls
    if (this.walls && this.walls.children && this.walls.children.length > 0) {
      // Find nearby dynamic walls
      for (let i = 0; i < this.walls.children.length; i++) {
        const wall = this.walls.children[i];

        // Only check dynamic walls
        if (!wall.userData.isDynamic) continue;

        // Quick distance check before doing more expensive calculations
        const dx = Math.abs(position.x - wall.position.x);
        const dz = Math.abs(position.z - wall.position.z);

        if (dx > this.cellSize || dz > this.cellSize) continue;

        // Box-box collision check for dynamic walls
        const playerMinX = position.x - playerRadius;
        const playerMaxX = position.x + playerRadius;
        const playerMinZ = position.z - playerRadius;
        const playerMaxZ = position.z + playerRadius;

        const wallMinX =
          wall.position.x - this.cellSize / 2 + collisionTolerance;
        const wallMaxX =
          wall.position.x + this.cellSize / 2 - collisionTolerance;
        const wallMinZ =
          wall.position.z - this.cellSize / 2 + collisionTolerance;
        const wallMaxZ =
          wall.position.z + this.cellSize / 2 - collisionTolerance;

        // AABB collision check
        if (
          playerMaxX > wallMinX &&
          playerMinX < wallMaxX &&
          playerMaxZ > wallMinZ &&
          playerMinZ < wallMaxZ
        ) {
          return true;
        }
      }
    }

    return false;
  }

  checkKeyCollection(position) {
    // Performance optimization: Skip this check if we checked recently
    if (window.performance && window.performance.now) {
      const currentTime = window.performance.now();

      // If last check was less than 50ms ago, skip this check
      if (this._lastKeyCheck && currentTime - this._lastKeyCheck < 50) {
        return false;
      }

      this._lastKeyCheck = currentTime;
    }

    // Check for serum collection - optimize to only check a few keys per frame
    const playerX = position.x;
    const playerZ = position.z;
    const detectionRadius = 2;

    // Only check a subset of keys in each frame for better performance
    const keysToCheck = Math.min(2, this.keys.length);
    const startIdx = this.frameCount % this.keys.length;

    for (let i = 0; i < keysToCheck; i++) {
      const idx = (startIdx + i) % this.keys.length;
      const key = this.keys[idx];

      // Skip already collected keys
      if (key.userData.collected) continue;

      // Optimization: quick bounds check first using cached position
      const xDiff = Math.abs(playerX - key.position.x);
      const zDiff = Math.abs(playerZ - key.position.z);

      if (xDiff < detectionRadius && zDiff < detectionRadius) {
        // Use squared distance instead of actual distance (avoids square root calculation)
        const dx = playerX - key.position.x;
        const dz = playerZ - key.position.z;
        const distanceSquared = dx * dx + dz * dz;

        if (distanceSquared < 2.25) {
          // 1.5^2 = 2.25
          // Mark as collected immediately
          key.userData.collected = true;
          key.visible = false;

          // If there's a light in the vial, disable it immediately to reduce rendering load
          key.children.forEach((child) => {
            if (child instanceof THREE.PointLight) {
              child.intensity = 0;
            }
          });

          // Queue collection effect with prioritization
          const collectionEffectsCount = this.collectionEffectsQueue.length;

          // Only queue the effect if we don't have too many pending effects
          if (collectionEffectsCount < 2) {
            this.collectionEffectsQueue.push({
              key: key,
              position: key.position.clone(),
              time: performance.now(),
              processed: false,
            });
          } else {
            // If we already have effects queued, add this one with reduced particle count
            this.collectionEffectsQueue.push({
              key: key,
              position: key.position.clone(),
              time: performance.now(),
              processed: false,
              reducedEffects: true,
            });
          }

          return true;
        }
      }
    }

    return false;
  }

  checkExit(position, collectedKeys) {
    // Only need 3 out of 5 keys to exit (60% of total)
    const requiredKeys = 3;

    if (collectedKeys >= requiredKeys) {
      // Get the portal's world position - either from portalGroup or fallback
      const portalPosition = this.portalGroup
        ? this.portalGroup.position
        : this.portal.position;

      // Calculate distance - increased detection radius from 2 to 4 for easier triggering
      const distance = position.distanceTo(portalPosition);

      // Debug log to help players
      if (distance < 6) {
        console.log(
          `Near exit portal! Distance: ${distance.toFixed(
            2
          )}, need to be closer than 4.0`
        );
        // Show how many serums have been collected vs how many are needed
        console.log(
          `Serum collected: ${collectedKeys}/${requiredKeys} required`
        );
      }

      return distance < 4; // Increased from 2 to 4
    }
    return false;
  }

  resetKeys() {
    this.keys.forEach((key) => {
      key.visible = true;
    });
  }

  // New method to process collection effects over multiple frames
  processCollectionEffects() {
    if (this.collectionEffectsQueue.length === 0) return;

    // Process only one collection effect per frame to avoid lag spikes
    const effect = this.collectionEffectsQueue[0];

    // If this effect is already processed, remove it and return
    if (effect.processed) {
      this.collectionEffectsQueue.shift();
      return;
    }

    // Mark as processed so it gets removed next frame
    effect.processed = true;

    // Perform intensive operations in stages to distribute processing
    // Create a visual collection effect (particle burst)
    if (effect.key && effect.key.position) {
      // Add a flash of light at collection point
      const flashLight = new THREE.PointLight(0x00aaff, 5, 8);
      flashLight.position.copy(effect.key.position);
      flashLight.userData = {
        creationTime: Date.now(),
        lifetime: 500, // Short flash lifetime
        isFlash: true,
      };
      this.scene.add(flashLight);

      // Store flash for cleanup
      if (!this.collectionParticles) this.collectionParticles = [];
      this.collectionParticles.push(flashLight);

      // Create more particles for a more elaborate effect
      const particleCount = 20; // Increased particle count for better visual

      // Create main burst particles
      const particleGeometry = new THREE.BufferGeometry();
      const particleMaterial = new THREE.PointsMaterial({
        color: 0x0077ff,
        size: 0.15, // Slightly larger particles
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending,
      });

      // Create particles in a sphere pattern around collection point
      const particlePositions = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount; i++) {
        // Distribute particles in a sphere
        const phi = Math.random() * Math.PI * 2;
        const theta = Math.random() * Math.PI;
        const radius = 0.2 + Math.random() * 0.2;

        particlePositions[i * 3] =
          effect.key.position.x + radius * Math.sin(theta) * Math.cos(phi);
        particlePositions[i * 3 + 1] =
          effect.key.position.y + radius * Math.sin(theta) * Math.sin(phi);
        particlePositions[i * 3 + 2] =
          effect.key.position.z + radius * Math.cos(theta);
      }

      particleGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(particlePositions, 3)
      );

      // Create the main particle burst system
      const particles = new THREE.Points(particleGeometry, particleMaterial);
      particles.userData = {
        creationTime: Date.now(),
        lifetime: 1000, // Longer lifetime for main effect
        velocities: new Float32Array(particleCount * 3), // Pre-calculated velocities
        type: "burst",
      };

      // Pre-calculate velocities for outward burst
      for (let i = 0; i < particleCount; i++) {
        const pos = new THREE.Vector3(
          particlePositions[i * 3] - effect.key.position.x,
          particlePositions[i * 3 + 1] - effect.key.position.y,
          particlePositions[i * 3 + 2] - effect.key.position.z
        ).normalize();

        // Outward velocity based on position from center
        const speed = 0.8 + Math.random() * 0.8;
        particles.userData.velocities[i * 3] = pos.x * speed;
        particles.userData.velocities[i * 3 + 1] = pos.y * speed + 0.3; // Add upward bias
        particles.userData.velocities[i * 3 + 2] = pos.z * speed;
      }

      // Add main burst particles to scene
      this.scene.add(particles);
      this.collectionParticles.push(particles);

      // Create secondary spiral particles for a more elaborate effect
      const spiralCount = 15;
      const spiralGeometry = new THREE.BufferGeometry();
      const spiralMaterial = new THREE.PointsMaterial({
        color: 0x00ddff, // Different color for spiral
        size: 0.1,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending,
      });

      const spiralPositions = new Float32Array(spiralCount * 3);

      // Create initial spiral pattern
      for (let i = 0; i < spiralCount; i++) {
        const angle = (i / spiralCount) * Math.PI * 2;
        const radius = 0.3;
        const height = i * 0.05;

        spiralPositions[i * 3] =
          effect.key.position.x + Math.cos(angle) * radius;
        spiralPositions[i * 3 + 1] = effect.key.position.y + height;
        spiralPositions[i * 3 + 2] =
          effect.key.position.z + Math.sin(angle) * radius;
      }

      spiralGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(spiralPositions, 3)
      );

      const spiralParticles = new THREE.Points(spiralGeometry, spiralMaterial);
      spiralParticles.userData = {
        creationTime: Date.now(),
        lifetime: 1200, // Longer lifetime for spiral
        velocities: new Float32Array(spiralCount * 3),
        angles: new Float32Array(spiralCount),
        radii: new Float32Array(spiralCount),
        type: "spiral",
      };

      // Set up spiral animation data
      for (let i = 0; i < spiralCount; i++) {
        spiralParticles.userData.angles[i] = (i / spiralCount) * Math.PI * 2;
        spiralParticles.userData.radii[i] = 0.2 + (i / spiralCount) * 0.3;
        spiralParticles.userData.velocities[i * 3 + 1] =
          0.2 + Math.random() * 0.2; // Upward velocity
      }

      // Add spiral particles to scene
      this.scene.add(spiralParticles);
      this.collectionParticles.push(spiralParticles);

      // Create a small blue sphere at the collection point that grows and fades
      const sphereGeometry = new THREE.SphereGeometry(0.1, 8, 8);
      const sphereMaterial = new THREE.MeshBasicMaterial({
        color: 0x0088ff,
        transparent: true,
        opacity: 0.7,
      });

      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      sphere.position.copy(effect.key.position);
      sphere.userData = {
        creationTime: Date.now(),
        lifetime: 800,
        type: "sphere",
        initialScale: 0.1,
        targetScale: 1.5,
      };

      this.scene.add(sphere);
      this.collectionParticles.push(sphere);

      // Play a collection sound if soundManager exists
      if (window.soundManager) {
        window.soundManager.play("serumCollect");
      } else if (window.gameInstance && window.gameInstance.soundManager) {
        window.gameInstance.soundManager.play("serumCollect");
      }

      // Trigger a UI feedback animation if we have a UI element for serum collection
      const serumUI = document.getElementById("serum-counter");
      if (serumUI) {
        serumUI.classList.add("flash-effect");
        setTimeout(() => {
          serumUI.classList.remove("flash-effect");
        }, 500);
      }
    }
  }

  // Updated method to properly clean up all particle effects
  cleanupParticleEffects() {
    if (!this.collectionParticles || this.collectionParticles.length === 0)
      return;

    const now = Date.now();

    // Process in reverse order for safe removal during iteration
    for (let i = this.collectionParticles.length - 1; i >= 0; i--) {
      const effect = this.collectionParticles[i];
      const age = now - effect.userData.creationTime;

      if (age > effect.userData.lifetime) {
        // Remove expired effect
        this.scene.remove(effect);

        // Proper cleanup based on object type
        if (effect.geometry) effect.geometry.dispose();
        if (effect.material) {
          if (Array.isArray(effect.material)) {
            effect.material.forEach((mat) => mat.dispose());
          } else {
            effect.material.dispose();
          }
        }

        this.collectionParticles.splice(i, 1);
      } else {
        // Update effects based on their type
        const progress = age / effect.userData.lifetime;
        const fadeOpacity = 1 - progress;

        if (effect.userData.type === "burst") {
          // Update position of burst particles
          if (effect.geometry && effect.userData.velocities) {
            const positions = effect.geometry.attributes.position.array;
            const velocities = effect.userData.velocities;

            for (let p = 0; p < positions.length / 3; p++) {
              positions[p * 3] += velocities[p * 3] * 0.016; // Apply velocity
              positions[p * 3 + 1] += velocities[p * 3 + 1] * 0.016;
              positions[p * 3 + 2] += velocities[p * 3 + 2] * 0.016;

              // Add gravity effect
              velocities[p * 3 + 1] -= 0.01;
            }

            effect.geometry.attributes.position.needsUpdate = true;
          }

          // Fade out
          if (effect.material) {
            effect.material.opacity = fadeOpacity * 0.9;
            effect.material.size = 0.15 * (1 - progress * 0.5);
          }
        } else if (effect.userData.type === "spiral") {
          // Animate spiral particles
          if (
            effect.geometry &&
            effect.userData.angles &&
            effect.userData.radii
          ) {
            const positions = effect.geometry.attributes.position.array;
            const velocities = effect.userData.velocities;
            const angles = effect.userData.angles;
            const radii = effect.userData.radii;

            for (let p = 0; p < positions.length / 3; p++) {
              // Update angle for spiral motion
              angles[p] += 0.1;

              // Expand radius
              radii[p] += 0.02;

              // Update position
              const centerX =
                positions[p * 3] -
                Math.cos(angles[p] - 0.1) * (radii[p] - 0.02);
              const centerZ =
                positions[p * 3 + 2] -
                Math.sin(angles[p] - 0.1) * (radii[p] - 0.02);

              positions[p * 3] = centerX + Math.cos(angles[p]) * radii[p];
              positions[p * 3 + 1] += velocities[p * 3 + 1] * 0.016;
              positions[p * 3 + 2] = centerZ + Math.sin(angles[p]) * radii[p];
            }

            effect.geometry.attributes.position.needsUpdate = true;
          }

          // Fade out
          if (effect.material) {
            effect.material.opacity = fadeOpacity * 0.7;
          }
        } else if (effect.userData.type === "sphere") {
          // Grow the sphere and fade it out
          const scaleProgress =
            effect.userData.initialScale +
            (effect.userData.targetScale - effect.userData.initialScale) *
              progress;
          effect.scale.set(scaleProgress, scaleProgress, scaleProgress);

          if (effect.material) {
            effect.material.opacity = fadeOpacity * 0.7;
          }
        } else if (effect.userData.isFlash) {
          // Fade out the flash light
          effect.intensity = 5 * (1 - progress);
        }
      }
    }
  }

  // Update method with optimized performance
  update(delta, isPaused = false) {
    // Use frame counting to stagger updates across multiple frames
    this.frameCount = (this.frameCount || 0) + 1;

    // Animate keys - only update visible keys
    if (this.frameCount % 2 === 0 && !isPaused) {
      // Only update every other frame and when not paused
      this.keys.forEach((key) => {
        if (key.visible) {
          key.rotation.z += delta * 2;
        }
      });
    }

    // Process any queued collection effects (limit per frame)
    this.processCollectionEffects();

    // Update and cleanup particle effects EVERY frame to avoid animation artifacts
    this.cleanupParticleEffects();

    // Animate portal with less frequent updates if far from player
    if (this.portal && this.frameCount % 2 === 0 && !isPaused) {
      this.portal.rotation.z += delta * 0.5;
    }

    // Animate dynamic walls every 3rd frame to reduce CPU load
    if (this.frameCount % 3 === 0 && !isPaused) {
      const time = performance.now() * 0.001; // Use performance.now for more accurate timing
      this.walls.children.forEach((wall) => {
        if (wall.userData.isDynamic && wall.userData.animate) {
          wall.userData.animate(time);
        }
      });
    }

    // Update dynamic walls logic - runs on a separate timer not every frame
    if (!isPaused) {
      this.updateDynamicWalls(delta);
    }
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Methods for minimap positions
  getKeyPositions() {
    // Return all non-collected serum vial positions
    return this.keys
      .filter((key) => !key.userData.collected)
      .map((key) => key.position);
  }

  getExitPosition() {
    // Return the exit portal position
    if (this.portalGroup) {
      return this.portalGroup.position;
    }
    // Fallback to the expected position in case portal isn't initialized yet
    return new THREE.Vector3(
      (this.mazeSize - 2 - this.mazeSize / 2) * this.cellSize,
      1.5,
      (this.mazeSize - 2 - this.mazeSize / 2) * this.cellSize
    );
  }
}
