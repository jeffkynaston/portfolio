$( document ).ready(function() {
    bindModalThumbListeners()
});

function bindModalThumbListeners() {
	// $('.img-thumb').click(function(){console.log('hi')})
	$('.img-thumb').click(replaceModalImage)
}


function replaceModalImage(e) {
	var targetToShow = removeThumbFromSRC($(e.target).attr("src"))
	if (targetToShow.search(1) > 0) {
		var targetToHide = targetToShow.replace("1", "3")
		$( "[src='"+targetToHide+"']" ).hide()
		var targetToHide = targetToShow.replace("1", "2")
		$( "[src='"+targetToHide+"']" ).hide()
	}
	else if (targetToShow.search(2) > 0) {
		var targetToHide = targetToShow.replace("2", "3")
		$( "[src='"+targetToHide+"']" ).hide()
		var targetToHide = targetToShow.replace("2", "1")
		$( "[src='"+targetToHide+"']" ).hide()
	}
	else if (targetToShow.search(3) > 0) {
		var targetToHide = targetToShow.replace("3", "1")
		$( "[src='"+targetToHide+"']" ).hide()
		var targetToHide = targetToShow.replace("3", "2")
		$( "[src='"+targetToHide+"']" ).hide()
	}
	
	$( "[src='"+targetToShow+"']" ).show()
	
	// console.log(targetToShow.search(2))
	// console.log(targetToShow.search(3))

	// var jQstring = "[src='images/" + targetToShow + "']" 
	// console.log(e.srcElement)
}


function removeThumbFromSRC(string) {
	var arr = string.split("")
	arr.splice((string.length-10),6)
  return arr.join("") 
// }
}