var PlaylistEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td><td><button class="removeFromPlaylist">Remove</button></td>'),

  events: {
    'click .removeFromPlaylist': function() {
      this.model.removeFromPlaylist();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
