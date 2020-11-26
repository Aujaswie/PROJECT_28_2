class Tree {
    constructor(x, y, width, height) {
      var options = {
          'isStatic':true,
          'friction':3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("Plucking mangoes/tree.png");
      
      World.add(world, this.body);
    }
    display(){
      push();
      var pos =this.body.position;
      rectMode(CENTER);
      fill("lightpink");
      image (this.image,pos.x,pos.y,this.width,this.height);
      pop();
    }
  };