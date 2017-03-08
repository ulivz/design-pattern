// Builder - 建造者模式

// 虽然 建造者模式 和 工厂模式都是为了创建对象
// 但是工厂模式主要是为了创建对象实例或者类簇（抽象工厂），关心的是最终产出的是什么
// 建造者模式更多的关心创建这个对象的整个过程，甚至于创建对象的每一个细节

// 人类
var Human = function (param) {
    // 技能
    this.skill = param && param.skill || '保密';
    // 兴趣爱好
    this.hobby = param && param.hobby || '保密';
}

Human.prototype = {
    getSkill: function () {
        return this.skill;
    },
    getHobby: function () {
        return this.hobby;
    }
}

// 实例化姓名类
var Named = function (name) {
    var that = this;
    // 构造器
    // 构造函数解析姓名的姓与名
    (function (name, that) {
        this.name = name;
        if (name.indexOf(' ') > -1) {
            that.FirstName = name.slice(0, name.indexOf(' '));
            that.secondName = name.slice(name.slice(' '));
        }
    })(name, that);
}

// 实例化姓名类
var Work = function (work) {
    var that = this;
    // 构造器
    // 构造函数中通过传入的职位特征来设置对应职位以及描述
    (function (work, that) {
        switch (work){
            case 'code':
                that.work = '工程师';
                that.workDesc = '每天沉醉于编程';
                break;
            case 'UI':
                that.work = '设计师';
                that.workDesc = '设计更似一种艺术';
                break;
            default:
                that.work = work;
                that.workDesc = '对不起，我们还不清楚您所选择的职位描述';
        }
    })(work, that);

    // 更换期望的职位
    Work.prototype.changeWork = function (work) {
        this.work = work;
    }

    // 添加对职位的描述
    Work.prototype.changeDesc = function (setence) {
        this.workDesc = setence;
    }
}



// 如何使用呢？
var People = function (name, work) {
    var _person = new Human();
    _person.name = new Named(name);
    _person.work = new Work(work);
    return _person;
}

// 如此可见，我们分成了三个部分（关注局部创建）来创建一个应聘者对象。

// 方法：首先创建一位应聘者缓存对象，缓存对象需要装饰（添加属性和方法），然后就可以得到一个完整的应聘者了。

// 如何在 工厂模式 和 建造者 之间取舍？

// （1）如何对象粒度很小，或者模块间的复用率很低并且变动率低且变动不打的时候，我们还是应该创建整体对象（采用建造者模式）
// 而不是关注创建的结果，创建出一个个个体。

