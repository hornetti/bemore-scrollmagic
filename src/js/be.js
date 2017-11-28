$(document).ready(function() {
    //init scrollmagic
    var controller = new ScrollMagic.Controller();
    

    //loop
    $('.box').each(function(){
    	
	    // build a scene
	    var ourScene = new ScrollMagic.Scene({
	        triggerElement: this.children[0],
	        duration: 400,
	        triggerHook: 0.1

	    })
	    .setClassToggle(this, 'fade-in')
	    .addIndicators({
	    	name: 'fade scene 1',
	    	colorTrigger: 'white',
	    	colorStart: 'black',
	    	colorEnd: 'grey'
	    })
	    .addTo(controller);

    })

});