const randomData = [
    {
       id: "r1", 
        name: "Seductive Woman", 
        type: "random", 
        icon: "assets/random/Seductive_Woman/SeductiveWomanIcon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/random/Seductive_Woman/SeductiveWoman_height.png",
            features: [
                { name: "Подмышки", img: "assets/random/Seductive_Woman/human_armpit.png" },
                { name: "Глаза", img: "assets/random/Seductive_Woman/Human_eye.png" },
		{ name: "Фото", img: "assets/random/Seductive_Woman/human_photo.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/random/Seductive_Woman/SeductiveWoman_height.png",
            features: [
                { name: "Подмышки", img: "assets/random/Seductive_Woman/fake_armpit.png" },
                { name: "Глаза", img: "assets/random/Seductive_Woman/Fake_eye.png" },
		{ name: "Фото", img: "assets/random/Seductive_Woman/fake_photo.png" }
            ]
        },

        desc: "Может появиться с 4 ночи<br><br>Уверенный и кокетливый персонаж. Она кажется доброй и понимающей, но использует своё обаяние, чтобы исказить правду.<br><br>О её прошлом раскрывается очень мало, хотя, вероятно, она была давалкой или чем-то связанным с похотливым удовольствием в прошлом. Похоже, что она полагается на защиту главного героя, чтобы родить ребёнка. Хочет исполнить пророчество об ангелоподобных существах. Перед священным днём после разговора с ней большинство её диалогов были сосредоточены на том, чтобы заставить ГГ смириться со своей тревогой по поводу внешних ужасов." 
    },

    {
       id: "r2", 
        name: "Amogus Guy", 
        type: "random", 
        icon: "assets/random/Amogus_Guy/AmogusGuyIcon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/random/Amogus_Guy/AmogusGuyCloseUp.png",
            features: [
                { name: "Подмышки", img: "assets/random/Amogus_Guy/Amogus_armpits_human.png" },
                { name: "Глаза", img: "assets/random/Amogus_Guy/Amogus_Guy_eye_human.png" },
		{ name: "Фото", img: "assets/random/Amogus_Guy/Amogus_human_photo.png" },
                { name: "Руки", img: "assets/random/Amogus_Guy/Amogus_hands_hu.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/random/Amogus_Guy/AmogusGuyCloseUp.png",
            features: [
                { name: "Подмышки", img: "assets/random/Amogus_Guy/Amogus_visitor_pits.png" },
                { name: "Глаза", img: "assets/random/Amogus_Guy/Amogus_Guy_visitor_eyes.png" },
		{ name: "Фото", img: "assets/random/Amogus_Guy/Amogus_photo_fake.png" },
                { name: "Руки", img: "assets/random/Amogus_Guy/Amogus_hands_vis.png" }
            ]
        },

        desc: "Может появиться с 1 по 7 ночь<br><br>Он — подлый, грубый человек, который пытается втянуть хозяина в финансовую схему. Он не слишком глубоко задумывается о реалиях мира, в котором живёт, и не осознаёт серьёзность катастрофы, думая, что после взрыва солнца всё вернётся к прежнему состоянию. У него незрелое чувство юмора, он смеётся над шутками про сперму.<br><br>Он искал жильё для проживания, но каждый раз ему отказывали." 
    },

    {
       id: "r3", 
        name: "Angry Guy", 
        type: "random", 
        icon: "assets/random/Angry_Guy/AngryGuyIcon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/random/Angry_Guy/AngryGuy_height.png",
            features: [
                { name: "Подмышки", img: "assets/random/Angry_Guy/Angry_Guy_Human_Armpits.png" },
                { name: "Руки", img: "assets/random/Angry_Guy/Angry_Guy_Human_Nails_Hands.png" },
		{ name: "Зубы", img: "assets/random/Angry_Guy/AngryGuy_Human_Teeth.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/random/Angry_Guy/AngryGuy_height.png",
            features: [
                { name: "Подмышки", img: "assets/random/Angry_Guy/Angry_Guy_Visitor_Armpits.png" },
                { name: "Руки", img: "assets/random/Angry_Guy/Angry_Guy_Visitor_Nails_Hands.png" },
		{ name: "Зубы", img: "assets/random/Angry_Guy/AngryGuy_Visitor_Teeth.png" }
            ]
        },

        desc: "Может появиться с 8 ночи<br><br>Его главная черта — отсутствие сдержанности и вспыльчивый характер.<br><br>Он думает, что его жена ушла в этот культ, потому что никогда его не любила, и упоминает, что она была очень религиозным человеком, который потерял веру, чтобы присоединиться к культу смерти." 
    },

    {
       id: "r4", 
        name: "Armchair Lawyer Guy", 
        type: "random", 
        icon: "assets/random/Armchair_Lawyer_Guy/LawyerGuy_icon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/random/Armchair_Lawyer_Guy/Lawguy_heigth.png",
            features: [
                { name: "Подмышки", img: "assets/random/Armchair_Lawyer_Guy/LawyerGuy_armp_human.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/random/Armchair_Lawyer_Guy/Lawguy_heigth.png",
            features: [
                { name: "Подмышки", img: "assets/random/Armchair_Lawyer_Guy/LawyerGuy_armp_visitor.png" }
            ]
        },

        desc: "Может появиться с 3 ночи<br><br>Он одержим тем, чтобы постоянно ссылаться на закон.<br><br>Он полон решимости заключить с игроком юридический договор арендатора и не собирается отказываться от этого вопроса." 
    },

    {
       id: "r5", 
        name: "Bandana Guy", 
        type: "random", 
        icon: "assets/random/Bandana_Guy/BandanaGuy_Icon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/random/Bandana_Guy/BandanaGuy_height.png",
            features: [
                { name: "Глаза", img: "assets/random/Bandana_Guy/BandanaGuy_eye_human.png" },
                { name: "Руки", img: "assets/random/Bandana_Guy/BandanaGuy_hands_human.png" },
                { name: "Зубы", img: "assets/random/Bandana_Guy/BandanaGuy_teeth_human.png" },
                { name: "Фото", img: "assets/random/Bandana_Guy/bandana_guy_photo_human.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/random/Bandana_Guy/BandanaGuy_height.png",
            features: [
                { name: "Глаза", img: "assets/random/Bandana_Guy/BandanaGuy_eye_vis.png" },
                { name: "Руки", img: "assets/random/Bandana_Guy/BandanaGuy_hands_vis.png" },
                { name: "Зубы", img: "assets/random/Bandana_Guy/BandanaGuy_teeth_vis.png" },
                { name: "Фото", img: "assets/random/Bandana_Guy/bandana_guy_photo_vis.png" }
            ]
        },

        desc: "Может появиться с 8 ночи<br><br>Он очень тревожный и трусливый человек, который борется со своим огромным страхом. Он часто подмечает то, что не умеет защищаться, и желает, чтобы ГГ научил его этому.<br><br>Болезненно намекает на то, что его травили на протяжении всей школьной жизни. Он думал попытаться защититься, но всегда был слишком напуган." 
    },

    {
       id: "r6", 
        name: "Arsen Markaryan", 
        type: "random", 
        icon: "assets/random/Bearded_Huntsman/BeardedGuy_ico.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/random/Bearded_Huntsman/BeardedGuy_height.png",
            features: [
                { name: "Глаза", img: "assets/random/Bearded_Huntsman/Bearded_Huntsman_eye_human.png" },
                { name: "Зубы", img: "assets/random/Bearded_Huntsman/Bearded_Hunstman_human_teeth.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/random/Bearded_Huntsman/BeardedGuy_height.png",
            features: [
                { name: "Глаза", img: "assets/random/Bearded_Huntsman/Bearded_Huntsman_eye_vis.png" },
                { name: "Зубы", img: "assets/random/Bearded_Huntsman/Bearded_Hunstman_vis_teeth.png" }
            ]
        },

        desc: "Может появиться с 2 ночи<br><br>Он довольно суровый и жестокий человек, готовый убивать гостей и не ищет альтернативного способа общения с ними.<br><br>Охотник одержим убийством Гостей, что видно по его частым упоминаниям в разговорах. Он высоко ценит КЧС за их усилия по уничтожению Гостей." 
    },
    {
       id: "r7", 
        name: "Best Son", 
        type: "random", 
        icon: "assets/random/Best_Son/BestSon_Icon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/random/Best_Son/Bestson_height.png",
            features: [
                { name: "Глаза", img: "assets/random/Best_Son/Best_Son_Human_Eyes.png" },
                { name: "Руки", img: "assets/random/Best_Son/Best_Son_Human_Nails_Hands.png" },
                { name: "Зубы", img: "assets/random/Best_Son/Best_Son_Human_teeth.png" },
                { name: "Фото", img: "assets/random/Best_Son/Best_Son_Human_Photo.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/random/Best_Son/Bestson_height.png",
            features: [
                { name: "Глаза", img: "assets/random/Best_Son/Best_Son_Visitor_Eyes.png" },
                { name: "Руки", img: "assets/random/Best_Son/Best_Son_vis_Nails_Hands.png" },
                { name: "Зубы", img: "assets/random/Best_Son/Best_Son_vis_teeth.png" },
                { name: "Фото", img: "assets/random/Best_Son/Best_Son_vis_Photo.png" }
            ]
        },

        desc: "Может появиться с 8 ночи<br><br>Он кажется испуганным и даже неловким человеком, который очень заботится о своих родителях, несмотря на то, что они его бросили.<br><br>Его почти всегда показывают с наплаканными глазами и грустью, хотя иногда он чувствует себя перегруженным и вспышивает эмоции." 
    },

    {
       id: "r8", 
        name: "FEMA Wife", 
        type: "random", 
        icon: "assets/random/FEMA_Wife/cunt_Icon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/random/FEMA_Wife/cunt_height.png",
            features: [
                { name: "Глаза", img: "assets/random/FEMA_Wife/cunt_eye_human.png" },
                { name: "Руки", img: "assets/random/FEMA_Wife/cunt_hands_human.png" },
                { name: "Подмышки", img: "assets/random/FEMA_Wife/cunt_armpit_human.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/random/FEMA_Wife/cunt_height.png",
            features: [
                { name: "Глаза", img: "assets/random/FEMA_Wife/cunt_eye_vis.png" },
                { name: "Руки", img: "assets/random/FEMA_Wife/cunt_hands_vis.png" },
                { name: "Подмышки", img: "assets/random/FEMA_Wife/cunt_armpit_vis.png" }
            ]
        },

        desc: "Может появиться с 8 ночи<br><br>Она громкая, уверенная в себе и вспыльчивая женщина. Она гордится своей работой в таможне и считает, что умеет распознавать проблемы, но испытывает горечь от того, что её не взяли в КЧС из-за того, что она женщина.<br><br>Она приехала в его город, чтобы встретиться с мужем лично и сделать ему сюрприз, так как он переехал из-за работы." 
    },

    {
       id: "r9", 
        name: "College Runaway", 
        type: "random", 
        icon: "assets/random/College_Runaway/Collegerunaway_icon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/random/College_Runaway/CollegeRunaway_heigth.png",
            features: [
                { name: "Зубы", img: "assets/random/College_Runaway/College_teeth_human.png" },
                { name: "Руки", img: "assets/random/College_Runaway/College_hands_human.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/random/College_Runaway/CollegeRunaway_heigth.png",
            features: [
                { name: "Зубы", img: "assets/random/College_Runaway/College_teeth_vis.png" },
                { name: "Руки", img: "assets/random/College_Runaway/College_hands_vis.png" }
            ]
        },

        desc: "Может появиться с 3 ночи<br><br>Он довольно тревожный человек, слишком много думает о КЧС и братe, которого он очень ценил и уважал, что видно в его диалогах.<br><br>Раньше он жил в общежитии колледжа, его заперли во время карантина." 
    },

    {
       id: "r10", 
        name: "Conspiracy Theorist", 
        type: "random", 
        icon: "assets/random/Conspiracy_Theorist/Theorist_Icon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/random/Conspiracy_Theorist/Conspiracy_Theorist_height.png",
            features: [
                { name: "Глаза", img: "assets/random/Conspiracy_Theorist/Conspiracy_Theorist_eye_human.png" },
                { name: "Фото", img: "assets/random/Conspiracy_Theorist/Conspiracy_Theorist_photo_human.png" },
                { name: "Руки", img: "assets/random/Conspiracy_Theorist/Conspiracy_Theorist_hands_human.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/random/Conspiracy_Theorist/Conspiracy_Theorist_height.png",
            features: [
                { name: "Глаза", img: "assets/random/Conspiracy_Theorist/Conspiracy_Theorist_eye_vis.png" },
                { name: "Фото", img: "assets/random/Conspiracy_Theorist/Conspiracy_Theorist_photo_vis.png" },
                { name: "Руки", img: "assets/random/Conspiracy_Theorist/Conspiracy_Theorist_hands_vis.png" }
            ]
        },

        desc: "Может появиться с 4 ночи<br><br>Он очень разговорчивый, засыпает ГГ своими теориями при первой же возможности.<br><br>Хранит стопку «засекреченных» заметок и думает, что только он сможет узнать правду." 
    },

    {
       id: "r11", 
        name: "Cheerful Man", 
        type: "random", 
        icon: "assets/random/Cheerful_Man/CheerfulMan_Icon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/random/Cheerful_Man/Cheerfulman_heigth.png",
            features: [
                { name: "Фото", img: "assets/random/Cheerful_Man/Cheerful_guy_-_photo_human.png" },
                { name: "Руки", img: "assets/random/Cheerful_Man/Cheerfulman_human_hands.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/random/Cheerful_Man/Cheerfulman_heigth.png",
            features: [
                { name: "Фото", img: "assets/random/Cheerful_Man/Cheerful_man_Visitor_photo.png" },
                { name: "Руки", img: "assets/random/Cheerful_Man/Cheerfulman_visitor_hands.png" }
            ]
        },

        desc: "Может появиться в любую ночь<br><br>Он сострадательный человек, который выбирает оптимизм в сломанном мире. Когда-то охваченный гневом и горем, он научился находить силу в прощении.<br><br>Он признаётся, что сорвался на единственного человека, который пытался ему помочь. Это привело к смерти человека. Этот момент сломал что-то в нём, и он понял, что должен измениться, чтобы не разрушить всё, к чему прикасается." 
    },

    {
       id: "r12", 
        name: "Creepy Guy", 
        type: "random", 
        icon: "assets/random/Creepy_Guy/Creepyguy_icon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/random/Creepy_Guy/Creepyguy_heigth.png",
            features: [
                { name: "Фото", img: "assets/random/Creepy_Guy/Creepy_guy_human_photo.png" },
                { name: "Подмышки", img: "assets/random/Creepy_Guy/Creepy_guy_human_armpits.png" },
                { name: "Зубы", img: "assets/random/Creepy_Guy/Creepy_guy_teeth_human.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/random/Creepy_Guy/Creepyguy_heigth.png",
            features: [
                { name: "Фото", img: "assets/random/Creepy_Guy/Creepy_Guy_vis_Photo.png" },
                { name: "Подмышки", img: "assets/random/Creepy_Guy/Creepy_guy_vis_armpits.png" },
                { name: "Зубы", img: "assets/random/Creepy_Guy/Creepy_guy_teeth_vis.png" }
            ]
        },

        desc: "Может появиться с 5 ночи<br><br>Он очень жуткий, неловкий, странный и нервный мужчина, который часто хихикает в конце своих фраз. Он очень эксцентричен и обижен на своих обидчиков и родителей.<br><br>Он подвергался травле в детстве и во взрослом возрасте." 
    },

    {
       id: "r13", 
        name: "Deadbeat Mom", 
        type: "random", 
        icon: "assets/random/Deadbeat_Mom/Deadbeat_Mom_Icon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/random/Deadbeat_Mom/Deadbeat_Mom_heigth.png",
            features: [
                { name: "Фото", img: "assets/random/Deadbeat_Mom/Deadbeat_Mom_photo_human.png" },
                { name: "Руки", img: "assets/random/Deadbeat_Mom/Deadbeat_Mom_hands_human.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/random/Deadbeat_Mom/Deadbeat_Mom_heigth.png",
            features: [
                { name: "Фото", img: "assets/random/Deadbeat_Mom/Deadbeat_Mom_photo_vis.png" },
                { name: "Руки", img: "assets/random/Deadbeat_Mom/Deadbeat_Mom_hands_vis.png" }
            ]
        },

        desc: "Может появиться с 1 по 7 ночь<br><br>Она выглядит очень недовольной своей жизнью, постоянно жалуется, что её семья не ценит её заботу о них.<br><br>В какой-то момент её муж и четверо детей исчезли, оставив ей только одного ребёнка к моменту прибытия в дом." 
    },

    {
       id: "r14", 
        name: "Debtor", 
        type: "random", 
        icon: "assets/random/Debtor/Debtor_icon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/random/Debtor/Debtor_height.png",
            features: [
                { name: "Подмышки", img: "assets/random/Debtor/Debtor_Armpits_human.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/random/Debtor/Debtor_height.png",
            features: [
                { name: "Подмышки", img: "assets/random/Debtor/Debtor_armpits_vis.png" }
            ]
        },

        desc: "Может появиться с 1 по 7 ночь<br><br>Он неуклюжий человек, иногда весёлый и беззаботный. Он чаще всего отмахивается от долгов и презирает банк за то, что тот заморозил его счёт.<br><br>Он проработал на обветшалой фабрике 14 лет, пока компания не решила закрыть завод из-за растущих убытков." 
    },

    {
       id: "r15", 
        name: "EnerJeka Addict", 
        type: "random", 
        icon: "assets/random/EnerJeka_Addict/Enerjeka_Addict_icon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/random/EnerJeka_Addict/Enerjeka_Addict_heigth.png",
            features: [
                { name: "Руки", img: "assets/random/EnerJeka_Addict/Enerjeka_Addict_hands_human.png" },
                { name: "Глаза", img: "assets/random/EnerJeka_Addict/Enerjeka_Addict_eye_human.png" },
                { name: "Зубы", img: "assets/random/EnerJeka_Addict/Enerjeka_Addict_teeth_human.png" },
                { name: "Подмышки", img: "assets/random/EnerJeka_Addict/Enerjeka_Addict_armpits_human.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/random/EnerJeka_Addict/Enerjeka_Addict_heigth.png",
            features: [
                { name: "Руки", img: "assets/random/EnerJeka_Addict/Enerjeka_Addict_hands_vis.png" },
                { name: "Глаза", img: "assets/random/EnerJeka_Addict/Enerjeka_Addict_eye_vis.png" },
                { name: "Зубы", img: "assets/random/EnerJeka_Addict/Enerjeka_Addict_teeth_vis.png" },
                { name: "Подмышки", img: "assets/random/EnerJeka_Addict/Enerjeka_Addict_armpits_vis.png" }
            ]
        },

        desc: "Может появиться с 4 ночи<br><br>EnerJeka, часто рассказывает о напитке и о том, как он его наполняет энергией. Однако у него тревожное и параноидальное поведение, он постоянно двигается, разговаривая с Главным героем, и подчёркивает своё нежелание оставаться на одном месте слишком долго из-за инцидентов, свидетелем которых он стал с начала катастрофы.<br><br>В результате этих происшествий он считает, что лучше оставить всё позади и двигаться вперёд в надежде найти что-то лучшее." 
    },

    {
       id: "r16", 
        name: "Ex-Con", 
        type: "random", 
        icon: "assets/random/Ex-Con/Ex-Con_icon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/random/Ex-Con/Ex-Con_heigth.png",
            features: [
                { name: "Руки", img: "assets/random/Ex-Con/Ex-Con_hands_human.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/random/Ex-Con/Ex-Con_heigth.png",
            features: [
                { name: "Руки", img: "assets/random/Ex-Con/Ex-Con_hands_vis.png" }
            ]
        },

        desc: "Может появиться в любую ночь<br><br>Он очень прямолинейн, не стесняется высказывать своё мнение. Он не любит женщин и детей, вероятно, из-за неудачных отношений в прошлом.<br><br>Похоже, он только недавно снова вышел из тюрьмы, и его прошлый опыт сделал его очень язвительным, негативным и недоверчивым к другим." 
    },

    {
       id: "r17", 
        name: "Ex-Minister", 
        type: "random", 
        icon: "assets/random/Ex-Minister/Ex-Minister_icon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/random/Ex-Minister/Ex-Minister_heigth.png",
            features: [
                { name: "Подмышки", img: "assets/random/Ex-Minister/Ex-Minister_armpits_human.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/random/Ex-Minister/Ex-Minister_heigth.png",
            features: [
                { name: "Подмышки", img: "assets/random/Ex-Minister/Ex-Minister_armpits_vis.png" }
            ]
        },

        desc: "Может появиться с 5 ночи<br><br>Это человек, который упал с столпа власти. Он отчаянно пытается удержать титул министра, несмотря на отсутствие власти.<br><br>До всех событий был бюрократическим министром. Он описывает ту власть, которую обладал, и то, как люди раньше боялись и уважали его." 
    },

    {
       id: "r18", 
        name: "Fairytale Enjoyer", 
        type: "random", 
        icon: "assets/random/Fairytale_Enjoyer/Fairytale_Enjoyer_icon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/random/Fairytale_Enjoyer/Fairytale_Enjoyer_heigth.png",
            features: [
                { name: "Руки", img: "assets/random/Fairytale_Enjoyer/Fairytale_Enjoyer_hands_human.png" },
                { name: "Глаза", img: "assets/random/Fairytale_Enjoyer/Fairytale_Enjoyer_eye_human.png" },
                { name: "Подмышки", img: "assets/random/Fairytale_Enjoyer/Fairytale_Enjoyer_armpits_human.png" },
                { name: "Уши", img: "assets/random/Fairytale_Enjoyer/Fairytale_Enjoyer_ears_human.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/random/Fairytale_Enjoyer/Fairytale_Enjoyer_heigth.png",
            features: [
                { name: "Руки", img: "assets/random/Fairytale_Enjoyer/Fairytale_Enjoyer_hands_vis.png" },
                { name: "Глаза", img: "assets/random/Fairytale_Enjoyer/Fairytale_Enjoyer_eye_vis.png" },
                { name: "Подмышки", img: "assets/random/Fairytale_Enjoyer/Fairytale_Enjoyer_armpits_vis.png" },
                { name: "Уши", img: "assets/random/Fairytale_Enjoyer/Fairytale_Enjoyer_ears_vis.png" }
            ]
        },

        desc: "Может появиться хз<br><br>Добрый и уважительный человек. У него не было злобы на арендодателя за то, что он выгнал его ради сводных братьев и сестёр, и он был одним из немногих, кто не устраивает сцены у входной двери, когда ему отказывают во входе.<br><br>Закончил колледж, недолго работал бариста, но был уволен, а арендодатель выгнал его из квартиры из-за «безработицы», но на самом деле это было из-за того, что арендодатель хотел переселить своих сводных братьев и сестёр." 
    },

    {
       id: "r19", 
        name: "Fortune Teller", 
        type: "random", 
        icon: "assets/random/Fortune_Teller/Fortune_Teller_icon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/random/Fortune_Teller/Fortune_Teller_heigth.png",
            features: [
                { name: "Фото", img: "assets/random/Fortune_Teller/Fortune_Teller_photo_human.png" },
                { name: "Глаза", img: "assets/random/Fortune_Teller/Fortune_Teller_eye_human.png" },
                { name: "Зубы", img: "assets/random/Fortune_Teller/Fortune_Teller_teeth_human.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/random/Fortune_Teller/Fortune_Teller_heigth.png",
            features: [
                { name: "Фото", img: "assets/random/Fortune_Teller/Fortune_Teller_photo_vis.png" },
                { name: "Глаза", img: "assets/random/Fortune_Teller/Fortune_Teller_eye_vis.png" },
                { name: "Зубы", img: "assets/random/Fortune_Teller/Fortune_Teller_teeth_vis.png" }
            ]
        },

        desc: "Может появиться в любую ночь<br><br>Она эксцентричная женщина, которая верит, что её ведут послания вселенной.<br><br>Её вера играет большую роль в том, как она взаимодействует с другими людьми, поскольку одна из её главных целей — делиться своим взглядом на жизнь и помогать другим «видеть» через её знания." 
    },

    {
       id: "r20", 
        name: "Gravedigger", 
        type: "random", 
        icon: "assets/random/Gravedigger/Gravedigger_icon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/random/Gravedigger/Gravedigger_heigth.png",
            features: [
                { name: "Фото", img: "assets/random/Gravedigger/Gravedigger_photo_human.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/random/Gravedigger/Gravedigger_heigth.png",
            features: [
                { name: "Фото", img: "assets/random/Gravedigger/Gravedigger_photo_vis.png" }
            ]
        },

        desc: "Может появиться хз<br><br>Ушёл с работы из-за пугающей встречи с посетителем во время копения могилы, говоря, что его лопата ударила по руке, вырывающейся из земли.<br><br>Он, похоже, очень боится посетителей, чувствуя тревогу и беспокойство на работе с момента встречи с одним из Гостей." 
    },

    {
       id: "r21", 
        name: "Homeless Man", 
        type: "random", 
        icon: "assets/random/Homeless_Man/Homeless_Man_icon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/random/Homeless_Man/Homeless_Man_height.png",
            features: [
                { name: "Фото", img: "assets/random/Homeless_Man/Homeless_Man_photo_human.png" },
                { name: "Подмышки", img: "assets/random/Homeless_Man/Homeless_Man_armpits_human.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/random/Homeless_Man/Homeless_Man_height.png",
            features: [
                { name: "Фото", img: "assets/random/Homeless_Man/Homeless_Man_photo_vis.png" },
                { name: "Подмышки", img: "assets/random/Homeless_Man/Homeless_Man_armpits_vis.png" }
            ]
        },

        desc: "Может появиться с 8 ночи<br><br>Он, по-видимому, следует строгому моральному кодексу, который отличает его от других падальщиков: он не ворует у живых и избегает насилия, если это не необходимо. Разочарован, увидев худшее в человечестве.<br><br>Он признаётся, что решил собирать мусоры, потому что для этого не нужно было причинять вред другим и у него не было другого выхода." 
    },

    {
       id: "r22", 
        name: "Husband and Wife", 
        type: "random", 
        icon: "assets/random/HusbandnWife/HusbandnWife_icon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/random/HusbandnWife/HusbandnWife_heigth.png",
            features: [
                { name: "Глаза", img: "assets/random/HusbandnWife/HusbandnWife_eye_human.png" },
                { name: "Руки", img: "assets/random/HusbandnWife/HusbandnWife_hands_human.png" },
                { name: "Подмышки", img: "assets/random/HusbandnWife/HusbandnWife_armpits_human.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/random/HusbandnWife/HusbandnWife_heigth.png",
            features: [
                { name: "Глаза", img: "assets/random/HusbandnWife/Husband_and_Wife_Visitor_Eyes.png" },
                { name: "Руки", img: "assets/random/HusbandnWife/HusbandnWife_hands_vis.png" },
                { name: "Подмышки", img: "assets/random/HusbandnWife/HusbandnWife_armpits_vis.png" }
            ]
        },

        desc: "Может появиться в любую ночь<br><br>Сначала он кажется очень заботливым по отношению к жене, называя её ласковыми словами и говоря, что сделает для неё всё что угодно. Однако есть явные намёки на то, что он избивает свою жену, поэтому у него синяки на костяшках пальцев, и, вероятно, именно поэтому жена всё время молчит.<br><br>Они супружеская пара, путешествующая во время катаклизма, чтобы добраться до дома матери жены." 
    },

    {
       id: "r23", 
        name: "Leper Guy", 
        type: "random", 
        icon: "assets/random/Leper_Guy/Leper_Guy_icon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/random/Leper_Guy/Leper_Guy_heigth.png",
            features: [
                { name: "Глаза", img: "assets/random/Leper_Guy/Leper_Guy_eye_human.gif" },
                { name: "Фото", img: "assets/random/Leper_Guy/Leper_Guy_photo_human.png" },
                { name: "Подмышки", img: "assets/random/Leper_Guy/Alopecia_guy_human_armpits.png" },
                { name: "Зубы", img: "assets/random/Leper_Guy/Leper_Guy_teeth_human.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/random/Leper_Guy/Leper_Guy_heigth.png",
            features: [
                { name: "Глаза", img: "assets/random/Leper_Guy/Leper_Guy_eye_vis.gif" },
                { name: "Фото", img: "assets/random/Leper_Guy/Leper_Guy_photo_vis.png" },
                { name: "Подмышки", img: "assets/random/Leper_Guy/Leper_Guy_armpits_vis.png" },
                { name: "Зубы", img: "assets/random/Leper_Guy/Cat_Lady_Teeth.png" }
            ]
        },

        desc: "Может появиться в любую ночь<br><br>Он очень боится КЧС и людей в целом, потому что те быстро называют его гостем. Он даже подозревает, что КЧС стоит за самими посетителями.<br><br>Он сталкивался с травлей в школе из-за своего состояния и нежелания их подхватить. По мере взросления домогательства начали стихать до наступления Катаклизма, что только усугубляло ситуацию." 
    },

    {
       id: "r24", 
        name: "Morbid Romantic", 
        type: "random", 
        icon: "assets/random/Morbid_Romantic/Morbid_Romantic_icon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/random/Morbid_Romantic/Morbid_Romantic_heigth.png",
            features: [
                { name: "Глаза", img: "assets/random/Morbid_Romantic/Morbid_Romantic_eye_human.png" },
                { name: "Фото", img: "assets/random/Morbid_Romantic/Morbid_Romantic_photo_human.png" },
                { name: "Подмышки", img: "assets/random/Morbid_Romantic/Morbid_Romantic_armpits_human.png" },
                { name: "Зубы", img: "assets/random/Morbid_Romantic/Morbid_Romantic_teeth_human.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/random/Morbid_Romantic/Morbid_Romantic_heigth.png",
            features: [
                { name: "Глаза", img: "assets/random/Morbid_Romantic/Morbid_Romantic_eye_vis.png" },
                { name: "Фото", img: "assets/random/Morbid_Romantic/Morbid_Romantic_photo_vis.png" },
                { name: "Подмышки", img: "assets/random/Morbid_Romantic/Morbid_Romantic_armpits_vis.png" },
                { name: "Зубы", img: "assets/random/Morbid_Romantic/Morbid_Romantic_teeth_vis.png" }
            ]
        },

        desc: "Может появиться с 7 ночи<br><br>Он кажется мягким, поэтичным и странно спокойным со всем этим, словно он уже принял то, что грядёт.<br><br>Страдая от гангрены и медленно умирая, он покинул город и отправился в тихие, пустынные места, где мог спокойно ждать смерти." 
    },

    {
       id: "r25", 
        name: "The Nun", 
        type: "random", 
        icon: "assets/random/The_Nun/Nun_icon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/random/The_Nun/Nun_heigth.png",
            features: [
                { name: "Фото", img: "assets/random/The_Nun/Nun_photo_human.png" },
                { name: "Уши", img: "assets/random/The_Nun/Nun_ear_human.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/random/The_Nun/Nun_heigth.png",
            features: [
                { name: "Фото", img: "assets/random/The_Nun/Nun_photo_vis.png" },
                { name: "Уши", img: "assets/random/The_Nun/Nun_ear_vis.png" }
            ]
        },

        desc: "Может появиться с 2 ночи<br><br>Она строгая, суровая и неблагодарная, не проявляет никакой признательности, даже когда ГГ предлагает ей убежище.<br><br>Она рассказывает, что когда-то жила в монастыре и никогда не планировала уезжать, но когда «богохульники» разрушили его, всех выгнали, включая её." 
    },

    {
       id: "r26", 
        name: "Parentless Teenager", 
        type: "random", 
        icon: "assets/random/Parentless_Teenager/Parentless_Teenager_icon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/random/Parentless_Teenager/Parentless_Teenager_heigth.png",
            features: [
                { name: "Руки", img: "assets/random/Parentless_Teenager/Parentless_Teenager_hands_human.png" },
                { name: "Фото", img: "assets/random/Parentless_Teenager/Parentless_Teenager_photo_human.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/random/Parentless_Teenager/Parentless_Teenager_heigth.png",
            features: [
                { name: "Руки", img: "assets/random/Parentless_Teenager/Parentless_Teenager_hands_vis.png" },
                { name: "Фото", img: "assets/random/Parentless_Teenager/Parentless_Teenager_photo_vis.png" }
            ]
        },

        desc: "Может появиться в любую ночь<br><br>Она грубая и бунтарская, не уважающая ГГ и часто угрожающая ему. У неё сильно развит инстинкт самосохранения, она готова на всё, чтобы выжить в жару, и готова защитить себя в любой момент.<br><br>Незадолго до прибытия в дом другой домовладелец разрешил ей пожить у него. Они хорошо ладили, пока он не попытался напасть на неё, после чего она покинула этот дом." 
    },

    {
       id: "r27", 
        name: "Punk Girl", 
        type: "random", 
        icon: "assets/random/Punk_Girl/PunkGirl_icon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/random/Punk_Girl/PunkGirl_heigth.png",
            features: [
                { name: "Зубы", img: "assets/random/Punk_Girl/PunkGirl_teeth_human.png" },
                { name: "Глаза", img: "assets/random/Punk_Girl/PunkGirl_eye_human.gif" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/random/Punk_Girl/PunkGirl_heigth.png",
            features: [
                { name: "Зубы", img: "assets/random/Punk_Girl/PunkGirl_teeth_vis.png" },
                { name: "Глаза", img: "assets/random/Punk_Girl/PunkGirl_eye_vis.gif" }
            ]
        },

        desc: "Может появиться хз<br><br>Она одновременно дружелюбна и воинственна.<br><br>Раньше она была мягкой, но после этого инцидента с парнем, который напал на нее, решила, что слабые и мягкие люди далеко не продвинутся в этом мире." 
        },

    {
       id: "r28", 
        name: "Rockstar", 
        type: "random", 
        icon: "assets/random/Rockstar/Rockstar_icon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/random/Rockstar/Rockstar_heigth.png",
            features: [
                { name: "Подмышки", img: "assets/random/Rockstar/Rockstar_armpits_human.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/random/Rockstar/Rockstar_heigth.png",
            features: [
                { name: "Подмышки", img: "assets/random/Rockstar/Rockstar_armpits_vis.png" }
            ]
        },

        desc: "Может появиться с 1 по 7 ночь<br><br>Он музыкальный человек, часто рассказывает истории о своих выступлениях в группе и идеи для песен.<br><br>Он проводил дни, играя на сетах, но после катастрофы он оказался вовлечён в инцидент, когда его гитара была уничтожена после того, как люди вандализировали их помещение." 
        },

    {
       id: "r29", 
        name: "Sleepless Man", 
        type: "random", 
        icon: "assets/random/Sleepless_Man/SleeplessMan_icon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/random/Sleepless_Man/SleeplessMan_heigth.png",
            features: [
                { name: "Зубы", img: "assets/random/Sleepless_Man/SleeplessMan_teeth_human.png" },
                { name: "Глаза", img: "assets/random/Sleepless_Man/SleeplessMan_eye_human.png" },
                { name: "Руки", img: "assets/random/Sleepless_Man/SleeplessMan_hands_human.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/random/Sleepless_Man/SleeplessMan_heigth.png",
            features: [
                { name: "Зубы", img: "assets/random/Sleepless_Man/SleeplessMan_teeth_vis.png" },
                { name: "Глаза", img: "assets/random/Sleepless_Man/SleeplessMan_eye_vis.png" },
                { name: "Руки", img: "assets/random/Sleepless_Man/SleeplessMan_hands_vis.png" }
            ]
        },

        desc: "Может появиться с 8 ночи<br><br>Он довольно спокойный человек, который не слишком переживает из-за катастрофы.<br><br>Он говорит, что не спал шесть дней." 
        },

    {
       id: "r30", 
        name: "Stand Up Guy", 
        type: "random", 
        icon: "assets/random/StandUp_Guy/StandUp_Guy_icon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/random/StandUp_Guy/StandUp_Guy_heigth.png",
            features: [
                { name: "Глаза", img: "assets/random/StandUp_Guy/Stand_Up_Guy_Human_Eyes.png" },
                { name: "Руки", img: "assets/random/StandUp_Guy/Stand_Up_Guy_Human_Hands_Nails.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/random/StandUp_Guy/StandUp_Guy_heigth.png",
            features: [
                { name: "Глаза", img: "assets/random/StandUp_Guy/Stand_Up_Guy_Visitor_Eyes.png" },
                { name: "Руки", img: "assets/random/StandUp_Guy/Stand_Up_Guy_Visitor_Hands_Nails.png" }
            ]
        },

        desc: "Может появиться с 4 ночи<br><br>Дружелюбный и общительный, но социально неловкий персонаж, часто отпускающий шутки, чтобы разрядить обстановку, хотя большинство из них оказываются неудачными.<br><br>Согласно его диалогу, у него была собака, с которой он был очень близок, пока её не сбил таксист." 
        },

    {
       id: "r31", 
        name: "Stoner", 
        type: "random", 
        icon: "assets/random/Stoner/Stoner_icon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/random/Stoner/Stoner_heigth.png",
            features: [
                { name: "Глаза", img: "assets/random/Stoner/Stoner_eye_human.png" },
                { name: "Руки", img: "assets/random/Stoner/Stoner_hands_human.png" },
                { name: "Подмышки", img: "assets/random/Stoner/Stoner_armpits_human.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/random/Stoner/Stoner_heigth.png",
            features: [
                { name: "Глаза", img: "assets/random/Stoner/Stoner_eye_vis.png" },
                { name: "Руки", img: "assets/random/Stoner/Stoner_hands_vis.png" },
                { name: "Подмышки", img: "assets/random/Stoner/Stoner_armpits_vis.png" }
            ]
        },

        desc: "Может появиться с 1 по 7 ночь<br><br>Он расслаблен и живёт ради острых ощущений. Он ненавидит всё, что хоть немного кажется ему скучным, и тех, кто портит удовольствие.<br><br>Постоянно употреблял наркотики и всегда оказывался убитым при проверках." 
        },

    {
       id: "r32", 
        name: "Suit Guy", 
        type: "random", 
        icon: "assets/random/SuitGuy/SuitGuy_icon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/random/SuitGuy/SuitGuy_heigth.png",
            features: [
                { name: "Зубы", img: "assets/random/SuitGuy/SuitGuy_teeth_human.png" },
                { name: "Фото", img: "assets/random/SuitGuy/SuitGuy_photo_human.png" },
                { name: "Подмышки", img: "assets/random/SuitGuy/SuitGuy_armpits_human.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/random/SuitGuy/SuitGuy_heigth.png",
            features: [
                { name: "Зубы", img: "assets/random/SuitGuy/SuitGuy_teeth_vis.png" },
                { name: "Фото", img: "assets/random/SuitGuy/SuitGuy_photo_vis.png" },
                { name: "Подмышки", img: "assets/random/SuitGuy/SuitGuy_armpits_vis.png" }
            ]
        },

        desc: "Может появиться с 5 ночи<br><br>Он считает себя выше других, постоянно проверяет авторитет ГГ и провоцирует его доказать, что он настоящий альфа-самец или всего лишь овца в волчьей шкуре.<br><br>Он, по-видимому, является вором в законе. Это очевидно по его строгому иерархическому пониманию социальных отношений и недовольству тем, что другие нарушают понятия." 
        },

    {
       id: "r33", 
        name: "Sun Boy", 
        type: "random", 
        icon: "assets/random/SunBoy/SunBoy_icon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/random/SunBoy/SunBoy_heigth.png",
            features: [
                { name: "Глаза", img: "assets/random/SunBoy/SunBoy_eye_human.png" },
                { name: "Фото", img: "assets/random/SunBoy/SunBoy_photo_human.png" },
                { name: "Подмышки", img: "assets/random/SunBoy/SunBoy_armpits_human.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/random/SunBoy/SunBoy_heigth.png",
            features: [
                { name: "Глаза", img: "assets/random/SunBoy/SunBoy_eye_vis.png" },
                { name: "Фото", img: "assets/random/SunBoy/SunBoy_photo_vis.png" },
                { name: "Подмышки", img: "assets/random/SunBoy/SunBoy_armpits_vis.png" }
            ]
        },

        desc: "Может появиться с 1 по 7 ночь<br><br>После разговоров он часто думает о том, чтобы выпить пива и забыть о своей ситуации и прошлом, особенно о воспоминаниях о своей покойной жене, которую он называет «святой женщиной».<br><br>Мужчина утверждает, что его жена умерла при неизвестных обстоятельствах. Он также упоминает смерть своей матери и то, как она «утонула в грязи». Его пожелтевшие глаза могут указывать на историю алкогольной зависимости, что подтверждается его заявлениями о том, что он пьет, чтобы справиться со стрессом." 
        },

    {
       id: "r34", 
        name: "Surgeon", 
        type: "random", 
        icon: "assets/random/Surgeon/Surgeon_icon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/random/Surgeon/Surgeon_heigth.png",
            features: [
                { name: "Фото", img: "assets/random/Surgeon/Surgeon_photo_human.png" },
                { name: "Руки", img: "assets/random/Surgeon/Surgeon_hands_human.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/random/Surgeon/Surgeon_heigth.png",
            features: [
                { name: "Фото", img: "assets/random/Surgeon/Surgeon_photo_vis.png" },
                { name: "Руки", img: "assets/random/Surgeon/Surgeon_hands_vis.png" }
            ]
        },

        desc: "Может появиться с 5 ночи<br><br>Он — человек доброты, который всегда старается помочь всем, кому может.<br><br>Он работал хирургом, но уволился из-за проблем на рабочем месте, таких как паранойя и переполненность. Теперь он бродит по городу в поисках убежища и/или людей, которым может помочь." 
        },

    {
       id: "r35", 
        name: "Tattooed Woman", 
        type: "random", 
        icon: "assets/random/TattooedWoman/TattooedWoman_icon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/random/TattooedWoman/TattooedWoman_heigth.png",
            features: [
                { name: "Зубы", img: "assets/random/TattooedWoman/TattooedWoman_teeth_human.png" },
                { name: "Руки", img: "assets/random/TattooedWoman/TattooedWoman_hands_human.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/random/TattooedWoman/TattooedWoman_heigth.png",
            features: [
                { name: "Зубы", img: "assets/random/TattooedWoman/TattooedWoman_teeth_vis.png" },
                { name: "Руки", img: "assets/random/TattooedWoman/TattooedWoman_hands_vis.png" }
            ]
        },

        desc: "Может появиться с 4 ночи<br><br>Она гордится своей внешностью. Её пирсинг и окрашенные волосы — это аксессуары, требующие тщательного ухода. Хотя ей и раньше отказывали в убежище из-за её внешности, она не выражает сожаления по поводу того, как она себя украшает.<br><br>Она упоминает, что сталкивалась с дискриминацией из-за своих модификаций тела, но тем не менее гордится ими." 
        },

    {
       id: "r36", 
        name: "Taxi Driver", 
        type: "random", 
        icon: "assets/random/TaxiDriver/TaxiDriver_icon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/random/TaxiDriver/TaxiDriver_heigth.png",
            features: [
                { name: "Зубы", img: "assets/random/TaxiDriver/TaxiDriver_teeth_human.png" },
                { name: "Подмышки", img: "assets/random/TaxiDriver/TaxiDriver_armpits_human.png" },
                { name: "Руки", img: "assets/random/TaxiDriver/TaxiDriver_hands_human.png" },
                { name: "Глаза", img: "assets/random/TaxiDriver/TaxiDriver_eye_human.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/random/TaxiDriver/TaxiDriver_heigth.png",
            features: [
                { name: "Зубы", img: "assets/random/TaxiDriver/TaxiDriver_teeth_vis.png" },
                { name: "Подмышки", img: "assets/random/TaxiDriver/TaxiDriver_armpits_vis.png" },
                { name: "Руки", img: "assets/random/TaxiDriver/TaxiDriver_hands_vis.png" },
                { name: "Глаза", img: "assets/random/TaxiDriver/TaxiDriver_eye_vis.png" }
            ]
        },

        desc: "Может появиться с 3 ночи<br><br>Он глубоко параноик и измученный человек. Он боится, что кто-то хочет ему навредить, будь то Гость, КЧС или Человек в Костюме<br><br>Ему пришлось начать работать в молодом возрасте, чтобы содержать семью." 
        },

    {
       id: "r37", 
        name: "Theater Guy", 
        type: "random", 
        icon: "assets/random/TheaterGuy/TheaterGuy_icon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/random/TheaterGuy/TheaterGuy_heigth.png",
            features: [
                { name: "Фото", img: "assets/random/TheaterGuy/TheaterGuy_photo_human.png" },
                { name: "Подмышки", img: "assets/random/TheaterGuy/TheaterGuy_armpits_human.png" },
                { name: "Руки", img: "assets/random/TheaterGuy/TheaterGuy_hands_human.png" },
                { name: "Глаза", img: "assets/random/TheaterGuy/TheaterGuy_eye_human.gif" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/random/TheaterGuy/TheaterGuy_heigth.png",
            features: [
                { name: "Фото", img: "assets/random/TheaterGuy/TheaterGuy_photo_vis.png" },
                { name: "Подмышки", img: "assets/random/TheaterGuy/TheaterGuy_armpits_vis.png" },
                { name: "Руки", img: "assets/random/TheaterGuy/TheaterGuy_hands_vis.png" },
                { name: "Глаза", img: "assets/random/TheaterGuy/TheaterGuy_eye_vis.gif" }
            ]
        },

        desc: "Может появиться в любую ночь" 
        },

    {
       id: "r38", 
        name: "Twin Smoker", 
        type: "random", 
        icon: "assets/random/TwinSmoker/SmokerTwin_icon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/random/TwinSmoker/SmokerTwin_heigth.png",
            features: [
                { name: "Фото", img: "assets/random/TwinSmoker/SmokerTwin_photo_human.png" },
                { name: "Подмышки", img: "assets/random/TwinSmoker/SmokerTwin_armpits_human.png" },
                { name: "Руки", img: "assets/random/TwinSmoker/SmokerTwin_hands_human.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/random/TwinSmoker/SmokerTwin_heigth.png",
            features: [
                { name: "Фото", img: "assets/random/TwinSmoker/SmokerTwin_photo_vis.png" },
                { name: "Подмышки", img: "assets/random/TwinSmoker/SmokerTwin_armpits_vis.png" },
                { name: "Руки", img: "assets/random/TwinSmoker/SmokerTwin_hands_vis.png" }
            ]
        },

        desc: "Могут появиться с 3 ночи<br><br>Она ответственная и дисциплинированная, и, главным образом, более оптимистичная из сестер.<br><br>Их родители умерли незадолго до того, как они покинули свой дом, и теперь ищут более безопасное убежище в доме главного героя в надежде начать новую жизнь, несмотря на то, что окружающие считают это маловероятным." 
        },

    {
       id: "r39", 
        name: "Twin Depressed", 
        type: "random", 
        icon: "assets/random/TwinDepressed/TwinDepressed_icon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/random/TwinDepressed/TwinDepressed_heigth.png",
            features: [
                { name: "Фото", img: "assets/random/TwinDepressed/TwinDepressed_photo_human.png" },
                { name: "Зубы", img: "assets/random/TwinDepressed/TwinDepressed_teeth_human.png" },
                { name: "Подмышки", img: "assets/random/TwinDepressed/TwinDepressed_armpits_human.png" },
                { name: "Руки", img: "assets/random/TwinDepressed/TwinDepressed_hands_human.png" },
                { name: "Глаза", img: "assets/random/TwinDepressed/TwinDepressed_eye_human.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/random/TwinDepressed/TwinDepressed_heigth.png",
            features: [
                { name: "Фото", img: "assets/random/TwinDepressed/TwinDepressed_photo_vis.png" },
                { name: "Зубы", img: "assets/random/TwinDepressed/TwinDepressed_teeth_vis.png" },
                { name: "Подмышки", img: "assets/random/TwinDepressed/TwinDepressed_armpits_vis.png" },
                { name: "Руки", img: "assets/random/TwinDepressed/TwinDepressed_hands_vis.png" },
                { name: "Глаза", img: "assets/random/TwinDepressed/TwinDepressed_eye_vis.png" }
            ]
        },

        desc: "Могут появиться с 3 ночи<br><br>Она очень подавлена, уныла и пессимистична. Смерть родителей сильно её подкосила, и она ещё больше впала в депрессию.<br><br>Их родители умерли незадолго до того, как они покинули свой дом, и теперь ищут более безопасное убежище в доме главного героя в надежде начать новую жизнь, несмотря на то, что окружающие считают это маловероятным." 
        },

    {
       id: "r40", 
        name: "Tourist", 
        type: "random", 
        icon: "assets/random/Tourist/Tourist_icon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/random/Tourist/Tourist_heigth.png",
            features: [
                { name: "Фото", img: "assets/random/Tourist/Tourist_photo_human.png" },
                { name: "Глаза", img: "assets/random/Tourist/Tourist_eye_human.png" },
                { name: "Руки", img: "assets/random/Tourist/Tourist_hands_human.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/random/Tourist/Tourist_heigth.png",
            features: [
                { name: "Фото", img: "assets/random/Tourist/Tourist_photo_vis.png" },
                { name: "Глаза", img: "assets/random/Tourist/Tourist_eye_vis.png" },
                { name: "Руки", img: "assets/random/Tourist/Tourist_hands_vis.png" }
            ]
        },

        desc: "Могут появиться с 1 по 7 ночь<br><br>Он всегда думал, что у него будет время на путешествие позже, и ни разу не решал жить настоящим моментом, всегда боялся полностью посвятить себя своей мечте о путешествии по миру.<br><br>Он охвачен сожалением о своём прокрастинации." 
        },

    {
       id: "r41", 
        name: "Wheelchair Guy", 
        type: "random", 
        icon: "assets/random/WheelchairGuy/WheelchairGuy_icon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/random/WheelchairGuy/WheelchairGuy_heigth.png",
            features: [
                { name: "Фото", img: "assets/random/WheelchairGuy/WheelchairGuy_photo_human.png" },
                { name: "Зубы", img: "assets/random/WheelchairGuy/WheelchairGuy_teeth_human.png" },
                { name: "Руки", img: "assets/random/WheelchairGuy/WheelchairGuy_hands_human.png" },
                { name: "Подмышки", img: "assets/random/WheelchairGuy/WheelchairGuy_armpits_human.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/random/WheelchairGuy/WheelchairGuy_heigth.png",
            features: [
                { name: "Фото", img: "assets/random/WheelchairGuy/WheelchairGuy_photo_vis.png" },
                { name: "Зубы", img: "assets/random/WheelchairGuy/WheelchairGuy_teeth_vis.png" },
                { name: "Руки", img: "assets/random/WheelchairGuy/WheelchairGuy_hands_vis.png" },
                { name: "Подмышки", img: "assets/random/WheelchairGuy/WheelchairGuy_armpits_vis.png" }
            ]
        },

        desc: "Могут появиться с 8 ночи<br><br>Он довольно заблуждающийся человек, верящий, что его конечности и пальцы отрастут заново.<br><br>Он, похоже, не помнит, как потерял ноги, потому что говорит, что потерял их из-за несчастного случая с бурением друга, затем говорит, что споткнулся о рельсы и его сбила тележка, после чего отзывает своё мнение. Настоящая история его потери ног неясна."
        },

    {
       id: "r41", 
        name: "Wounded Man", 
        type: "random", 
        icon: "assets/random/WoundedMan/WoundedMan_icon.png",
        // Данные для режима "Человек"
        humanData: {
            main: "assets/random/WoundedMan/WoundedMan_heigth.png",
            features: [
                { name: "Фото", img: "assets/random/WoundedMan/WoundedMan_photo_human.png" },
                { name: "Глаза", img: "assets/random/WoundedMan/WoundedMan_eye_human.png" },
                { name: "Руки", img: "assets/random/WoundedMan/WoundedMan_hands_human.png" },
                { name: "Подмышки", img: "assets/random/WoundedMan/WoundedMan_armpits_human.png" }
            ]
        },
        // Данные для режима "Гость"
        guestData: {
            main: "assets/random/WoundedMan/WoundedMan_heigth.png",
            features: [
                { name: "Фото", img: "assets/random/WoundedMan/WoundedMan_photo_vis.png" },
                { name: "Глаза", img: "assets/random/WoundedMan/WoundedMan_eye_vis.png" },
                { name: "Руки", img: "assets/random/WoundedMan/WoundedMan_hands_vis.png" },
                { name: "Подмышки", img: "assets/random/WoundedMan/WoundedMan_armpits_vis.png" }
            ]
        },

        desc: "Могут появиться с 8 ночи<br><br>Он довольно подозрительный человек, поначалу лжущий о своем прошлом или обстоятельствах, приведших к его ранению, при первой встрече.<br><br>Он рассказывает, что был подстрелен сотрудником КЧС, когда убегал из карантинной зоны."
        },
];