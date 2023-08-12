
difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup(){

    video = createCapture(VIDEO);
    video.size(500,400);
    canvas = createCanvas(400,400)
    canvas.position(500,90);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is Initialized!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
difference = floor(leftWristX - rightWristX);
console.log("leftWristX = " + leftWristX + " rightWristX = "+ rightWristX + " difference = " + difference);

    }
}

function draw(){
    background('#AAF0D1');
    document.getElementById("font_size").innerHtml = "Font size of the the text will be = "+ difference + "px";
    textSize(difference);
    fill ('#40E0D0');
    stroke('aquamarine');
text('Rana',50,400)

}