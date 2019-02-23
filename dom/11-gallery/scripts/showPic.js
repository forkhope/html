function showPic(whichpic) {
	var source = whichpic.getAttribute("href");
	var placeholer = document.getElementById("placeholder");
	placeholder.setAttribute("src", source);

	var description = document.getElementById("description");
	var text = whichpic.getAttribute("title");
	description.firstChild.nodeValue = text;
}

function prepareGallery() {
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById) return false;
	if (!document.getElementById("imagegallery")) return false;
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	for (var i = 0; i < links.length; ++i) {
		links[i].onclick = function() {
			showPic(this);
			return false;
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
