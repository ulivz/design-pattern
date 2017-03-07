var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var People = (function () {
    function People(name, age) {
        this._name = name;
        this._age = age;
    }
    Object.defineProperty(People.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    return People;
}());
var FrontEndDeveloper = (function (_super) {
    __extends(FrontEndDeveloper, _super);
    function FrontEndDeveloper() {
        _super.apply(this, arguments);
    }
    return FrontEndDeveloper;
}(People));
// TS在这里真地实现了private吗? 
//# sourceMappingURL=2-ts-test.js.map