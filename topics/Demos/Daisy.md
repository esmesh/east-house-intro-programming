<iframe height="450" width="450" src="https://editor.p5js.org/esmvcs/full/zQ89pRGVp"></iframe>

```javascript
// Translate, rotate, color, and ellipse mode demo

function setup() {
  createCanvas(400, 400);
}

function draw() {
  // Make all the petals white with
  // a black outline
  fill("white");
  stroke("black");
  
  // To make life easy, tell p5 that the center
  // of the canvas is point 0,0
  translate(200,200);
  
  // This is also going to be easier if we
  // draw all out petals starting from a
  // corner vs. the center
  ellipseMode(CORNER);
  
  // 8 petals, working our way around
  // The petals look angled b/c this rotates
  // around a corner, not the very end.
  for(var num=0; num<8; num++)
  {
    rotate(TWO_PI/8 * num);
    ellipse(0,0,150,70);
  }
  
  // Back to no rotation
  rotate(0);
  
  // Draw a yellow center
  noStroke();
  fill("yellow");
  ellipseMode(CENTER);
  ellipse(0,0,75); 
}
```
