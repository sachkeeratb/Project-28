class Stone {
  constructor(x, y, radius, options) {
    var options = {
      isStatic: false,
      restitution: 0,
      friction: 1,
      density: 1.2
    }
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.body = Bodies.circle(this.x, this.y, this.radius/2, options);
    this.image = loadImage("stone.png");
    World.add(world, this.body);
  }
  
  fly(){
    this.stone = null;
  }
  
  display(){
    push();
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
    image(this.image, 0,0,this.radius/2, this.radius/2);
    pop();
  }
}
