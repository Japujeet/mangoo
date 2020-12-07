class Stone{
    constructor(w,h){
        var options={
            isStatic:false,
           'restitution':0.1,
           'friction':0.8,
           'density':3
        }
        this.body = Bodies.rectangle(120,420,w,h,options);
        
        this.width=w;
        this.height=h;
        this.image=loadImage("Plucking mangoes/stone.png")
        
        World.add(world, this.body);
       
    }
    display(){
      

        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}