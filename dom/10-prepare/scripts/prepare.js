window.onload = function() {
	/* 在写代码时,写成了 !getElementsByTagName, 运行会报错,说是该方法没有
	 * 定义.该方法是document对象的方法,应该由document对象来调用,写成
	 * document.getElementsByTagName,就没有问题了.
	 *
	 * 下面 if 语句的返回值,书中写的是返回 false,我曾经认为应该返回 true.
	 * 书中提到,返回 false 是要抑制默认行为发生.如果下面的 if 语句为真,则
	 * 方法后面的语句没有被执行, <a> 节点没能成功为 onclick 事件安装新方法
	 * 则这个方法的预期功能没有达到,应该返回 true 让默认行为发生.
	 * 但实际测试时,发生返回 false 和 true 都可以.书中提到返回false抑制默认
	 * 行为的前提是<a>节点已经成功安装了onclick事件,返回false是要把值传给
	 * onclick事件,当时onclick事件是在html文件里面内嵌的,默认就存在,此时如
	 * 果必要,是要返回true来允许默认行为发生.但这里,onclick事件是由该方法
	 * 安装进去的,html文件中并不存在onclick事件,下面的if语句的返回值其实是
	 * 把值传给了上面的 window.onload 事件,而不是下面的onclick事件.所以,
	 * 下面的 if 语句返回 false 是正确的,返回 true 反而不好.
	 */
	if (!document.getElementsByTagName) return false; // 返回值传给onload

	var links = document.getElementsByTagName("a");
	for (var i = 0; i < links.length; ++i) {
		if (links[i].getAttribute("class") == "popup") {
			links[i].onclick = function() {
				popUp(this.getAttribute("href"));
				return false;	// 返回值传给onclick,不是传给onload
			}
		}
	}

	// 该方法的末尾没有显式调用 return 语句返回任何值, 则将返回 javascript
	// 方法的默认返回值 -- undefined, 这是一个字符串.
}

function popUp(winURL) {
	window.open(winURL, "popup", "width=580, height=480");
}
