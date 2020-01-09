
function Asteroid() {
    this.pos = createVector(random(width), random(height))
    this.r = random(15, 50);
    this.total = floor(random(5,15));


    this.render = function () {
        push();
        stroke(255);
        noFill();
        translate(this.pos.x, this.pos.y);
        
        beginShape();
        for (let i = 0; i < this.total; i++){
            let angle = map(i, 0, this.total, TWO_PI);
            let x = this.r * cos(angle);
            let y = this.r * sin(angle);
            vertex(x, y);
           
        }
        endShape(CLOSE);
        pop();
    }
}