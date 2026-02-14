const storyData = [
    {
        id: "s1", 
        name: "Neighbor", 
        name_ru: "Сосед", 
        type: "story", 
        icon: "assets/story/Neighbor/Neighbour_profile.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/story/Neighbor/Neighbour_heigth.png",
            features: [
                { name: "Сосед дает пиво", img: "assets/story/Neighbor/neighbour_beer.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/story/Neighbor/Neighbour_heigth.png",
            features: [
                { name: "Сосед дает пиво", img: "assets/story/Neighbor/neighbour_beer.png" }
            ]
        },

        desc: "Приходит за день, до начала всех событий<br><br>Он кажется общительным человеком, которому нравится общаться с людьми. Несмотря на апокалиптическую ситуацию, он пытается извлечь из ситуации максимум и вести нормальную жизнь.<br><br>Он счастливо женат, живёт с женой и дочерью в загородном доме." 
    },

    {
        id: "s2", 
        name: "Raincoat Child", 
        name_ru: "Мальчик в дождевике", 
        type: "story", 
        icon: "assets/story/RaincoatChild/RaincoatChild_icon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/story/RaincoatChild/RaincoatChild_heigth.png",
            features: [
                { name: "Он из другой игры", img: "assets/story/RaincoatChild/RaincoatChild_ref.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/story/RaincoatChild/RaincoatChild_heigth.png",
            features: [
                { name: "Он из другой игры", img: "assets/story/RaincoatChild/RaincoatChild_ref.png" }
            ]
        },

        desc: "Приходит абсолютно случайно и неизвестно придет ли вообще<br><br>Он много разговаривает сам с собой, довольно спокоен и уверен в себе, несмотря на очень опасную ситуацию.<br><br>Никогда не ищет убежище в доме ГГ." 
    },

    {
        id: "s3", 
        name: "Death Cult Leader", 
        name_ru: "Главный культист", 
        type: "story", 
        icon: "assets/story/DeathCultLeader/DeathCultLeader_icon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/story/DeathCultLeader/DeathCultLeader_heigth.png",
            features: [
                { name: "Выбор, если сохранить культистов", img: "assets/story/DeathCultLeader/DeathCultLeader_end.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/story/DeathCultLeader/DeathCultLeader_heigth.png",
            features: [
                { name: "Выбор, если сохранить культистов", img: "assets/story/DeathCultLeader/DeathCultLeader_end.png" }
            ]
        },

        desc: "Приходит в 8 ночь<br><br>Он спокоен и обдуман, говорит с уверенностью человека, который считает себя божественно избранным.<br><br>Впихивает в дом трех культистов без возможности отказаться. Угрожает смертью, если с ними что-то случится." 
    },

    {
        id: "s4", 
        name: "Delivery Man", 
        name_ru: "Доставщик", 
        type: "story", 
        icon: "assets/story/DeliveryMan/DeliveryMan_icon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/story/DeliveryMan/DeliveryMan_heigth.png",
            features: [
                { name: "Ачивка за заказ", img: "assets/story/DeliveryMan/DeliveryMan_ach.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/story/DeliveryMan/DeliveryMan_heigth.png",
            features: [
                { name: "Ачивка за заказ", img: "assets/story/DeliveryMan/DeliveryMan_ach.png" }
            ]
        },

        desc: "Приходит в ночь после заказа в ForRest<br><br>Он говорит, что старается отвлечься от негатива через свою работу. С каждым последующем заказом он становится всё более подавленным.<br><br>Изначально приехал в город учиться, параллельно подрабатывая курьером." 
    },

    {
        id: "s5", 
        name: "Prophetic Man", 
        name_ru: "Вещий", 
        type: "story", 
        icon: "assets/story/PropheticMan/PropheticMan_icon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/story/PropheticMan/PropheticMan_heigth.png",
            features: [
                { name: "Истощенный пророк", img: "assets/story/PropheticMan/PropheticMan_empty.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/story/DeliveryMan/DeliveryMan_heigth.png",
            features: [
                { name: "Ачивка за заказ", img: "assets/story/DeliveryMan/DeliveryMan_ach.png" }
            ]
        },

        desc: "Первый раз приходит в 3 ночь<br><br>Ведёт себя неуверенно и тревожно. На вопросы он полностью избегает ответов или отвечает расплывчато и неясно.<br><br>Он описывает себя как человека, который может лишь наблюдать, что произойдёт с миром." 
    },

    {
        id: "s6", 
        name: "FEMA Agent", 
        name_ru: "Агент КЧС", 
        type: "story", 
        icon: "assets/story/FEMA_Agent/FEMA_Agent_icon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/story/FEMA_Agent/FEMA_Agent_heigth.png",
            features: [
                { name: "КЧС по ТВ", img: "assets/story/FEMA_Agent/FEMA_Agent_TV.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/story/FEMA_Agent/FEMA_Agent_heigth.png",
            features: [
                { name: "КЧС по ТВ", img: "assets/story/FEMA_Agent/FEMA_Agent_TV.png" }
            ]
        },

        desc: "Первый раз приходит в 4 ночь<br><br>Он делится своими знаниями о Гостях и о том, чего ожидать от КЧС. Однако он должен забирать жильцов, внезависимости от решения ГГ.<br><br>Со временем забирает все больше жильцов." 
    },

    {
        id: "s7", 
        name: "Pale Visitor", 
        name_ru: "Бледный", 
        type: "story", 
        icon: "assets/story/Pale_Visitor/Pale_Visitor_icon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/story/Pale_Visitor/Pale_Visitor_heigth.png",
            features: [
                { name: "Бледный за окном", img: "assets/story/Pale_Visitor/Pale_Visitor_window.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/story/Pale_Visitor/Pale_Visitor_heigth.png",
            features: [
                { name: "Бледный за окном", img: "assets/story/Pale_Visitor/Pale_Visitor_window.png" }
            ]
        },

        desc: "Первый раз приходит в 3 ночь<br><br>Он очень жесток и без зазрения совести убивает большие группы людей, и единственная причина этого — садизм.<br><br>Не может убить, если ГГ дома не один дома." 
    },

    {
        id: "s8", 
        name: "Mushroom Eater", 
        name_ru: "Грибник", 
        type: "story", 
        icon: "assets/story/Mushroom_Eater/Mushroom_Eater_icon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/story/Mushroom_Eater/Mushroom_Eater_heigth.png",
            features: [
                { name: "Записка грибника", img: "assets/story/Mushroom_Eater/Mushroom_Eater_note.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/story/Pale_Visitor/Pale_Visitor_heigth.png",
            features: [
                { name: "Бледный за окном", img: "assets/story/Pale_Visitor/Pale_Visitor_window.png" }
            ]
        },

        desc: "Первый раз приходит в 6 ночь<br><br>Эксцентричный старик, который кажется одновременно весёлым и тревожным. Почти не обращает внимания на текущую пандемию.<br><br>Он появляется только если впустить Балетку внутрь." 
    },

    {
        id: "s9", 
        name: "Vigilante", 
        name_ru: "Стрелок", 
        type: "story", 
        icon: "assets/story/Vigilante/Vigilante_icon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/story/Vigilante/Vigilante_heigth.png",
            features: [
                { name: "Реакция на <br>неправильный признак", img: "assets/story/Vigilante/Vigilante_agr.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/story/Vigilante/Vigilante_heigth.png",
            features: [
                { name: "Реакция на неправильный признак", img: "assets/story/Vigilante/Vigilante_agr.png" }
            ]
        },

        desc: "Первый раз приходит в 8 ночь<br><br>Он очень авторитетен, движим яростью, ненавистью и холодным сердцем, и делает всё по-своему, чтобы решить проблемы посетителей.<br><br>Известно, что он брат Соседа." 
    },
];

