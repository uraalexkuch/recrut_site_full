const quizQuestionsTarget = [
    {
        question: "1.Я активный человек",
        answers: [
            {
                type: "средство",
                content: "да"
            },
            {
                type: "мусор",
                content: "нет"
            }
        ]
    },
    {
        question: "2.Иногда я прихожу в сильное возбуждение",
        answers: [
            {
                type: "средство",
                content: "да"
            },
            {
                type: "мусор",
                content: "нет"
            }
        ]
    },
    {
        question: "3.Бывает да, что я чем-нибудь раздражен",
        answers: [
            {
                type: "мусор",
                content: "да"
            },
            {
                type: "Брехня",
                content: "нет"
            }
        ]
    },
    {
        question: "4.Я всегда ем то, что мне подают",
        answers: [
            {
                type: "Брехня ",
                content: "да"
            },
            {
                type: "мусор",
                content: "нет"
            }
        ]
    },
    {
        question: "5.Чтобы добиться чего-то в жизни – надо уметь ставить перед собой цели",
        answers: [
            {
                type: "цель",
                content: "да"
            },
            {
                type: "мусор",
                content: "нет"
            }
        ]
    },
    {
        question: "6.Я бы сравнил себя с хорошо настроенным музыкальным инструментом",
        answers: [
            {
                type: "цель",
                content: "да"
            },
            {
                type: "мусор",
                content: "нет"
            }
        ]
    },
    {
        question: "7.Я всегда делаю так, как мне говорят",
        answers: [
            {
                type: "Брехня ",
                content: "да"
            },
            {
                type: "мусор",
                content: "нет"
            }
        ]
    },
    {
        question: "8.Иногда я задумываюсь о смысле жизни",
        answers: [
            {
                type: "мусор ",
                content: "да"
            },
            {
                type: "цель",
                content: "нет"
            }
        ]
    },
    {
        question: "9.Не люблю, когда мне подсказывают, как надо делать",
        answers: [
            {
                type: "средство",
                content: "да"
            },
            {
                type: "мусор",
                content: "нет"
            }
        ]
    },
    {
        question: "10.Я могу объяснить поступки каждого человека",
        answers: [
            {
                type: "результат",
                content: "да"
            },
            {
                type: "мусор",
                content: "нет"
            }
        ]
    },
    {
        question: "11.Часто мои близкие меня не слушают, и мне приходится повторять одну фразу несколько раз, пока, наконец, меня не услышат",
        answers: [
            {
                type: "результат",
                content: "да"
            },
            {
                type: "мусор",
                content: "нет"
            }
        ]
    },
    {
        question: "12.Часто со мной случаются странные вещи",
        answers: [
            {
                type: "мусор",
                content: "да"
            },
            {
                type: "результат",
                content: "нет"
            }
        ]
    },
    {
        question: "13.Обычно я не могу однозначно сказать про кого-то, хороший он человек или нет",
        answers: [
            {
                type: "мусор",
                content: "да"
            },
            {
                type: "результат",
                content: "нет"
            }
        ]
    },
    {
        question: "14.Я предпочитаю ставить перед собой цели не очень сложные, но и не очень простые",
        answers: [
            {
                type: "цель",
                content: "да"
            },
            {
                type: "мусор",
                content: "нет"
            }
        ]
    },
    {
        question: "15.Со мной часто происходят вещи, которые я не могу объяснить",
        answers: [
            {
                type: "мусор",
                content: "да"
            },
            {

                type: "результат",
                content: "нет"
            }
        ]
    },
    {
        question: "16.Когда остаюсь один, я много размышляю",
        answers: [
            {
                type: "мусор",
                content: "да"
            },
            {
                type: "цель",
                content: "нет"
            }
        ]
    },
    {
        question: "17.Я скучаю редко",
        answers: [
            {
                type: "цель",
                content: "да"
            },
            {
                type: "мусор",
                content: "нет"
            }
        ]
    },
    {
        question: "18.Мне можно доверить любую тайну",
        answers: [
            {
                type: "Брехня",
                content: "да"
            },
            {
                type: "мусор",
                content: "нет"
            }
        ]
    },
    {
        question: "19.В любой ситуации можно найти выход",
        answers: [
            {
                type: "средство",
                content: "да"
            },
            {
                type: "мусор",
                content: "нет"
            }
        ]
    },
    {
        question: "20.Вид заходящего солнца вызывает у меня вдохновение",
        answers: [
            {
                type: "мусор",
                content: "да"
            },
            {
                type: "результат",
                content: "нет"
            }
        ]
    },
    {
        question: "21.Проходя мимо лежащего мяча, у меня возникает желание пнуть его",
        answers: [
            {
                type: "мусор",
                content: "да"
            },
            {
                type: "средство",
                content: "нет"
            }
        ]
    },
    {
        question: "22.Когда волнуюсь, то чаще я краснею, чем бледнею",
        answers: [
            {
                type: "мусор",
                content: "да"
            },
            {
                type: "средство",
                content: "нет"
            }
        ]
    },
    {
        question: "23.Хорошая музыка меня воодушевляет",
        answers: [
            {
                type: "мусор",
                content: "да"
            },
            {
                type: "результат",
                content: "нет"
            }
        ]
    },
    {
        question: "24.Цели перед собой предпочитаю ставить сам",
        answers: [
            {
                type: "цель",
                content: "да"
            },
            {
                type: "мусор",
                content: "нет"
            }
        ]
    },
    {
        question: "25.Вид неприятного мне человека вызывает у меня желание его побить или нанести ему какой-нибудь другой ущерб",
        answers: [
            {
                type: "средство",
                content: "да"
            },
            {
                type: "мусор",
                content: "нет"
            }
        ]
    },
    {
        question: "26.Все, что мне дорого, одинаково ценно для меня",
        answers: [
            {
                type: "мусор",
                content: "да"
            },
            {
                type: "цель",
                content: "нет"
            }
        ]
    },
    {
        question: "27.Когда я что-то делаю, то охотно выслушиваю любые советы",
        answers: [
            {
                type: "мусор",
                content: "да"
            },
            {
                type: "средство",
                content: "нет"
            }
        ]
    },
    {
        question: "28.Удачно законченное дело вызывает у меня прилив хорошего настроения",
        answers: [
            {
                type: "мусор",
                content: "да"
            },
            {
                type: "результат",
                content: "нет"
            }
        ]
    },
    {
        question: "29.Принимая решение, я взвешиваю все «за» и «против»",
        answers: [
            {
                type: "цель",
                content: "да"
            },
            {
                type: "мусор",
                content: "нет"
            }
        ]
    },
    {
        question: "30.Иногда бывает, что я говорю о ком-то плохо",
        answers: [
            {
                type: "мусор",
                content: "да"
            },
            {
                type: "Брехня",
                content: "нет"
            }
        ]
    },
    {
        question: "31.У меня характер скорее «нападающего», чем «защитника»",
        answers: [
            {
                type: "средство",
                content: "да"
            },
            {
                type: "мусор",
                content: "нет"
            }
        ]
    },
    {
        question: "32.Стабильность лучше непредсказуемости",
        answers: [
            {
                type: "результат",
                content: "да"
            },
            {
                type: "мусор",
                content: "нет"
            }
        ]
    },

];

export default quizQuestionsTarget;
