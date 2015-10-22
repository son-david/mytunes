// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  // this.attributes.count : 0,

  initialize: function() {
    this.set('count', 0);
  },

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function() {
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    this.trigger('dequeue', this);
  },

  incrementPlays: function(){
    var count = this.get('count')+1;
    this.set('count', count);
    this.trigger('increment', this);
  },

  addToPlaylist: function(){
    this.trigger('addToPlaylist', this);
  },

  removeFromPlaylist: function(){
    this.trigger('removeFromPlaylist', this);
  }

});
