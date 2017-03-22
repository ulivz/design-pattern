// 门面模式
function addEvent(el, type, fn) {
	if (window.addEventListener) {
		// firefox
		el.addEventListener(type, fn, false)
	} else if (window.attachEvent) {
		// ie
		el.attachEvent('on' + type, fn)
	} else {
		el['on' + type] = fn;
	}
}