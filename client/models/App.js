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
      this.get('songQueue').add(song);
    }, this);
    this.attributes.library.on('finished', function(song){
      // alert('finished');
      // console.log(this.get('currentSong').playing);
      debugger;
      this.attributes.songQueue.remove(song);
      this.attributes.songQueue.playFirst();
      console.log(this.get('songQueue'));
    }, this);
  }

});
