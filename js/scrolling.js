$(document).ready(function () { 
	window.scrollTo(0, 2650)


$("#bio-link").hover(function(){
	$("#bio-link").children().find('i').parent().show()
}, function(){
	$("#bio-link").children().find('i').parent().hide()
})
$("#work-link").hover(function(){
	$("#work-link").children().find('i').parent().show()
},function(){
	$("#work-link").children().find('i').parent().hide()
})

$("#bio-link").click(titleToBio);
$("#bio-back").click(bioToTitle);


$("#bio-link").on("hover", function(){
	("#bio-link").animate({
		opacity:0.1
	}, slow)
})

$("#work-link").click(titleToWork);
$("#work-back").click(workToTitle);

// document.body.style.overflow=allowScroll?"":"hidden";
if(window.addEventListener){
    window.addEventListener('DOMMouseScroll',wheel,false);
}

function wheel(event){
  event.preventDefault();
  event.returnValue=false;
	}
window.onmousewheel=document.onmousewheel=wheel;

$('.gallery').hover(function(){
	// window.unbind('DOMMouseScroll')
	console.log('right now this does nothing, needs to remove scroll lock')
	},function(){
	// window.unbind('DOMMouseScroll')
	console.log('right now this does nothing, needs to reimplment scroll lock')
	})

})


var titleToBio = function() {
	$("html, body").animate({ scrollTop: $('#title1').height() }, 1000);	
		// var x = setInterval(function() {
  //   	window.scrollBy(0, -80);
  //   	var yPos = window.pageYOffset;
  //   	if (yPos < 1) {
  //   		clearInterval(x)
  //   	}
		// }, 15)		
	}	

var titleToWork = function() {
var x = setInterval(function() {
    	window.scrollBy(0, 80);
    	var yPos = window.pageYOffset;
    	if (yPos >5200) {
    		clearInterval(x)
    	}
		}, 15)
}

var bioToTitle = function() {
		var x = setInterval(function() {
    	window.scrollBy(0, 80);
    	var yPos = window.pageYOffset;
    	if (yPos >2650) {
    		clearInterval(x)
    	}
		}, 15)
	}	

var workToTitle = function() {
		var x = setInterval(function() {
    	window.scrollBy(0, -80);
    	var yPos = window.pageYOffset;
    	if (yPos <2650) {
    		clearInterval(x)
    	}
		}, 15)
	}	