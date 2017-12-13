var VideoListEntryView = Backbone.View.extend({
  // initialize:function() {
  //   this.render();
  // },
  events: {
  	'click .video-list-entry-title': 'handleClick'
  },//events property of videoListEntry view object

  handleClick: function() {
    this.model.select(); //here this.model is Video in video.js
  },
  //the events hash and the handleClick function are the controllers
  //the render function and template are the view or view code.
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
