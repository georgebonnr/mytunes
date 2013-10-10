// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  model: Song,

  initialize: function(){
    this.on('remove', function(song){
      this.remove(song);
      this.playFirst();
    });
    this.on('add',function(){
      this.playFirst();
    });
  },

  playFirst: function() {
    if (this.length) {
      this.at(0).play();
    }
  }

});