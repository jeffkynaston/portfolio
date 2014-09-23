$( document ).ready(function() {
    bindResizeListener()
    setPanelOneLeft()
    setPanelThreeLeft()
    setBioBackBtn()
    setWorkBackBtn()
    toggleBackgroundMobile()
    if (window.innerWidth < (window.innerHeight*1.15)) {
			window.scrollTo(0, 0)
		}	
		else {
			window.scrollTo(0, 2750)
		}	
    $('.container').show()	
  	$('#loading').hide()
});


// Asset Posititioning
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

function setPageSize() {
	var pageWidth = window.innerWidth/2
	$('.page').css("width", pageWidth)
}

// Resize Functionality
function bindResizeListener() {
	$(window).resize(resetAllPositions)
}

function resetAllPositions(){
		setPanelOneLeft()
    setPanelThreeLeft()
    setBioBackBtn()
    setWorkBackBtn()
    toggleBackgroundMobile()
}

function toggleBackgroundMobile(){
	if (window.innerWidth < (window.innerHeight*1.15)) {
		$('.horizon').hide()
		$('.middle').hide()
		$('.front').hide()
		$('#front-mobile').show()
		$('.icons').addClass('icons-mobile')
		$('.icons-mobile').removeClass('icons')
		$('body').css("max-height","600px")
		window.scrollTo(0, 0)
	}

	if (window.innerWidth > (window.innerHeight*1.15))  {
		$('.horizon').show()
		$('.middle').show()
		$('.front').show()
		$('#front-mobile').hide()
		$('.icons-mobile').addClass('icons')
		$('.icons').removeClass('icons-mobile')
		$('body').css("max-height","6000px")
	}
}


