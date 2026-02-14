// --- ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ---
const characters = [...humansData, ...guestsData, ...randomData, ...storyData, ...itemData];
let currentLang = 'en'; 
let currentCharacter = null;

const previewImg = document.getElementById('preview-img');
const previewName = document.getElementById('preview-name');
const previewDesc = document.getElementById('preview-desc');
const featureContainer = document.getElementById('feature-container');
const previewPopup = document.getElementById('image-preview-popup');

// --- ИНИЦИАЛИЗАЦИЯ ---
function init() {
    const sortedCharacters = [...characters].sort((a, b) => a.name.localeCompare(b.name));

    sortedCharacters.forEach(char => {
        const card = document.createElement('div');
        card.className = 'char-card';
        
        // Записываем ID и имена в атрибуты (маленькими буквами для поиска)
        card.setAttribute('data-id', (char.id || "").toLowerCase()); 
        card.setAttribute('data-name-en', (char.name || "").toLowerCase());
        card.setAttribute('data-name-ru', (char.name_ru || char.name || "").toLowerCase());

        card.style.backgroundImage = `url('${char.icon}')`;
        
        card.onmouseover = () => {
            const content = document.querySelector('.sidebar-content');
            if (content) content.classList.add('active');
            
            // Сохраняем, на кого навели, чтобы обновить при смене языка
            window.lastHoveredChar = char;
            renderPreview(char);
        };

        card.onclick = () => openModal(char);

        const container = document.getElementById(`category-${char.type}`);
        if (container) container.appendChild(card);
    });
}

// Функция отрисовки превью (левая панель)
function renderPreview(char) {
    if (!char) return;
    previewImg.src = char.humanData?.main || "";
    previewName.innerText = currentLang === 'ru' ? (char.name_ru || char.name) : char.name;
    previewDesc.innerHTML = char.desc;
}

// --- УМНЫЙ ПОИСК (ИСПРАВЛЕННЫЙ) ---
document.getElementById('char-search').addEventListener('input', function(e) {
    const query = e.target.value.toLowerCase().trim();
    const allCards = document.querySelectorAll('.char-card');

    allCards.forEach(card => {
        const nameEn = card.getAttribute('data-name-en') || "";
        const nameRu = card.getAttribute('data-name-ru') || "";
        const charId = card.getAttribute('data-id') || "";

        // Проверка внешних тегов из search_tags.js
        let extra = "";
        if (typeof extraSearchData !== 'undefined' && extraSearchData[charId]) {
            extra = extraSearchData[charId].toLowerCase();
        }

        const isMatch = query === "" || 
                        nameEn.includes(query) || 
                        nameRu.includes(query) || 
                        extra.includes(query);

        card.classList.toggle('not-found', !isMatch);
    });
});

// --- ПЕРЕКЛЮЧЕНИЕ ЯЗЫКА (ИСПРАВЛЕННОЕ) ---
function setLanguage(lang) {
    currentLang = lang;
    
    // 1. Подсвечиваем активную кнопку
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById(`lang-${lang}`);
    if (activeBtn) activeBtn.classList.add('active');
    
    // 2. Если открыта модалка — обновляем имя в ней мгновенно
    if (document.getElementById('modal').style.display === 'flex' && currentCharacter) {
        document.getElementById('modal-name').innerText = currentLang === 'ru' ? (currentCharacter.name_ru || currentCharacter.name) : currentCharacter.name;
    }

    // 3. Если мышь уже наведена на кого-то — обновляем имя в превью слева
    if (window.lastHoveredChar) {
        renderPreview(window.lastHoveredChar);
    }

}

