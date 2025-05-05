/**
 * Maze Generator using Depth-First Search algorithm
 * This creates a more complex and interesting maze than a predefined layout
 */
export class MazeGenerator {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.grid = [];
    this.init();
  }

  init() {
    // Initialize grid with walls (1)
    for (let i = 0; i < this.height; i++) {
      this.grid[i] = [];
      for (let j = 0; j < this.width; j++) {
        this.grid[i][j] = 1;
      }
    }
  }

  generate() {
    // Start from a random cell
    const startX = Math.floor(Math.random() * Math.floor(this.width / 2)) * 2 + 1;
    const startY = Math.floor(Math.random() * Math.floor(this.height / 2)) * 2 + 1;
    
    // Mark the starting cell as a path (0)
    this.grid[startY][startX] = 0;
    
    // Start the recursive carving
    this.carve(startX, startY);
    
    // Ensure the borders are walls
    for (let i = 0; i < this.width; i++) {
      this.grid[0][i] = 1;
      this.grid[this.height - 1][i] = 1;
    }
    
    for (let i = 0; i < this.height; i++) {
      this.grid[i][0] = 1;
      this.grid[i][this.width - 1] = 1;
    }
    
    // Create entrance and exit
    this.grid[1][1] = 0; // Entrance
    this.grid[this.height - 2][this.width - 2] = 0; // Exit
    
    return this.grid;
  }

  carve(x, y) {
    // Define the four possible directions
    const directions = [
      [1, 0],   // right
      [0, 1],   // down
      [-1, 0],  // left
      [0, -1]   // up
    ];
    
    // Shuffle directions for randomness
    this.shuffleArray(directions);
    
    // Try each direction
    for (let i = 0; i < directions.length; i++) {
      const [dx, dy] = directions[i];
      
      // Calculate the coordinates of the cell two steps away
      const nx = x + dx * 2;
      const ny = y + dy * 2;
      
      // Check if the new cell is within bounds and unvisited
      if (nx > 0 && nx < this.width - 1 && ny > 0 && ny < this.height - 1 && this.grid[ny][nx] === 1) {
        // Carve a path by setting the cells to 0
        this.grid[y + dy][x + dx] = 0;
        this.grid[ny][nx] = 0;
        
        // Continue carving from the new cell
        this.carve(nx, ny);
      }
    }
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}