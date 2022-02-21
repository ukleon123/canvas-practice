var canvas;
var ctx;
var frame;
var obj = [];
var obj1, obj2;

var particle = function(x, y){
    this.vel = new vec2d(0, 0);
    this.pos = new vec2d(x, y);
}


window.onload = function(){
    canvas = document.getElementById("minigame");
    ctx = canvas.getContext("2d");
    obj1 = new particle(1, 250);
    obj2 = new particle(499, 1);
    obj1.vel.x = Math.random() * 10;
    obj1.vel.y = Math.random() * 10;
    obj2.vel.x = Math.random() * 10;
    obj2.vel.y = Math.random() * 10;
    obj.push(obj1);
    obj.push(obj2);
    particle.prototype.draw = function(){
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, 10, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fillStyle = "black";
        ctx.fill();
    }
    frame = window.requestAnimationFrame(draw);
}

var draw = function(){
    ctx.clearRect(0,0,500,500);
    for(var i = 0; i < 2; i++){
        obj[i].draw();
        if (obj[i].pos.x >= 500 || obj[i].pos.x <= 0) 
            obj[i].vel.x = -1 * obj[i].vel.x;
        if (obj[i].pos.y >= 500 || obj[i].pos.y <= 0) 
            obj[i].vel.y = -1 * obj[i].vel.y;
        
        if (obj1.pos.sub(obj2.pos).length() <= 20){
            var tmp = obj2.vel;
            obj2.vel = obj1.vel;
            obj1.vel = tmp;
        }
        obj[i].pos.x += obj[i].vel.x;
        obj[i].pos.y += obj[i].vel.y;
    }
    
    frame = window.requestAnimationFrame(draw);
}
