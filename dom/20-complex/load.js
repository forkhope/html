window.onload = function() {
	var testdiv = document.getElementById("testdiv");
	var para = document.createElement("p");
	var text1 = document.createTextNode("This is ");
	var emphasis = document.createElement("em");
	var text2 = document.createTextNode("my");
	var text3 = document.createTextNode(" content.");
	testdiv.appendChild(para);
	/* append 有"追加"的意思. appendChild() 函数在节点的最后一个子节点
	 * 后面追加一个子节点,不会覆盖原有的子节点.
	 */
	para.appendChild(text1);
	para.appendChild(emphasis);
	emphasis.appendChild(text2);
	para.appendChild(text3);
}
