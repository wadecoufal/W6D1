console.log("WE DID IT");
const MovingObject = require('./moving_object.js');
const Asteroid = require('./asteroid.js');
const Game = require('./game.js');

document.addEventListener('DOMContentLoaded', () => {
  const canvasEl = document.getElementsByTagName("canvas")[0];
  canvasEl.height = window.innerHeight;
  canvasEl.width = window.innerWidth;
  
  const ctx = canvasEl.getContext("2d");
  
  // const circle = new MovingObject({pos: [200,200], vel: [10,10], radius: 10, color: "#00FF00"});
  // circle.draw(ctx);
  // 
  // const aster = new Asteroid({pos: [30,30]});
  // aster.draw(ctx);
  
  const game = new Game();
  game.draw(ctx);
  
});