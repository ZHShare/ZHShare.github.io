	function html_size() {
		var html = document.getElementsByTagName('html')[0];
		/*取到屏幕的宽度*/
		var width = window.innerWidth;
		/* 640 100  320 50 */
		var fontSize = 100 / 720 * width;
		/*设置fontsize*/
		html.style.fontSize = fontSize + 'px';
	}
	html_size();
	window.onresize = function() {
		html_size();
	}

