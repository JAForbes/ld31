Views.Choices = Backbone.View.extend({
  initialize: function(options){
    var hasEnergy = function() {
      return options.model.energy > 0
    }
    var always = function() { return true }

    this.subViews = [
      this.charge = new Views.Choice({ model: options.model, bus: this, text: 'charge' , predicate: always }),
      this.shield = new Views.Choice({ model: options.model, bus: this, text: 'shield' , predicate: hasEnergy }),
      this.shoot = new Views.Choice({ model: options.model, bus: this, text: 'shoot', predicate: hasEnergy })
    ]
    _.map(this.subViews, function(view){ this.$el.append(view.el)}, this )

  }
})

Views.Choice = Backbone.View.extend({

  className: 'choice',

  initialize: function(options){
    this.el.innerText = options.text;
    this.enabled = true;

    options.model.on('change:energy', function(){
      this.enabled = options.predicate()
      if( this.enabled ){
        this.$el.removeClass( 'disabled' )
      } else {
        this.$el.addClass('disabled')
      }
    },this)
    this.el.onclick = _.bind(function(){
      if( this.enabled ) {
        options.bus.trigger( 'choice', this, options.text )
      }
    },this)
  },

})
