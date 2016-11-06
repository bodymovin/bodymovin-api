var validations = (function(){
    var ob = {
        hexColor:hexColor
    };

    function hexColor(value){
        return /^#[0-9A-F]{6}$/i.test(value);
    }

    return ob;
}())