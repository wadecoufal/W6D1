const Asteroid = require('./asteroid.js');

DIM_X = {};
DIM_Y = {};

NUM_ASTEROIDS = 20;

function Game() {
  this.asteroids = [];
  this.addAsteroids();
}

Game.prototype.addAsteroids = function () {
  
  for (let i = 0; i < 30; i++){
    let pos = this.randPos();
    let aster = new Asteroid({pos: pos});
    this.asteroids.push(aster);
  }
};

Game.prototype.randPos = function() {
  const x = Math.floor(Math.random() * 500);
  const y = Math.floor(Math.random() * 500);
  return [x,y];
};

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0,0, 500, 500);
  
  this.asteroids.forEach( (aster) => {
    aster.draw(ctx);
  });
};

Game.prototype.moveObjects = function() {
  this.asteroids.forEach( (aster) => {
    aster.move();
  });
};

module.exports = Game;