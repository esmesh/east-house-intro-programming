## Colors

### RGB values
Any color can be defined as a combination of the colors **R**ed, **G**reen, and **B**lue. We refer to these as 3 "channels".

![RGB](rgb.png)

Each RGB channel is defined via a number between 0 (none) and 255 (max value for that channel). For example, to get a bright blue, we'd use: r = 0, g = 0, b = 255.

To get grayscale values we use the same value for all 3 channels. For example, black (no color) is r, g, and b all equal to 0. White is all channels set to 255.

When defining colors in p5.js, we'll provide all the values in order (rgb) separated by commas.

|Color|Red|Green|Blue|
|-----|---|-----|----|
|Red|255|0|0|
|Green|0|255|0|
|Blue|0|0|255|
|Yellow|255|255|0|
|Purple|255|0|255|
|Aqua|0|255|255|

To find the RGB values for a specific color, you can use an online RGB table or "picker" such as <a href="https://www.rapidtables.com/web/color/RGB_Color.html" target="_blank">https://www.rapidtables.com/web/color/RGB_Color.html</a> 

### Background
> TODO - changing the background color

### Stroke (line) color
> TODO - stroke color

### Filling shapes
> TODO - fill color

> TODO - note that the color STAYS changed for all future strokes/shapes

## Example

```
    // Set the background to yellow
    background(255,255,0);
    
    // Set the line color (for all points, lines, and shape 
    // outlines) to red
    stroke(255,0,0);
    
    // Top left - a point and a line
    point(20, 20);
    
    line(30, 30, 150, 30);
    
    // Top center - rectangle
    // Draws with a default fill color of white
    rect(200, 30, 50, 80);
    
    // Top right - ellipse
    // Change the fill color to purple
    fill(255,0,255);
    ellipse(350, 50, 50, 80);
    
    // Center - circle via an ellipse with the same w and h
    // Fill color stays purple
    ellipse(200,200,70,70);
    
    // Bottom left - triangle
    // Change fill color to aqua
    fill(0,255,255);
    triangle(50, 300, 30, 350, 70, 350);
    
    // Bottom right - quad
    // Change fill color back to white
    fill(255,255,255);
    quad(250, 300, 325, 325, 350, 375, 225, 370);
    
```

![Colors](colors.png)