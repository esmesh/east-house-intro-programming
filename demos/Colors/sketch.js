// East House 2019 - p5.js Demo

// setup : Initialization runs once; called automatically
function setup() {
    
    // Create a blank canvas 600 pixels high and 600 pixels wide
    createCanvas(400, 400);

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
    
}

// draw : Loops forever; called automatically
function draw() {

}

 