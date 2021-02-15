class Paper{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:10,
            density:1.2
        }
        this.image = loadImage('paper.png')
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r/2,options);
        World.add(world,this.body);
    }

    display(){

        push();
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        ellipse(0,0,this.r-40,this.r-40);
        image(this.image,0,0,80,80);
        pop();
    }
}