// Multiple-inheritance - 多继承


/* 单继承方法
   ========================================================================== */
function extend(target, source) {
    for(var property in source){
        target[property] = source[property];
    }
}

// extend 方法的实现就是对对象属性的一个（浅）复制过程;
// 为什么呢？请看：

var aObj = {
    name: 'chl'
}　
var bObj = {
    age: 22
}
var cObj = {
    location: 'Shanghai'
}

extend(cObj, aObj)
extend(cObj, bObj)

console.log(cObj);



/* 多继承方法 - 其实也是浅复制
   ========================================================================== */

