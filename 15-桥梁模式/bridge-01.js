/**
 * 桥梁模式
 * 把“抽象与实现隔离开来”，以便二者可以单独的变化
 * 这种模式对于JS里常见的事件驱动编程有很大的好处
 */
(function () {
	// 一个页面选择宠物的例子
	// 伪代码
	button.addEvent(element, 'click', getPetByName)

	function getPetByName(e) {
		var id = this.id;
		sayncRequest("GET", 'pet/action?id=' + id, function (pet) {
			console.log("Request Pet" + pet.responseText)
		})
	}

	/**
	 * 这种做法是你在页面有一个按钮，单击的话会触发后面的请求
	 * 如果你想对这个方法进行单元测试
	 *
	 * 1. 用户登录
	 * 2. 找到页面
	 * 3. 单击按钮
	 *
	 * 如果需要进行效能层次行的单元测试，那么祝你好运吧
	 */

	// 第二种做法（用简单的桥梁模式来解决）
	function getPetByName(id, callback) {
		var id = this.id;
		sayncRequest("GET", 'pet/action?id=' + id, function (pet) {
			callback(pet)
		})
	}

	// 定义一个桥梁叫抽象和实现相互联系在一起
	addEvent(element, 'click', getPetByNameBridge)
	function getPetByNameBridge() {
		getPetByName(this.id, function (pet) {
			console.log("Request Pet" + pet.responseText)
		})
	}

	/**
	 * 这种做法使API和VIEW层完全地分离
	 * API和展现层可以灵活的表动
	 * 这个模式在Extjs项目开发时非常的常用
	 */

	// 桥梁模式的其他用途
	// 特权函数
	// 当借口过于复杂的时候，把原本复杂的借口
	// 用桥梁模式抽取出来一大步函数整取出来使之客户端更容易地调用




})()