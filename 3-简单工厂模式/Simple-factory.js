// Simple factory - 简单工厂模式

// 如果需求太多，是一个需求写一个类，还是另辟蹊径？


// 原则：如果类太多，那么就只提供一个

// 基类
var Basketball = function () {
};
var Football = function () {
};
var Tennis = function () {
};

// 运动工厂
var SportsFactory = function (name) {
    switch (name) {
        case 'NBA':
            return new Basketball();
        case 'WordCup':
            return new Football();
        case 'FrenchOpen':
            return new Tennis();
    }
}


// 另一个例子：
var Alert = function () {
};
var Confirm = function () {
};
var Prompt = function () {
};
var Popfactory = function (name) {
    switch (name) {
        case 'alert':
            return new Alert();
        case 'confirm':
            return new Confirm();
        case 'Prompt':
            return new Prompt();
    }
}


// 一个对象有时也能够代替许多类
// 简单工厂也能用来创建相似对象

function createPop(type, text) {
    var o = new Object();
    o.content = text;
    o.show = function () {
        // 显示方法
    }
    if (type === 'alert') {

    }
    if (type === 'confirm') {

    }
    if (type === 'confirm') {

    }
}

// 总结
// 简单工厂模式有两种写法：
// (1) 将类集中到一个函数中，给定不同的type，返回不同的类的实例化对象
// (2) 在一个函数中新建一个对象，首先定义多个类的共同方法，然后根据类的不同来定义不同类中特有的方法
// 如何选择，要看自己如何分析需求

// 缺点：
// (1) 如果需求频繁变更，那么简单工厂模式不仅要添加类，还要修改工厂方法，而工厂方法则很好地解决了这个问题，请看下一节。