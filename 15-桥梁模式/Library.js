/**
 * 我们自己的类库
 */
function addEvent(object, type, fn) {
	if (object.addEventListener) {
		object.addEventListener(type, fn, false) // false - 同步
	} else if (object.attachEvent) {
		object['e' + type + fn] = fn;
		object[type + fn] = function (e) {
			object['e' + type + fn]
		}
		object.attachEvent('on'+type, fn)
	}
}