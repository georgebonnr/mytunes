// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  tagName: 'li',

  template: _.template('(<%= artist %>)<%= title %>'),

  events: {
    'click': function() {
      this.model.dequeue();
      console.log('click dequeue');
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});