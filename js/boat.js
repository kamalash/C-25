class Boat{

    constructor(x,y,w,h,boatpos){
        var options = {
            restitution:0.8,
            friction:1.0,
            density:1
        }
        this.body = Bodies.rectangle(x,y,w,h,options)
        this.w = w
        this.h = h
        this.boatpos = boatpos
        this.image = loadImage("./assets/boat.png")
        World.add(world,this.body)
    }

    display() {

        var angle = this.body.angle;

         push();
         translate(this.body.position.x, this.body.position.y);
         rotate(angle)
         imageMode(CENTER);
         image(this.image,0, this.boatpos, this.w, this.h);
         pop();
       }



}