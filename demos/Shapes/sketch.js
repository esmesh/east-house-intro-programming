// East House 2019 - p5.js Demo

// setup : Initialization runs once; called automatically
function setup() {
    
    // Create a blank canvas 600 pixels high and 600 pixels wide
    createCanvas(400, 400);
    
    // Top left - a point and a line
    point(20, 20);
    
    line(30, 30, 150, 30);
    
    // Top center - rectangle
    rect(200, 30, 50, 80);
    
    // Top right - ellipse
    ellipse(350, 50, 50, 80);
    
    // Center - circle via an ellipse with the same w and h
    ellipse(200,200,70,70);
    
    // Bottom left - triangle
    triangle(50, 300, 30, 350, 70, 350);
    
    // Bottom right - quad
    quad(250, 300, 325, 325, 350, 375, 225, 370);
    
}

// draw : Loops forever; called automatically
function draw() {
    
}

 