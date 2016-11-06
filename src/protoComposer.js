var protoComposer = (function(){
    var ob = {
        extend:extend
    };

    function extend(){
        var elem = arguments[0];
        var protos = Array.prototype.slice.call(arguments, 1);
        protos.forEach(function(proto){
            for(var s in proto){
                if(proto.hasOwnProperty(s)){
                    Object.defineProperty(elem,s,Object.getOwnPropertyDescriptor(proto, s));
                }
            }
        })
    }
    return ob;
}());