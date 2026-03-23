function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(10, 15, 30);
  noStroke();
  
  let isMobile = width < 600;
  let gap = isMobile ? 20 : 30;
  let sensitivity = isMobile ? 150 : 300;

  // Если мышка еще не двигалась, ставим точку в центр экрана
  let mx = mouseX || width / 2;
  let my = mouseY || height / 2;
  
  for (let x = gap / 2; x < width; x += gap) {
    for (let y = gap / 2; y < height; y += gap) {
      let d = dist(mx, my, x, y);
      let size = map(d, 0, sensitivity, gap * 1.5, 2, true);
      
      fill(0, 180, 255, map(d, 0, sensitivity, 255, 50));
      ellipse(x, y, size, size);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
