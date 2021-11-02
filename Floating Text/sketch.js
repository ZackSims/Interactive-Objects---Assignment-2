//The basics of this code came from the coding train website
//https://thecodingtrain.com/learning/ml5/index.html

let video;
let poseNet;
let pose;
let skeleton;

function setup() {
    createCanvas(1200, 600);
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
    image(video, 0, 0);
    filter(GRAY);
    filter(BLUR, 1);


    if (pose) {
        noFill();
        text('WORDS', pose.nose.x, pose.nose.y, 100);
        textSize(40);
        textAlign(CENTER);
        stroke('BLUE');
        strokeWeight(2);


    }
}
