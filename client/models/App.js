// App.js - Defines a backbone model class for the whole app.
var App = Backbone.Model.extend({
  initialize: function(params){
    this.set('currentSong', new Song());
    this.set('songQueue', new SongQueue());
    // this.set('newSong', false);


    // params.library.on('play', function(song){
    //   this.set('currentSong', song);
    // }, this);
    // GEORGE: I'm doing this instead of the code above to make library attr listener more clear
    this.get('songQueue').on('play', function(song){
      this.set('currentSong', song);
    }, this);

    this.get('library').on('enqueue', function(song){
      this.get('songQueue').add(song);
    }, this);

    this.get('songQueue').on('finished', function(song){
      // console.log('finished');
      // this.set('currentSong', song);
      this.get('songQueue').remove(song);
      if (this.get('songQueue').length > 0) {
        this.get('songQueue').playFirst();
      } else {
        console.log('unset');
        this.unset('currentSong', {silent: true});
      }
    }, this);
  }

});
