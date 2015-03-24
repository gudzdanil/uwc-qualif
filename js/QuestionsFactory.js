(function(win){
    function QuestionsFactory(){
    }
    QuestionsFactory.prototype = Object.create(Factory.prototype);

    win.QuestionsFactory = new QuestionsFactory();
})(window);