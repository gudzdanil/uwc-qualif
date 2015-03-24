(function(){
    var results = {
        'py': 'Python',
        'cs': 'C#',
        'oc': 'Objective C',
        'ja': 'Java',
        'js': 'JavaScript',
        'ru': 'Ruby',
        'php': 'PHP',
        'c': 'C',
        'cpp': 'C++'
    };
    var questions = [
     
        new Question(1, "Почему вы решили изучать программирование?"),

        //"Для своих детей"
            //Начните с основ и двигайтесь к results.py

        //"Заработать"
        new Question(2, "Что дальше?"),
            //"Найти работу"
            new Question(3, "Платформа/область?"),
                //"Хочу работать в большой технической компании"
                new Question(4, "Какая компания Вам больше симпатизирует?"),
                    //"Facebook"
                        //results.py

                    // "Windows"
                        //results.cs

                    // "Google"
                        //results.py

                    // "Apple"
                        //results.oc

                // "Мне все равно просто хочу $$$"
                    //results.ja

                // "Web"
                new Question(5, "Какая часть Веба вам больше нравится?"),
                    // "Front-end"
                        //results.js

                    // "Back-end"
                    new Question(6, "Хочу работать в ..."),
                        //Стартапе
                        new Question(7, "Хотите попробовать что-то новое с большим потенциалом но менее надежное?"),
                            //Да
                                //results.js

                            //Нет
                            new Question(8, "Ваша любимая игрушка?"),
                                //Lego
                                    //results.py
                                //Пластилин
                                    //results.ru
                                //У меня старая и уродливая игрушка, но я ее обожаю
                                    //results.php

                            //Не уверен
                            new Question(8),


                        //Корпорации
                        new Question(9, "Как Вы относитесь к Microsoft?"),
                        // "Фанат"
                            //results.cs

                        // "Ну норм",
                            //results.ja

                        // "Отстой"
                            //results.ja

                // "Ентерпрайз"
                new Question(9),

                // "Мобильные"
                new Question(10, "Какая ОС?"),
                    // "iOS"
                        //results.oc

                    // "Android"
                        //results.ja

                // "3D игры"
                    //results.cpp


            //"Есть идея для стартапа"
            new Question(11, "Под какую платформу?"),
                //3d игры
                    //results.cpp

                //мобильные
                new Question(10),

                //ентерпрайз
                new Question(9),

                //веб
                    new Question(12, "Ваше приложение работает с информацией в реальном времени, как Twitter?"),
                        //да
                            //results.js

                        //нет
                        new Question(7),

        //Я не знаю, просто посоветуйте мне язык
            //results.py

        //Просто так
        //Мне интересно
        //Проверить себя
            new Question(13, "Придумали отличную идею?"),
                //да
                new Question(11),

                //нет. Просто хочу начать.
                new Question(14, "Предпочитаю изучать новое:"),

    //По-быстрому
    //Правильно
        //results.py

    //Немного попотеть
    new Question(15, "Авто или механическая КПП?")
        //Авто
            //results.ja
        //Мех.
            //results.c

    //Самым сложным путем
        //results.cpp

    ];

})();