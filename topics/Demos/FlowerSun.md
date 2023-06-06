```javascript
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// VARIABLES
// So that we don't have to keep doing a lot of math by hand, set up
// some common numbers we'll need. If we use these as a base, we can let
// the computer do the math for us!
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let canvasSize = 300;

// Make the sun size based on the canvas size AND start it down a bit from
// the top left corner.
let sunSize = canvasSize/3;
let sunX = 0;
let sunY = sunSize/4;

// Make the flower size based on the canvas size
let flowerWidth=canvasSize/10;
let flowerHeight=flowerWidth*2;
let stemWidth=flowerWidth/10;
let stemHeight=flowerHeight*1.5;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// SETUP: Called automatically ONCE 
//        at the start of the program
//
// * We don't draw things from inside these { }'s
//     This is where we do things like define the size of the canvas 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function setup() {
  createCanvas(canvasSize, canvasSize);
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// DRAW : Called automatically repeatedly to keep
//        drawing whatever we define within { }
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function draw() {

  // Set the background color of the ground
  // https://www.w3schools.com/colors/colors_names.asp
  background("Green")
  
  // Remove the border line from all shapes
  noStroke();

  // Make the top 3/4 of the canvas blue for the sky 
  // (so start at 0,0 and full canvas width but not the full height down)
  fill("LightSkyBlue");
  rect(0, 0, canvasSize, 3*canvasSize/4);
  
  
  // Draw the sun. A lot of it will hang off the canvas, that's ok.
  fill("Gold");
  ellipse(sunX, sunY, sunSize);

  // Figure out where the flower meets the stem
  let stemTopX = canvasSize/2;
  let stemTopY = canvasSize/2;
  
  // Add a flower stem that starts in the middle of the canvas 
  // (minus the stem width/2 so the stem itself is centered)
  fill("LightGreen");
  rect(stemTopX-stemWidth/2, stemTopY, stemWidth, stemHeight);
  
  // Make the bottom half of the flower
  fill("Orchid");
  arc(stemTopX, stemTopY-flowerHeight/2, flowerWidth, flowerHeight, 0, PI);
  
  // The top half of the flower is 3 triangles
  let triSize = flowerWidth/3; // width and height

  // Draw the left most triangle
  let triX = stemTopX - flowerWidth/2;
  let triY = stemTopY - flowerHeight/2;
  triangle(
    triX, triY, // 1st corner
    triX+triSize/2, triY-triSize, // 2nd corner
    triX+triSize, triY // 3rd corner
  );

  // Shift to the right and draw it again
  triX = triX + triSize;
  triangle(
    triX, triY, // 1st corner
    triX+triSize/2, triY-triSize, // 2nd corner
    triX+triSize, triY // 3rd corner
  );
  
  // Shift to the right and draw it again
  triX = triX + triSize;
  triangle(
    triX, triY, // 1st corner
    triX+triSize/2, triY-triSize, // 2nd corner
    triX+triSize, triY // 3rd corner
  );
}
```