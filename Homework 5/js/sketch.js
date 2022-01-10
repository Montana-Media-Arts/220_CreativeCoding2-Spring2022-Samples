// Define all the arrays that will hold my objects
var cowGirlObjects = [];
var cowGirlRunObjects = [];
var cowGirlRunLeftObjects = [];
var currentObjects;

// Define all the arrays that will hold the images
var animation = [];
var runanimation = [];
var leftrunanimation = [];
var currentAnimation;

// Define all the variables that will hold the strings read in from a file
var result;
var runresult;
var runresultleft;

// Define the variable that will iterate over the animation and objects
var counter = 0;

// Define the variable that will be used when creating an interval
var myInterval;

// Define a variable for to slow the movement animations down
var index = 0;

// Read in all the files and populate the string arrays from the assets folder
function preload() 
{
  result = loadStrings('assets/characteridle.txt');
  runresult = loadStrings('assets/characterrun.txt');
  runresultleft = loadStrings('assets/characterrunleft.txt');

}

function setup() 
{

  createCanvas(800, 600);

  // create all the idle objects and set the animation array too
  for (var i = 0; i < result.length; i++) 
  {
    cowGirlObjects.push(new imageclass('assets/' + result[i], 0, 0));
    animation[i] = cowGirlObjects[i].getImage();
  }

  // create both movement to the right and left and the animations in this for loop
  for (var i = 0; i < runresult.length; i++) 
  {
    cowGirlRunObjects.push(new imageclass('assets/' + runresult[i], 0, 0));
    runanimation[i] = cowGirlRunObjects[i].getImage();
    cowGirlRunLeftObjects.push(new imageclass('assets/' + runresultleft[i], 0, 0));
    leftrunanimation[i] = cowGirlRunLeftObjects[i].getImage();

  }

  // assign the idle objects to the generic object variable
  currentObjects = cowGirlObjects;

  // create an interval for the idle animation
  myInterval = setInterval(incrementIndex, 50);
}

// display all the frames using the draw function as a loop
function draw() 
{

  background(120);

  // check to see if any keys have been pressed
  if (keyIsPressed) 
  {
    // stop the idle interval
    clearInterval(myInterval);
    // set the variable to null - we will check for this later
    myInterval = null;

    // use this if statement to slow the movement animations
    index++;
    if (index > 3) 
    {
      incrementIndex();
      index = 0;
    }

    // move to the right
    if (key == "d") 
    {
      
      // assign the generic animation and object variables
      currentAnimation = runanimation;
      currentObjects = cowGirlRunObjects;

      // make sure we don't go over the size of the arrays
      // keep in mind the idle has 10 and the movement has 8
      if (counter >= currentAnimation.length) 
      {
        counter = 0;
      }

      // move the animation by updating the x component
      currentObjects[counter].setX(currentObjects[counter].getX() + 2);

      // make sure you you assign the x component of the left movement too
      for (var i = 0; i < cowGirlRunLeftObjects.length; i++)
      {
        cowGirlRunLeftObjects[i].setX(currentObjects[0].getX());
      }
        

      // make sure the movement object is assigned to the current object again
      cowGirlRunObjects = currentObjects;

      // this just the opposite of the above.  The character moves to the left here instead
    } 
    else if (key == "a") 
    {

      currentAnimation = leftrunanimation;
      currentObjects = cowGirlRunLeftObjects;

      if (counter >= currentAnimation.length) 
      {
        counter = 0;
      }
      currentObjects[counter].setX(currentObjects[counter].getX() - 2);

      for (var i = 0; i < cowGirlRunObjects.length; i++)
      {
        cowGirlRunObjects[i].setX(currentObjects[0].getX());
      }
        

      cowGirlRunLeftObjects = currentObjects;
    }

    for (var i = 0; i < cowGirlObjects.length; i++)
      cowGirlObjects[i].setX(currentObjects[0].getX());

  } 
  // this last part just checks for the idle and resets the animations
  else 
  {
    if (myInterval == null) 
    {
      myInterval = setInterval(incrementIndex, 50);
    }
    currentObjects = cowGirlObjects;
    currentAnimation = animation;
  }

  // display the images regardless of the movement or idle
  image(currentAnimation[counter], currentObjects[counter].getX(), currentObjects[counter].getY());

}

function incrementIndex() 
{
  // increment the index
  counter += 1;
  // if we reach the end of the array, start over
  if (counter >= currentObjects.length) 
  {
    counter = 0;
  }
}