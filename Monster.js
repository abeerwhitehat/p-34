class Monster {
  constructor(x,y,width,height)
	{
		var options = { 
			density:5.0,
			frictionAir: 0,
			isStatic: false
		};
	    this.body = Bodies.rectangle(x,y,width,height,options);
		this.width = width;
		this.height = height;
		this.image=loadImage("monster.png");
		World.add(world, this.body);

	}
	display()
	{
				
			push()
			translate(this.body.position.x,this.body.position.y);
			imageMode(CENTER);
			image(this.image, 0,0,this.width, this.height);
			pop()
			
	}
}
