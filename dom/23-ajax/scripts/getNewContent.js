function getNewContent() {
	/* The magic of Ajax is achieved by using the XMLHttpRequest object.
	 * This object acts as an intermediary between your script in the web
	 * browser (client) and the server. Instead of the web browser,
	 * JavaScript initiates the requests, and as result, must also handle
	 * the response. 即,用户不是直接从页面发送请求到服务器,而是在javascript
	 * 脚本中发送请求,服务器响应请求后,结果也是先返回到javascript脚本,由
	 * javascript脚本对响应结果作处理后,再把结果反馈到页面.
	 */
	var request = new XMLHttpRequest();
	if (request) {
		/* The XMLHttpRequest object has a number of methods. The most
		 * usrful of these is open, which is used to point the object at
		 * a file on the server. You can also specify what sort of HTTP
		 * request want to make: GET, POST, or SEND. A third parameter
		 * specifiles whether the request should be processed asynchronously
		 */
		request.open("GET", "response.txt", true);

		/* The onreadystatechange property is the event handler that is
		 * triggered when the server sends a response back to the
		 * XMLHttpRequest object. You can use it to specify what happens
		 * with the response from the server.
		 */
		// 处理服务器返回的响应结果.
		request.onreadystatechange = function() {
			/* When the server sends a response back to the XMLHttpRequest
			 * object, a number of properties are made available. The
			 * readyState property is a numberic value that is updated while
			 * the server deals with the request. There are five possible
			 * values:	0 for uninitialized;	1 for loading;
			 * 2 for loaded;	3 for interactive;	4 for complete.
			 *
			 * Once the readyState property has a value of 4, you have
			 * access to the data sent by the server.
			 */
			if (request.readyState == 4) {
				var para = document.createElement("p");
				var txt = document.createTextNode(request.responseText);
				para.appendChild(txt);
				document.getElementById('new').appendChild(para);
			}
		};

		/* After you've specified where the object should send a request
		 * and what it should do once it receives a response, you can start
		 * the process using the send method.把请求发送到服务器
		 */
		request.send(null);
	} else {
		alert('Sorry, your browset doesn\'t support XMLHttpRequest');
	}
}

addLoadEvent(getNewContent);
