function displayAbbreviations() {
	if (!document.getElementsByTagName || !document.createElement
			|| !document.createTextNode) return false;
	var definitions = document.getElementsByTagName("abbr");
	if (definitions.length < 1) return false;
	var header = document.createElement("h2");
	var header_text = document.createTextNode("Abbreviations");
	header.appendChild(header_text);
	document.body.appendChild(header);
	var dlist = document.createElement("dl");
	document.body.appendChild(dlist);
	for (var i = 0; i < definitions.length; ++i) {
		var current_abbr = definitions[i];
		var def = current_abbr.getAttribute("title");
		var key = current_abbr.lastChild.nodeValue;
		var dtitle = document.createElement("dt");
		var dtitle_text = document.createTextNode(key);
		dtitle.appendChild(dtitle_text);
		var ddesc = document.createElement("dd");
		var ddesc_text = document.createTextNode(def);
		ddesc.appendChild(ddesc_text);
		dlist.appendChild(dtitle);
		dlist.appendChild(ddesc);
	}
}

addLoadEvent(displayAbbreviations);
