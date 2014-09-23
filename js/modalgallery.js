$( document ).ready(function() {
    bindModalThumbListeners()
});

function bindModalThumbListeners() {
	$('.img-thumb').click(replaceModalImage)
	$('.img-thumb').hover(highlightThumb, unHighlightThumb)
}

function highlightThumb(e) {
	$(e.target).addClass('thumb-hover')
}

function unHighlightThumb(e) {
	$(e.target).removeClass('thumb-hover')
}

function replaceModalImage(e) {
	var targetToShow = removeThumbFromSRC($(e.target).attr("src"))
	var thumbToShow = $(e.target).attr("src")
	if (targetToShow.search(1) > 0) {
		var targetToHide = targetToShow.replace("1", "3")
		var thumbtoHide = thumbToShow.replace("1", "3")
		$( "[src='"+targetToHide+"']" ).hide()
		$( "[src='"+thumbtoHide+"']" ).removeClass('thumb-selected')
		var targetToHide = targetToShow.replace("1", "2")
		var thumbtoHide = thumbToShow.replace("1", "2")
		$( "[src='"+targetToHide+"']" ).hide()
		$( "[src='"+thumbtoHide+"']" ).removeClass('thumb-selected')
	}
	else if (targetToShow.search(2) > 0) {
		var targetToHide = targetToShow.replace("2", "3")
		var thumbtoHide = thumbToShow.replace("2", "3")
		$( "[src='"+targetToHide+"']" ).hide()
		$( "[src='"+thumbtoHide+"']" ).removeClass('thumb-selected')
		var targetToHide = targetToShow.replace("2", "1")
		var thumbtoHide = thumbToShow.replace("2", "1")
		$( "[src='"+targetToHide+"']" ).hide()
		$( "[src='"+thumbtoHide+"']" ).removeClass('thumb-selected')
	}
	else if (targetToShow.search(3) > 0) {
		var targetToHide = targetToShow.replace("3", "1")
		var thumbtoHide = thumbToShow.replace("3", "1")
		$( "[src='"+targetToHide+"']" ).hide()
		$( "[src='"+thumbtoHide+"']" ).removeClass('thumb-selected')
		var targetToHide = targetToShow.replace("3", "2")
		var thumbtoHide = thumbToShow.replace("3", "2")
		$( "[src='"+targetToHide+"']" ).hide()
		$( "[src='"+thumbtoHide+"']" ).removeClass('thumb-selected')
	}
	
	$( "[src='"+targetToShow+"']" ).show()
	$( "[src='"+thumbToShow+"']" ).addClass('thumb-selected')
}


function removeThumbFromSRC(string) {
	var arr = string.split("")
	arr.splice((string.length-10),6)
  return arr.join("") 
// }
}