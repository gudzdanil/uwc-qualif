(function(win){
    function AnswersFactory(){

    }
    AnswersFactory.prototype = Object.create(Factory.prototype);

    win.AnswersFactory = new AnswersFactory();
})(window);