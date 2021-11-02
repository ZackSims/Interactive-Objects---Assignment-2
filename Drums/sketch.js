//The basics of this code came from the coding train website
//https://thecodingtrain.com/learning/ml5/index.html

let video;

let noseX;
let noseY;

let bell;
let snare;

function preload() {
    bell = loadSound('bell.wav')
    snare = loadSound('snare.wav')

}

function setup() {

    createCanvas(600, 500);
    video = createCapture(VIDEO);
    video.hide();

    let poseFinder = ml5.poseNet(video)
    poseFinder.on("pose", gotPose)

}



function modelLoaded() {
    console.log('poseNet ready');
}

function draw() {
    background(220);
    image(video, 0, 0, 600, 500)
    textSize(20);
    text('Move Your Nose around the screen to create sounds', 8, 20);
    text('Move up to hear a bell and left for a drum', 8, 490);

    noStroke();
    fill(255, 255, 255)
    ellipse(noseX, noseY, 40)
    if (noseX < 200) {
        if (!snare.isPlaying()) {
            snare.play()
        }
    }

    if (noseY < 200) {
        if (!bell.isPlaying()) {
            bell.play()
        }
    }
}

function gotPose(poses) {
    noseX = poses[0].pose.nose.x
    noseY = poses[0].pose.nose.y
}
