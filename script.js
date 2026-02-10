const characters = [...humansData, ...guestsData, ...randomData, ...storyData, ...itemData];

const previewImg = document.getElementById('preview-img');
const previewName = document.getElementById('preview-name');
const previewDesc = document.getElementById('preview-desc');
const featureContainer = document.getElementById('feature-container');

function init() {
    // Сортируем персонажей по алфавиту (поле name) перед отрисовкой
    const sortedCharacters = [...characters].sort((a, b) => {
        return a.name.localeCompare(b.name);
    });

// Твой цикл отрисовки карточек
    sortedCharacters.forEach(char => {
        const card = document.createElement('div');
        card.className = 'char-card';
	card.setAttribute('data-name', char.name); // <--- ВАЖНО для работы поиска
        card.style.backgroundImage = `url('${char.icon}')`;
        
        card.onmouseover = () => {
            // ШАГ 1: Находим блок контента и добавляем ему класс 'active'
            const content = document.querySelector('.sidebar-content');
            if (content) {
                content.classList.add('active');
            }

            // ШАГ 2: Твой обычный код обновления данных
            document.getElementById('preview-img').src = char.humanData.main;
            document.getElementById('preview-name').innerText = char.name;
            document.getElementById('preview-desc').innerHTML = char.desc;
        };

        card.onclick = () => openModal(char);

        const container = document.getElementById(`category-${char.type}`);
        if (container) container.appendChild(card);
    });
}

let currentCharacter = null;

function openModal(char) {
    currentCharacter = char;
    document.getElementById('modal').style.display = 'flex';
    document.getElementById('modal-name').innerText = char.name;
    document.getElementById('modal-info-text').innerHTML = char.desc;

    const switcher = document.getElementById('switcher-container');
    
    if (char.type === 'random') {
        // Если это Рандом — оставляем кнопки выбора
        switcher.style.display = 'flex';
        switcher.innerHTML = `
            <button id="btn-h" class="toggle-btn" onclick="switchMode('human')">Человек</button>
            <button id="btn-g" class="toggle-btn" onclick="switchMode('guest')">Гость</button>
        `;
        switchMode('human'); 
    } else if (char.type === 'human') {
        // Если это 100% Человек — зеленая плашка
        switcher.style.display = 'flex';
        switcher.innerHTML = `<div class="status-label status-human">СТАТУС: ЧЕЛОВЕК</div>`;
        switchMode('human');
    } else if (char.type === 'guest') {
        // Если это 100% Гость — красная плашка
        switcher.style.display = 'flex';
        switcher.innerHTML = `<div class="status-label status-guest">СТАТУС: ГОСТЬ</div>`;
        switchMode('guest'); // Сразу включаем режим гостя, чтобы видеть его признаки
    } else if (char.type === 'story') {
        switcher.style.display = 'flex';
        // Можешь сделать свой стиль для сюжетных, например status-story
        switcher.innerHTML = `<div class="status-label" style="background: #4a90e2; color: white; padding: 5px 15px; border-radius: 4px;">СЮЖЕТНЫЙ ПЕРСОНАЖ</div>`;
        switchMode('human'); // Загружаем данные из humanData (они у него основные)
} else if (char.type === 'item') {
        switcher.style.display = 'flex';
        // Серая плашка вместо кнопок
        switcher.innerHTML = `<div class="status-label" style="background: #333; border: 1px solid #555; color: #aaa;">ПРЕДМЕТ</div>`;
        
        // Загружаем данные (используем humanData как основную папку для предмета)
        switchMode('human'); 
    }
}

