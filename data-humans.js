const humansData = [
    {
    id: "h1", 
    name: "Bar Guy", 
    name_ru: "Мужик из паба", 
    type: "human", // <--- Просто меняете это слово
    icon: "assets/human/Bar_Guy/bar_guy_icon.png",
    // Даже если это человек, структура должна быть, чтобы скрипт не падал
        humanData: {
            main: "assets/human/Bar_Guy/BarGuy_height.png",
            features: [
		{ name: "Зубы", img: "assets/human/Bar_Guy/barguy_Teeth.png" },
		{ name: "Глаза", img: "assets/human/Bar_Guy/human_eye.png" },
		{ name: "Фото", img: "assets/human/Bar_Guy/human_photo.png" }
] 
        },
        guestData: {
            main: "", // У человека нет формы гостя
            features: [
		{ name: "Зубы", img: "assets/human/Bar_Guy/barguy_Teeth.png" },
		{ name: "Глаза", img: "assets/human/Bar_Guy/human_eye.png" },
		{ name: "Фото", img: "assets/human/Bar_Guy/human_photo.png" }
]
        },
        desc: "Приходит в 1 ночь<br><br>Любит пить алкоголь и общаться с другими людьми.<br><br>Раньше останавливался в убежище в пабе, но был вынужден уйти из-за своего взрывного характера на реакцию всех на опасности солнца."
	},

        {
    id: "h2", 
    name: "Blinded Man",
    name_ru: "Слепой",  
    type: "human", // <--- Просто меняете это слово
    icon: "assets/human/Blinded_Man/Blind_Man_Icon.png",
    // Даже если это человек, структура должна быть, чтобы скрипт не падал
        humanData: {
            main: "assets/human/Blinded_Man/Blinded_man_height.png",
            features: [
		{ name: "Глаза", img: "assets/human/Blinded_Man/Blind_Man_Eye.png" },
		{ name: "Руки", img: "assets/human/Blinded_Man/Blind_Man_Hands.png" },
		{ name: "Подмышки", img: "assets/human/Blinded_Man/Blind_Man_armPits.png" }
] 
        },
        guestData: {
            main: "assets/human/Blinded_Man/Blinded_man_height.png", // У человека нет формы гостя
            features: [
		{ name: "Глаза", img: "assets/human/Blinded_Man/Blind_Man_Eye.png" },
		{ name: "Руки", img: "assets/human/Blinded_Man/Blind_Man_Hands.png" },
		{ name: "Подмышки", img: "assets/human/Blinded_Man/Blind_Man_armPits.png" }
]
        },
        desc: "Может появиться с 7 дня<br><br>Тревожный человек, полностью определяемый одним событием: видом того, что он называет «ОНО».<br><br>Он стал свидетелем того, как существо съедало обугленные останки людей."
	},

            {
            id: "h3", 
    name: "Death Cult Peon 1",
    name_ru: "Культист 1",  
    type: "human", // <--- Просто меняете это слово
    icon: "assets/human/Death_Cult_Peon_1/Peon1icon.png",
    // Даже если это человек, структура должна быть, чтобы скрипт не падал
        humanData: {
            main: "assets/human/Death_Cult_Peon_1/Peon1_height.png",
            features: [
		{ name: "Глаза", img: "assets/human/Death_Cult_Peon_1/Death_Cult_Peon_1_eye.png" },
		{ name: "Зубы", img: "assets/human/Death_Cult_Peon_1/Death_Cult_Peon_1_teeth.png" },
		{ name: "Подмышки", img: "assets/human/Death_Cult_Peon_1/Death_Cult_Peon_1_armpit.png" }
] 
        },
        guestData: {
            main: "assets/human/Death_Cult_Peon_1/Peon1_height.png", // У человека нет формы гостя
            features: [
		{ name: "Глаза", img: "assets/human/Death_Cult_Peon_1/Death_Cult_Peon_1_eye.png" },
		{ name: "Зубы", img: "assets/human/Death_Cult_Peon_1/Death_Cult_Peon_1_teeth.png" },
		{ name: "Подмышки", img: "assets/human/Death_Cult_Peon_1/Death_Cult_Peon_1_armpit.png" }
]
        },
        desc: "Приходят на 8 день<br><br>Группа культистов Культа Смерти. Без приглашения врываются в дом ГГ, чтобы восхвалять «Смерть».<br><br>По отдельности ни один из культистов не раскрывает ничего о своём прошлом."
},

            {
            id: "h4", 
    name: "Death Cult Peon 2", 
    name_ru: "Культист 2",
    type: "human", // <--- Просто меняете это слово
    icon: "assets/human/Death_Cult_Peon_2/Peon2icon.png",
    // Даже если это человек, структура должна быть, чтобы скрипт не падал
        humanData: {
            main: "assets/human/Death_Cult_Peon_2/Peon2_height.png",
            features: [
		{ name: "Глаза", img: "assets/human/Death_Cult_Peon_2/Death_Cult_Peon_2_eye.png" },
		{ name: "Зубы", img: "assets/human/Death_Cult_Peon_2/Death_Cult_Peon_2_teeth.png" },
		{ name: "Подмышки", img: "assets/human/Death_Cult_Peon_2/Death_Cult_Peon_2_armpit.png" }
] 
        },
        guestData: {
            main: "assets/human/Death_Cult_Peon_1/Peon1_height.png", // У человека нет формы гостя
            features: [
		{ name: "Глаза", img: "assets/human/Death_Cult_Peon_1/Death_Cult_Peon_2_eye.png" },
		{ name: "Зубы", img: "assets/human/Death_Cult_Peon_1/Death_Cult_Peon_2_teeth.png" },
		{ name: "Подмышки", img: "assets/human/Death_Cult_Peon_1/Death_Cult_Peon_2_armpit.png" }
]
        },
        desc: "Приходят на 8 день<br><br>Группа культистов Культа Смерти. Без приглашения врываются в дом ГГ, чтобы восхвалять «Смерть».<br><br>Самый боязливый из троих и признаёт, что не хочет умирать.<br><br>По отдельности ни один из культистов не раскрывает ничего о своём прошлом."
},

            {
            id: "h5", 
    name: "Death Cult Peon 3", 
    name_ru: "Культист 3",
    type: "human", // <--- Просто меняете это слово
    icon: "assets/human/Death_Cult_Peon_3/Peon3icon.png",
    // Даже если это человек, структура должна быть, чтобы скрипт не падал
        humanData: {
            main: "assets/human/Death_Cult_Peon_3/Peon3_height.png",
            features: [
		{ name: "Глаза", img: "assets/human/Death_Cult_Peon_3/Death_Cult_Peon_3_eye.png" },
		{ name: "Зубы", img: "assets/human/Death_Cult_Peon_3/Death_Cult_Peon_3_teeth.png" },
		{ name: "Подмышки", img: "assets/human/Death_Cult_Peon_3/Death_Cult_Peon_3_armpit.png" }
] 
        },
        guestData: {
            main: "assets/human/Death_Cult_Peon_3/Peon3_height.png", // У человека нет формы гостя
            features: [
		{ name: "Глаза", img: "assets/human/Death_Cult_Peon_3/Death_Cult_Peon_3_eye.png" },
		{ name: "Зубы", img: "assets/human/Death_Cult_Peon_3/Death_Cult_Peon_3_teeth.png" },
		{ name: "Подмышки", img: "assets/human/Death_Cult_Peon_3/Death_Cult_Peon_3_armpit.png" }
]
        },
        desc: "Приходят на 8 день<br><br>Группа культистов Культа Смерти. Без приглашения врываются в дом ГГ, чтобы восхвалять «Смерть».<br><br>По отдельности ни один из культистов не раскрывает ничего о своём прошлом."
},

	            {
            id: "h6", 
    name: "Disfigured Firefighter", 
    name_ru: "Пожарный",
    type: "human", // <--- Просто меняете это слово
    icon: "assets/human/Disfigured Firefighter/DisfiguredFirefighterIcon.png",
    // Даже если это человек, структура должна быть, чтобы скрипт не падал
        humanData: {
            main: "assets/human/Disfigured Firefighter/Disfigured_Firefighter_height.png",
            features: [
		{ name: "Подмышки", img: "assets/human/Disfigured Firefighter/Firefighter_armpits.png" },
		{ name: "Руки", img: "assets/human/Disfigured Firefighter/Firefighter_hands.png" },
		{ name: "Глаза", img: "assets/human/Disfigured Firefighter/Firefighter_eye.png" }
] 
        },
        guestData: {
            main: "assets/human/Disfigured Firefighter/Disfigured_Firefighter_height.png", // У человека нет формы гостя
            features: [
		{ name: "Подмышки", img: "assets/human/Disfigured Firefighter/Firefighter_armpits.png" },
		{ name: "Руки", img: "assets/human/Disfigured Firefighter/Firefighter_hands.png" },
		{ name: "Глаза", img: "assets/human/Disfigured Firefighter/Firefighter_eye.png" }
]
        },
        desc: "Приходит на 7 день<br><br>Он очень предан своей работе и близким людям.<br><br>До взрыва солнца он работал пожарным, назначенным тушением лесного пожара. По приказу начальника остальные члены его команды сгорели заживо. Он был единственным выжившим, хотя степень его ожогов остаётся опасной для жизни."
},

		            {
            id: "h7", 
    name: "Man in Hazmat", 
    name_ru: "Мужик в химзащите",
    type: "human", // <--- Просто меняете это слово
    icon: "assets/human/Man_in_Hazmat/Man_in_Hazmat_icon.png",
    // Даже если это человек, структура должна быть, чтобы скрипт не падал
        humanData: {
            main: "assets/human/Man_in_Hazmat/Man_in_Hazmat_height.png",
            features: [
		{ name: "Глаза", img: "assets/human/Man_in_Hazmat/Man_in_Hazmat_eye.png" },
		{ name: "Руки", img: "assets/human/Man_in_Hazmat/Man_in_Hazmat_hands.png" },
		{ name: "Фото", img: "assets/human/Man_in_Hazmat/Man_in_Hazmat_photo.png" }
] 
        },
        guestData: {
            main: "assets/human/Man_in_Hazmat/Man_in_Hazmat_height.png", // У человека нет формы гостя
            features: [
		{ name: "Глаза", img: "assets/human/Man_in_Hazmat/Man_in_Hazmat_eye.png" },
		{ name: "Руки", img: "assets/human/Man_in_Hazmat/Man_in_Hazmat_hands.png" },
		{ name: "Фото", img: "assets/human/Man_in_Hazmat/Man_in_Hazmat_photo.png" }
]
        },
        desc: "Может появиться с 7 дня<br><br>Он очень неуверен в себе из-за ситуации, в которой оказался, и становится невероятно нервным, когда с ним разговаривают.<br><br>Он работал в КЧС в составе персонала карантинной зоны. Был уволен за нарушение протокола."
},

		{
            id: "h8", 
    name: "Kindergarten Teacher", 
    name_ru: "Воспитательница",
    type: "human", // <--- Просто меняете это слово
    icon: "assets/human/Kindergarten_Teacher/Kindergarten_Teacher_icon.png",
    // Даже если это человек, структура должна быть, чтобы скрипт не падал
        humanData: {
            main: "assets/human/Kindergarten_Teacher/Kindergarten_Teacher_height.png",
            features: [
		{ name: "Глаза", img: "assets/human/Kindergarten_Teacher/Kindergarten_Teacher_eye.png" },
		{ name: "Руки", img: "assets/human/Kindergarten_Teacher/Kindergarten_Teacher_hands.png" },
		{ name: "Зубы", img: "assets/human/Kindergarten_Teacher/Kindergarten_Teacher_teeth.png" }
] 
        },
        guestData: {
            main: "assets/human/Kindergarten_Teacher/Kindergarten_Teacher_height.png", // У человека нет формы гостя
            features: [
		{ name: "Глаза", img: "assets/human/Kindergarten_Teacher/Kindergarten_Teacher_eye.png" },
		{ name: "Руки", img: "assets/human/Kindergarten_Teacher/Kindergarten_Teacher_hands.png" },
		{ name: "Зубы", img: "assets/human/Kindergarten_Teacher/Kindergarten_Teacher_teeth.png" }
]
        },
        desc: "Может появиться с 5 дня.<br><br>Она довольно чувствительный и добрый человек, хотя легко становилась эмоциональной при разговоре о том, что увидела и пережила.<br><br>Она начала преподавать в детском саду примерно за три месяца до начала катастрофы, но сожалеет, что не была образцовым учителем, каким могла бы быть."
},

		{
            id: "h9", 
    name: "Little Girl", 
    name_ru: "Дочь соседа",
    type: "human", // <--- Просто меняете это слово
    icon: "assets/human/Little_Girl/Little_Girl_icon.png",
    // Даже если это человек, структура должна быть, чтобы скрипт не падал
        humanData: {
            main: "assets/human/Little_Girl/Little_Girl_height.png",
            features: [
		{ name: "Глаза", img: "assets/human/Little_Girl/Little_Girl_eye.png" },
		{ name: "Руки", img: "assets/human/Little_Girl/Little_Girl_hands.png" },
		{ name: "Зубы", img: "assets/human/Little_Girl/Little_Girl_teeth.png" }
] 
        },
        guestData: {
            main: "assets/human/Little_Girl/Little_Girl_height.png", // У человека нет формы гостя
            features: [
		{ name: "Глаза", img: "assets/human/Little_Girl/Little_Girl_eye.png" },
		{ name: "Руки", img: "assets/human/Little_Girl/Little_Girl_hands.png" },
		{ name: "Зубы", img: "assets/human/Little_Girl/Little_Girl_teeth.png" }
]
        },
        desc: "Приходит на 4 день<br><br>У неё очень жизнерадостный характер, но она наивна в отношении ситуации в мире.<br><br>Однако после смерти отца и, возможно, матери, сосед на пороге видит её очень взволнованной и напуганной. Днём можно увидеть, как она плачет по маме и папе, когда общается с ней."
},

		{
            id: "h10", 
    name: "Wireface", 
    name_ru: "Зашитыш",
    type: "human", // <--- Просто меняете это слово
    icon: "assets/human/Wireface/Wireface_Icon.png",
    // Даже если это человек, структура должна быть, чтобы скрипт не падал
        humanData: {
            main: "assets/human/Wireface/Wireface_heigth.png",
            features: [
		{ name: "Фото", img: "assets/human/Wireface/Wireface_photo.png" },
		{ name: "Руки", img: "assets/human/Wireface/Wireface_hands.png" },
		{ name: "Зубы", img: "assets/human/Wireface/Wireface_teeth.png" }
] 
        },
        guestData: {
            main: "assets/human/Wireface/Wireface_heigth.png", // У человека нет формы гостя
            features: [
		{ name: "Фото", img: "assets/human/Wireface/Wireface_photo.png" },
		{ name: "Руки", img: "assets/human/Wireface/Wireface_hands.png" },
		{ name: "Зубы", img: "assets/human/Wireface/Wireface_teeth.png" }
]
        },
        desc: "Может появиться с 3 ночи<br><br>Он кажется относительно позитивным человеком, что видно по его оптимизму по поводу возможности вернуться на поезде на родину и легкомысленном комментарии по поводу фотографии, сделанной на фототесте игроком.<br><br>Также сильно подразумевается, что он гей, учитывая, что он носит серьгу, что в то время было признаком гомосексуальности. Он также упоминает своего предполагаемого «друга»."
},

		{
            id: "h11", 
    name: "Widowed Woman",
    name_ru: "Вдова", 
    type: "human", // <--- Просто меняете это слово
    icon: "assets/human/Widowed_Woman/Widowed_Woman_icon.png",
    // Даже если это человек, структура должна быть, чтобы скрипт не падал
        humanData: {
            main: "assets/human/Widowed_Woman/Widowed_Woman_height.png",
            features: [
		{ name: "Фото", img: "assets/human/Widowed_Woman/Widowed_Woman_photo.png" },
		{ name: "Глаза", img: "assets/human/Widowed_Woman/Widow_eye.png" },
		{ name: "Подмышки", img: "assets/human/Widowed_Woman/Widowed_Woman_armpits.png" }
] 
        },
        guestData: {
            main: "assets/human/Widowed_Woman/Widowed_Woman_height.png", // У человека нет формы гостя
            features: [
		{ name: "Фото", img: "assets/human/Widowed_Woman/Widowed_Woman_photo.png" },
		{ name: "Глаза", img: "assets/human/Widowed_Woman/Widow_eye.png" },
		{ name: "Подмышки", img: "assets/human/Widowed_Woman/Widowed_Woman_armpits.png" }
]
        },
        desc: "Может появиться с 4 ночи<br><br>В её личности больше всего видно горе и эмоциональные переживания.<br><br>Её мужа забрала КЧС, находясь в ослабленном состоянии, страдая неизвестной болезнью, и в итоге он умер в карантинной зоне."
}
];
