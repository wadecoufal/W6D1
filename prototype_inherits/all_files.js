function MovingObject(color){
  this.color = color;
}

MovingObject.prototype.speed = function() {
  console.log('We R going super fast !');
};




const inherits = Function.prototype.inherits = function (parent) {
  function Surrogate () {}
  Surrogate.prototype = parent.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this; 
};


function Asteroid(name, color) {
  this.name = name;
  MovingObject.call(this, color);
}

Asteroid.inherits(MovingObject);

Asteroid.prototype.space = function() {
  console.log(" I AM IN SPACEEEE");
};

function Ship(name, color, type) {
  this.type = type;
  this.name = name;
  MovingObject.call(this, color);
}

Ship.inherits(MovingObject);

Ship.prototype.float = function(){
  console.log(' I AM FLOATING IN THE WATER');
};
