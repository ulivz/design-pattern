// Singleton - 单例模式(单体模式)

// 为什么需要单体模式?

// 提供一个命名空间,避免不必要的全局污染!

// 举一个例子(本来想省略的zzz):

var tookit = {
    Util: {
        util_1: function () {

        },
        util_2: function () {

        }
    },
    Tool: {
        tool_1: function () {

        },
        tool_2: function () {

        }
    }
}

// 用单体来实现静态变量

var Conf = (function () {
    // 私有变量
    var conf = {
        MAX_NUM: 100,
        MIN_NUM: 1,
        COUNT: 100
    }
    // 返回取值器对象
    return {
        get: function (name) {
            return conf[name] ? conf[name] : null;
        }
    }
})


// 实际上, 在ES5以后, 我们已经可以直接使用 getter/setter 了, 举个例子:

var People = function () {
    var MAX_NUM = 100;
    var MIN_NUM = 1;
    var COUNT = 100;

    Object.defineProperty(People.prototype, 'MAX_NUM', {
        get: function () {
            return MAX_NUM;
        },
        enumerable: true,
        configurable: true
    })

    Object.defineProperty(People.prototype, 'MIN_NUM', {
        get: function () {
            return MIN_NUM;
        },
        enumerable: true,
        configurable: true
    })

    Object.defineProperty(People.prototype, 'COUNT', {
        get: function () {
            return COUNT;
        },
        enumerable: true,
        configurable: true
    })
}

var chl = new People();
console.log(chl);


