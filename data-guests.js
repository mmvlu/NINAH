const guestsData = [
    {
        id: "g1", 
        name: "Big Momma",
        name_ru: "Большая мама", 
        type: "guest", 
        icon: "assets/guest/Big_Momma/Big_Momma_icon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/guest/Big_Momma/Big_Momma_height.png",
            features: [
                { name: "Руки", img: "assets/guest/Big_Momma/Big_Momma_hands.png" },
		{ name: "Глаза", img: "assets/guest/Big_Momma/Big_Momma_Eye.png" },
		{ name: "Фото", img: "assets/guest/Big_Momma/Big_Momma_photo.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/guest/Big_Momma/Big_Momma_height.png",
            features: [
                { name: "Руки", img: "assets/guest/Big_Momma/Big_Momma_hands.png" },
		{ name: "Глаза", img: "assets/guest/Big_Momma/Big_Momma_Eye.png" },
		{ name: "Фото", img: "assets/guest/Big_Momma/Big_Momma_photo.png" }
            ]
        },

        desc: "Может появиться с 3 дня<br><br>Она знает, что она гость, и не пытается скрыть правду от владельца дома.<br><br>Раньше она жила в паре кварталов от дома владельца, пока КЧС не вынудила её и соседей уехать из-за «сильного солнечного удара»." 
    },
    {
        id: "g2", 
        name: "Cashier Girl", 
        name_ru: "Кассирша", 
        type: "guest", 
        icon: "assets/guest/Cashier_Girl/Cashier_Girl_icon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/guest/Cashier_Girl/Cashier_Girl_height.png",
            features: [
                { name: "Зубы", img: "assets/guest/Cashier_Girl/Cashier_girl_teeth.png" },
		{ name: "Глаза", img: "assets/guest/Cashier_Girl/Cashier_girl_eye.png" },
		{ name: "Подмышки", img: "assets/guest/Cashier_Girl/Cashier_girl_armpits.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/guest/Cashier_Girl/Cashier_Girl_height.png",
            features: [
                { name: "Зубы", img: "assets/guest/Cashier_Girl/Cashier_girl_teeth.png" },
		{ name: "Глаза", img: "assets/guest/Cashier_Girl/Cashier_girl_eye.png" },
		{ name: "Подмышки", img: "assets/guest/Cashier_Girl/Cashier_girl_armpits.png" }
            ]
        },

        desc: "Приходит в 1 ночь<br><br>У неё глубоко тревожный и параноидальный характер, но она вежлива, когда ГГ с ней общается.<br><br>Она почти ничего не помнит о своем прошлом. Раньше она работала кассиром, но утверждает, что ее уволили из-за того, что коллеги боялись ее внешности." 
    },

    {
        id: "g3", 
        name: "Cat Lady", 
        name_ru: "Балерина", 
        type: "guest", 
        icon: "assets/guest/Cat_Lady/Cat_Lady_icon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/guest/Cat_Lady/Cat_Lady_height.png",
            features: [
                { name: "Зубы", img: "assets/guest/Cat_Lady/Cat_Lady_Teeth.png" },
		{ name: "Глаза", img: "assets/guest/Cat_Lady/Cat_Lady_eye.png" },
		{ name: "Подмышки", img: "assets/guest/Cat_Lady/Cat_Lady_Armpits.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/guest/Cat_Lady/Cat_Lady_height.png",
            features: [
                { name: "Зубы", img: "assets/guest/Cat_Lady/Cat_Lady_Teeth.png" },
		{ name: "Глаза", img: "assets/guest/Cat_Lady/Cat_Lady_eye.png" },
		{ name: "Подмышки", img: "assets/guest/Cat_Lady/Cat_Lady_Armpits.png" }
            ]
        },

        desc: "Приходит на 4 день<br><br>Она говорит, что занимается балетом и может показать, как она танцует.<br><br>Приходит с котом, утверждая, что её сюда прислали. Открыто признаётся, что она гость — но не пытается тебя убить." 
    },

    {
        id: "g4", 
        name: "Coat Guy", 
        name_ru: "Парень в куртке", 
        type: "guest", 
        icon: "assets/guest/Coat_Guy/Coat_Guy_icon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/guest/Coat_Guy/Coat_Guy_height.png",
            features: [
                { name: "Руки", img: "assets/guest/Coat_Guy/Coat_Guy_hands.png" },
		{ name: "Глаза", img: "assets/guest/Coat_Guy/Coat_Guy_eye.png" },
		{ name: "Фото", img: "assets/guest/Coat_Guy/Coat_Guy_photo.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/guest/Coat_Guy/Coat_Guy_height.png",
            features: [
                { name: "Руки", img: "assets/guest/Coat_Guy/Coat_Guy_hands.png" },
		{ name: "Глаза", img: "assets/guest/Coat_Guy/Coat_Guy_eye.png" },
		{ name: "Фото", img: "assets/guest/Coat_Guy/Coat_Guy_photo.png" }
            ]
        },

        desc: "Может появиться между 1 и 7 днями<br><br>Он тихий, замкнутый и эмоционально отстранённый. Обычно отвечает на вопросы короткими и отрывистыми ответами.<br><br>Парень в пальто провёл большую часть своей жизни, страдая от непоколебимого холода, независимо от погоды и окружающей среды. Даже в ситуациях, где другие чувствуют себя комфортно, его часто можно увидеть дрожащим и крепко сжимающим своё огромное пальто." 
    },

    {
        id: "g5", 
        name: "Immortal man", 
        name_ru: "Бессмертный", 
        type: "guest", 
        icon: "assets/guest/Immortal_Man/Immortal_Man_icon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/guest/Immortal_Man/Immortal_Man_height.png",
            features: [
                { name: "Подмышки", img: "assets/guest/Immortal_Man/Immortal_man_armpits.png" },
		{ name: "Уши", img: "assets/guest/Immortal_Man/Immortal_man_ears.png" },
		{ name: "Фото", img: "assets/guest/Immortal_Man/Immortal_man_photo.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/guest/Immortal_Man/Immortal_Man_height.png",
            features: [
                { name: "Подмышки", img: "assets/guest/Immortal_Man/Immortal_man_armpits.png" },
		{ name: "Уши", img: "assets/guest/Immortal_Man/Immortal_man_ears.png" },
		{ name: "Фото", img: "assets/guest/Immortal_Man/Immortal_man_photo.png" }
            ]
        },

        desc: "Может появиться с 4 дня<br><br>Он считает себя бессмертным, утверждая, что застрял в бесконечном цикле смерти и реинкарнации. Он проявляет это убеждение без явного беспокойства, намекая на уровень принятия или отстранённости.<br><br>Он связывает происхождение Гостей с городской легендой о демонах на окраинах города. Он утверждает, что Гости сами выкопались из земли, а также что КЧС знала о них, впустила их в город и пыталась скрыть их беспорядок после этого." 
    },

    {
        id: "g6", 
        name: "Babushka", 
        name_ru: "Бабушка", 
        type: "guest", 
        icon: "assets/guest/Babushka/Babushka_icon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/guest/Babushka/Babushka_height.png",
            features: [
                { name: "Подмышки", img: "assets/guest/Babushka/Babushka_armpits.png" },
		{ name: "Глаза", img: "assets/guest/Babushka/Babushka_Eyes.png" },
		{ name: "Зубы", img: "assets/guest/Babushka/Babushka_Teeth.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/guest/Babushka/Babushka_height.png",
            features: [
                { name: "Подмышки", img: "assets/guest/Babushka/Babushka_armpits.png" },
		{ name: "Глаза", img: "assets/guest/Babushka/Babushka_Eyes.png" },
		{ name: "Зубы", img: "assets/guest/Babushka/Babushka_Teeth.png" }
            ]
        },

        desc: "Может появиться с 4 дня<br><br>У неё раздражительный характер, и она предпочитает быть в одиночестве.<br><br>Она говорит, что у неё нет ни мужа, ни внуков, поэтому она просто сидела бы на скамейках одна." 
    },
	];
