// Facade - 外观模式

// 为一个复杂的子系统提供一个更高级的统一接口
// 通过这个接口使得对子系统接口的访问更加容易


// 为页面 document 添加一个 click 时间来实现隐藏提示框的交互效果

document.onclick = function (e) {
    e.preventDefault();
    if (e.target !== document.getElementById('myInput')) {
        hidePageAlert();
    }
}

function hidePageAlert() {
    // 隐藏提示框
}


// onclick 是 DOM0 级事件，所以采用这种方式绑定时间
// 如果团队中有人再次使用这种方式为 document 绑定 click 事件时，就相当于重复定义了一个方法
// 并且会将这种方式定义的click方法覆盖。

// 应该用DOM2级事件处理程序提供的方法 addEventListener 来实现


// 外观模式实现

function addEvent(dom, type, fn) {
    // 对于支持 DOM2 级事件处理程序的浏览器
    if (dom.addEventListener) {
        dom.addEventListener(type, fn, false);

    } else if (dom.attachEvent) {
        dom.attachEvent('on' + type, fn);

    } else {
        dom['on' + type] = fn;
    }
}


// 如此一来，我们就可以放心地绑定事件了, 如下所示：

var myInput = document.getElementById('myinput');

addEvent(myInput, 'click', function () {
    // 事件1
})

addEvent(myInput, 'click', function () {
    // 事件2
})

// ...

// 如此一来，就能够安心地为元素绑定事件了。


// 外观模式可以简化底层接口复杂性，可以解决浏览器兼容问题

// IE低版本不兼容 e.preventDefault() 和 e.target， 这个也可以通过外观模式来解决

var getEvent = function (event) {
    return event || window.event;
}

var getTarget = function (event) {
    var event = getEvent(event);
    return event.target || event.srcElement;
}

var preventDefault = function (event) {

    var event = getEvent(event);

    if (event.preventDefault) {
        // 标准浏览器
        event.preventDefault();

    } else {
        // IE 浏览器
        event.returnValue = false
    }

}

// 有了上述的方法我们就可以用简单地方式来解决我们的问题了。

document.onclick = function (e) {
    preventDefault(e);
    if(getTarget(e) !== document.getElementById('myInput')){
        hideInputSug();
    }
}

function hideInputSug() {
    // 关闭输入提示
}


// 小型代码库

// 外观模式可以将浏览器不兼容的方法变得简单而又兼容各个浏览器，
// 除此之外，外观还可以用来封装多个功能，简化底层操作防范。

// 一个小型代码库
var DomCtrl = {
    getEle: function (id) {
        return document.getElementById(id)
    } ,
    css: function (id, key, value) {
        return document.getElementById(id).style[key] = value;
    },
    attr: function (id, key, value) {
        document.getElementById(id)[key] = value;
    },
    html: function (id, html) {
        document.getElementById(id).innerHTML = html;
    },
    on: function (id, type, fn) {
        document.getElementById(id)['on' + type] = fn;
    }

}


// 总结

// 外观模式可以用于管理底层系统提供的一系列复杂的接口方法；
// 外观模式是对接口方法的外层包装，以供上层代码调用；










