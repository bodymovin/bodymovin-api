var compLayer = (function(){
    var proto = {
        getLayersByName : getLayersByName,
        getLayers: getLayers
    };
    Object.defineProperty(proto,'timeRemap',{
        get: function(){
            return this.element.tm;
        },
        enumerable: true,
        configurable: true
    });

    function createLayersAPI(layer,sourceManager){
        return LayerFactory.create(layer, sourceManager);
    }

    function getLayersByName(nm, deep){
        var data = this.element;
        deep = deep || false;
        var ret = ListFactory.create();
        var i, len;
        if(data.layers){
            len = data.layers.length;
            for(i=0;i<len;i+=1){
                if(data.layers[i].nm === nm || nm === ''){
                    ret.push(createLayersAPI(data.layers[i],this.sourceManager));
                }
                if(data.layers[i].ty === 0 && deep){
                    var comp = this.sourceManager.getCompById(data.layers[i].refId);
                    if(comp){
                        ret = ret.concat(comp.getLayersByName(nm, deep));
                    }
                }
            }
        }
        return ret;
    }

    function getLayers(){
        return this.getLayersByName('',false);
    }

    return proto;
}());