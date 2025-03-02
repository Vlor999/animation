function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
  }
  
  function draw() {
    background(20, 20, 20, 100);
    
    for (let i = 0; i < 10; i++) {
      let x = random(width);
      let y = random(height);
      let size = random(5, 20);
      let alpha = random(100, 255);
      fill(100, 200, 255, alpha);
      ellipse(x, y, size, size);
    }
  }
  