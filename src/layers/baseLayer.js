var baseLayer = (function(){
    var proto = {
        getName: getName
    };
    Object.defineProperty(proto, 'inPoint', {
        get: function() { return this.element.ip; },
        set: function(newValue) { this.element.ip = newValue < this.element.op ? newValue:this.element.op; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(proto, 'outPoint', {
        get: function() { return this.element.op; },
        set: function(newValue) { this.element.op = newValue > this.element.ip ? newValue:this.element.ip; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(proto, 'type', {
        get: function() { console.log(this.element.ty); return this.element.ty; },
        enumerable: true,
        configurable: true
    });

    function getName(){
        return this.element.nm;
    }

    return proto;
}());