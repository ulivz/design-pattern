/* parasitic combination inherit
 * 一时兴起写了英文注释　＝_＝
 ========================================================================== */

function inheritObject(object) {
    function p() {}
    p.prototype = object;
    return new p();
}

// parasitic combination inherit
function inheritPrototype(subClass, superClass) {
    // copy the prototype of superClass
    var p = inheritObject(superClass.prototype);
    // rewrite the proptotype of subclass
    subClass.prototype = p;
    // rewrite the constructor of subclass
    p.constructor = subClass;
}

// parent class
function Super() {
    this.b = '456';
}

// define a common method in prototype of super class
Super.prototype.getB = function () {
    return this.b;
}

// children class
function Sub() {
    Super.call(this)
    this.a = '123';
}

// inherit the prototype of super class
inheritPrototype(Sub, Super);

// add new method in prototype of super class
Sub.prototype.getA = function () {
    return this.a;
}

var instance = new Sub();

console.log(instance);

