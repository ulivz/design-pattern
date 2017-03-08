// Prototype - 原型模式

// 示例：创建一个焦点图

var LoopImages = function (imgArr, container) {
    // 轮播图片数组
    this.imagesArray = imgArr;
    // 创建图片容器
    this.container = container;
    // 创建轮播图片
    this.createImage = function () {

    }
    // 切换下一张图片
    this.changeImage = function () {

    }
}

// 上下滑动切换类
var SlideLoopImg = function (imgArr, container) {
    LoopImages.call(this, imgArr, container);
    this.changeImage = function () {
        console.log('Slidelooping changeImage function');
    }
}

// 上下滑动切换类
var FadeLooping = function (imgArr, container, arrow) {
    LoopImages.call(this, imgArr, container);
    this.arrow = arrow;
    this.changeImage = function () {
        console.log('Fadelooping changeImage function');
    }
}

var fadeimg = new FadeLooping(
    ['01.jpg', '02.jpg'], 'slide', ['left.jpg', 'right.jpg']
)

fadeimg.changeImage();

// 这个实现方式的缺点：
// （1）每次子类继承都要创建一次父类，
//     如果父类的构造函数中创建时存在很多耗时较长的逻辑
//     这样会比较损耗性能。



// 最优的解决方案

// ————> 将父类中供子类调用的公用方法转移到父类的原型上（这样的话，实例化父类的时候就避免了不必要的消耗）
// ————> 子类的共有方法也应该放在原型上



// 原型的拓展

// “原型对象是一个共享的变量”
// 这句话的含义是：无论是父类的实例对象还是子类的继承，都是一个指向引用。，




