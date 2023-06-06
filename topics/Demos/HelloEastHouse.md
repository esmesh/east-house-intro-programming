<iframe width="250" height="250" src="https://editor.p5js.org/esmvcs/full/rJE31VqfE"></iframe>

```javascript
// SETUP: Called automatically ONCE 
//        at the start of the program
//
// * We don't draw things from inside these { }'s
function setup() {
  createCanvas(200, 200);
}

// DRAW : Called automatically repeatedly to keep
//        drawing whatever we define within { }
function draw() {
  background(220); // 220 is a # value for a gray background
  text("Hello East House!", 25, 25);

  // New text and a y coordinate further down on the canvas
  text("My name is Erika!", 25, 100); 
}
```
