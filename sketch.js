var ball;
var pos;
var drawing=[];
var currentpath=[];



function setup(){
    var canvas = createCanvas(500,500);
    canvas.mousePressed(StartPath);
    canvas.mouseReleased(EndPath);
}
function StartPath(){
    currentpath=[];
    drawing.push(currentpath);
}
function EndPath(){
    
}

function draw(){
    background("blue");
    if(mouseIsPressed){
        var point={x:mouseX, y:mouseY}
        currentpath.push(point);
    }
    stroke("red");
    strokeWeight(3);
    for(var i=0;i<drawing.length;i++){
        var path=drawing[i];
        beginShape();
        for(var j=0;j<path.length;j++){
            vertex(path[j].x,path[j].y);
        }
        endShape();
    }

    
}