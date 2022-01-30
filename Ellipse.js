var canvas;
var ctx 
var raf;

var Ellipse = function(color, a, b){
    this.a = a;
    this.b = b;
    this.color = color;
    this.theta = 0
};


var E = new Ellipse('blue', 20, 10);
var S = new Ellipse('black', 80, 50);
var C = new Ellipse('green', 40, 100);

window.onload = function(){
    canvas = document.getElementById("minigame");
    ctx = canvas.getContext('2d');
    
    Ellipse.prototype.draw = function(){
        ctx.beginPath();
        ctx.arc(this.a * Math.cos(this.theta) + 250, this.b * Math.sin(this.theta) + 250, 5 , 0 , Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    raf = window.requestAnimationFrame(draw);
}

function draw(){
    ctx.clearRect(0,0, 500, 500);
    E.draw();
    S.draw();
    C.draw();
    E.theta += 0.05;
    S.theta += 0.1;
    C.theta += 0.2;
    raf = window.requestAnimationFrame(draw);
};