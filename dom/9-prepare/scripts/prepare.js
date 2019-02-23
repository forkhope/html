/* The onload event executes a javascript immediately after a page has
 * been loaded. When the onload event is triggered by window object, the
 * document object then exists. 
 * 此时,可以使用document对象调用getElementsByTagName()获取节点对象.如果在
 * 页面加载完成之前,就调用该方法,则可能无法返回正确的值.
 */
window.onload = prepareLinks;

/* 该函数可以为class属性为popup的所有 <a> 节点安装一个 popUp() 方法 */
function prepareLinks() {
	var links = document.getElementsByTagName("a");
	for (var i = 0; i < links.length; ++i) {
		if (links[i].getAttribute("class") == "popup") {
			/* 可以使用 element.event = method() 来为元素的event事件安装
			 * mothod() 方法.当该元素的event事件被触发时,该方法会被调用.
			 */
			links[i].onclick = function() {
				//popUp(this.href);	// 这两条语句都可以用.采用下面一条
				popUp(this.getAttribute("href"));
				
				/* Cancel the default behavior so that the link isn't
				 * followed in the original window.
				 */
				return false;
			}
		}
	}
}

function popUp(winURL) {
	window.open(winURL, "popup", "width=580, height=480");
}
