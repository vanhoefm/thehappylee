function hideElems(id) {
	var allElems = document.getElementsByClassName(id);
	
	for (index = 0; index < allElems.length; ++index) {
		var elem = allElems[index];
		elem.style.display = "none";
	}
}

function showElems(id) {
	var allElems = document.getElementsByClassName(id);
	
	for (index = 0; index < allElems.length; ++index) {
		var elem = allElems[index];
		elem.style.display = "inline-block";
	}
}

$(document).ready(function () {
	$("#templatesall").click(function(e) {
		showElems("illustrations");
		e.preventDefault();
	});
	
	$("#templatesother").click(function(e) {
		hideElems("illustrations businesscard");
		showElems("illustrations other");
		e.preventDefault();
	});
	
	$("#templatesbusinesscards").click(function(e) {
		hideElems("illustrations other");
		showElems("illustrations businesscard");
		e.preventDefault();
	});
})
