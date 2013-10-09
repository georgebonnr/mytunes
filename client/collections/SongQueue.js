// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  model: Song,

  // initialize: function(){
  // },
  enqueue: function(song) {
    this.add(song);
  }
});