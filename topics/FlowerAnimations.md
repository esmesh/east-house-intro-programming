# Adding movement

Adding variables let us have cleaner code for the [flower example](Flower.md), but it's still just a static picture. By leveraging some built in variables and strategic math, we can spice it up a lot!

## Global Variables Defined by p5.js
p5.js defines some variables for our use that store properties of the enviroment. A fun one is the current location of the mouse pointer!

- `mouseX` (number): x-coordinate of the mouse
- `mouseY` (number): y-coordinate of the mouse

If we use `mouseX` and `mouseY` as coordinates when drawing a shape, our picture becomes interactive!

** Add this to the end of the flower demo before the last `}`:**
```javascript
  // Add a "bee" where the mouse is
  fill("Yellow");
  ellipse(mouseX, mouseY, 5);
```

## AND variables can change each time draw() is called!
The "bee" moves as we move the mouse because the mouse coordinates keep changing and the picture is being constantly re-drawn.

If we change a variable each time we draw, our picture changes too!

**Find the line of code that draws the sun:**
```javascript
  ellipse(sunX, sunY, sunSize);
```

**AFTER draing the sun, add 1 to `sunX`:**
```javascript
  ellipse(sunX, sunY, sunSize);
  sunX = sunX + 1; // ADD this line of code to slowly move the sun!
```
