class Particle {
    constructor(x,y,r) {
      var options = {
         restituition:0.4
      }
      this.body = Bodies.circle(x,y,this.r,options);
      this.color=color(random(0,255),random(0,255),random(0,255))
      this.r = r;

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      push()
      translate(pos.x,pos.y)
      rotate(angle)
      noStroke()
      ellipseMode(CENTER);
      fill(this.color);
      ellipse(0,0, this.r, this.r);
      pop()
    }
  };
