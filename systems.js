systems = {
  resizeCanvas: function(can){
    E('Canvas').each(function(canvas){
      var can = canvas.can;
      var con = can.getContext('2d')
      can.width = window.innerWidth
      can.height = window.innerHeight
    })
  },

  call: function(order){
    R.map(function(system){
      if( R.is(String,system) ){
        system = systems[system]
      }
      R.is(Function,system) && system()
    },order)
  }
}
