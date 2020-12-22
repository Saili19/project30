class Block {
    constructor(x, y, width, height) {
      var options = {
           restitution : 0.8,
          density: 0.7,
          friction :0.4,
          isStatic:false,
           
      }
       
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visiblity= 255;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;

      if(this.body.speed < 3){
        
      rectMode(CENTER);
      fill(255,0,0);
      rect(pos.x, pos.y, this.width, this.height);
      }
      else{
        World.remove(world,this.body);
        push();
        this.visiblity = this.visiblity-5;
        tint(255,this.Visiblity);
        rect(0,0,this.width,this.height);
        pop();
      }
       
    }
  } 
