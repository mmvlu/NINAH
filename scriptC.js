const historyData = [
    { 
  day: 31, 
  img: "assets/calendar/day31.png", 
  title: "Сплетнославие", 
  desc: `<img src="assets/icon_c/neig.png" class="desc-img"> Сосед` 
},
{ 
        day: 1, 
        img: `assets/calendar/day1.png`, 
        title: `День пива`, 
        desc: `<img src="assets/icon_c/daughter.png" class="desc-img"> Дочь соседа, не останется,    <img src="assets/icon_c/slen.png" class="desc-img"> Длинный, <img src="assets/icon_c/cash.png" class="desc-img"> Кассирша, <img src="assets/icon_c/1r.png" class="desc-img"> 1 человек/гость` 
    },
    { 
        day: 2, 
        img: `assets/calendar/day2.png`, 
        title: `День огурца`, 
        desc: `<img src="assets/icon_c/3r.png" class="desc-img"> 3 человека/гостя` 
    },
    { 
        day: 3, 
        img: `assets/calendar/day3.png`, 
        title: `День семьи`, 
        desc: `<img src="assets/icon_c/lox.png" class="desc-img"> Бледный, <img src="assets/icon_c/1r.png" class="desc-img"> 1 человек/гость, <img src="assets/icon_c/bald.png" class="desc-img"> Вещий` 
    },
    { 
        day: 4, 
        img: `assets/calendar/day4.png`, 
        title: `День против конъюнктивита`, 
        desc: `<img src="assets/icon_c/FEMA.png" class="desc-img"> КЧС (-1 житель), <img src="assets/icon_c/1r.png" class="desc-img"> 1 человек/гость, <img src="assets/icon_c/daughter.png" class="desc-img"> Дочь соседа, <img src="assets/icon_c/ugly.png" class="desc-img"> <img src="assets/icon_c/cat.png" class="desc-img"> Балетка с котом` 
    },
    { 
        day: 5, 
        img: `assets/calendar/day5.png`, 
        title: `День защиты детей`, 
        desc: `<img src="assets/icon_c/FEMA.png" class="desc-img"> КЧС (-1 житель, +1 явка), <img src="assets/icon_c/lox.png" class="desc-img"> Бледный, <img src="assets/icon_c/bald.png" class="desc-img"> Вещий (если впустить Балетку), <img src="assets/icon_c/2r.png" class="desc-img"> 2 человека/гостя` 
    },
    { 
        day: 6, 
        img: `assets/calendar/day6.png`, 
        title: `День кассира`, 
        desc: `<img src="assets/icon_c/mush.png" class="desc-img"> Грибник (если впустить Балетку)` 
    },
    { 
        day: 7, 
        img: `assets/calendar/day7.png`, 
        title: `День паселка городского типа`, 
        desc: `<img src="assets/icon_c/2r.png" class="desc-img"> 2 человека/гостя, <img src="assets/icon_c/fire.png" class="desc-img"> Пожарный (+1 явка)` 
    },
    { 
        day: 8, 
        img: `assets/calendar/day8.png`, 
        title: `День гостеприимства`, 
        desc: `<img src="assets/icon_c/FEMA.png" class="desc-img"> КЧС (-2 жителя), <img src="assets/icon_c/cult.png" class="desc-img"> Культист (+3 культиста), <img src="assets/icon_c/hatr.png" class="desc-img"> Стрелок, <img src="assets/icon_c/1r.png" class="desc-img"> 1 человек/гость` 
    },
    { 
        day: 9, 
        img: `assets/calendar/day9.png`, 
        title: `Всемирный день "Спасибо"`, 
        desc: `<img src="assets/icon_c/mush.png" class="desc-img"> Грибник, <img src="assets/icon_c/1r.png" class="desc-img"> 1 человек/гость, <img src="assets/icon_c/lox.png" class="desc-img"> Бледный (новое правило), <img src="assets/icon_c/bald.png" class="desc-img"> Вещий (если выполнить условия), <span class="inline-item"> <img src="assets/icon_c/2r.png" class="desc-img"> 2 человека/гостя </span>` 
    },
    { 
        day: 10, 
        img: `assets/calendar/day10.png`, 
        title: `День дипломатии`, 
        desc: `<img src="assets/icon_c/mush.png" class="desc-img"> Грибник (если провести ритуал), <img src="assets/icon_c/FEMA.png" class="desc-img"> КЧС (-2 жителя), <img src="assets/icon_c/cult.png" class="desc-img"> Культист, <img src="assets/icon_c/hatr.png" class="desc-img"> Стрелок (проверка)` 
    },
    { 
        day: 11, 
        img: `assets/calendar/day11.png`, 
        title: `День примирений`, 
        desc: `<img src="assets/icon_c/1r.png" class="desc-img"> 1 человек/гость, <img src="assets/icon_c/lox.png" class="desc-img"> Бледный, <img src="assets/icon_c/cult.png" class="desc-img"> Культист (если его люди живы), <img src="assets/icon_c/2r.png" class="desc-img"> 2 человека/гостя` 
    },
    { 
        day: 12, 
        img: `assets/calendar/day12.png`, 
        title: `День ветряной мельницы`, 
        desc: `<img src="assets/icon_c/hatr.png" class="desc-img"> Стрелок (проверка), <img src="assets/icon_c/1r.png" class="desc-img"> 1 человек/гость, <img src="assets/icon_c/bald.png" class="desc-img"> Вещий (если условия выполнены), <img src="assets/icon_c/1r.png" class="desc-img"> 1 человек/гость` 
    },
    { 
        day: 13, 
        img: `assets/calendar/day13.png`, 
        title: `Празднование ухода лета`, 
        desc: `Никто не пришел` 
    },
    { 
        day: 14, 
        img: `assets/calendar/day14.png`, 
        title: ``, 
        desc: `Конец` 
    },
];

function initHistory() {
    const grid = document.getElementById('days-grid');
    if (!grid) return;

    historyData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'day-card';
        card.innerHTML = `
            <span>ДЕНЬ ${item.day}</span>
            <img src="${item.img}" alt="Day ${item.day}">
        `;
        
        card.onclick = () => showDay(item, card);
        grid.appendChild(card);
    });
}

function showDay(data, element) {
    // Убираем активный класс у всех
    document.querySelectorAll('.day-card').forEach(c => c.classList.remove('active'));
    // Добавляем текущему
    element.classList.add('active');

    // Выводим инфу
    const details = document.getElementById('day-details');
    details.innerHTML = `
        <h2>День ${data.day}: ${data.title}</h2>
        <p>${data.desc}</p>
    `;
}

// Запуск при загрузке
document.addEventListener('DOMContentLoaded', initHistory);