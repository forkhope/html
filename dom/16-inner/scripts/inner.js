window.onload = function() {
	var testdiv = document.getElementById("testdiv");
	testdiv.innerHTML = "<p>I inserted this content.</p>";

	var testdiv1 = document.getElementById("testdiv1");
	alert(testdiv1.innerHTML);
	testdiv1.innerHTML = "<p>覆盖了原有的内容</p>";
}
