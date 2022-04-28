function resize_iframe() {
	document.getElementById('ext_interactive').style.height = window.innerHeight + 'px';
}

$(document).ready(function () {
	let frames = document.getElementsByTagName('iframe');
	for (var i = 0; i < frames.length; i++) {
		f = frames.item(i);
		f.style.height = window.innerHeight + 'px';
		/*console.log(f.style.height);*/
	}
});


//.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';

//document.getElementById(id).style.height = window.innerHeight +'px';