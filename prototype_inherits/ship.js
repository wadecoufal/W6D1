const MovingObject =require('./moving_object.js');
const inherits = require('./inherits.js');

function Ship(name, color, type) {
  this.type = type;
  this.name = name;
  MovingObject.call(this, color);
}

Ship.inherits(MovingObject);

Ship.prototype.float = function(){
  console.log(' I AM FLOATING IN THE WATER');
};

module.exports = Ship;