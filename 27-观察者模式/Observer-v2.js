function Observer(name) {
	this.value = name;
	this.subscribers = new Array();
}

Observer.prototype = {
	// 发布
	publish: function (msg) {
		this.subscribers.forEach(function (subscriber) {
			subscriber.getMessage(msg);
		})
	},
	getMessage: function (msg) {
		console.log('[' + this.value + '] Receive the msg from ' + msg)
		return msg;
	},
	// 订阅
	subscribe: function (subscriber) {
		console.log(1)
		var _isSubscribe = this.subscribers.some(function (_s) {
			if (_s !== subscriber) {
				return false;
			}
		})
		if (!_isSubscribe) {
			this.subscribers.push(subscriber)
		}
		return this;
	},
	// 退订
	unSubscribe: function (subscriber) {
		if (this.subscribers) {
			this.subscribers = this.subscribers.filter(
				function (_s) {
					if (_s !== subscriber) {
						return _s;
					}
				}
			)
		}
	}
}

var Alibaba = new Observer('Alibaba');
var Huawei = new Observer('Huawei');
var Google = new Observer('Google');
var aCoder = new Observer('Chen Haoli');
var anotherCoder = new Observer('Toxichl');

Alibaba.subscribe(aCoder).subscribe(anotherCoder);
Huawei.subscribe(aCoder);
Google.subscribe(aCoder);

Alibaba.publish(Alibaba.value)
Huawei.publish(Huawei.value)
Google.publish(Google.value)

aCoder.subscribe(Alibaba).subscribe(Huawei).subscribe(Google)
aCoder.publish(aCoder.value)




