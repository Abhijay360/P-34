class Hero {
    constructor(x, y, r ) {
      var options = {
          'frictionAir':1.0,
          'density':2.0
      }
      this.body = Bodies.circle(x, y, r/2, options);
      //this.w = x;
      //this.h = y;
      this.r = r;
      this.image=loadImage("images/Superhero-01.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //var angle=this.body.angle;
      //pos.x=mouseX;
      //pos.y=mouseY;
      push();
      translate (pos.x, pos.y);
      //rotate(angle);
      //ellipseMode(RADIUS);
      //strokeWeight(4);
      //stroke("blue");
      fill("red");
      imageMode(CENTER);
      image(this.image,0, 0 ,this.r+150, this.r);
      pop();
    }
  };
  