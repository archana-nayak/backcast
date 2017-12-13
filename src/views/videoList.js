var VideoListView = Backbone.View.extend({

  initialize: function() {
  	this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.each(this.renderVideo,this);
    return this;
    
  },

  renderVideo: function(video) {
    this.$('.video-list').append(
    	new VideoListEntryView({model: video}).render().el);
  },

  template: templateURL('src/templates/videoList.html')

});

 

// this.collection.each(function ( page ) { 
//     this.$el.append( new PageView({ model: page }).render().el );
// }, this);

//Tidbit of code from the net 
//source https://coderwall.com/p/bfob4w/this-collection-each-accepts-a-context-object-backbone

//this here refers to the html element({el :'.list'}) that this view
    //has been initialized to. In this case, in app.js, we initialized it
    //with '.list' of the newly created html elements in the 
    //app.html body