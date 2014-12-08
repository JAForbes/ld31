Views.End = Backbone.View.extend({
  className: 'end X',

  initialize: function(){
    this.$el.css({ width: '100', height: '400', textAlign: 'center'})
    this.render()

  },

  render: function(message){
    var message = 'You Win!'

    var retry = 'Try Again?'

    this.el.innerHTML = [
    '<p>',message,'</p>',
    '<p class="retry">Try Again?</p>',
    ].join('')

    var el = this.el;
    this.$('.retry').one('click',function(){
      models.ship1.set( Models.Ship.prototype.defaults )
      models.ship2.set( Models.Ship.prototype.defaults )

      el.innerText = ''
    })
  }

})
