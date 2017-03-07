// 安全模式类

// 什么是安全模式类？
// 可以屏蔽掉对类的错误使用而造成的错误 ———— 类应该被new，可是我忘记了（然后this指向了window）。

function Factory() {
    if(!this instanceof Factory){
        return new Factory();
    }
}

Factory.aMethod = function () {
    console.log('Get')
}

var instance = Factory();
instance.aMethod();


// 一个更详细的例子：
function FactoryClass(type, content) {

    if(this instanceof FactoryClass){
        var s = new this[type](content);
        return s;

    } else {
        return new FactoryClass(type, content)
    }
}

FactoryClass.prototype = {
    Java: function (content) {

    },
    JavaScript: function (content) {

    }
    // ......
}

// 优势：
// （1）避免类的使用不当而带来的错误
// （2）如果还需要添加其他类，那么只需要写在工厂的原型里面就可以了————非常适合创建多类对象！


