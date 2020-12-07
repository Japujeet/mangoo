class Boy{
    constructor(w,h){
        var options={
            isStatic:true
        }
        this.body = Bodies.rectangle(300,650,w,h,options);
        this.width=w;
        this.height=h;
        this.image=loadImage("Plucking mangoes/boy.png")
        
        World.add(world, this.body);
       
    }
    display(){
        
        imageMode(CENTER);
        image(this.image,200,500,this.width,this.height);
    }
}