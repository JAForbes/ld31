Views = window.Views || {}
Views.Ship = Backbone.View.extend({

  tagName: 'canvas',

  initialize: function(options){
    this.loadImages()
    options.model.on('change:state',function(ship){
      this.render(ship.get('state'))
    },this)

    this.on('imagesLoaded',function(){ this.render('idle')},this)
  },

  loadImages: function(){

    var images = ['idle','shoot','shield','charge'];

    imagesLoaded = _.after(images.length, _.bind(this.trigger,this,'imagesLoaded') )

    this.images = _.reduce( images, function( images, name){
      images[name] = new Image()
      images[name].onload = imagesLoaded
      images[name].src = ['img',this.model.get('name'),name+'.png'].join('/')
      return images;
    }, {}, this)


  },

  render: function(state){
    var con = this.el.getContext('2d')

    this.el.width = this.images.idle.width
    this.el.height = this.images.idle.height

    if( state == 'idle' ){
      con.drawImage(this.images.idle,0,0 )
    } else if ( state == 'shield' ) {
      con.drawImage( this.images.idle,0,0 )
      con.drawImage( this.images.shield,0,0 )
    } else if ( state == 'charge' ) {
      con.drawImage( this.images.idle,0,0 )
      con.drawImage( this.images.charge,0,0 )
    } else if ( state == 'shoot') {
      con.drawImage( this.images.idle,0,0 )
      con.drawImage( this.images.shoot,0,0 )
    }

  }

})