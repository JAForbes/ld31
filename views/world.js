Views.World = Backbone.View.extend({
  className: 'world',
  initialize: function(){

    models.ship1 = new Models.Ship({ name: 'ship1' })
    models.ship2 = new Models.Ship({ name: 'ship2' });
    models.ship1.other = models.ship2
    models.ship2.other = models.ship1
    views.ship2 = new Views.Ship({ model : models.ship2 , className: 'NE'}).on('imagesLoaded',this.allImagesLoaded,this)
    views.ship1 = new Views.Ship({ model : models.ship1 , className: 'SW' }).on('imagesLoaded',this.allImagesLoaded,this)
    this.$el.append( views.ship1.el )
    this.$el.append( views.ship2.el )

    views.choices = new Views.Choices({ model: models.ship1 })

    //~game loop
    views.choices.on('choice',function(choice,text){
      models.ship1.attributes.state = 'idle'
      models.ship1.set('state',text)

      models.ship2.state = models.ship2.ai(models.ship1)
      models.ship1.stateChange()
      models.ship2.stateChange()

    })


    this.$el.append(views.choices.el)

    models.ship1.on('dead', function(){ console.log('Computer Wins') })
    models.ship2.on('dead', function(){ console.log('You Win') })


  },

  allImagesLoaded: _.after(numberOfShips = 2,function(){
    this.render()
  }),

  render: function(){
    models.ship1.set('state','idle')
    models.ship2.set('state','idle')
  }
})
