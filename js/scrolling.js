window.onload = (function () { 
	if (window.innerWidth < (window.innerHeight*1.15)) {
		window.scrollTo(0, 0)
	}	
	else {
		window.scrollTo(0, 2750)
	}	

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

$("#gallery-up").click(galleryScrollUp);
$("#gallery-down").click(galleryScrollDown);

// if(window.addEventListener){
//     window.addEventListener('DOMMouseScroll',wheel,false);
// }

function wheel(event){
  event.preventDefault();
  event.returnValue=false;
	}
window.onmousewheel=document.onmousewheel=wheel;

$('.gallery').hover(function(){
	// window.onmousewheel=document.onmousewheel=scroll;
	},function(){
	// window.onmousewheel=document.onmousewheel=wheel;
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
$("html, body").animate({ scrollTop: ($(document).height()-(window.innerWidth/3)) }, 1300)
// var x = setInterval(function() {
//     	window.scrollBy(0, 80);
//     	var yPos = window.pageYOffset;
//     	if (yPos >5200) {
//     		clearInterval(x)
//     	}
// 		}, 15)
}

var bioToTitle = function() {
$("html, body").animate({ scrollTop: 2750 }, 1000)
		// var x = setInterval(function() {
  //   	window.scrollBy(0, 80);
  //   	var yPos = window.pageYOffset;
  //   	if (yPos >2650) {
  //   		clearInterval(x)
  //   	}
		// }, 15)
	}	

var workToTitle = function() {
	$("html, body").animate({ scrollTop: 2750 }, 1300)

		// var x = setInterval(function() {
  //   	window.scrollBy(0, -80);
  //   	var yPos = window.pageYOffset;
  //   	if (yPos <2650) {
  //   		clearInterval(x)
  //   	}
		// }, 15)
	}	

var galleryScrollDown = function() {
	console.log('making it to scroll down')
	$(".gallery").animate({ scrollTop: 300 }, 1000);
}

var galleryScrollUp = function() {
	console.log('making it to scroll up')
	$(".gallery").animate({ scrollTop: 0 }, 1000);
}