(function(w){
    function Visualizer(){

        var questionEl = $('#question');
        var answersListEl = $('#answers');
        var answersContainerEl = $('#answers-container');
        var resultContainerEl = $('#result-container');
        var resultEl = $('#result');
        $('#submit').click(submit);
        $('#restart').click(restart);
        var curAnswers = [];
        var firstQuestion

        this.start = function(quest){
            firstQuestion = quest;
            generateQuestion(quest);
        };

        function generateQuestion(quest){
            if(!(quest instanceof String)) {//is result
                var i;
                questionEl.html(quest.getValue());
                curAnswers = quest.getAnswers();
                answersListEl.empty();
                for (i = 0; i < curAnswers.length; i++) {
                    printAnswer(curAnswers[i].value, i);
                }
            }
            else{
                questionEl.html("Ваш результат: ");
                answersContainerEl.hide();
                resultContainerEl.show();
                resultEl.html(quest);
            }
        }

        function printAnswer(str, value){
            $('<li><label><input name="answer" type="radio" value="' + value + '"/>' + str + '</label></li>')
                .appendTo(answersListEl);
        }

        function submit(){
            generateQuestion(curAnswers[$('input[name=answer]:checked', answersListEl).val()].link);
        }

        function restart(){
            questionEl.empty();
            answersContainerEl.show();
            resultContainerEl.hide();
            resultEl.empty();
            generateQuestion(firstQuestion);
        }
    }

    w.Visualizer = new Visualizer();
})(window);