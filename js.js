var c = 0;
function no() {
	c += 1;
	if (c == 1) {
		document.getElementById("main").innerHTML = "that was a misclick RIGHT";
	}
	if (c == 2) {
		document.getElementById("main").innerHTML = "how did you missclick again";
	}
	if (c == 3) {
		document.getElementById("main").innerHTML = "im going to touch you";
	}
	if (c == 4) {
		document.getElementById("main").innerHTML = "FINE YOU ABUSIVE BOYFREND";
		document.getElementById("q_container").remove();
		let link = document.createElement('link');
		link.rel = "stylesheet";
		link.type = "text/css";
		link.href = "badboy.css";
		document.getElementsByTagName('HEAD')[0].appendChild(link);
		document.getElementById("suck").remove();
	}
}
function yes() {
	document.getElementById("main").innerHTML = "good boy";
	document.getElementById("q_container").remove();
	let link = document.createElement('link');
	link.rel = "stylesheet";
	link.type = "text/css";
	link.href = "goodboy.css";
	document.getElementsByTagName('HEAD')[0].appendChild(link);
	document.getElementById("suck").remove();
}