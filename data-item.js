const itemData = [
    {
        id: "i1", 
        name: "FEMA Notice Slip", 
        name_ru: "Явка КЧС", 
        type: "item", 
        icon: "assets/items/notice/notice.gif",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/items/notice/send_notice.gif",
            features: [
                { name: "Ачивка за передачу<br>явки Пожарнику", img: "assets/items/notice/FEMA.jpg" }
            ]
        },

        desc: "Позволяет гарантировано отправить выбраного персонажа в КЧС при их следующем прибытии.<br><br>По ходу игры одну такую дает агент КЧС, а другую Пожарник. Так же ее можно получить случайным образом: от Ех-Министра или когда люди, которым было отказано войти попытаются подкупить ГГ." 
    },

    {
        id: "i2", 
        name: "Mushroom",
        name_ru: "Гриб",  
        type: "item", 
        icon: "assets/items/mushroom/Mushroom_heigth.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/items/mushroom/mushroom_eating.gif",
            features: [
                { name: "Гриб в подвале", img: "assets/items/mushroom/mushroom_base.png" }
            ]
        },

        desc: "Гриб можно найти в подвале, поэтому для его поиска игроку нужно впустить Кошачью Леди внутрь дома.<br><br>После того как Грибоeд навестит дом в 6 ночь, гриб вырастет.<br><br>Нужен для одной из концовок." 
    },

    {
        id: "i3", 
        name: "EnerJeka", 
        name_ru: "ЕнерЖека", 
        type: "item", 
        icon: "assets/items/enerjeka/enerjeka_heigth1.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/items/enerjeka/enerjeka_fridge.png",
            features: [
                { name: "Энергетик в<br>рекламе", img: "assets/items/enerjeka/EnerJeka_TV.png" },
                { name: "Эффект энергетика", img: "assets/items/enerjeka/effect.gif" }
            ]
        },

        desc: "Восполняет часть энергии при употреблении. Можно заказать в ForRest<br><br>Его могут дать: Angry Guy, Wheelchair Guy, Sun Guy, The Sisters, EnerJeka Addict." 
    },

    {
        id: "i4", 
        name: "Cigarettes", 
        name_ru: "Сигареты", 
        type: "item", 
        icon: "assets/items/cigarettes/Cigarettes.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/items/cigarettes/smoking.gif",
            features: [
                { name: "Сигареты в<br>рекламе", img: "assets/items/cigarettes/ad.png" },
                { name: "Эффект сигарет", img: "assets/items/cigarettes/effect.png" }
            ]
        },

        desc: "Курение сигарет полностью восстанавливает энергию, но на следующий день не хватает одной энергии. Можно заказать в ForRest<br><br>Могут быть даны в качестве взятки." 
    },

    {
        id: "i5", 
        name: "Coffee", 
        name_ru: "Кофе", 
        type: "item", 
        icon: "assets/items/coffee/coffee_icon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/items/coffee/coffee.png",
            features: [
                { name: "Эффект кофе", img: "assets/items/enerjeka/effect.gif" }
            ]       
     },

        desc: "Кофе добавляет ещё один слот к энергии. Это действует 4 дня, включая тот, когда напиток был выпит. Можно заказать в ForRest<br><br>Может быть дан в качестве взятки." 
    },

    {
        id: "i6", 
        name: "Kombucha", 
        name_ru: "Чайный гриб", 
        type: "item", 
        icon: "assets/items/kombucha/kombucha_icon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/items/kombucha/kombucha_drinking.gif",        },

        desc: "Чайный гриб сохраняет прогресс. Можно заказать в ForRest<br><br>Может быть дан в качестве взятки." 
    },

    {
        id: "i7", 
        name: "Beer", 
        name_ru: "Пиво", 
        type: "item", 
        icon: "assets/items/beer/beer_main1.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/items/beer/beer_main1.png",
            features: [
                { name: "Пиво в<br>рекламе", img: "assets/items/beer/beer_tv.png" },
                { name: "Пиво в<br>холодильнике", img: "assets/items/beer/beer_fridge.png" },
                { name: "Ящик пива", img: "assets/items/beer/pack_beer.png" }
            ]
        },

        desc: "Сбрасывает энергию до 0. <br><br>Сосед даёт в начале месяца." 
    },

    {
        id: "i8", 
        name: "Cat food", 
        name_ru: "Кошачья еда", 
        type: "item", 
        icon: "assets/items/Cat_Food/Cat_Food.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/items/Cat_Food/cat_feeding.gif",        },

        desc: "При кормлении кошки в следующую ночь никто не умрет. Можно заказать в ForRest сразу 2 консервы.<br><br>Может быть дан в качестве взятки." 
    },
];