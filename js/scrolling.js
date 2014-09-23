window.onload = (function () { 
	// if (window.innerWidth < (window.innerHeight*1.15)) {
	// 	window.scrollTo(0, 0)
	// }	
	// else {
	// 	window.scrollTo(0, 2750)
	// }	

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

// function scrollGallery(event) {
// 	console.log(event.wheelDeltaY)
// 	if (event.wheelDeltaY > 100) {
// 		$(".gallery").animate({ scrollTop: 0 }, 100);
// 	}
// 	else {
// 		$(".gallery").animate({ scrollTop: 240 }, 100);
// 	}
// 	return true
// }

$('#panel3').hover(function(){
	// if ($('.gallery').scrollTop() < 10) {
	// 	$('#gallery-down').show()
	// } else {
	// 	$('#gallery-up').show()
	// }
	},function(){
	// $('#gallery-down').hide()
	// $('#gallery-up').hide()
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
	$('#gallery-down').hide()
	$('#gallery-up').show()
	$(".gallery").animate({ scrollTop: 300 }, 1000);
}

var galleryScrollUp = function() {
	$('#gallery-up').hide()
	$('#gallery-down').show()
	$(".gallery").animate({ scrollTop: 0 }, 1000);
}