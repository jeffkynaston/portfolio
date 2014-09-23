window.onload = (function () { 
	bindScrollListeners()
	bindHoverListeners()
})

function bindScrollListeners() {
	window.onmousewheel=document.onmousewheel=disableWheel;
	$("#bio-link").click(titleToBio);
	$("#bio-back").click(bioToTitle);
	$("#work-link").click(titleToWork);
	$("#work-back").click(workToTitle);
	$("#gallery-up").click(galleryScrollUp);
	$("#gallery-down").click(galleryScrollDown);
}

function bindHoverListeners() {
	$("#bio-link").hover(showBioArrow,hideBioArrow)
	$("#work-link").hover(showWorkArrow,hideWorkArrow)

}


// Custom Hover Functions

function showBioArrow() {
		$("#bio-link").children().find('i').parent().show()
	}

function hideBioArrow() {
		$("#bio-link").children().find('i').parent().hide()
	}

function showWorkArrow() {
		$("#work-link").children().find('i').parent().show()
	}

function hideWorkArrow() {
		$("#work-link").children().find('i').parent().hide()
	}

// Custom Scroll Functions

function disableWheel(event){
  event.preventDefault();
  event.returnValue=false;
	}

function titleToBio() {
	$("html, body").animate({ scrollTop: $('#title1').height() }, 1000);	
}	

function titleToWork() {
	$("html, body").animate({ scrollTop: ($(document).height()-(window.innerWidth/3)) }, 1300)
}

function bioToTitle() {
	$("html, body").animate({ scrollTop: 2750 }, 1000)
}	

function workToTitle() {
	$("html, body").animate({ scrollTop: 2750 }, 1300)

}	

function galleryScrollDown() {
	$('#gallery-down').hide()
	$('#gallery-up').show()
	$(".gallery").animate({ scrollTop: 300 }, 1000);
}

function galleryScrollUp() {
	$('#gallery-up').hide()
	$('#gallery-down').show()
	$(".gallery").animate({ scrollTop: 0 }, 1000);
}