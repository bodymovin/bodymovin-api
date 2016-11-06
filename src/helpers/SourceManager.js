var SourceManager = (function(){
    var ob = {
        create:create
    };

    var proto = {
        getCompById: getCompById,
        getComps: getComps
    };

    function getCompById(id){
        var i = 0, len = this.assets ? this.assets.length : 0;
        while(i<len){
            if(id === this.assets[i].id){
                return LayerFactory.create(this.assets[i], this);
            }
            i += 1;
        }
    }

    function getComps(){
        var i = 0, len = this.assets ? this.assets.length : 0;
        var comps = [];
        while(i<len){
            var comp = LayerFactory.create(this.assets[i], this);
            comps.push(comp);
            i+=1;
        }
        return comps;
    }

    function create(assets){
        return Object.create(proto,{assets:{value:assets}});
    }

    return ob;
}());
