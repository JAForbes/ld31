Views.World = Backbone.View.extend({
  className: 'world',
  initialize: function(){

    models.ship1 = new Models.Ship({ name: 'ship1' })
    models.ship2 = new Models.Ship({ name: 'ship2' });

    views.ship2 = new Views.Ship({ model : models.ship1 , className: 'SW'}).on('imagesLoaded',this.allImagesLoaded,this)
    views.ship1 = new Views.Ship({ model : models.ship2 , className: 'NE' }).on('imagesLoaded',this.allImagesLoaded,this)
    this.$el.append( views.ship1.el )
    this.$el.append( views.ship2.el )
  },

  allImagesLoaded: _.after(numberOfShips = 2,function(){
    this.render()
  }),

  render: function(){
    models.ship1.set('state','idle')
    models.ship2.set('state','idle')
  }
})
