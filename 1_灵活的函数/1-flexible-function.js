/* 函数的基本形式
 ========================================================================== */
function checkName() {
    // 验证姓名
}

function checkEmail() {
    //　验证邮箱
}

function checkPassword() {
    // 验证密码
}

// 创建在 window 上
console.log(window.checkName)
console.log(window.checkEmail)
console.log(window.checkPassword)


/* 函数的另一种形式
 ========================================================================== */
var check = function () {
}
console.log(window.check)


/* 用对象收编变量
 ========================================================================== */
var checkObject = {
    checkName: function () {
        // 验证姓名
    },

    checkEmail: function () {
        //　验证邮箱
    },

    checkPassword: function () {
        // 验证密码
    }
}

console.log(window.checkObject)


/* 对象的另一种形式 - 函数即对象
 ========================================================================== */
var checkObj = function () {

}

// 这是相当于是静态方法
checkObj.checkName = function () {

}

// 实例化后悔发现
var ins1 = new checkObj()
console.log(ins1);


/* 真假对象
 ========================================================================== */
var checkO = function () {
    return {
        checkName: function () {
            // 验证姓名
        },

        checkEmail: function () {
            //　验证邮箱
        },

        checkPassword: function () {
            // 验证密码
        }
    }
}

var ins2 = checkO();
var ins3 = checkO();

console.log(ins2);
console.log(ins2 === ins3) // false，由此可见是返回了一个新对象
ins2.checkEmail = 'checkEmail';
console.log(ins3);//验证了ins2和ins3是两个不同的对象，并没有传递引用


/* 类
 ========================================================================== */
var CheckClass = function () {
    this.checkName = function () {
        // 验证姓名
    }

    this.checkEmail = function () {
        //　验证邮箱
    }

    this.checkPassword = function () {
        // 验证密码
    }
}

var ins4 = new CheckClass();
var ins5 = new CheckClass();
console.info(ins4.checkEmail === ins5.checkEmail); // false, 说明方法被重新复制了

// 值得注意的是，这样的一个类，每次实例化之后内部的方法都会复制一遍
// 有的时候造成的消耗是很奢侈的，因为我们可以处理一下。


/* 在类的原型上写公共的方法
 ========================================================================== */
var CheckClass2 = function () {

}

CheckClass2.prototype.checkName = function () {
    // 验证姓名
}

CheckClass2.prototype.checkEmail = function () {
    //　验证邮箱
}

CheckClass2.prototype.checkPassword = function () {
    // 验证密码
}

var ins6 = new CheckClass2();
var ins7 = new CheckClass2();

console.log(ins7.checkEmail === ins6.checkEmail) // true，说明使用的是一个方法，降低了消耗


/* 在类的原型上写公共的方法(2)
 ========================================================================== */
var CheckClass3 = function () {
    CheckClass3.prototype = {
        checkName: function () {
            // 验证姓名
        },

        checkEmail: function () {
            //　验证邮箱
        },

        checkPassword: function () {
            // 验证密码
        }
    }
}

// 要注意的是，这种写法和前面一种写法不能混用！否则这种写法会覆盖第一种赋值的方法


/* 链式调用
 ========================================================================== */
var CheckCallChaining = {
    name: '',
    email: '',
    password: '',
    setName: function (name) {
        this.name = name;
        return this;
    },

    setEmail: function (email) {
        this.email = email;
        return this;
    },

    setPassword: function (passwoed) {
        this.password = passwoed;
        return this;
    }
}

CheckCallChaining.setName('toxichl').setEmail('472590061@qq.com').setPassword('aaa');
console.log(CheckCallChaining);


/* 链式调用（放到类的原型对象中）
 ========================================================================== */
var CheckCallChaining2 = function () {
    this.name = '';
    this.email = '';
    this.password = '';
}

CheckCallChaining2.prototype.setName = function (name) {
    this.name = name;
    return this;
}
CheckCallChaining2.prototype.setEmail = function (email) {
    this.email = email;
    return this;
}
CheckCallChaining2.prototype.setPassword = function (password) {
    this.password = password;
    return this;
}

var ins8 = new CheckCallChaining2();

ins8.setEmail('472590061@qq.com').setName('toxichl').setPassword('aaa');

console.log(ins8);


/* 函数的祖先
 ========================================================================== */
Function.prototype.log = function () {
    console.log('ddd')
}

function fn() {

}

fn.log();

// 记住，虽然这样写可以为每个函数增加一个方法log，但是这样污染了原生对象 Function，这是不被允许的！


/* 抽象出一个统一添加方法的方法
 ========================================================================== */
Function.prototype.addMethod1 = function (name, fn) {
    this[name] = fn;    // this将指向最终调用此方法的对象，因此实现了给该对象添加方法
}

var factory = function () {

}

factory.addMethod1('checkName', function () {
    console.log('checkName')
})

factory.checkName();


/* 链式添加方法
 ========================================================================== */
Function.prototype.addMethod2 = function (name, fn) {
    this[name] = fn;    // this将指向最终调用此方法的对象，因此实现了给该对象添加方法
    return this;
}


/* 链式调用链式添加的方法
 ========================================================================== */
var callChaining = function () {

}

callChaining.addMethod2('ddd', function () {
    console.log('ddd');
    return this;
}).addMethod2('eee', function () {
    console.log('eee');
    return this;
})

callChaining.ddd().eee();



/* 类式的调用方式
   ========================================================================== */
Function.prototype.addMethod3 = function (name, fn) {
    this.prototype[name] = fn;    // this将指向最终调用此方法的对象，因此实现了给该对象添加方法
    return this;
}

var testClass = function () {

}

testClass.addMethod3('zzz', function () {
    console.log('zzz');
    return this;
}).addMethod3('xxx', function () {
    console.log('xxx');
    return this;
})

// testClass.zzz();  // - Uncaught TypeError

var testIns = new testClass();

testIns.zzz().xxx(); // 成功调用









