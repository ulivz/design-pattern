/* 类式继承
 ========================================================================== */
function SuperClass() {
    this.superValue = true;
}

SuperClass.prototype.getSuperValue = function () {
    return this.superValue;
}

function SubClass() {
    this.subValue = false;
}

SubClass.prototype = new SuperClass();

SubClass.prototype.getSubValue = function () {
    return this.subValue;
}

var instance = new SubClass();

console.log(instance);

console.log(instance instanceof SuperClass); // true
console.log(instance instanceof SubClass);   // true
console.log(SubClass instanceof SuperClass); // false
console.log(SubClass.prototype instanceof SuperClass); // true
console.log(instance instanceof Object);     // true


/* 上述继承的缺陷
   ========================================================================== */

function Super() {
    this.books = ['a', 'b'];
}
function Sub() {

}
Sub.prototype = new Super();
var instance1 = new Sub();
var instance2 = new Sub();
console.log(instance2.books); // ["a", "b"]
instance1.books.push('c');
console.log(instance2.books); // ["a", "b", "c"]

// 由此可见，instance1的一个无意修改无情地修改了intance2的book属性



/* 构造函数式继承
   ========================================================================== */

function ParentClass() {
    this.books = ['a', 'b'];
}
function ChildClass() {
    ParentClass.call(this)
}
var ins1 = new ChildClass();
var ins2 = new ChildClass();
console.log(ins2.books);    // ["a", "b"]
ins1.books.push('c')
console.log(ins2.books);    // ["a", "b"]

// ParentClass.call(this) 则是实现继承的精华
// 倘若 ParentClass 需要接受参数，则可以采用 call(this, param1, param2)





