
var TrackCollection = Songs.extend({

  sendToQueue: function() {
    this.trigger('sendToQueue', this);
  },

  save : function (){
    this.trigger('save', this);
  }
});