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


/* 构造函数式继承的缺陷
   ========================================================================== */
function Person(name) {
    this.name = 'a';
}
Person.prototype.walk = function () {

};
function Coder(name) {
    Person.call(this, name)
}
var chen = new Coder('chenhaoli');
console.log(chen)

// 很明显，上述通过 call 来继承的这种方式，子类并不能继承父类原型上的方法



/* 组合式继承 - 其实就是组合上述两种继承的优点
   ========================================================================== */
function G(name) {
    // 值类型共有属性
    this.name = name;
    this.bokks = ['a', 'b', 'c'];
}
G.prototype.getName = function () {
    return this.name;
}
function F() {
    G.call(this, 'ddd');
}
F.prototype = new G();
var f = new F();
console.log(f);
console.log(f.getName());

// 这种方式也有缺陷，我们执行了两次Ｇ的构造函数
// 如此一来，会再Ｆ的原型上添加一些无用的变量



/*　原型继承
 ========================================================================== */
function inheritObject(o) {
    function F() {

    }
    F.prototype = o;
    return new F();
}

// 实际上这就是对类式继承的一种封装
// 两个实例还是引用到了同一个父类的属性



/*　寄生式继承
 ========================================================================== */
var book = {
    name: "chenhaoli",
    alikeBook: ['css book', 'html bool']
}

function createBook(obj) {
    var o = new inheritObject(obj);
46    o.getName = function () {
        return this.name;
    }
    return o;
}
var ibook = new createBook(book);
console.log(ibook);












