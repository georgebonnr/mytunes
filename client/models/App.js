// App.js - Defines a backbone model class for the whole app.
var App = Backbone.Model.extend({
  initialize: function(params){
    this.set('currentSong', new Song());
    this.set('songQueue', new SongQueue());

    this.get('library').on('play', function(song){
      this.set('currentSong', song);
    }, this);

    this.get('library').on('enqueue', function(song){
      if(this.get('currentSong') && this.get('currentSong').playing) {
        this.get('songQueue').add(song);
      } else {
        this.get('songQueue').add(song);
        this.get('songQueue').playFirst();
      }
    }, this);

    this.get('library').on('finished', function(song){
      this.get('songQueue').playFirst();
      if (this.get('songQueue').length === 0) {
        this.unset('currentSong', {silent: true});
      }
    }, this);
  }

});
