class Mango {
    constructor(x, y, radius, options) {
      var options = {
        isStatic: true,
        restitution: 0,
        friction: 1,
      }
      this.radius = radius;
      this.x = x;
      this.y = y;
      this.body = Bodies.circle(this.x, this.y, this.radius/2, options);
      this.image = loadImage("mango.png");
      World.add(world, this.body);
    }
    display(){
      push();
      translate(this.body.position.x, this.body.position.y);
      imageMode(CENTER);
      image(this.image, 0,0,this.radius/2, this.radius/2);
      pop();
    }
  }