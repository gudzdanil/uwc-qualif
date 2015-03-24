(function(w){

    function Question(id, question){
        var answers = [];
        this.pushAnswer = pushAnswer;
        this.getNextAnswer = getNextAnswer;

        function pushAnswers(answs){
            if(answs instanceof Array){
                answers.concat(answs);
            }
            else {
                answers.push(answs);
            }
        }
        function getQuestion(){
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