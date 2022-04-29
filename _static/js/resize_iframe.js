function resize_iframe(my_frame) {
  const total_content_height = Math.max($(my_frame.contentWindow.document).height(), $(my_frame.contentWindow).height())
  my_frame.style.height = total_content_height + 'px';
}


//window.onload = function () {
//	const my_frames = document.getElementsByClassName("ext_content");
//
//	for (const my_frame of my_frames) {
//		// resize iframes to fit content
//		resize_iframe(my_frame)
//	}
//};
