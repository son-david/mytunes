var PlaylistLibraryView = Backbone.View.extend({

  tagName: "table",
  className: ".table-striped",

  initialize: function() {
    this.render();
    this.collection.on('change add remove', this.render, this);
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th>Playlists</th>').append(
      this.collection.map(function(playlist) {
        return new PlaylistLibraryEntryView({model: playlist}).render();
      })
    );
  }

});
