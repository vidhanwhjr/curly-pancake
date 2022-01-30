video = "";
status1 = "";
function preload(){
    video = createVideo('video.mp4');
}
function setup(){
    canvas = createCanvas(480, 380);
    canvas.center();
    video.hide();
}
function play(){
    classifier = ml5.objectDetector('cocssd', modelLoaded);
    document.getElementById('status').innerHTML = "Status = detecting objects";
}
function modelLoaded(){
    console.log('Model Loaded');
    status1 = true;
    video.loop();
    video.speed(2);
    video.volume(0);
}

function draw(){
    image(video, 0, 0, 480, 380);
}