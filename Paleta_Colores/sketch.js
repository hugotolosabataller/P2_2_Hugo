let s=3 //contorno
let f=3 //relleno

let c=0 //color
let paleta=['#616161','#e21001','#ffcc00','#ffffff']; //paleta
function setup() {
  createCanvas(1000,1000);
}

function draw() {
  background(paleta[c]);
  if(mouseX>0 && mouseX<width/3){
    c=0;
    f=1;
    s=1;
  }else if(mouseX>width/3 && mouseX<width-width/3){
    c=1;
    f=2;
    s=2;
  }else if(mouseX>width-width/3 && mouseX<width){
    c=2;
    f=0;
    s=0;
  }
  fill(paleta[f]);
  
  stroke(paleta[s]);
  circle(mouseX,mouseY,20,20);
} 