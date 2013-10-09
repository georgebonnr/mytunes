// App.js - Defines a backbone model class for the whole app.
var App = Backbone.Model.extend({
  initialize: function(params){
    this.set('currentSong', new Song());
    this.set('songQueue', new SongQueue());


    // params.library.on('play', function(song){
    //   this.set('currentSong', song);
    // }, this);
    // GEORGE: I'm doing this instead of the code above to make library attr listener more clear
    this.attributes.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);
    this.attributes.library.on('enqueue', function(song){
      this.get('songQueue').enqueue(song);
    }, this);
  }

});