function switchMode(mode) {
    if (!currentCharacter) return;
    
    const img = document.getElementById('modal-img');
    const btnH = document.getElementById('btn-h');
    const btnG = document.getElementById('btn-g');

    featureContainer.innerHTML = ''; // Очистка старых признаков

    const data = (mode === 'human') ? currentCharacter.humanData : currentCharacter.guestData;
    img.src = data.main;

    // Создаем карточки признаков
    if (data.features) {
        data.features.forEach(feat => {
            const div = document.createElement('div');
            div.className = 'feature-item';
            div.innerHTML = `
                <img src="${feat.img}" alt="${feat.name}">
                <span>${feat.name}</span>
            `;
            featureContainer.appendChild(div);
        });
    }

    if (mode === 'human') {
        btnH.classList.add('active-human');
        btnG.classList.remove('active-guest');
    } else {
        btnG.classList.add('active-guest');
        btnH.classList.remove('active-human');
    }
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

const previewPopup = document.getElementById('image-preview-popup');

// Функция для отслеживания движения мыши
document.addEventListener('mouseover', (e) => {
    const previewPopup = document.getElementById('image-preview-popup');
    if (!previewPopup) return; 

    if (e.target.tagName === 'IMG' && e.target.closest('.feature-item')) {
        const src = e.target.src;
        previewPopup.innerHTML = `<img src="${src}">`;
        previewPopup.style.display = 'flex'; // Показываем как флекс-контейнер
    }
});

document.addEventListener('mousemove', (e) => {
    const previewPopup = document.getElementById('image-preview-popup');
    // Если окно скрыто, ничего не считаем
    if (!previewPopup || previewPopup.style.display === 'none') return;

    const offset = 20;
    const popupWidth = 350; // Наша ширина из CSS
    const popupHeight = 350; // Наша высота из CSS

    let x = e.clientX + offset;
    let y = e.clientY + offset;

    // Проверка краев экрана
    if (x + popupWidth > window.innerWidth) {
        x = e.clientX - popupWidth - offset;
    }
    if (y + popupHeight > window.innerHeight) {
        y = e.clientY - popupHeight - offset;
    }

    // Прямое применение координат
    previewPopup.style.left = x + 'px';
    previewPopup.style.top = y + 'px';
});

document.addEventListener('mouseout', (e) => {
    const previewPopup = document.getElementById('image-preview-popup');
    if (!previewPopup) return;

    if (e.target.tagName === 'IMG' && e.target.closest('.feature-item')) {
        previewPopup.style.display = 'none';
        previewPopup.innerHTML = '';
    }
});

document.getElementById('char-search').addEventListener('input', function(e) {
    const query = e.target.value.toLowerCase().trim();
    const allCards = document.querySelectorAll('.char-card');

    allCards.forEach(card => {
        const name = card.getAttribute('data-name').toLowerCase();

        if (query === "") {
            // Если поиск пуст, возвращаем всё в нормальное состояние
            card.classList.remove('not-found');
        } else if (name.includes(query)) {
            // Если совпало — подсвечиваем
            card.classList.remove('not-found');
        } else {
            // Если не совпало — затухает
            card.classList.add('not-found');
        }
    });
});

const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggle-sidebar');

toggleBtn.addEventListener('click', () => {
    const cards = document.querySelectorAll('.char-card');
    
    // 1. ЗАПОМИНАЕМ (First): где карточки сейчас
    const firstPositions = Array.from(cards).map(card => card.getBoundingClientRect());

    // 2. МЕНЯЕМ СОСТОЯНИЕ: закрываем/открываем сайдбар
    sidebar.classList.toggle('collapsed');

    // Даем браузеру мгновение пересчитать сетку
    requestAnimationFrame(() => {
        cards.forEach((card, i) => {
            // 3. СМОТРИМ (Last): где карточки оказались теперь
            const lastPosition = card.getBoundingClientRect();
            
            // Вычисляем разницу
            const dx = firstPositions[i].left - lastPosition.left;
            const dy = firstPositions[i].top - lastPosition.top;

            // 4. ИНВЕРСИЯ (Invert): мгновенно возвращаем их назад через transform
            card.style.transition = 'none';
            card.style.transform = `translate(${dx}px, ${dy}px)`;

            // 5. ИГРАЕМ (Play): плавно убираем transform, и они летят на свои места
            requestAnimationFrame(() => {
                card.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
                card.style.transform = 'none';
            });
        });
    });
});

function openInfoModal() {
    const modal = document.getElementById('info-modal');
    modal.style.display = 'flex';
}

function closeInfoModal() {
    const modal = document.getElementById('info-modal');
    modal.style.display = 'none';
}

// Закрытие по клику вне окна уже встроено в HTML через onclick="closeInfoModal(event)"

init();