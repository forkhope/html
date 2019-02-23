function showPic(whichpic) {
	if (!document.getElementById("placeholder")) return false;
	var source = whichpic.href;
	var placeholder = document.getElementById("placeholder");
	placeholder.src = source;

	if (document.getElementById("description")) {
		var text = whichpic.title ? whichpic.title : "";
		var description = document.getElementById("description");
		if (description.firstChild.nodeType == 3) {
			description.firstChild.nodeValue = text;
		}
	}
	return true;
}

function prepareGallery() {
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById) return false;
	if (!document.getElementsByTagName("imagegallery")) return false;
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	for (var i = 0; i < links.length; ++i) {
		links[i].onclick = function() {
			return !showPic(this);
		}
	}
}

function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof oldonload != 'function') {
		window.onload = func;
	}
	else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}

addLoadEvent(prepareGallery);
