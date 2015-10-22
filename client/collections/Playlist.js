
var Playlist = Songs.extend({

  sendToQueue: function() {
    this.trigger('sendToQueue', this);
  }
});