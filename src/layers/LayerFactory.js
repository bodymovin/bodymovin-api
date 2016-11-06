var LayerFactory = (function(){

    var ob = {};
    ob.create = create;

    function create(data,sourceManager){
        var layerApi = Object.create({}, {element:{value:data},sourceManager:{value:sourceManager}});
        var layerTypeProto = {};
        switch(data.ty){
            case 1:
                layerTypeProto = solidLayer;
                break;
            case 5:
                layerTypeProto = textLayer;
                break;
            case 4:
                layerTypeProto = shapeLayer;
                break;
            case 0:
            default:
                layerTypeProto = compLayer;
                break;
        }
        protoComposer.extend(layerApi,baseLayer,layerTypeProto);

        if(data.ef){
            protoComposer.extend(layerApi,effect);
        }
        return layerApi;
    }

    return ob;
}());