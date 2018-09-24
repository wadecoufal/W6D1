const MovingObject =require('./moving_object.js');
const inherits = require('./inherits.js');

function Asteroid(name, color) {
  this.name = name;
  MovingObject.call(this, color);
}

Asteroid.inherits(MovingObject);

Asteroid.prototype.space = function() {
  console.log(" I AM IN SPACEEEE");
};

module.exports = Asteroid;