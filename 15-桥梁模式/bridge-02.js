/**
 * 特权函数
 */
(function () {
	var p = function () {
		var add = function () {
			// 这里应该是进行复杂的数学操作
		}
		// 这是一个信息全封闭的类
		// 但其内部进行过复杂的业务操作
		// 建立一个特权函数，使之调用起来特别方便

		this.bridge = function() {
			return {
				bridgeAdd: function () {
					//... 执行前
					add(3, 3)
					//... 执行后
				}
			}
		}
	}

	// 桥梁还可以把多个类桥接
	var class1 = function (a ,b) {
		this.a = a;
		this.b = b;
	}
	var class2 = function (c) {
		this.c = c
	}
	var bridgeClass = function () {
		this.one = new class1(1, 2)
		this.two = new class2(45)
	}
	// 通过桥梁模式可以把多个类捏成一个大类

	// 有人会问，这个理念不是门面模式吗？
	// 不是
	// 这种模式的目的是在于class1和class2可以独立的修改
	// 门面模式的意义在于调用得方便。



})()