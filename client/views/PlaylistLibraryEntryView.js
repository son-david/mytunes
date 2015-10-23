var PlaylistLibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td><%= tracklist %></td></td><td><button class="removeFromPlaylistLibrary btn btn-default">Remove</button></td>'),


  initialize: function() {
    this.render();
    this.model.on('add', this.render, this);
    this.model.on('remove', this.render, this);
  },


  events: {
    'click .removeFromPlaylistLibrary': function() {
      this.model.removeFromPlaylistLibrary();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
