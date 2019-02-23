function popUp(winURL) {
	/* open()函数的用法为: window.open(url, name, features).
	 * The first argument is the URL for the document you want to open in
	 * a new window. If this is missing, an empty browers window will be
	 * created. The second argument is the name that you can give this newly
	 * created window. The final argument is a comma-separated list of
	 * features that you want your new window to have.
	 */
	window.open(winURL, "popup", "width=320,height=480");
}
