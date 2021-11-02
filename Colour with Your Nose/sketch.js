//The basics of this code came from the coding train website
//https://thecodingtrain.com/learning/ml5/index.html

let video;
let poseNet;
let pose;
let skeleton;

function setup() {
    createCanvas(displayWidth, displayHeight);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(poses) {
    if (poses.length > 0) {
        pose = poses[0].pose;
        skeleton = poses[0].skeleton;
    }
}

function modelLoaded() {
    console.log('poseNet ready');
}

function draw() {
    textSize(20);
    text('Move Your Nose around to colour the screen', 8, 20);
    if (pose) {
        fill(0, 0, 70);
        rect(pose.nose.x, pose.nose.y, 20);
        noStroke();
    }
}
