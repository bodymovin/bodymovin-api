var ListFactory = (function(){
    var ob = {
        create:create
    };

    var proto = {
        push:push,
        concat:concat
    };

    function propertyIteratorFactory(val){
        return function(){
            var i = 0, len = this.length;
            while(i<len){
                if(this[i][val] && typeof this[i][val] === 'function'){
                    this[i][val].call(this[i],arguments);
                }
                i += 1;
            }
        }
    }

    function extendList(list,elem){
        for (var s in elem){
            if(!list[s]){
                list[s] = propertyIteratorFactory(s);
            }
        }
    }

    function push(){
        var i, len = arguments.length, elem;
        for(i=0;i<len;i+=1){
            elem = arguments[i];
            extendList(this,elem);
        }
        return Array.prototype.push.apply(this,arguments);
    }

    function concat(){
        return Array.prototype.concat.apply(this,arguments);
    }

    function create(){
        var list = [];
        protoComposer.extend(list,proto);
        return list;
    }

    return ob;

}());