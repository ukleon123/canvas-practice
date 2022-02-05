function vec2d(x, y){
    this.x = x;
    this.y = y;
}

vec2d.prototype.length = function(){
    return Math.sqrt(this.x * this.x + this.y * this.y);
};
vec2d.prototype.add = function(vec2d){
    return new vec2d(this.x + vec2d.x, this.y + vec2d.y);
};
vec2d.prototype.sub = function(vec2d){
    return new vec2d(this.x - vec2d.x, this.y - vec2d.y);
};
vec2d.prototype.div = function(vec2d){
    return new vec2d(this.x / num, this.y / num);
};
vec2d.prototype.mul = function(num){
    return new vec2d(num * this.x, num * this.y);
};

vec2d.prototype.unitVec = function(){
    return this.div(this.length());
};
vec2d.prototype.dotProduct = function(vec2d){
    return this.x * vec2d.x + this.y + vec2d.y;
};
