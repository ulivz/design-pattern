/**
 * 观察者和被观察者
 * 两个角色：观察者/被观察者
 * 目的：对程序的内在变化进行观察，当其有变化的时候，外界（观察者）可以得知，并且可以做出相应的变化
 */


// 管理订阅者的类
function Observer(name) {
	this.name = name;
	// 订阅者的集合
	this.watchers = new Array();
}

// 推送消息
Observer.prototype.send = function (news) {
	// 给每个订阅者推送消息
	this.watchers.forEach(function (subscriber) {
		subscriber(news, this)
	}.bind(this))
}

// 订阅
Function.prototype.subscribe = function (publisher) {
	var that = this;
	// 只要至少有一次返回true，就为true
	var alreadyExists = publisher.watchers.some(function (el) {
		// 订阅后不能再订阅
		if (el == that) {
			return;
		}
	})
	if (!alreadyExists) {
		publisher.watchers.push(that)
	}
	return this;
}

// 取消订阅
Function.prototype.unsubscribe = function (publisher) {
	var that = this;
	publisher.watchers = publisher.watchers.filter(
		function (el) {
			if (el !== that) {
				return el;
			}
		}
	)
	return this;
}

var b1 = new Observer('CCTV')
var b2 = new Observer('NFDUB')

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


function init() {

	var pageOne = function (news) {
		document.getElementById('info').value =
			'Found' + '[' + arguments[1].name + '] ->' + news;
	}

	pageOne.subscribe(b1).subscribe(b2)
	addEvent(document.getElementById('cctv'), 'click', function () {
		b1.send(document.getElementById('cctvText').value)
	})

	addEvent(document.getElementById('nfdsb'), 'click', function () {
		b2.send(document.getElementById('nfdsbText').value)
	})
}