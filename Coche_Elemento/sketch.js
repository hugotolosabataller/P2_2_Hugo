let coche1;
let coche2;

function setup() {
  //frameRate(2);
  createCanvas(400, 400);
  coche1=new Coche(100,100,40);
  coche2=new Coche(200,random(height),random(100,300));
}

function draw() {
  background(220);
  coche1.show();
  coche1.move();
  coche2.show();
  coche2.move();
}

class Coche {
  
  constructor(x,y,ancho){
    this.x=x;
    this.y=y;
    this.ancho=ancho;
  }
  
  show(){
    rect(this.x,this.y,this.ancho,50);
  }
  move(){
    this.x=this.x+1;
    if(this.x>width-this.ancho){
       this.x=0;
       }
  }
}