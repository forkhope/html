function displayAbbreviations() {
	if (!document.getElementsByTagName || !document.createElement
			|| !document.createTextNode) {
		return false;
	}

	var definitions = document.getElementsByTagName("abbr");
	if (definitions.length < 1) {
		return false;
	}

	var header = document.createElement("h2");
	var header_text = document.createTextNode("Abbreviations");
	header.appendChild(header_text);
	document.body.appendChild(header_text);

	var dl = document.createElement("dl");
	document.body.appendChild(dl);

	for (var i = 0; i < definitions.length; ++i) {
		var current_abbr = definitions[i];

		var text = current_abbr.lastChild.nodeValue;
		var dt = document.createElement("dt");
		var dt_text = document.createTextNode(text);
		dl.appendChild(dt_text);

		var title = current_abbr.getAttribute("title");
		var dd = document.createElement("dd");
		var dd_text = document.createTextNode(title);
		dd.appendChild(dd_text);

		dl.appendChild(dt);
		dl.appendChild(dd);
	}
}

addLoadEvent(displayAbbreviations);
