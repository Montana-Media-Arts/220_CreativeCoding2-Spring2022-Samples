var cowgirl;
var animation = [];
var runanimation = [];
var cowGirlObjects = [];
var cowGirlRunObjects = [];
var i = 0;
var j = 0;
var x = 0;
var counter = 0;

function preload() {

    // CHALLENGE - can you make it so we don't have to copy and paste all this?
    
    // Bring in all the assets from our folder
    // and create all our objects
    cowgirl = new imageclass('assets/Idle (1).png', 0, 0);
    cowGirlObjects[0] = cowgirl;
    cowgirl = new imageclass('assets/Idle (2).png', 0, 0);
    cowGirlObjects[1] = cowgirl;
    cowgirl = new imageclass('assets/Idle (3).png', 0, 0);
    cowGirlObjects[2] = cowgirl;
    cowgirl = new imageclass('assets/Idle (4).png', 0, 0);
    cowGirlObjects[3] = cowgirl;
    cowgirl = new imageclass('assets/Idle (5).png', 0, 0);
    cowGirlObjects[4] = cowgirl;
    cowgirl = new imageclass('assets/Idle (6).png', 0, 0);
    cowGirlObjects[5] = cowgirl;
    cowgirl = new imageclass('assets/Idle (7).png', 0, 0);
    cowGirlObjects[6] = cowgirl;
    cowgirl = new imageclass('assets/Idle (8).png', 0, 0);
    cowGirlObjects[7] = cowgirl;
    cowgirl = new imageclass('assets/Idle (9).png', 0, 0);
    cowGirlObjects[8] = cowgirl;
    cowgirl = new imageclass('assets/Idle (10).png', 0, 0);
    cowGirlObjects[9] = cowgirl;

    // Bring in all the run assets from our folder
    // and create all our objects
    cowgirl = new imageclass('assets/Run (1).png', 0, 0);
    cowGirlRunObjects[0] = cowgirl;
    cowgirl = new imageclass('assets/Run (2).png', 0, 0);
    cowGirlRunObjects[1] = cowgirl;
    cowgirl = new imageclass('assets/Run (3).png', 0, 0);
    cowGirlRunObjects[2] = cowgirl;
    cowgirl = new imageclass('assets/Run (4).png', 0, 0);
    cowGirlRunObjects[3] = cowgirl;
    cowgirl = new imageclass('assets/Run (5).png', 0, 0);
    cowGirlRunObjects[4] = cowgirl;
    cowgirl = new imageclass('assets/Run (6).png', 0, 0);
    cowGirlRunObjects[5] = cowgirl;
    cowgirl = new imageclass('assets/Run (7).png', 0, 0);
    cowGirlRunObjects[6] = cowgirl;
    cowgirl = new imageclass('assets/Run (8).png', 0, 0);
    cowGirlRunObjects[7] = cowgirl;

    for (var i = 0; i < cowGirlObjects.length; i++) {
        animation[i] = cowGirlObjects[i].getImage();
        
    }

    for(var i = 0; i < cowGirlRunObjects.length; i++)
    {
        runanimation[i] = cowGirlRunObjects[i].getImage();
    }
}

// create the canvas
function setup() {

    createCanvas(641, 542);
    setInterval(incrementIndex, 50);
}

// display all the frames using the draw function as a loop
function draw() {

    background(120);

    // draw each frame based on the index in the array
    if(keyIsPressed)
    {
        if(key == "d")
        {
            // continue to display the image
            image(runanimation[j], cowGirlRunObjects[j].getX(), cowGirlRunObjects[j].getY());
            // this section slows the running down
            counter++;
            if(counter > 5)
            {
                // increment the index "j"
                incrementRunIndex();
                // restart our counter
                counter = 0;
            }   
        }
    }
    else
    {
        image(animation[i], cowGirlObjects[i].getX(), cowGirlObjects[i].getY());
    }
    

}

function incrementIndex()
{
     // increment the index
     i += 1;

     // if we reach the end of the array, start over
     if (i >= animation.length) {
         i = 0;
     }
}

function incrementRunIndex()
{

     // increment the index
     j += 1;

     // if we reach the end of the array, start over
     if (j >= runanimation.length) {
         j = 0;
     }
}