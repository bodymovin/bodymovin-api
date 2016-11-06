var textLayer = (function(){
    var proto = {
        setText: setText,
        getText: getText
    };

    function setText(val){
        this.element.t.d.t = val;
    }

    function getText(){
        return this.element.t.d.t;
    }

    return proto;
}());