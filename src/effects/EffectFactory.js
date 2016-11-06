var effect = (function(){

    var proto = {
        getEffectByName: getEffectByName
    };

    Object.defineProperty(baseProto,'value',{
        get: function () {
            return this.element.v;
        }
    });
    protoComposer.extend(proto,baseEffect);


    function getEffectByName(nm){
        var effects = this.element.ef;
        var i = 0, len = effects.length;
        while(i < len){
            if(effects[i].nm === nm){
                var ob = Object.create(baseEffect,{element:{value:effects[i]}});
                if(effects[i].ty === 5){
                    protoComposer.extend(ob,effectProto);
                }

                return ob;
            }
            i += 1;
        }
        return null;
    }
    return proto
}())