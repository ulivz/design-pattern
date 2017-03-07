// Polymorphism - 多态

// 多一种方法的多种调用方式

function add() {
    var args = arguments, len = args.length;
    switch (len) {
        case 0: return 10;
        case 1: return 10 + args[0];
        case 2: return args[0] + args[1];
    }
}

// 转换成易懂的类形式：

function Add() {
    function zero() {
        return 10;
    }
    function one(num) {
        return 10 + num;
    }
    function two(num1, num2) {
        return num1 + num2;
    }
    this.add = function () {
        var args = arguments, len = args.length;
        switch (len) {
            case 0: return zero();
            case 1: return one();
            case 2: return two();
        }
    }
}