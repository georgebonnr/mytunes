// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "div",

  initialize: function() {
    this.collection.on('add', this.render,this);
    this.collection.on('remove', this.render,this);
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();
    return this.$el.html('<ol>Queue</ol>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});


// Here's the problem. When you dequeue the song that's playing, it's still bound.
// When it finishes playing, it still triggers a dequeue.

// Solution: remove first played song from queue