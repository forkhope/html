function displayCitations() {
	if (!document.getElementsByTagName || !document.createElement
			|| !document.createTextNode) {
		return false;
	}

	var quotes = document.getElementsByTagName("blockquote");
	for (var i = 0; i < quotes.length; ++i) {
		var current_quote = quotes[i];
		if (!current_quote.getAttribute("cite")) {
			continue;
		}

		var cite = current_quote.getAttribute("cite");
		var quoteChildren = quotes[i].getElementsByTagName("*");
		if (quoteChildren.length < 1) {
			continue;
		}

		var elem = quoteChildren[quoteChildren.length-1];

		var a = document.createElement("a");
		var text = document.createTextNode("source");
		a.appendChild(text);
		a.setAttribute("href", cite);

		var sup = document.createElement("sup");
		sup.appendChild(a);

		elem.appendChild(sup);
	}
}

addLoadEvent(displayCitations);
