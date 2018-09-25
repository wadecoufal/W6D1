const MovingObject = require('./moving_object.js');
const Util = require('./utils.js');

function Asteroid(options) {
  options = options || {};
  options.color = "yellow";
  options.pos = options.pos;
  options.radius = 20;
  options.vel = options.vel || Util.randomVec(4);
  
  MovingObject.call(this, options);
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;