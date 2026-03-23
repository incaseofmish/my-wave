function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(10, 15, 30);
  noStroke();
  
  let isMobile = width < 600;
  let gap = isMobile ? 15 : 30;
  let sensitivity = isMobile ? 150 : 300;
  
  for (let x = gap / 2; x < width; x += gap) {
    for (let y = gap / 2; y < height; y += gap) {
      let d = dist(mouseX, mouseY, x, y);
      let size = map(d, 0, sensitivity, gap * 1.6, 2, true);
      
      fill(0, 180, 255, map(d, 0, sensitivity, 255, 50));
      ellipse(x, y, size, size);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
