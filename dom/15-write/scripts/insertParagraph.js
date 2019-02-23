/* The following is a function that takes a string as its argument. This
 * function concatenates an opening <p> tag, the string, the closing </p>
 * tag. This concatenated string is stored in a variable called str,
 * which is then written out.
 */
function insertParagraph(text) {
	var str = "<p>";
	str += text;
	str += "</p>";
	document.write(str);
}
