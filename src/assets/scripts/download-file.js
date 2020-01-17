module.exports = function(file, contents) {
	const anchor = document.createElement("a");
	anchor.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(contents));
	anchor.setAttribute("download", file);
	anchor.style.display = "none";
	document.body.appendChild(anchor);
	anchor.click();
	document.body.removeChild(anchor);
};