(function(w){

    function Question(question){
        var answers = [];
        this.pushAnswers = pushAnswers;
        this.getValue = getValue;

        function pushAnswers(answs){
            if(answs instanceof Array){
                answers.concat(answs);
            }
            else {
                answers.push(answs);
            }
        }
        function getValue(){
            return question;
        }
        function getNextQuestion(idAnswer){
            var i;
            for(i = answers.length; --i+1;){
                if(answers[i].is(idAnswer)){
                    return answers[i].getQuestion();
                }
            }
        }
    }

    w.Question = Question;

})(window);