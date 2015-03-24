(function(win){
    function AnswersFactory(){
        var arr = [
            new Answer("Для своих детей"),
            new Answer("Заработать"),
            new Answer("Найти работу"),
            new Answer("Есть идея для стартапа!"),
            new Answer("Я не знаю, посоветуй мне язык"),
            new Answer("Просто так"),
            new Answer("Мне интересно"),
            new Answer("Проверить себя"),
            new Answer("Да"),//придумали отличную идею?
            new Answer("Нет. Просто хочу начать"),
            new Answer("По-быстрому"),
            new Answer("Правильно"),
            new Answer("Немного попотеть"),
            new Answer("Авто"),
            new Answer("Мех."),
            new Answer("Самым сложным путем"),
            new Answer("Lego"),
            new Answer("Пластилин"),
            new Answer("У меня старая и уродливая игрушка, но я ее обожаю!"),
            new Answer("Да"),//менее надежное
            new Answer("Нет"),//менее надежное
            new Answer("Не уверен"),//Менее надежное
            new Answer("Нет"),//как твиттер
            new Answer("WEB"),//под какую платформу
            new Answer("Энтерпрайз"),
            new Answer("Мобильные"),
            new Answer("3D/игры"),
            new Answer("iOS"),
            new Answer("Android"),
            new Answer("Стартапе"),
            new Answer("Корпорации"),
            new Answer("Фанат!"),
            new Answer("Ну норм..."),
            new Answer("Отстой"),
            new Answer("Мне все равно, просто хочу $$$"),
            new Answer("WEB"),//Платформа/область
            new Answer("Front-end"),
            new Answer("Back-end"),
            new Answer("Apple"),
            new Answer("Microsoft"),
            new Answer("Facebook"),
            new Answer("Google")
        ];
    }

    win.AnswersFactory = new AnswersFactory();
})(window);