// --- МОДАЛЬНОЕ ОКНО ---
function openModal(char) {
    currentCharacter = char;
    document.getElementById('modal').style.display = 'flex';
    
    document.getElementById('modal-name').innerText = currentLang === 'ru' ? (char.name_ru || char.name) : char.name;
    document.getElementById('modal-info-text').innerHTML = char.desc;
    
    const switcher = document.getElementById('switcher-container');
    
    if (char.type === 'random') {
        switcher.style.display = 'flex';
        switcher.innerHTML = `
            <button id="btn-h" class="toggle-btn" onclick="switchMode('human')">${currentLang === 'ru' ? 'Человек' : 'Human'}</button>
            <button id="btn-g" class="toggle-btn" onclick="switchMode('guest')">${currentLang === 'ru' ? 'Гость' : 'Guest'}</button>
        `;
        switchMode('human'); 
    } else {
        switcher.style.display = 'flex';
        const statusMap = {
            'human': { class: 'status-human', ru: 'СТАТУС: ЧЕЛОВЕК', en: 'STATUS: HUMAN' },
            'guest': { class: 'status-guest', ru: 'СТАТУС: ГОСТЬ', en: 'STATUS: GUEST' },
            'story': { class: '', ru: 'СЮЖЕТНЫЙ ПЕРСОНАЖ', en: 'STORY CHARACTER', style: 'background:#4a90e2;color:white;padding:5px 15px;border-radius:4px;' },
            'item': { class: '', ru: 'ПРЕДМЕТ', en: 'ITEM', style: 'background:#333;border:1px solid #555;color:#aaa;' }
        };
        const st = statusMap[char.type] || statusMap['human'];
        const label = currentLang === 'ru' ? st.ru : st.en;
        switcher.innerHTML = `<div class="status-label ${st.class}" style="${st.style || ''}">${label}</div>`;
        switchMode('human');
    }
}

function switchMode(mode) {
    if (!currentCharacter) return;
    const img = document.getElementById('modal-img');
    const data = (mode === 'human') ? currentCharacter.humanData : currentCharacter.guestData;
    if (img && data) img.src = data.main;
    
    featureContainer.innerHTML = ''; 
    if (data && data.features) {
        data.features.forEach(feat => {
            const div = document.createElement('div');
            div.className = 'feature-item';
            div.innerHTML = `<img src="${feat.img}"><span>${feat.name}</span>`;
            featureContainer.appendChild(div);
        });
    }

    const btnH = document.getElementById('btn-h');
    const btnG = document.getElementById('btn-g');
    if (btnH && btnG) {
        btnH.classList.toggle('active-human', mode === 'human');
        btnG.classList.toggle('active-guest', mode === 'guest');
    }
}

function closeModal() { document.getElementById('modal').style.display = 'none'; }

// --- ПРЕВЬЮ ПРИЗНАКОВ (POPUP) ---
document.addEventListener('mouseover', (e) => {
    if (previewPopup && e.target.tagName === 'IMG' && e.target.closest('.feature-item')) {
        previewPopup.innerHTML = `<img src="${e.target.src}">`;
        previewPopup.style.display = 'flex';
    }
});
document.addEventListener('mousemove', (e) => {
    if (!previewPopup || previewPopup.style.display === 'none') return;
    let x = e.clientX + 20, y = e.clientY + 20;
    if (x + 350 > window.innerWidth) x = e.clientX - 370;
    if (y + 350 > window.innerHeight) y = e.clientY - 370;
    previewPopup.style.left = x + 'px';
    previewPopup.style.top = y + 'px';
});
document.addEventListener('mouseout', (e) => {
    if (previewPopup && e.target.tagName === 'IMG') previewPopup.style.display = 'none';
});

// --- САЙДБАР FLIP ---
const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggle-sidebar');
if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        const cards = document.querySelectorAll('.char-card');
        const firstPositions = Array.from(cards).map(card => card.getBoundingClientRect());
        sidebar.classList.toggle('collapsed');
        requestAnimationFrame(() => {
            cards.forEach((card, i) => {
                const lastPos = card.getBoundingClientRect();
                card.style.transition = 'none';
                card.style.transform = `translate(${firstPositions[i].left - lastPos.left}px, ${firstPositions[i].top - lastPos.top}px)`;
                requestAnimationFrame(() => {
                    card.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
                    card.style.transform = 'none';
                });
            });
        });
    });
}

function openInfoModal() { document.getElementById('info-modal').style.display = 'flex'; }
function closeInfoModal() { document.getElementById('info-modal').style.display = 'none'; }

// ЗАПУСК
init();