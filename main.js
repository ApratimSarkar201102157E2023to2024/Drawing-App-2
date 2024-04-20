var random_number = Math.floor((Math.random()*quick_draw_data_set.length)+1);
console.log(quick_draw_data_set[random_number]);
var sketch = quick_draw_data_set[random_number];
document.getElementById("subject").innerHTML = 'Sketch to be Drawn:' + sketch;
var timer_counter = 0;
timer_check = "";
drawn_sketch = "";
answer_holder = "";
var score = 0;
function updateCanvas() 
{
    background("white");
     random_number = Math.floor((Math.random()*quick_draw_data_set.length)+1);
     console.log(quick_draw_data_set[random_number]);
     sketch = quick_draw_data_set[random_number];
     document.getElementById("subject").innerHTML = "Sketch to be drawn:" + sketch;
}
function setup() {
    canvas = createCanvas(280,280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
}
function preload() {
    classifier = ml5.imageClassifier('DoodleNet');
   
}
function draw() {
    strokeWeight(13);
    stroke(0);
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY);
    }
}
function classifyCanvas() {
    classifier.classify(canvas,gotResult);    
}
function gotResult(error,results) {
    if (error) {
        console.error(error);
    }
    console.log(results);
    drawn_sketch = results[0].label;
    document.getElementById("subject").innerHTML = "Sketch to be drawn:" + drawn_sketch;
    document.getElementById("label").innerHTML = "Your Sketch:" + drawn_sketch;
    confidence = Math.round(results[0].confidence*100) + '%';
    document.getElementById("confidence").innerHTML = "Confidence:" + confidence;
}