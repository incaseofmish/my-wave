function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(10, 15, 30);
  noStroke();
  
  let gap = 20;
  
  for (let x = gap / 2; x < width; x += gap) {
    for (let y = gap / 2; y < height; y += gap) {
      let d = dist(mouseX, mouseY, x, y);
      let size = map(d, 0, 200, 25, 2, true);
      
      fill(0, 180, 255, map(d, 0, 400, 255, 50));
      ellipse(x, y, size, size);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
