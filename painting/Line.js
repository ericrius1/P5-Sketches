class Line {
    constructor(x1, y1, x2, y2) {
      this.startingPos = createVector(x1, y1);
      this.endingPos = createVector(x2, y2);

      let direction = p5.Vector.sub(this.endingPos, this.startingPos);    
      direction.rotate(Math.PI/2);
      this.crossLineStartingPoint = createVector( (this.endingPos.x + this.startingPos.x)/2, (this.endingPos.y + this.startingPos.y)/2);
      ellipse(this.crossLineStartingPoint.x, this.crossLineStartingPoint.y, 20, 20);
      this.crossLineEndingPoint = p5.Vector.add(this.crossLineStartingPoint, p5.Vector.mult(direction, 1));

      console.log(this.crossLineEndingPoint)

    }

    draw(){
      line(this.startingPos.x, this.startingPos.y, this.endingPos.x, this.endingPos.y)
      ellipse(this.crossLineStartingPoint.x, this.crossLineStartingPoint.y, 20, 20);
      
      line(this.crossLineStartingPoint.x, this.crossLineStartingPoint.y, this.crossLineEndingPoint.x, this.crossLineEndingPoint.y);
    }
  }