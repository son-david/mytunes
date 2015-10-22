var PlaylistView = Backbone.View.extend({

  tagName: "table",
  className: ".table-striped",

  events: {
    'click .queuePlaylist': function() {
      this.collection.sendToQueue();
    },
    'click .savePlaylist': function(){
      this.collection.save();
    }
  },

  initialize: function() {
    this.render();
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th>Playlist <button class="queuePlaylist btn btn-default">' +
      'Send Up to Queue</button> <button class="savePlaylist btn btn-default">' +
      'Save Playlist</button></th>').append(
      this.collection.map(function(song) {
        return new PlaylistEntryView({model: song}).render();
      })
    );
  }

});
