// Songs.js - Defines a backbone collection class for songs.

// GEORGE: can be instantiated as an object named 'library'. Looks like this code is working as is -- doesn't
// need to do anything other than accept an array and set the model property.
var Songs = Backbone.Collection.extend({

  model: Song

});
