var TransformManager = (function(){
    var ob = {
        create:create
    };

    var proto = {};

    function create(data){
        var transformApi =  Object.create({},{element:{value:data}});
        protoComposer.extend(transformApi,proto);
        return transformApi;
    }

    return ob;
}());