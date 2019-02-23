function preparePlaceholder() {
	var placeholder = document.createElement("img");
	placeholder.setAttribute("id", "placeholder");
	placeholder.setAttribute("src", "images/placeholder.gif");
	placeholder.setAttribute("alt", "my image gallery");
	var descriptor = document.createElement("p");
	descriptor.setAttribute("id", "descriptor");
	var desctext = document.createTextNode("Choose an image");
	descriptor.appendChild(desctext);

	/* 放置 placehodler 和 descriptor 节点到 document 中 */
	// 可以使用下面语句将这两个节点附加到 <body> 节点后面
	// document.getElementsByTagName("body")[0].appendChild();
	// 也可以使用 HTML-DOM 简写方式: body
	// document.body.appendChild();

	/* There is a DOM method called insertBefore(). You can use it to
	 * insert a new element before an existing element. Here's the syntax:
	 * 	parentElement.insertBefore(newElement, targetElement);
	 * You might not know what the parent element is. That'a okay. You can
	 * always use the parentNode property of the target element.
	 */
	var gallery = document.getElementById("imagegallery");
	gallery.parentNode.insertBefore(placeholder, gallery);
	gallery.parentNode.insertBefore(descriptor, gallery);
}

function addLoadEvent(func) {
	var oldload = window.onload;
	if (typeof oldload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldload();
			func();
		}
	}
}

addLoadEvent(preparePlaceholder);
