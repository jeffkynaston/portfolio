$( document ).ready(function() {
    setPanelOneLeft()
    setPanelThreeLeft()
    setBioBackBtn()
    setWorkBackBtn()
    bindResizeListener()
    killBackgroundMobile()
    if (window.innerWidth < (window.innerHeight*1.15)) {
			window.scrollTo(0, 0)
		}	
		else {
			window.scrollTo(0, 2750)
		}	
    $('.container').show()	
  	$('#loading').hide()
});

function setPageSize() {
	var pageWidth = window.innerWidth/2
	$('.page').css("width", pageWidth)
}

function setPanelOneLeft() {
	var panelOneLeft = (window.innerWidth-$("#panel1").outerWidth())/2
	$('#panel1').css("left", panelOneLeft)
}

function setPanelThreeLeft() {
	var panelThreeLeft = ((window.innerWidth-$("#panel3").outerWidth())/2)+(6000-window.innerWidth)
	$('#panel3').css("left", panelThreeLeft)
}

function setBioBackBtn() {
	var bioBackBtnLeft = ((window.innerWidth-$("#panel1").outerWidth())/2)+$("#panel1").outerWidth()-30
	$('#bio-back').css("left", bioBackBtnLeft)
}

function setWorkBackBtn() {
	var workBackBtnLeft = ((window.innerWidth-$("#panel3").outerWidth())/2)+(6000-window.innerWidth)-30
	$('#work-back').css("left", workBackBtnLeft)
}

function setGalleryArrows() {
	var galleryArrows = ((window.innerWidth-$("#panel3").outerWidth())/2)+(6000-window.innerWidth)-30
	$('#gallery-arrows').css("left", galleryArrows)
}

function resetAllPositions(){
		setPanelOneLeft()
    setPanelThreeLeft()
    setBioBackBtn()
    setWorkBackBtn()
    // setGalleryArrows()
    killBackgroundMobile()
}

function bindResizeListener() {
	$(window).resize(resetAllPositions)
}


function wheel(event){
  event.preventDefault();
  event.returnValue=false;
	}

function killBackgroundMobile(){
	if (window.innerWidth < (window.innerHeight*1.15)) {
		$('.horizon').hide()
		$('.middle').hide()
		$('.front').hide()
		$('#front-mobile').show()
		$('.icons').addClass('icons-mobile')
		$('.icons-mobile').removeClass('icons')
		$('body').css("max-height","600px")
		window.scrollTo(0, 0)
		// $('.front').addClass('front-mobile')
		// $('.front-mobile').removeClass('front')
		// $('.front-mobile').removeClass('scroll')
		// $('.page').addClass('page-mobile')
		// $('.page-mobile').removeClass('page')
		// window.onmousewheel=document.onmousewheel=scroll;
		// $('#name').css("width",window.innerWidth)
		// $('#name').css("left",window.pageYOffset)
		// $('#name').css("top","-80px")
		// $('#bio-link').css("top","170px")
		// $('#bio-link').css("width",window.innerWidth)
		// $('#bio-link').css("left",window.pageYOffset)
		// $('#work-link').css("top","420px")
		// $('#work-link').css("width",window.innerWidth)
		// $('#work-link').css("left",window.pageYOffset)
	}
	if (window.innerWidth > (window.innerHeight*1.15))  {
		$('.horizon').show()
		$('.middle').show()
		$('.front').show()
		$('#front-mobile').hide()
		$('.icons-mobile').addClass('iconss')
		$('.icons').removeClass('icons-mobile')
		$('body').css("max-height","6000px")
		// $('.front-mobile').addClass('front')
		// $('.front').addClass('scroll')	
		// $('.front').removeClass('front-mobile')
		// $('.page-mobile').addClass('page')
		// $('.page').removeClass('page-mobile')
		// window.onmousewheel=document.onmousewheel=wheel;
	 //  $('#name').css("width","400px")
		// $('#name').css("left","2900px")
		// $('#name').css("top","0px")
		// $('#bio-link').css("top","240")
		// $('#bio-link').css("width","400px")
		// $('#bio-link').css("left","2700px")
		// $('#work-link').css("top","210px")
		// $('#work-link').css("width","400px")
		// $('#work-link').css("left","3100px")
	}
}
// function setWindowCenter(){
// 	var centerPos = 3000 - (window.innerWidth/2)
// 	window.scrollTo(0, centerPos)
// }

