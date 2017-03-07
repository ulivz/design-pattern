// Abstract-factory - 抽象工厂
// 核心 ———— 只负责创建类簇，而不创建某个类的实例

// 先看一个抽象类：
function Car() {

}

Car.prototype = {
    getPrice: function () {
        return new Error('抽象方法不能调用')
    },
    getSpeed: function () {
        return new Error('抽象方法不能调用')
    }
}

// 上述的这个类什么也做不了！原型上的方法也不能使用？
// 那么它存在的意义在哪里？ ———— 继承。提示子类中必须要重写这些方法。



// 再来看抽象工厂模式：
var AbstractFactory = function (subType, superType) {
    if(typeof AbstractFactory[superType] === "function"){
        // 缓存类
        function F() {        };
        // 继承父类的属性和方法(所有用的是new关键字)
        F.prototype = new AbstractFactory[superType]();
        // 修改缓存类的 constructor
        F.constructor = subType;
        // 子类原型继承父类
        subType.prototype = new F();
    } else {
        throw new Error('未创建该抽象类');
    }
}

AbstractFactory.Car = function () {
    this.type = 'car';
}

AbstractFactory.Car.prototype = {
    getPrice: function () {
        return new Error('抽象方法不能调用')
    },
    getSpeed: function () {
        return new Error('抽象方法不能调用')
    }
}



AbstractFactory.Bus = function () {
    this.type = 'car';
}

AbstractFactory.Bus.prototype = {
    getPrice: function () {
        return new Error('抽象方法不能调用')
    },
    getSpeed: function () {
        return new Error('抽象方法不能调用')
    }
}




// 如何使用呢？

var BMW = function (prize, speed) {
    this.prize = prize;
    this.speed = speed;
}

AbstractFactory(BMW, 'Car');

// 重写抽象类的方法：
BMW.prototype.getPrice = function () {

};

BMW.prototype.getSpeed = function () {

}



var Yutong = function (prize, speed) {
    this.prize = prize;
    this.speed = speed;
}

AbstractFactory(Yutong, 'Car');

// 重写抽象类的方法：
Yutong.prototype.getPrice = function () {

};

Yutong.prototype.getSpeed = function () {

}


// 优点：
// (1) 我们能够很清楚地知道每个子类属于哪个类别
// (2) 同时该子类也具备了父类的属性和方法了（需要重写！）