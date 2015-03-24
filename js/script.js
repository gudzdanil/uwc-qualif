(function () {

    var AnswersFactory = new Factory('Answer');
    var QuestionsFactory = new Factory('Question');
    var ResultsFactory = new Factory('String');

    ResultsFactory.push(getResArr());

    AnswersFactory.push(getAnswArr());

    QuestionsFactory.push(getQuestArr());

    connectQuestAnsw();


    function connectQuestAnsw() {
        QuestionsFactory.findByVal("Почему вы решили изучать программирование?").pushAnswers([
            AnswersFactory.findByVal("Для своих детей"),
            AnswersFactory.findByVal("Заработать"),
            AnswersFactory.findByVal("Просто так"),
            AnswersFactory.findByVal("Мне интересно"),
            AnswersFactory.findByVal("Проверить себя"),
            AnswersFactory.findByVal("Я не знаю, посоветуй мне язык")
        ]);
        QuestionsFactory.findByVal("Что дальше?").pushAnswers([
            AnswersFactory.findByVal("Найти работу"),
            AnswersFactory.findByVal("Есть идея для стартапа!")
        ]);
        QuestionsFactory.findByVal("Платформа/область?").pushAnswers([
            AnswersFactory.findByVal("Хочу работать в большой технической компании"),
            AnswersFactory.findByVal("Мне все равно, просто хочу $$$"),
            AnswersFactory.findById('platArea'),
            AnswersFactory.findByVal("Энтерпрайз"),
            AnswersFactory.findByVal("Мобильные"),
            AnswersFactory.findByVal("3D/игры")
        ]);
        QuestionsFactory.findByVal("Какая компания Вам больше симпатизирует?").pushAnswers([
            AnswersFactory.findByVal("Apple"),
            AnswersFactory.findByVal("Microsoft"),
            AnswersFactory.findByVal("Facebook"),
            AnswersFactory.findByVal("Google")
        ]);
        QuestionsFactory.findByVal("Какая часть Веба вам больше нравится?").pushAnswers([
            AnswersFactory.findByVal("Front-end"),
            AnswersFactory.findByVal("Back-end")
        ]);
        QuestionsFactory.findByVal("Хочу работать в ...").pushAnswers([
            AnswersFactory.findByVal("Стартапе"),
            AnswersFactory.findByVal("Корпорации")
        ]);
        QuestionsFactory.findByVal("Хотите попробовать что-то новое с большим потенциалом но менее надежное?").pushAnswers([
            AnswersFactory.findById('secureY'),
            AnswersFactory.findById('secureN'),
            AnswersFactory.findById('secureYN')
        ]);
        QuestionsFactory.findByVal("Ваша любимая игрушка?").pushAnswers([
            AnswersFactory.findByVal("Lego"),
            AnswersFactory.findByVal("Пластилин"),
            AnswersFactory.findByVal("У меня старая и уродливая игрушка, но я ее обожаю!")
        ]);
        QuestionsFactory.findByVal("Как Вы относитесь к Microsoft?").pushAnswers([
            AnswersFactory.findByVal("Фанат!"),
            AnswersFactory.findByVal("Ну норм..."),
            AnswersFactory.findByVal("Отстой")
        ]);
        QuestionsFactory.findByVal("Какая ОС?").pushAnswers([
            AnswersFactory.findByVal("iOS"),
            AnswersFactory.findByVal("Android")
        ]);
        QuestionsFactory.findByVal("Под какую платформу?").pushAnswers([
            AnswersFactory.findByVal("Энтерпрайз"),
            AnswersFactory.findByVal("Мобильные"),
            AnswersFactory.findByVal("3D/игры"),
            AnswersFactory.findById('platf')
        ]);
        QuestionsFactory.findByVal("Ваше приложение работает с информацией в реальном времени, как Twitter?").pushAnswers([
            AnswersFactory.findById('twit'),
            AnswersFactory.findById('secureYN')
        ]);
        QuestionsFactory.findByVal("Придумали отличную идею?").pushAnswers([
            AnswersFactory.findById('idea'),
            AnswersFactory.findByVal("Нет. Просто хочу начать")
        ]);
        QuestionsFactory.findByVal("Предпочитаю изучать новое:").pushAnswers([
            AnswersFactory.findByVal("По-быстрому"),
            AnswersFactory.findByVal("Правильно"),
            AnswersFactory.findByVal("Немного попотеть"),
            AnswersFactory.findByVal("Самым сложным путем")
        ]);
        QuestionsFactory.findByVal("Авто или механическая КПП?").pushAnswers([
            AnswersFactory.findByVal("Авто"),
            AnswersFactory.findByVal("Мех.")
        ]);

    }

    function getResArr() {
        return [
            {id: 'py', val: 'Python'},
            {id: 'cs', val: 'C#'},
            {id: 'oc', val: 'ObjectiveC'},
            {id: 'ja', val: 'Java'},
            {id: 'js', val: 'JavaScript'},
            {id: 'ru', val: 'Ruby'},
            {id: 'php', val: 'PHP'},
            {id: 'c', val: 'C'},
            {id: 'cpp', val: 'C++'}
        ];
    }

    function getAnswArr() {
        return [
            "Для своих детей",
            "Заработать",
            "Найти работу",
            "Есть идея для стартапа!",
            "Я не знаю, посоветуй мне язык",
            "Просто так",
            "Мне интересно",
            "Проверить себя",
            "Хочу работать в большой технической компании",
            {id: 'idea', val: "Да"},
            "Нет. Просто хочу начать",
            "По-быстрому",
            "Правильно",
            "Немного попотеть",
            "Авто",
            "Мех.",
            "Самым сложным путем",
            "Lego",
            "Пластилин",
            "У меня старая и уродливая игрушка, но я ее обожаю!",
            {id: 'secureY', val: "Да"},
            {id: 'secureN', val: "Нет"},
            {id: 'secureYN', val: "Не уверен"},
            {id: 'twit', val: "Нет"},
            {id: 'platf', val: "WEB"},
            "Энтерпрайз",
            "Мобильные",
            "3D/игры",
            "iOS",
            "Android",
            "Стартапе",
            "Корпорации",
            "Фанат!",
            "Ну норм...",
            "Отстой",
            "Мне все равно, просто хочу $$$",
            {id: 'platArea', val: "WEB"},
            "Front-end",
            "Back-end",
            "Apple",
            "Microsoft",
            "Facebook",
            "Google"
        ];
    }

    function getQuestArr() {
        return [
            "Почему вы решили изучать программирование?",
            "Что дальше?",
            "Платформа/область?",
            "Какая компания Вам больше симпатизирует?",
            "Какая часть Веба вам больше нравится?",
            "Хочу работать в ...",
            "Хотите попробовать что-то новое с большим потенциалом но менее надежное?",
            "Ваша любимая игрушка?",
            "Как Вы относитесь к Microsoft?",
            "Какая ОС?",
            "Под какую платформу?",
            "Ваше приложение работает с информацией в реальном времени, как Twitter?",
            "Придумали отличную идею?",
            "Предпочитаю изучать новое:",
            "Авто или механическая КПП?"
        ];
    }

})
();