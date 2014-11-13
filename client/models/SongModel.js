// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);

  },

  enqueue: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('enqueue', this);

  },

  finished: function(){
    console.log("I am " + this.get('title') + "and i just finished playing");
    this.trigger('finished',this);
  }


});


