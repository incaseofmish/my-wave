function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(10, 15, 30);
  noStroke();
  
  // Определяем плотность сетки в зависимости от ширины экрана
  let gap = (width < 600) ? 15 : 30; 
  
  for (let x = gap / 2; x < width; x += gap) {
    for (let y = gap / 2; y < height; y += gap) {
      let d = dist(mouseX, mouseY, x, y);
      
      // На мобилках радиус реакции меньше, на компе больше
      let radius = (width < 600) ? 150 : 300;
      let size = map(d, 0, radius, gap * 1.5, 2, true);
      
      fill(0, 180, 255, map(d, 0, radius, 255, 50));
      ellipse(x, y, size, size);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
