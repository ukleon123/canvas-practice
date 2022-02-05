var canvas;
var ctx 
var raf;
var li = [];

var Circle = function(color, speed, a){
    this.a = a;
    this.color = color;
    this.speed = speed;
    this.theta = Math.random() * 0.1;
    
};


for(var i = 0; i < 100; i++){
    li.push(new Circle("black", Math.random() * (0.1-0.01),Math.random() * 500));
}

window.onload = function(){
    canvas = document.getElementById("minigame");
    ctx = canvas.getContext('2d');
    
    Circle.prototype.draw = function(){
        ctx.beginPath();
        ctx.arc(this.a * Math.cos(this.theta) + 250, this.a * Math.sin(this.theta) + 250, 5 , 0 , Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    raf = window.requestAnimationFrame(draw);
}

function draw(){
    ctx.clearRect(0,0, 500, 500);
    for(var i = 0; i < 100; i++){
        li[i].draw();
        li[i].theta += li[i].speed;
    }
    raf = window.requestAnimationFrame(draw);
};