var solidLayer = (function(){
    var proto = {
    };

    Object.defineProperty(proto, 'width', {
        get: function() { return this.element.sw; },
        set: function(newValue) {
            if(isNaN(newValue) || newValue <= 0){
                return;
            }
            this.element.sw = newValue;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(proto, 'color', {
        get: function() { return this.element.sc; },
        set: function(color) {
            if(validations.hexColor(color)){
                this.element.sc = color;
            }
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(proto, 'height', {
        get: function() { return this.element.sh; },
        set: function(newValue) {
            if(isNaN(newValue) || newValue <= 0){
                return;
            }
            this.element.sh = newValue;
        },
        enumerable: true,
        configurable: true
    });

    return proto;
}());