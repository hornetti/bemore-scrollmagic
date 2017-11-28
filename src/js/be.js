$(document).ready(function() {
    //init scrollmagic
    var controller = new ScrollMagic.Controller();
    
    // pin the intro

	var pinIntroScene = new ScrollMagic.Scene({
    	triggerElement: '.intro',
    	triggerHook: 0,
    	duration: '30%'
    })
    .setPin('.intro', {
    	pushFollowers: false
    })
    .addTo(controller);

	var pinIntroScene = new ScrollMagic.Scene({
    	triggerElement: '.main',
    	triggerHook: 0.4
    })
    .setPin('.intro', {
    	pushFollowers: false
    })
    .addTo(controller);

    //loop
    $('.box').each(function(){

	    // build a scene
	    var ourScene = new ScrollMagic.Scene({
	        triggerElement: this.children[0],
	        duration: 400,
	        triggerHook: 0.2

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