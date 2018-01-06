let x = 0;
let y = 0;
let spacing = 40;

function setup(){
  let w = $(window).width();
  let h = $(window).height();
  createCanvas(w,h);
  background(33);

}

function draw(){
  stroke(255);
  if(random(1) > 0.5){
    // creating a /
    line(x,y+spacing,x+spacing,y);
  }else {
    // creating a \
    line(x,y,x+spacing,y+spacing);
  }
  x += spacing;
  if(x > width){
    x = 0;
    y += spacing;
  }
  if(y > height){
    noLoop();
  }
}
