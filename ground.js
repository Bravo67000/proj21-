class Ground {
    constructor(x,y,w,h){
        let options = {
            isStatic:true

        };
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body)
        this.x = x; 
        this.y = y;
        this.w = w;
        this.h = h;
    }
    show() {
        
        push();
        rectMode(CENTER);
        fill("yellow")
        rect(this.body.position.x,this.body.position.y,this.w,this.h);
        pop();
    }
}