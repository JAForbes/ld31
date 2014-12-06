currentSystems = ['resizeCanvas']
loop = function(){
	systems.call(currentSystems)
	requestAnimationFrame(loop)
}
loop()
