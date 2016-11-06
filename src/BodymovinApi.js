var BodymovinApi = (function(){
    var proto = {
        getAnimationObject: getAnimationObject
    };
    protoComposer.extend(proto,compLayer);

    function getAnimationObject(){
        return this.element;
    }

    var ob = {};
    ob.create = create;

    function create(data){
        var animationApi = Object.create(proto, {element:{value:data}});
        animationApi.sourceManager = SourceManager.create(data.assets);
        return animationApi;
    }

    return ob;
}());