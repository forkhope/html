window.onload = function() {
	var para = document.createElement("p");
	var txt = document.createTextNode("created a text node");
	para.appendChild(txt);
	var testdiv = document.getElementById("testdiv");
	testdiv.appendChild(para);
}
