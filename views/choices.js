Views.Choices = Backbone.View.extend({
  initialize: function(options){
    this.subViews = [
      this.charge = new Views.Choice({ bus: this, text: 'charge' }),
      this.shield = new Views.Choice({ bus: this, text: 'shield' }),
      this.shoot = new Views.Choice({ bus: this, text: 'shoot' })
    ]
    _.map(this.subViews, function(view){ this.$el.append(view.el)}, this )
  }
})

Views.Choice = Backbone.View.extend({

  className: 'choice',

  initialize: function(options){
    this.el.innerText = options.text;
    this.el.onclick = _.bind(function(){
      options.bus.trigger( 'choice', options.text )
    },this)
  },
})
