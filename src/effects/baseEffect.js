var baseEffect = (function(){
    var proto = {};
    Object.defineProperty(proto,'name',{
        get: function () {
            return this.element.nm;
        }
    });
    return proto;
}());