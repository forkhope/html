function showPic(whichPic) {
	var source = whichPic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src", source);

	var text = whichPic.getAttribute("title");
	var description = document.getElementById("description");
	/* There is a DOM property called nodeValue that can be used to get
	 * (and set) the value of a node. 注意,一个元素节点的nodeValue返回的值
	 * 是null,而不是返回该元素所闭合的文本节点的值;此时,该文本节点是元素节
	 * 点的子节点,可以使用node.childNode[0].nodeValue来获取元素节点所闭合的
	 * 文本节点的值.下面使用的firstChild是DOM对childNodes[0]的缩写,对应节点
	 * 的第一个子节点;类似地, lastChild对应节点的最后一个子节点.
	 */
	description.firstChild.nodeValue = text;
}
