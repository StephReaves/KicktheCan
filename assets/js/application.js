$(document).ready(function() {
  game = new Game()
  setInterval(function() {game.loop(); }, 2000);

   Mousetrap.bind('right', function(){
    game.link.moveright()
   })

   Mousetrap.bind('left', function(){
    game.link.moveleft()
   })


});

function Game() {
  this.$arena = $('#arena')
  this.link = new Link(this.$arena)
  this.ballon = [new Ballon(this.$arena), new Ballon(this.$arena)]
}

Game.prototype.loop = function() {
  this.ballon[0].movedown()
  this.ballon[1].movedown()
}


