// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params) {
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());
    this.set('currentPlaylist', new TrackCollection());
    this.set('playlistLibrary', new PlaylistLibraryCollection());

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the function (this.set('currentSong', song)) would
    end up referring to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */

    this.get('currentPlaylist').on('sendToQueue', function(){
      
      this.get('songQueue').reset(this.get('currentPlaylist').slice());
      this.set('currentSong', this.get('songQueue').at(0));
      
    }, this);

    this.get('currentPlaylist').on('save', function(){
      var temp = new PlaylistLibraryModel(); //one playlist bruh
      temp.set('tracks', this.get('currentPlaylist').clone());
      temp.set('tracklist', temp.get('tracks').pluck('title'));
      this.get('playlistLibrary').add(temp);
    }, this);


    this.get('playlistLibrary').on('removeFromPlaylistLibrary', function(playlist){
      this.get('playlistLibrary').remove(playlist);
    }, this);

    this.get('playlistLibrary').on('add', function(){

    })

    params.library.on('play', function(song) {
      // if songQueue.length === 0
        // set currentSong to song
      if (this.get('songQueue').length === 0) {
        this.set('currentSong', song);
      }

    }, this);

    params.library.on('enqueue', function(song) {
      this.get('songQueue').add(song);
    }, this);

    params.library.on('dequeue', function(song) {
      var index = this.get('songQueue').indexOf(song);
      this.get('songQueue').remove(this.get('songQueue').at(index));

      if (index === 0) {
        this.set('currentSong',(this.get('songQueue').at(0)));
      }

    }, this);

    params.library.on('addToPlaylist', function(song) {
      this.get('currentPlaylist').add(song);
    }, this);

    params.library.on('removeFromPlaylist', function(song) {
      this.get('currentPlaylist').remove(song);
    }, this);

  }

});
