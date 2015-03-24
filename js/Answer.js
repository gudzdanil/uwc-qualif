(function(w){

    function Answer(id, answer, link){
        this.getAnswer = getAnswer;
        this.getQuestion = getQuestion;
        this.setQuestion = setQuestion;

        function getAnswer(){
            return answer;
        }
        function getQuestion(){
            return link();
        }
        function setQuestion(node){
            link = node;
        }
        function is(idAnswer){
            return idAnswer === id;
        }
    }

    w.Answer = Answer;

})(window);