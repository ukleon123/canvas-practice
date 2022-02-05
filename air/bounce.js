var canvas;
var ctx;
var frame;

var particle = function(){
    this.position = new vec2d(0, 0);
    this.velocity = new vec2d(Math.random(), Math.random());
}

var tmp = new particle();
window.onload = function(){
    canvas = document.getElementById("minigame");
    ctx = canvas.getContext('2d');

    particle.prototype.draw = function(){
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, 10, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = "black";
        ctx.fill();

        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        if (0 > this.position.x || this.position.x > 500){
            this.velocity.x = -1 * this.velocity.x;
        }
        if (0 > this.position.y || this.position.y > 500){
            this.velocity.y = -1 * this.velocity.y;
        }
    }
    frame = window.requestAnimationFrame(draw);
}

function draw(){
    ctx.clearRect(0, 0, 500, 500);
    tmp.draw();
    frame = window.requestAnimationFrame(draw);
}
