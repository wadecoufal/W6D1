function MovingObject(color){
  this.color = color;
}

MovingObject.prototype.speed = function() {
  console.log('We R going super fast !');
};

module.exports = MovingObject;