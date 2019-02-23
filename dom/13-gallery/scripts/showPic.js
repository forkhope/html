function showPic(whichpic) {
	if (!document.getElementById("placeholder")) return false;
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	if (placeholder.nodeName != "IMG") return false;
	placeholder.setAttribute("src", source);

	if (document.getElementById("description")) {
		var text = whichpic.getAttribute("title") ? 
			whichpic.getAttribute("title") : "";
		var description = document.getElementById("description");
		if (description.firstChild.nodeType == 3) {
			description.firstChild.nodeValue = text;
		}
	}
	return true;
}

function prepareGallery() {
	/* 在写代码时,前两句 if 写成了 if (!document.getElementsByTagName()),
	 * if (!document.getElementById()), 导致执行结果不如预期.
	 * 经过在chrome的 javascript控制台 中测试,发现document.getElementById()
	 * 返回的是 null,则 if (!document.getElementById()) 这个判断为真,下面会
	 * 返回false,导致该函数后面的语句没有被执行. 这里要注意的是:
	 * if (!document.getElementById) 判断的是 document 对象的getElementById
	 * 方法是否为空,即该方法是否存在. 而 if (!document.getElementById())判
	 * 断的是 document.getElementById() 函数的返回值是否为空,恰巧的是,即使
	 * document.getElementById()函数没有传入任何参数,它也会返回null. 所以,
	 * 以后要注意document.getElementById 和document.getElementById()的区别
	 */
	if (!document.getElementsByTagName) return false;
	if (!document.getElementById) return false;
	if (!document.getElementById("imagegallery")) return false;
	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	for (var i = 0; i < links.length; ++i) {
		/* The onclick event handlers is also triggered if you press Return
		 * while tabbing from link to link. 即,按下tab键,移动焦点到某个链接
		 * 再按下回车键,也会触发 onclick 事件,如同使用鼠标左键单击一样.
		 */
		links[i].onclick = function() {
			return !showPic(this);
		}
	}
}

function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof oldonload != 'function') {
		window.onload = func;
	}
	else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}

addLoadEvent(prepareGallery);
