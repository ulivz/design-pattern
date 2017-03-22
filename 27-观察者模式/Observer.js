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
		subscriber.run(this, news)
	}.bind(this))
}


function Subscriber(run) {
	this.run = run;
}

// 订阅
Subscriber.prototype.subscribe = function (publisher) {

	// 只要至少有一次返回true，就为true
	var alreadySubscribe = publisher.watchers.some(function (el) {
		// 订阅后不能再订阅
		if (el == this) {
			return;
		}
	}.bind(this))

	if (!alreadySubscribe) {
		publisher.watchers.push(this)
	}
	// 可以连续订阅
	return this;
}

// 取消订阅
Subscriber.prototype.unSubscribe = function (publisher) {
	var that = this;
	console.log(publisher.watchers)
	publisher.watchers = publisher.watchers.filter(
		function (el) {
			if (el !== that) {
				return el;
			}
		}
	)
	return this;
}

// 实例化多个观察者
var CCTV = new Observer('CCTV')
var BTV = new Observer('BTV')

// 实例化订阅者
var subscriber = new Subscriber(function (updateObserver, news) {
	document.getElementById('info').value =
		'Found' + '[' + updateObserver.name + '] ->' + news;
})

// 开始订阅
subscriber.subscribe(CCTV).subscribe(BTV)

console.log(subscriber)

addEvent(document.getElementById('cctv'), 'click', function () {
	CCTV.send(document.getElementById('cctvText').value)
})

addEvent(document.getElementById('btv'), 'click', function () {
	BTV.send(document.getElementById('btvText').value)
})


addEvent(document.getElementById('cancelCCTV'), 'click', function () {
	subscriber.unSubscribe(CCTV)
})

addEvent(document.getElementById('cancelBTV'), 'click', function () {
	subscriber.unSubscribe(BTV)
})


