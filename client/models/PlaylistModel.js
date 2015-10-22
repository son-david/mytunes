// SongModel.js - Defines a backbone model class for songs.
var PlaylistModel = Backbone.Model.extend({

  // this.attributes.count : 0,

  initialize: function() {
  },

  defaults: {
    tracks: new TrackCollection();
  }

});
