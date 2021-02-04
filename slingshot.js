class Slingshot{
    constructor(bodya,pointb){
      var options={
          bodyA:bodya,
          pointB:pointb,
          stiffness:0.04,
          length:10
      }
      this.pointb=pointb;
     this.chain=Constraint.create(options)
     World.add(world,this.chain) 
    }
    display(){
       if (this.chain.bodyA){
        var pointA=this.chain.bodyA.position
        var pointB=this.pointb
        strokeWeight(4)
        line(pointA.x,pointA.y,pointB.x,pointB.y)
       }
    }
    fly(){
        this.chain.bodyA=null;      
    }
}