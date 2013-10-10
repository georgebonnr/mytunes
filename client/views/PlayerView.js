// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay class="player"/>',

  initialize: function() {
  
  },

  events: {
    // 'click': function() {
    //   this.model.play();
    // }
    'click': function() {
      this.model.enqueue();
    }
  },

  setSong: function(song){
    this.model = song;
    this.render();
    var that = this;
    $(".player").bind('ended', this.songFinished.bind(that));
  },

  songFinished: function(){
    $(".player").unbind('ended');
    this.model.finished();
  },

  render: function(){
    return this.$el.attr('src', this.model.get('url'));
  }

  // ended: function(){
  //   return this.$el.attr.html().ended;
  //   // this.model.playing = false
  // }

});
