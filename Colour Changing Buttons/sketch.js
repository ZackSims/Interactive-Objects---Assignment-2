//The basics of this code came from the coding train website
//https://thecodingtrain.com/learning/ml5/index.html


let video;
let button, button1, button2;
let poseNet;
let canvas;

let noseY = 0;
let noseX = 0;


function setup() {

    canvas = createCanvas(640, 480);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelReady);
    poseNet.on('pose', gotPoses);



    button = createButton('Make Your Nose Blue');
    button.position(canvas.width / 2, canvas.height / 2);

    button1 = createButton('Make Your Nose Green');
    button1.position(canvas.width / 5, canvas.height / 2);

    button2 = createButton('Make Your Nose Red');
    button2.position(canvas.width / 3, canvas.height / 1.6);

}

function loaded() {
    console.log("loaded!");
}

function gotPoses(poses) {
    if (poses.length > 0) {

        let nx = poses[0].pose.keypoints[0].position.x;
        let ny = poses[0].pose.keypoints[0].position.y;
        noseX = lerp(noseX, nx, 0.5);
        noseY = lerp(noseY, ny, 0.5);



    }
}

function modelReady() {
    console.log("model ready!");
}

function draw() {

    image(video, 0, 0);
    ellipse(noseX, noseY, 50);

    if ((noseX > button.x) && (noseX < (button.width + button.x)) && (noseY > button.y) && ((noseY < (button.height + button.y)))) {
        r = random(0);
        g = random(0);
        b = random(255);

        fill(r, g, b);
    }

    if ((noseX > button1.x) && (noseX < (button1.width + button1.x)) && (noseY > button1.y) && ((noseY < (button1.height + button1.y)))) {
        r = random(0);
        g = random(255);
        b = random(0);

        fill(r, g, b);
    }

    if ((noseX > button2.x) && (noseX < (button2.width + button2.x)) && (noseY > button2.y) && ((noseY < (button2.height + button2.y)))) {
        r = random(255);
        g = random(0);
        b = random(0);

        fill(r, g, b);
    }

}
