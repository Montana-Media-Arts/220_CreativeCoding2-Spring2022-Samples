function setup()
{
    createCanvas(800,600);
}

function draw()
{
    background(120);
    // upper border
    noStroke();
    fill(0,100,255);
    rect(0,0,800,25);
    // left border
    rect(0,25,25,600);
    // bottom border
    rect(25,575,800,25);
    // right border
    rect(775,25,25,600);

    fill(0);
    textSize(25);
    text("Michael Cassens",550,560);
    text("Simple Shape Art",50,50);

    // shape 1
    fill(255,200,22);
    square(40,140,50);

    // shape 2
    fill(25,220,122);
    circle(640,140,90);

    // shape 3
    fill(125,20,222);
    rect(140,340,20,70);

    // shape 4
    fill(25,220,222);
    rect(440,340,120,70);

    // shape 5
    fill(25,20,222);
    ellipse(340,140,190,70);

    // shape 6
    fill(125,20,82);
    arc(550, 450, 90, 90, 90, PI + QUARTER_PI);

    // shape 7
    fill(125,20,22);
    quad(538, 231, 386, 220, 569, 263, 530, 276);

    // shape 8
    fill(225,120,222);
    triangle(130, 275, 158, 220, 186, 275);

    // shape 9
    fill(25,120,222);
    ellipse(340,290,50,190);

    // shape 10
    stroke(126,123,255);
    strokeWeight(7);
    line(50, 420, 185, 475);
}