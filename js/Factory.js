(function(win){
    function Factory(className){
        this.arr = [];
        this.class = className;
    }
    Factory.prototype.push = function(data){
        var i;
        if(data instanceof Array){
            for(i = data.length; --i+1;){
                this.pushElem(data[i]);
            }
        }
        else{
            this.pushElem(data);
        }

    };

    Factory.prototype.pushElem = function(data){
        if(typeof(data) === "object"){
            data.val = new win[this.class](data.val);
        }
        else{
            data = {
                id: this.arr.length,
                val: new win[this.class](data)
            };
        }
        this.arr.push(data);
    };

    Factory.prototype.findByVal = function(val){
        return this.arr.filter(function(el){
            return el.val.getValue() === val;
        })[0].val;
    };

    Factory.prototype.findById = function(id){
        return this.arr.filter(function(el){
            return el.id === id;
        })[0].val;
    };

    win.Factory = Factory;
})(window);