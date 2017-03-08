var LazySingle = (function () {

    var _instance = null;

    function Single() {
        return {
            publicMethod: function() {},
            publiccProperty: '1.0'
        }
    }

    return function () {
        if(!_instance){
            _instance = Single();
        }
        return _instance;
    }

})();

