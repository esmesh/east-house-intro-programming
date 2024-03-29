# Letting the computer do the math
The [smiley face](Smiley.md) example is nice, but it's pretty frustrating to have to work out the exact coordinates/sizes for every shape. Especially if we want to make more complex images.

It'd be a LOT easier to tell the program to make a *"rectangle on the bottom third of the canvas"* or a *"circle in the middle"*.

The computer doesn't understand plain English, but it can at least let us define some base labels & sizes and then do the math for us.
1. A **variable** is a storage location in computer memory that contains a value. 
  - Variables can contain any type of value.
  - They are called "variables" because the value that they store can change - vary - and be updated.
2. An **expression** lets us use common math **operators** (+, -, *, /) to tell the computer to perform calculations for us.

***Anywhere* you need a number value, you can use a number-type variable or an expression with a number-type variable. Likewise for string values and variables.**

## Putting it together
Instead of "hard-coding" our shapes to be a certain size or draw at certain locations, we can define a few variables about the size of the canvas and how big/where we want everything else in relation to that size.

For example, in the flower image below, *everything* is based on the size of the canvas. If we change our minds about how big the canvas square should be, we only have to change **one** number and everything else will scale correctly.

![Flower image](images/flower.png)

#### **Copy & run the full [flower demo code](Demos/FlowerSun.md)**

```javascript
let canvasSize = 300;

// Make the sun size based on the canvas size AND start it down a bit from
// the top left corner.
let sunSize = canvasSize/3;
let sunX = 0;
let sunY = sunSize/4;
```