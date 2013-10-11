// Song.js - Defines a backbone model class for songs.
var Song = Backbone.Model.extend({

  initialize: function(){
    this.set('played', 0);
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
    this.playing = true;
    this.dequeue();
  },

  enqueue: function(){
    this.trigger('enqueue', this);
  },

  dequeue: function(){
    console.log('dequeue');
    this.trigger('dequeue', this);
  },

  finished: function(){
    this.playing = false;
    this.set('played', this.get('played')+1);
    this.trigger('finished', this);
  }

});
