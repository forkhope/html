function displayAccesskeys() {
	if (!document.getElementsByTagName || !document.createElement
			|| !document.createTextNode) {
		return false;
	}

	var header = document.createElement("h3");
	var header_text = document.createTextNode("Accesskeys");
	header.appendChild(header_text);
	document.body.appendChild(header);

	var ul = document.createElement("ul");
	document.body.appendChild(ul);

	var links = document.getElementsByTagName("a");
	for (var i = 0; i < links.length; ++i) {
		if (!links[i].getAttribute("accesskey")) {
			continue;
		}

		var key = links[i].getAttribute("accesskey");
		var desc = links[i].lastChild.nodeValue;
		var text = key + ": " + desc;

		var li = document.createElement("li");
		var li_text = document.createTextNode(text);
		li.appendChild(li_text);

		ul.appendChild(li);
	}
}

addLoadEvent(displayAccesskeys);
