function showPic(whichPic) {
	var source = whichPic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	
	placeholder.setAttribute("src", source);
}

function countBodyChildren() {
	var body_element = document.getElementsByTagName("body")[0];
	
	/* The childNodes property returns an array containging all types of
	 * nodes, not just element nodes. It will bring back all the attribute
	 * nodes and text nodes as well. In fact, just about everything in a
	 * document is some kind of node. Even spaces and line breaks are
	 * interpreted as node and are included in the childNodes array.
	 * 该例子中,这个函数弹出的对话框显示的9,查看gallery.html文件,<body>元素
	 * 之间包含<h1>, <ul>, <img>, <script> 4个元素节点; 按照上面的说明,空格
	 * 和回车也会被当成节点,由于<body>节点和<h1>节点之间有一个回车, <h1>和
	 * <ul>之间有一个回车,</ul>和<img>之间有一个回车,<img>和<script>之间有一
	 * 个回车,<script>和最后的</body>之间也有一个回车,共5个回车,即有5个文
	 * 本节点,加上4个元素节点,刚好9个节点,下面弹出的对话框显示的值也证实这
	 * 一点,其显示的值为: 9: 3, 1, 3, 1, 3, 1, 3, 1, 3,
	 * 第一个节点是回车(文本节点类型为3),第二个节点是<h1>(元素节点类型为1),
	 * 后面以此类推.经测试,在代码中,把<body><h1>紧挨写在一起,则childNodes返
	 * 回的值为8,少了回车这个文件节点;如果写为<body> <h1>,即两者间有一个空格
	 * 则childNodes返回值也是9,空格和回车一样都会被当成文件节点,且<body>和
	 * <h1>之间不管有多少个空格,甚至同时包含空格和回车,都只算一个文本节点.
	 *
	 * We can use the nodeType property on any node in a document. This will
	 * tell us exactly what kind of node we're dealing with. However,
	 * instead of returning a string like "element", it returns a number:
	 * 		Element nodes have a nodeType value of 1.
	 *		Attribute nodes have a nodeType value of 2.
	 *		Text nodes have a nodeType value of 3.
	 */
	var text = body_element.childNodes.length + ": ";
	for (var i = 0; i < body_element.childNodes.length; ++i)
		text += body_element.childNodes[i].nodeType + ", ";
	alert(text);
}

/* You'll want the countBodyChildren() function to be executed when the
 * pages loads, and you can use the onload event handler to do this. Add
 * this line to the end of a javascript file:
 */
window.onload = countBodyChildren;
