class Throw{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.007,
            length:10
        }

        this.pointB=pointB;
        this.throw=Constraint.create(options);
        World.add(world,this.throw);

    }

  fly(){
        this.throw.bodyA=null;
    }

    Launch(body){
        this.throw.bodyA=body;
    }

    display(){
        if(this.throw.body){
            var pointA=this.throw.bodyA.position;
            var pointB=this.pointB;
            strokeWeight(0);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }


    }
}