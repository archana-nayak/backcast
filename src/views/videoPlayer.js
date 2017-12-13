var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'select', this.selectedVideo);
    //can also be written as
    //this.collection('select', this.selectedVideo, this); The 
    //above is better
  },
  //the selected video from the collection is the video
  //that is passed on by the event handler
  selectedVideo: function(video) {
    this.model = video;
    this.render();
  },

  render: function() {
  	console.log("here");
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
