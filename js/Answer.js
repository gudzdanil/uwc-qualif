(function(w){

    function Answer(answer){
        var link = null;

        this.getValue = getValue;
        this.connect = connect;

        function getValue(){
            return answer;
        }

        function connect(obj){
            link = obj;
            return this;
        }
    }

    w.Answer = Answer;

})(window);