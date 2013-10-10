var NowPlayingView = Backbone.View.extend({
  el: '<div class="nowPlaying">Now Playing: </div>',

  initialize: function() {
  },

  template: _.template('Now Playing: (<%= artist %>)<%= title %>'),

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});