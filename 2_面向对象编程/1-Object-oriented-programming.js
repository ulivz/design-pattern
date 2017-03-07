// Object-oriented-programming - 面向对象的编程

function People() {
    this.name = '';
    this.age = '';
}

function Coder() {
    // 私有变量
    var privateVar = 'I am a private variable';
    // 私有方法
    function privateMethod() {

    }

    // 共有属性
    this.workingSeniority = 0;
    this.location = '';
    this.framework = '';

    // 共有方法(特权方法)
    // 既能访问其他的共有方法和共有属性，也可以访问访问私有方法和私有属性
    this.coding = function () {

    }

    // 定义了一个 getter
    Object.defineProperty(Coder.prototype, 'getPrivateVar', {
        get: function () {
            return privateVar;
        },
        enumerable: true,
        configurable: true
    })

}


function FrontEndDeveloper() {
    // 重写父类的方法
    this.coding = function () {
        console.log('I am writing HTML/CSS/JS...')
    }
}

// 共有属性
FrontEndDeveloper.prototype.frameworkCollection = ['vue', 'ng', 'react'];



function BackEndDeveloper() {
    // 重写父类的方法
    this.coding = function () {
        console.log('I am writing JAVA...')
    }
}

FrontEndDeveloper.prototype.frameworkCollection = ['spring', 'hibernate', 'springBoot'];


