noseX=0;
noseY=0;

function preload() {
    mustache = loadImage('https://i.postimg.cc/3Rcz7SZg/Mustache.png');
    }

function setup() {
    canvas = createCanvas(540, 400);
    canvas.position(400, 200);
    video = createCapture(VIDEO);
    video.size(540, 400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 540, 400);
    //fill(255,0,0);
    //stroke(255,0,0);
    //circle(noseX, noseY, 20);
    image(mustache, noseX, noseY, 50, 40);
}

function onClick() {
    save('My Filter Image.png')
}

function modelLoaded() {
    console.log('PoseNet is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-20;
        noseY = results[0].pose.nose.y-5;
        console.log("nose x =" + noseX);
        console.log("nose y =" + noseY);
    }
}

