(function(win){
    function Factory(className){
        this.arr;
        this.class = className;
    }
    Factory.prototype.push = function(data){
        var i;
        if(data instanceof Array){
            for(i = data.length; --i+1;){
                if(typeof(data[i]) === "object"){
                    data[i].val = new win[this.class](data[i].val);
                }
                else{
                    data[i] = {
                        id: this.arr.length,
                        val: new win[this.class](data[i])
                    };
                }
                this.arr.push(data[i]);
            }
        }
        else{
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
        }
    };

    Factory.prototype.findByVal = function(val){
        return this.arr.filter(function(el){
            el.val.getValue() === val;
        })[0].val;
    };

    Factory.prototype.findById = function(id){
        return this.arr.filter(function(el){
            el.id === id;
        })[0].val;
    };

    win.Factory = Factory;
})(window);