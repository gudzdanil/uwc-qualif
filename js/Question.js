(function(w){

    function Question(question){
        var answers = [];
        this.pushAnswers = pushAnswers;
        this.getValue = getValue;
        this.getAnswers = getAnswers;

        function pushAnswers(answs){
            if(answs instanceof Array){
                answers = answers.concat(answs);
            }
            else {
                answers.push(answs);
            }
        }
        function getValue(){
            return question;
        }
        function getAnswers(){
            var res = [];
            var i = 0;
            for(; i < answers.length; i++){
                res.push({
                    value: answers[i].getValue(),
                    link: answers[i].getLink()
                });
            }
            return res;
        }
    }

    w.Question = Question;

})(window);