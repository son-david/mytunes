// App.js - Defines a backbone model class for the whole app.
var PlaylistLibraryModel = Backbone.Model.extend({

  // attributes: {
  //   tracks : new TrackCollection()
  // },

  initialize: function(params) {
    // this.on('change:tracks', );
  },

  removeFromPlaylistLibrary : function(){
    this.trigger('removeFromPlaylistLibrary', this);
  }

});
