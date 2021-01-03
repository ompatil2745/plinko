class Plinko {
    constructor(x,y) {
      var options = {
         restituition:1,
         friction:0,
         isStatic:true
      }
      this.body = Bodies.circle(x,y,this.r,options);
      
      this.r = 10;

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      push()
      translate(pos.x,pos.y)
      rotate(angle);
      noStroke()
      imageMode(CENTER);
      ellipseMode(RADIUS);
      fill("white");
      ellipse(0,0, this.r, this.r);
      pop()
    }
  };
