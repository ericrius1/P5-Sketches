class Tentacle {

    constructor(){
        this._rotation = createVector(random(360), random(360));
         // See segment.js for more information.
        let point = new p5.Vector(300, 200);

        let current = new Segment(point, 10, 0);
        for (let i = 0; i < 20; i++) {
            let next = new Segment(current, 10, i);
            current.child = next;
            current = next;
        }
        this.head = current;
    }

    follow(x, y){
        this.head.follow(mouseX, mouseY);

    }

    update(){
        this.head.update();
    }

    draw(){

       // push();
        //rotate(this._rotation);
        this.head.follow(mouseX, mouseY);
        this.head.update();
        this.head.show();
        let next = this.head.par;
        while (next) {
          next.follow();
          next.update();
          next.show();
          next = next.par;
        }
       // pop();

    }
}   