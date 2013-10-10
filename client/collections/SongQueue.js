// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  model: Song,

  initialize: function(){

    this.on('add',function(){
      if(this.length === 1) {
        this.playFirst();
      }
    });

    this.on('dequeue', function(song){
      this.remove(song);
      if(this.length > 0) {
        this.playFirst();
      }
    });
  },

  playFirst: function() {
    if(this.length > 0) {
      console.log('play');
      this.at(0).play();
    }
  }

});