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


var chl = protoTypeExtend(personTemplateObject)
// 如此一来，Person这个对象就建好了，所有在模板对象中的方法都已经建立好了.
// 既然通过protoTypeExtend创造直接是一个对象,因此我们就无需再new, 可以直接使用这个对象


