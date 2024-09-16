let catImage;
let catSize = 50; // Initial size of Mr. Crinkles
let score = 0;
let yogaPoses = ["Tree Pose", "Cat Stretch", "Downward Dog"]; // Example yoga poses
let currentPose = "";
let timer = 60; // Time for each pose

function preload() {
    // Load the image of Mr. Crinkles
    catImage = loadImage('cat.png'); // Make sure 'cat.png' is in the same directory
}

function setup() {
    createCanvas(800, 600);
    textSize(32);
    textAlign(CENTER, CENTER);
    currentPose = random(yogaPoses); // Start with a random pose
}

function draw() {
    background(224, 255, 224); // Light green background

    // Draw Mr. Crinkles
    image(catImage, width / 2 - catSize / 2, height / 2 - catSize / 2, catSize, catSize);

    // Display the current yoga pose
    fill(0);
    text("Do the " + currentPose + "!", width / 2, 50);

    // Display score and timer
    text("Score: " + score, width - 100, 30);
    text("Time: " + timer, width - 100, 70);

    // Update timer
    if (frameCount % 60 == 0 && timer > 0) {
        timer--;
    }

    // End the game if time runs out
    if (timer == 0) {
        text("Time's up! Your final score is " + score + ".", width / 2, height / 2);
        noLoop(); // Stop the game loop
    }
}

function mousePressed() {
    // Simulate "yoga pose completed"
    score += 10;
    catSize += 5; // Mr. Crinkles gets "fatter" with each successful pose
    currentPose = random(yogaPoses); // Change to a new pose
    timer = 60; // Reset timer
}
