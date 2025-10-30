let e1; //elemento 1
let e2; //elemento 2

//let cantidad=1000 //cantidad de elementos
let e=[] //lista de elementos vacios
function setup() {
  createCanvas(400, 400);
  for(let i=0; i<1000; i++){ //aumento de elementos
    e[i]=new Emoji(random(width),random(height));
  }
  //e1=new Emoji(width/3,width-width/3); //recoleccion de elemento
  //e2=new Emoji(width-width/3,width/3); //recoleccion de elemento
}

function draw() {
  background(220);
  textAlign(CENTER)
  textSize(10);
  
  for(let i=0;i<e.length;i++){
    e[i].show();
    e[i].move();
  }
  
  /*e1.show(); //generación elemento
  e1.move(); //movimiento
  e2.show(); //generación elemento
  e2.move();*/ //movimiento
  
}

class Emoji{
  
  constructor(x,y){
    this.x=x;
    this.y=y;
  }
  show(){
    text('🥶',this.x,this.y);
  }
  move(){
    this.y=this.y+1
    if(this.y>height+9){ 
       this.y=0
       }
  }
}