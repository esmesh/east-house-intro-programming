<iframe height="350" width="350" src="https://editor.p5js.org/esmvcs/full/xqU7jjuHi"></iframe>

Click the mouse inside the p5 canvas to make the target move faster.
The speed can go up to 10 before it resets back to 1.

```javascript
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// VARIABLES
// So that we don't have to keep doing a lot of math by hand, set up
// some common numbers we'll need. If we use these as a base, we can let
// the computer do the math for us!
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Declare these  as global so we can use them in setup AND draw
var canvasSize;
var centerX, centerY, targetSize, direction, speed;

function setup() {
  // I want a square canvas and am defining 1 variable to set that up front
  canvasSize = 300;

  // Start our image on the left
  centerX = 0;

  // Figure out where the image y location needs to be for
  // it to be centered vertically
  centerY = canvasSize / 2;

  // Make it 1/3 the size of the canvas
  targetSize = canvasSize / 3;

  // We want to start by slowly moving the target to the right
  // so we begin with a "direction" that will make X go up by
  // 1 each time.
  direction = 1;
  speed = 1;

  // Create the canvas as a square
  createCanvas(canvasSize, canvasSize);
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// SETUP: Called automatically ONCE 
//        at the start of the program
//
// * We don't draw things from inside these { }'s
//     This is where we do things like define the size of the canvas 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function draw() {
  // ****************************************************
  // Setup the background and remove stroke lines 
  // ****************************************************
  
  background("lightgrey");
  noStroke();

  
  // ****************************************************
  // Draw the target 
  // & show the speed in the top left corner
  // ****************************************************
  
  // Draw the bigger circle first
  fill("red");
  ellipse(centerX, centerY, targetSize);

  // Then a smaller one over the big one
  fill("white");
  ellipse(centerX, centerY, (2 * targetSize) / 3);

  // And one more even smaller
  fill("red");
  ellipse(centerX, centerY, targetSize / 3);

  text(speed, 25, 25);
  
  // ****************************************************
  // Make the target move a bit 
  // ****************************************************
  
  // Update X based on the current direction & speed
  centerX = centerX + direction * speed;

  
  // ****************************************************
  // Check the direction we're moving and flip it
  // ****************************************************
  
  // If the center of the target has moved past the RIGHT
  // boundary (greater than the canvas size)
  if (centerX > canvasSize) 
  {
    // Change the direction to be NEGATIVE so the target moves
    // left
    direction = -1;
  }

  // If the center of the target has moved past the LEFT
  // boundary (less than 0 since that == the far left)
  if (centerX < 0) 
  {
    // Change the direction to be POSITIVE so the target moves
    // left
    direction = 1;
  }
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// NEW FUNCTION! -- MOUSE CLICKED
//   This called automatically by p5 if the user clicks a mouse button
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function mouseClicked()
{
  // Check the current mouse location. If its within the
  // canvas, increase the target speed!
  if( mouseX > 0 && mouseX < canvasSize // checking X 
      && mouseY > 0 && mouseY < canvasSize // checking Y
     )
  {
    speed = speed + 1;
  }
  
  // If the speed gets above 10, reset back to 1
  if(speed > 10)
  {
    speed = 1;
  }
     
}
```
