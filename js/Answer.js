(function(w){

    function Answer(answer){
        var link = null, scope = this;

        this.getValue = getValue;
        this.connect = connect;
        this.getLink = getLink;

        function getValue(){
            return answer;
        }

        function getLink(){
            return link;
        }

        function connect(obj){
            link = obj;
            return scope;
        }
    }

    w.Answer = Answer;

})(window);