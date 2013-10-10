// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  model: Song,

  initialize: function(){
    this.on('remove', function(song){
      this.remove(song);
      this.playFirst();
    });

    this.on('add',function(){
      console.log("add called");
      if(this.length === 1) {
        this.playFirst();
      }
    });



    this.on('dequeue', function(song){
      // debugger;
      this.remove(song);
    });
  },

  playFirst: function() {
    if(this.length > 0) {
      this.at(0).play();
    }
  }

});