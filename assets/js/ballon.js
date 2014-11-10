function Ballon(arena) {
  this.$arena = arena;
  this.x = Math.random() * this.$arena.width();
  this.y = Math.random() * this.$arena.height();
  this.speed = 9;
  this.height = 46;
  this.width = 28;
  this.name = 'ballon';
  this.initDisplay();
}



['initDisplay', 'updateDisplay'].forEach(function (methodName) {
  Ballon.prototype[methodName] = Link.prototype[methodName];
});

Ballon.prototype.movedown = function() {
  this.y += this.speed
  this.updateDisplay()
}
