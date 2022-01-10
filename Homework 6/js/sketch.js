var cowGirlObjects;
var result, runresult;
var rock;
function preload() {
  result = loadStrings('assets/characteridle.txt');
  runresult = loadStrings('assets/characterrun.txt');
}

function setup() {
    createCanvas(800,600);  
    cowGirlObjects = createSprite(300, 250);
    cowGirlObjects.addAnimation('idle', result[0], result[result.length-1]);
    cowGirlObjects.addAnimation('run', runresult[0], runresult[runresult.length-1]);

    rock = createSprite(700, 300);
    //compact way to add an image
    rock.addImage(loadImage('assets/rock.png'));
}

// display all the frames using the draw function as a loop
function draw() 
{
    background(120);
   
    if(keyDown('d'))
    {
      cowGirlObjects.changeAnimation('run');
      cowGirlObjects.velocity.x += .5;
      if(cowGirlObjects.collide(rock))
      {
        cowGirlObjects.changeAnimation('idle');
      }
    }
    else
    {
      cowGirlObjects.changeAnimation('idle');
      cowGirlObjects.velocity.x = 0;
    }

    cowGirlObjects.debug = mouseIsPressed;
    rock.debug = mouseIsPressed;
    drawSprites();
}