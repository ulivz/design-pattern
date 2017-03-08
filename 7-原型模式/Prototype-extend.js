// 参数1、参数2、参数3... 表示模板对象
// 值得注意的是，这里进行的是浅复制(引用类型属性共享)，当然，还可以根据需求进行深复制（引用类型的属性复制）
function protoTypeExtend() {
    var F = function () {},
        args = arguments,
        i = 0,
        len = args.length;
    for (; i < len; i++) {
        for(var j in args[i]){
            F.prototype[j] = args[i][j];
        }
    }
    return new F();
}



var personTemplateObject = {
    location: 'Shanghai',
    work: function() {
        
    },
    eat: function () {
        
    }
}


var Person = protoTypeExtend(personTemplateObject)
// 如此一来，Person这个类就建好了，所有在模板对象中的方法都已经建立好了.
