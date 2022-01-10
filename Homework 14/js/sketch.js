var mainColor =  180;

function setup() {
    createCanvas(640, 480);
    background(120);
    frameRate(25);
    noStroke();
    rectMode(CENTER);
}
function draw() {
    fill(random(mainColor),random(mainColor),random(mainColor), random(100));

    var size= random(200);
    var size2= random(200);
    ellipse(random(width), random(height), size, size2);
    
    size= random(200);
    size2= random(200);
    rect(random(width), random(height), size, size2);

    size= random(200);
    size2= random(200);
    arc(random(width), random(height), size,size2, 0, HALF_PI);

    if (frameCount % 2 == 0) {
        mainColor = 255 - mainColor; // 255 0 255 0 255 0 ..
    }
    //saveFrames("myMovie",".png",1,25);

    if (frameCount > 50) { // 2 second * 25 fps = 25
        noLoop();
    }
}