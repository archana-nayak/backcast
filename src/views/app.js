var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    new VideoListView(
      {el: this.$('.list'),
        collection: this.videos	
      }); 

    new VideoPlayerView(
        {el: this.$('.player'), 
        model: this.videos.at(0),
        collection: this.videos
	    });

    new SearchView({
    	el: this.$('.search')});

    return this;
  },

  template: templateURL('src/templates/app.html')


});

