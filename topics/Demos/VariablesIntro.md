<iframe width="450" height="450" src="https://editor.p5js.org/esmvcs/full/rZuWUthoe"></iframe>

```javascript
let canvasSize = 300;
let squareSize = canvasSize/4;

// calc to put the square at the center
// let squareLoc = canvasSize/2 - squareSize/2;

// start the square top left
let squareLocX = 0;
let squareLocY = 0;

// Setup initial red, green, blue values
let r=0;
let g=0;
let b=0;

function setup() {
  createCanvas(canvasSize, canvasSize);
}

function draw() {
  
  // slowly change the background color by change variables
  background(r, g, b);
  r = r + 1;
  g = g + 3;
  
  fill("blue");  
  
  // put the square at the current position
  square(squareLocX,squareLocY,squareSize);
  
  // move square
  squareLocX = squareLocX + 1;
  squareLocY = squareLocY + 2;
}
```
