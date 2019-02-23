function showPic(whichPic) {
	var source = whichPic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	
	/* 下面一句也可以写为 placeholder.src = source; 但这是老式的写法,只适用
	 * 于部分元素;而setAttribute()函数是DOM Level 1规范里面的新写法,适用于
	 * 所有元素的所有属性,且可移植性更高.建议一直采用setAttribute()函数.
	 */
	placeholder.setAttribute("src", source);
}
