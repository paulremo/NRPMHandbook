function resize_iframe(my_frame) {
  my_frame.style.height = my_frame.contentDocument.body.scrollHeight + 'px';
}


//window.onload = function () {
window.addEventListener("load", function(){
	const my_frames = document.getElementsByClassName("ext_content");

	for (const my_frame of my_frames) {
		resize_iframe(my_frame)
	}
});