// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  tagName: 'li',

  template: _.template('(<%= artist %>)<%= title %>'),

  events: {
    'dblclick': function() {
      this.model.play();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});