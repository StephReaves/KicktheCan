function Link(arena) {
  this.$arena = arena;
  this.x = this.$arena.width() / 2;
  this.y = this.$arena.height() - 50;
  this.dir = "ready to rock";
  this.speed = 5;
  this.height = 67;
  this.width = 59;
  this.name = 'link';
  this.initDisplay();
  this.sprite = 'url("/linksprite.gif")';
  console.log("creating link")
}

Link.prototype.initDisplay = function() {
  this.$sprite = $("<div class='" + this.name + "'></div>")
  this.$arena.append(this.$sprite);

  this.updateDisplay();
  console.log("In initDisplay")
}

Link.prototype.updateDisplay = function() {
  console.log("in updateDisplay")
  this.$sprite.css('top', this.y)
  this.$sprite.css('left', this.x)
}

Link.prototype.moveright = function() {
  this.x += this.speed
  this.updateDisplay();
}

Link.prototype.moveleft = function() {
  this.x -= this.speed
  this.updateDisplay();
}
