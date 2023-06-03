## Smiley demo code
```javascript
// SETUP: Called automatically ONCE 
//        at the start of the program
//
// * We don't draw things from inside these { }'s
//     This is where we do things like define the size of the canvas 
//     (400x400 pixels in this case) & setup "variables" that we will use later
function setup() {
  createCanvas(400, 400);
}

// DRAW : Called automatically repeatedly to keep
//        drawing whatever we define within { }
function draw() {
  
  // "Methods" are commands that we "call" to make something specific happen.
  // We'll call several methods to draw our final picture piece by piece.
  
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // Set the background color
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  
  // The *background* method sets the canvas color based on the color name
  // that we provide in (). 
  background("White"); // Because it's a name made out of letters, White has to be in ""'s.
                      // The color is a "parameter" for the methods.
  
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // Draw HI using basic lines
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  
  // The *line* method needs 4 parameters:
  //    - X for the starting point
  //    - Y for the starting point
  //    - X for the ending point
  //    - Y for the ending point
  line(20, 20, 20, 100);    // H left - draws a line from (20,20) to (20,100)
  line(60, 20, 60, 100);    // H right
  line(20, 60, 60, 60);	    // H middle
  line(100, 20, 100, 100);  // I
  
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // Draw a yellow smiley
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  
  // *fill* defines what color the interior of all shapes after this should be
  // Like the background method, it takes a single color name parameter
  fill("Yellow");
  
  // The *ellipse* method can be used to draw circles and ovals. 
  // Since we just need circles right now, we need 3 parameters:
  //   - The X & Y coordinates of the circle center
  //   - The width (diameter) of the circle
  ellipse(200,200,200);      // Face - draws a circle 200 pixels wide centered at (200, 200)
  ellipse(200,200,15);       // Nose - draws a circle 15 pixels wide centered at (200, 200)  

  // We use the *arc* method to draw the mouth. This needs more parameters because
  // we define the size as if it were a full ellipse and THEN where to start/stop drawing
  //   - X & Y of the arc center - (200,220) in this case
  //   - The width and height (which are the same if a circular arc)
  //   - start angle: 0 degrees in this case
  //   - stop angle: PI (a full circle rotation would be 2*PI)
  arc(200,220,100,100,0,PI); 
  
  // Change the fill color to black before drawing the eyes
  fill("Black");
  ellipse(160,160,10);       // Left eye
  ellipse(240,160,10);       // Right eye
  
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // Sign my name by printing text in the bottom right corner
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  text("-- Erika Mesh :)", 300, 375);

  
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // Draw a few more small shapes along the bottom of the canvas
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  
  // Make all shapes after this purple
  fill("White");
  
  // Rectangle with a top left corner of (25, 350)
  // and a wdith of 20 & height of 30
  rect(25, 350, 20, 30);  
  
  // Triangle with corners at: 
  // - 80, 350
  // - 70, 375
  // - 90, 375
  triangle(80, 350, 70, 375, 90, 375);
  
  // Quad (4 cornered shape) with corners at:
  // - 100, 350 (1st corner drawn)
  // - 120, 360 (2nd)
  // - 105, 380 (3rd)
  // - 130, 390 (last before connecting back to 1st corner)
  quad(100, 350, 120, 360, 130, 390, 105, 380);
  
  // Ellipse centered at 175, 375
  // with a width of 50 and height of 30
  ellipse(175, 375, 50, 30);

}
```
