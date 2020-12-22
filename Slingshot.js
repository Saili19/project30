class Slingshot {
  constructor(bodyA, pointB){
  var options = {
      bodyA : bodyA,
      pointB : pointB,
      stiffness : 0.02,
      length : 20
  }
  
  this.sling = Constraint.create(options);
  this.pointB = pointB
  World.add(world,this.sling);
  }
  
  fly(){
     this.sling.bodyA = null;
   }
  
  attach(){
    this.sling.bodyA = body ;
  }

  display(){
    if(this.sling.bodyA){
      var posA = this.sling.bodyA.position;
      var posB = this.pointB;
      fill(41,125,236);
      strokeWeight(4);
      line(posA.x,posA.y,posB.x,posB.y);
    }
    
    
}
  
  
  
  
  
  
  }