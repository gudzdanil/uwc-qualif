(function () {

    var AnswersFactory = new Factory('Answer');
    var QuestionsFactory = new Factory('Question');
    var ResultsFactory = new Factory('String');

    ResultsFactory.push(getResArr());

    AnswersFactory.push(getAnswArr());

    QuestionsFactory.push(getQuestArr());

    connectQuestAnsw();

    Visualizer.start('Почему вы решили изучать программирование?');

    function connectQuestAnsw() {
        QuestionsFactory.findByVal("Почему вы решили изучать программирование?").pushAnswers([
            AnswersFactory
                .findByVal("Для своих детей")
                .connect(ResultsFactory.findById('py')),
            AnswersFactory
                .findByVal("Заработать")
                .connect(QuestionsFactory.findByVal("Что дальше?")),
            AnswersFactory
                .findByVal("Просто так")
                .connect(QuestionsFactory.findByVal("Придумали отличную идею?")),
            AnswersFactory
                .findByVal("Мне интересно")
                .connect(QuestionsFactory.findByVal("Придумали отличную идею?")),
            AnswersFactory
                .findByVal("Проверить себя")
                .connect(QuestionsFactory.findByVal("Придумали отличную идею?")),
            AnswersFactory
                .findByVal("Я не знаю, посоветуй мне язык")
                .connect(ResultsFactory.findById('py'))
        ]);
        QuestionsFactory.findByVal("Что дальше?").pushAnswers([
            AnswersFactory
                .findByVal("Найти работу")
                .connect(QuestionsFactory.findByVal("Платформа/область?")),
            AnswersFactory
                .findByVal("Есть идея для стартапа!")
                .connect(QuestionsFactory.findByVal("Под какую платформу?"))
        ]);
        QuestionsFactory.findByVal("Платформа/область?").pushAnswers([
            AnswersFactory
                .findByVal("Хочу работать в большой технической компании")
                .connect(QuestionsFactory.findByVal("Какая компания Вам больше симпатизирует?")),
            AnswersFactory
                .findByVal("Мне все равно, просто хочу $$$")
                .connect(ResultsFactory.findById('ja')),
            AnswersFactory
                .findById('platArea')
                .connect(QuestionsFactory.findByVal("Какая часть Веба вам больше нравится?")),
            AnswersFactory
                .findByVal("Энтерпрайз")
                .connect(QuestionsFactory.findByVal("Как Вы относитесь к Microsoft?")),
            AnswersFactory
                .findByVal("Мобильные")
                .connect(QuestionsFactory.findByVal("Какая ОС?")),
            AnswersFactory
                .findByVal("3D/игры")
                .connect(ResultsFactory.findById('cpp'))
        ]);
        QuestionsFactory.findByVal("Какая компания Вам больше симпатизирует?").pushAnswers([
            AnswersFactory
                .findByVal("Apple")
                .connect(ResultsFactory.findById('oc')),
            AnswersFactory
                .findByVal("Microsoft")
                .connect(ResultsFactory.findById('cs')),
            AnswersFactory
                .findByVal("Facebook")
                .connect(ResultsFactory.findById('py')),
            AnswersFactory
                .findByVal("Google")
                .connect(ResultsFactory.findById('py'))
        ]);
        QuestionsFactory.findByVal("Какая часть Веба вам больше нравится?").pushAnswers([
            AnswersFactory
                .findByVal("Front-end")
                .connect(ResultsFactory.findById('js')),
            AnswersFactory
                .findByVal("Back-end")
                .connect(QuestionsFactory.findByVal("Хочу работать в ..."))
        ]);
        QuestionsFactory.findByVal("Хочу работать в ...").pushAnswers([
            AnswersFactory
                .findByVal("Стартапе")
                .connect(QuestionsFactory.findByVal("Хотите попробовать что-то новое с большим потенциалом но менее надежное?")),
            AnswersFactory
                .findByVal("Корпорации")
                .connect(QuestionsFactory.findByVal("Как Вы относитесь к Microsoft?"))
        ]);
        QuestionsFactory.findByVal("Хотите попробовать что-то новое с большим потенциалом но менее надежное?").pushAnswers([
            AnswersFactory
                .findById('secureY')
                .connect(ResultsFactory.findById('js')),
            AnswersFactory
                .findById('secureN')
                .connect(QuestionsFactory.findByVal("Ваша любимая игрушка?")),
            AnswersFactory
                .findById('secureYN')
                .connect(QuestionsFactory.findByVal("Ваша любимая игрушка?"))
        ]);
        QuestionsFactory.findByVal("Ваша любимая игрушка?").pushAnswers([
            AnswersFactory
                .findByVal("Lego")
                .connect(ResultsFactory.findById('py')),
            AnswersFactory
                .findByVal("Пластилин")
                .connect(ResultsFactory.findById('ru')),
            AnswersFactory
                .findByVal("У меня старая и уродливая игрушка, но я ее обожаю!")
                .connect(ResultsFactory.findById('php'))
        ]);
        QuestionsFactory.findByVal("Как Вы относитесь к Microsoft?").pushAnswers([
            AnswersFactory
                .findByVal("Фанат!")
                .connect(ResultsFactory.findById('cs')),
            AnswersFactory
                .findByVal("Ну норм...")
                .connect(ResultsFactory.findById('ja')),
            AnswersFactory
                .findByVal("Отстой")
                .connect(ResultsFactory.findById('ja'))
        ]);
        QuestionsFactory.findByVal("Какая ОС?").pushAnswers([
            AnswersFactory
                .findByVal("iOS")
                .connect(ResultsFactory.findById('oc')),
            AnswersFactory
                .findByVal("Android")
                .connect(ResultsFactory.findById('ja'))
        ]);
        QuestionsFactory.findByVal("Под какую платформу?").pushAnswers([
            AnswersFactory
                .findByVal("Энтерпрайз"),
            AnswersFactory
                .findByVal("Мобильные"),
            AnswersFactory
                .findByVal("3D/игры"),
            AnswersFactory
                .findById('platf')
                .connect(QuestionsFactory.findByVal("Ваше приложение работает с информацией в реальном времени, как Twitter?"))
        ]);
        QuestionsFactory.findByVal("Ваше приложение работает с информацией в реальном времени, как Twitter?").pushAnswers([
            AnswersFactory
                .findById('twit')
                .connect(QuestionsFactory.findByVal("Хотите попробовать что-то новое с большим потенциалом но менее надежное?")),
            AnswersFactory
                .findById('secureY')
        ]);
        QuestionsFactory.findByVal("Придумали отличную идею?").pushAnswers([
            AnswersFactory
                .findById('idea')
                .connect(QuestionsFactory.findByVal("Под какую платформу?")),
            AnswersFactory
                .findByVal("Нет. Просто хочу начать")
                .connect(QuestionsFactory.findByVal("Предпочитаю изучать новое:"))
        ]);
        QuestionsFactory.findByVal("Предпочитаю изучать новое:").pushAnswers([
            AnswersFactory
                .findByVal("По-быстрому")
                .connect(ResultsFactory.findById('py')),
            AnswersFactory
                .findByVal("Правильно")
                .connect(ResultsFactory.findById('py')),
            AnswersFactory
                .findByVal("Немного попотеть")
                .connect(QuestionsFactory.findByVal("Авто или механическая КПП?")),
            AnswersFactory
                .findByVal("Самым сложным путем")
                .connect(ResultsFactory.findById('cpp'))
        ]);
        QuestionsFactory.findByVal("Авто или механическая КПП?").pushAnswers([
            AnswersFactory
                .findByVal("Авто")
                .connect(ResultsFactory.findById('ja')),
            AnswersFactory
                .findByVal("Мех.")
                .connect(ResultsFactory.findById('c'))
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