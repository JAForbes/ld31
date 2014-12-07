Models = window.Models || {}

Models.Ship = Backbone.Model.extend({

  state: 'idle',
  defaults: {
    health: 6,
    energy: 3
  },
  initialize: function(options){
    this.other = options.other;
    Object.defineProperty(this,'energy',{
      set: function(value){
        this.set('energy',value)
      },
      get: function(){
        return this.get('energy')
      }
    })
    Object.defineProperty(this,'health',{
      set: function(value){
        return this.set('health',value)
      },
      get: function(){
        return this.get('health')
      }
    })
    Object.defineProperty(this,'state',{
      set: function(value){
        return this.set('state',value)
      },
      get: function(){
        return this.get('state')
      }
    })

  },

  ai: function(other){
    if(this.energy == 0) {
      return 'charge'
    }
    if(this.health == 1 ){
      return 'shield'
    }
    if(other.health == 1) {
      return 'shoot'
    }
    return _.sample(['charge','shoot','shield'])
  },


  stateChange: function(){
    var other = this.other;
    if(this.state == 'shield'){
      this.energy > 0 && this.energy--
    }
    if(this.state == 'shoot'){
      this.energy > 0 && this.energy--
    }
    if(this.state == 'charge'){
      this.energy++
    }

    if(other.state == 'shoot' && this.state == 'shield') {
      this.charge++
    } else if (other.state == 'shoot' && this.state != 'shield'){
      this.health--
    }
    if( this.health < 0) {
      this.trigger('dead')
    }
    this.trigger('turnComplete')
  }
})
