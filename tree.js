class Tree{
    constructor(w,h){
        var options={
            isStatic:true,
            density:0
        }
        this.body = Bodies.rectangle(600,300,w,h,options);
        this.width=w;
        this.height=h;
        this.image=loadImage("Plucking mangoes/tree.png")
        
        World.add(world, this.body);
       
    }
    display(){
        
        imageMode(CENTER);
        image(this.image,600,300,this.width,this.height);
    }
}