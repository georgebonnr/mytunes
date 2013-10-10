// Song.js - Defines a backbone model class for songs.
var Song = Backbone.Model.extend({

  // initialize: function(){
  //   on playerview event "finished" 
  // }

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
    this.playing = true;
  },

  enqueue: function(){
    this.trigger('enqueue', this);
  },

  dequeue: function(){
    this.trigger('dequeue', this);
  }

  // playing: true or false



});
