function setup() {
    let img = createImage(800, 600); // same as new p5.Image(800, 600);
    img.loadPixels();
    createCanvas(800, 600);
    background(0);
  
    // helper for writing color to array
    function writeColor(image, x, y, red, green, blue, alpha) 
    {
      let index = (x + y * width) * 4;
      image.pixels[index] = red;
      image.pixels[index + 1] = green;
      image.pixels[index + 2] = blue;
      image.pixels[index + 3] = alpha;
    }
  
    // this function draws random squares within squares on the canvas
    function drawShapes(number1, number2) {
      let startX = number1;
      let startY = number2;
      console.log(startX);
      // draw shapes
      for (x = startX; x < startX + 70; x++) {
        for (y = startY; y < startY + 70; y++) {
          if (x > startX + 10 && x < startX + 25 && y > startY + 10 && y < startY + 25) {
            writeColor(img, x, y, 50, 100, 50, floor(random(255)));
          } else {
            writeColor(img, x, y, 55, 20, 125, floor(random(255)));
          }
        }
      }
    }
  
    let x, y;
    // fill with random colors
    for (y = 0; y < img.height; y++) {
      for (x = 0; x < img.width; x++) {
        let red = random(255);
        let green = random(255);
        let blue = random(255);
        let alpha = 255;
        writeColor(img, x, y, red, green, blue, alpha);
      }
    }
  
    // draw upper border line
    for(y = 0; y < 5; y++)
    {
      for (x = 0; x < img.width; x++) 
      {
        writeColor(img, x, y, 255, 0, 0, 255);
      }
    }
  
    // draw a bottom border line
    y = img.height - 1;
    for(let i = 0; i < 5; i++)
    {
      for (x = 0; x < img.width; x++) 
      {
        writeColor(img, x, y, 255, 0, 0, 255);
      }
      y--;
    }
  
    // draw shapes
    xCoord = 50;
    yCoord = 50;
    for (var i = 0; i < 5; i++) {
        for(var j = 0; j < 7; j++)
        {
            drawShapes(xCoord,yCoord );
            xCoord += 100;
        }
        xCoord = 50;
        yCoord += 100;
      
    }
  
    img.updatePixels();
    image(img, 0, 0);
  }