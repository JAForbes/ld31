_.mixin({
	cycle: function(divsior){
		return ((Math.sin(_.now()/divsior)+1.5)/2)
	}
})
models = {}
views = {}
views.world = new Views.World()

$('body').append(views.world.el)

var i = 0;
loop = function(){
	views.ship1.update(i)
	views.ship2.update(i)
	i++;
	requestAnimationFrame(loop)
}

loop()
