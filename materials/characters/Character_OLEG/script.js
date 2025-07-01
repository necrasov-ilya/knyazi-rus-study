
// листать фоны
let currentState = 0;
const backgroundImage = document.getElementById('background-image');

const states = [
    {
        backgroundImage: 'materials/characters/Character_OLEG/background/background-1.png'
    },
    {
        backgroundImage: 'materials/characters/Character_OLEG/background/background-2.png'
    },
    {
        backgroundImage: 'materials/characters/Character_OLEG/background/background-3.png'
    }
];

function obnovlenie() {
    backgroundImage.src = states[currentState].backgroundImage;
    for (let i = 0; i < states.length; i++) {
        const stateButton = document.getElementById(`state-${i}`);
        if (i === currentState) {
            stateButton.classList.add('active');
        } else {
            stateButton.classList.remove('active');
        }
    }
}


function changeState(index) {
    currentState = index;
    obnovlenie();
} function prevState() {
    currentState = (currentState - 1 + states.length) % states.length;
    obnovlenie();
} function nextState() {
    currentState = (currentState + 1) % states.length;
    obnovlenie();
}





    const yearsData = [
        {
            year: '879',
            title: 'Начало правления',
            text: 'Олег стал правителем Новгорода после смерти князя Рюрика, который, согласно летописям, передал ему управление, пока наследник, князь Игорь, не достигнет совершеннолетия. Олег, вероятно, был родственником Рюрика и выступал как опекун и регент при юном князе. Это был период становления его авторитета в Новгороде и на севере Руси. Олег начал активно укреплять свою власть, готовясь к походу на юг для создания более централизованного государства.'
        },
        {
            year: '882',
            title: 'Захват Киева',
            card: 'materials/characters/Character_OLEG/map/zahvat-kieva.jpg',
            text: 'Олег организовал поход на Киев, чтобы расширить влияние и объединить земли под своей властью. Он хитростью захватил Киев, убив киевских правителей Аскольда и Дира. Захват Киева позволил Олегу объединить Новгород и Киев под единой властью и перенести столицу в Киев, что положило начало Киевской Руси. Это событие стало ключевым для объединения восточнославянских земель и создания основ для будущего государства. Олег стал известен как “вещий” князь — прозвище, символизировавшее его мудрость и дальновидность.'
        },
        {
            year: '883',
            title: 'Территор. рост',
            text: 'После захвата Киева Олег начал активную военную политику, подчинив соседние племена, такие как древляне, северяне и радимичи. Он наложил на них дань, обеспечив Киев стабильными доходами. Эти кампании укрепили его власть и экономику государства. Подчинение племён создало финансовую и политическую основу Киевской Руси, а также обеспечило территориальную безопасность, увеличив её влияние на соседей.'
        },
        {
            year: '884',
            title: 'Поход на Царьград',
            card: "materials/characters/Character_OLEG/map/zargrad.png",
            text: 'Олег организовал знаменитый поход на Константинополь (Царьград). Согласно летописям, чтобы усилить впечатление и запугать византийцев, он даже прибил свой щит на ворота Константинополя. Поход завершился выгодным мирным договором, который предоставил русским купцам привилегии на торговлю с Византией. Договор с Византией открыл Руси широкие возможности для торговли и укрепил экономические связи с богатейшим государством того времени. Это также укрепило статус Руси на международной арене.'
        },
        {
            year: '885',
            title: 'Последние годы',
            text: 'Олег умер около 912 года. Согласно легенде, его смерть была мистической: предсказание гласило, что он умрёт от своего коня. Чтобы избежать этой судьбы, Олег оставил коня, но спустя годы случайно наступил на его кости, и из черепа выползла змея, которая его и укусила. Легенда придавала его смерти ореол “вещего” князя. Смерть Олега оставила в народной памяти образ мудрого, сильного, но в то же время мистического правителя. После его смерти власть перешла к Игорю Рюриковичу.'
        }
    ];

    
    const infoTitle = document.getElementById('info-title');
    const infoText = document.getElementById('info-text');
    const draggableBlock = document.getElementById('draggable-block');
    const yearsElements = document.querySelectorAll('.year');
    const slider = document.querySelector('.slider');

    let isDragging = false;
    let sliderRect = slider.getBoundingClientRect();
    let minLeft = 14; // Отступ слева внутри слайдера
    let maxLeft = sliderRect.width - draggableBlock.offsetWidth - 14; // Отступ справа внутри слайдера

    function updateInfoByIndex(index) {
        const data = yearsData[index];
        const titleParts = data.title.match(/(.*?)(\S+)$/);
        const formattedTitle = `${titleParts[1]}<span style="color: red;">${titleParts[2]}</span>`;
        
        infoTitle.innerHTML = formattedTitle;
        infoText.textContent = data.text;
    }


    function moveDraggableBlockToIndex(index) {
        const yearElement = yearsElements[index];
        const yearRect = yearElement.getBoundingClientRect();
        const sliderRect = slider.getBoundingClientRect();
        let leftPosition = yearElement.offsetLeft - (draggableBlock.offsetWidth / 11) + (yearElement.offsetWidth / 2);
        
        leftPosition = Math.max(minLeft, Math.min(leftPosition, maxLeft));
        draggableBlock.style.left = leftPosition + 'px';
        currentYearIndex = index;
        updateInfoByIndex(index);
    }


    let currentYearIndex = 0;
    moveDraggableBlockToIndex(currentYearIndex);
    updateInfoByIndex(currentYearIndex);


    yearsElements.forEach((yearElem, index) => {
        yearElem.addEventListener('click', () => {
            moveDraggableBlockToIndex(index);
        });
    });


    draggableBlock.addEventListener('mousedown', (e) => {
        isDragging = true;
        sliderRect = slider.getBoundingClientRect();
        maxLeft = sliderRect.width - draggableBlock.offsetWidth;

        requestAnimationFrame(() => {
            draggableBlock.style.transition = 'all 0.3s ease'; 
        });
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            let x = e.clientX - sliderRect.left - (draggableBlock.offsetWidth / 2);
            
            x = Math.max(minLeft, Math.min(x, maxLeft));
            draggableBlock.style.left = x + 'px';
        }
    });

    document.addEventListener('mouseup', (e) => {
        if (isDragging) {
            isDragging = false;
            
            let closestIndex = 0;
            let closestDistance = Infinity;
            yearsElements.forEach((yearElem, index) => {
                const yearCenter = yearElem.offsetLeft + (yearElem.offsetWidth / 2);
                const blockLeft = parseFloat(draggableBlock.style.left);
                const blockCenter = blockLeft + (draggableBlock.offsetWidth / 2);
                const distance = Math.abs(yearCenter - blockCenter);
                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestIndex = index;
                }
            });
            moveDraggableBlockToIndex(closestIndex);
        }
    });
    





    const facts = [
    {
        title: "Прозвище 'Вещий'",
        text: "Олег получил прозвище 'Вещий' благодаря своей мудрости и дальновидности. Согласно летописям, он обладал способностью предвидеть будущее и принимать стратегически важные решения. Это прозвище также связано с его способностью к дипломатии и военной хитрости, что позволило ему успешно объединить восточнославянские земли и создать мощное государство."
    },
    {
        title: "Щит Царьграда",
        text: "Во время своего похода на Константинополь (Царьград) в 907 году, Олег, согласно летописям, прибил свой щит на ворота города. Этот жест был символом его могущества и демонстрацией силы перед византийцами. Этот эпизод стал одним из самых известных в истории Киевской Руси и символизировал её военную мощь и дипломатическое искусство."
    },
    {
        title: "Мистическая смерть",
        text: "Смерть Олега окружена мистикой и легендами. Согласно одной из них, Олег узнал от волхва, что умрёт от своего любимого коня. Чтобы избежать этой судьбы, он отправил коня прочь, но спустя годы случайно наступил на его кости, и из черепа выползла змея, которая его укусила. Эта легенда придавала его смерти ореол мистики и подчёркивала его статус как 'вещего' князя."
    }
];

// Функция для обновы информации
function updateInfo(index) {
    const infoTitle = document.querySelector(".info-title");
    const infoText = document.querySelector(".info-text");

    if (infoTitle && infoText) {
        const titleParts = facts[index].title.split(" ");
        const formattedTitle = `${titleParts[0]} <span style="color: red;">${titleParts[1]}</span>`;
        
        infoTitle.innerHTML = formattedTitle;
        infoText.textContent = facts[index].text;
    }
}


function updateButtonStyles(activeButton) {
    const buttons = document.querySelectorAll(".fact-button");
    buttons.forEach(btn => {
        btn.style.border = "1px solid transparent";
        btn.style.background = "#AEAE63";
        btn.style.color = "black";
    });

    activeButton.style.border = "1px solid #AEAE63";
    activeButton.style.background = "transparent";
    activeButton.style.color = "#AEAE63";
}


document.querySelector(".left-fact-button").addEventListener("click", function () {
    updateInfo(0);
    updateButtonStyles(this);
});
document.querySelector(".middle-fact-button").addEventListener("click", function () {
    updateInfo(1);
    updateButtonStyles(this);
});
document.querySelector(".right-fact-button").addEventListener("click", function () {
    updateInfo(2);
    updateButtonStyles(this);
});





// ФУНКЦИЯ СБРОСА ВНЕШНЕГО ВИДА КНОПОК FAСЕ-BUTTOn при взаимодействии со слайдером
function resetButtonStyles() {
    document.querySelectorAll(".fact-button").forEach(btn => btn.removeAttribute("style"));
}
document.addEventListener('mouseup', () => {
    if (isDragging) {
        resetButtonStyles();
    }
});
yearsElements.forEach((yearElem, index) => {
    yearElem.addEventListener('click', () => {
        resetButtonStyles(); 
    });
});





// Анимация смены инфы в инф блоке и изображений
(function() {
    const animate = elementium => elementium && requestAnimationFrame(() => {
        elementium.style.transition = 'none';
        elementium.style.opacity = '0';
        elementium.style.transform = 'scale(0.95)';
        requestAnimationFrame(() => Object.assign(elementium.style, {
            transition: 'all 0.7s cubic-bezier(.25,.8,.25,1)',
            opacity: '1',
            transform: 'scale(1)'
        }));
    });

    ['updateInfo', 'updateInfoByIndex', 'obnovlenie'].forEach(fn => {
        if (typeof window[fn] === 'function') {
            const original = window[fn];
            window[fn] = (...args) => {
                original(...args);
                const elements = fn === 'obnovlenie' 
                    ? [document.getElementById('background-image')] 
                    : ['info-title', 'info-text'].map(id => document.getElementById(id) || document.querySelector(`.${id}`));
                elements.forEach(animate);
            };
        }
    });
})();



// дополнение драг блоку класс инактива при взаимодействии с фактами
document.querySelectorAll('.fact-button-oleg').forEach(button=>{
    button.addEventListener('click',()=>{
        draggableBlock.classList.add('inactive');
    });
});
document.querySelectorAll('.year').forEach(yearElem=>{
    yearElem.addEventListener('click',()=>{
        draggableBlock.classList.remove('inactive');
    });
});





// если в массиве йеарсдата у нас есть card, тогда мы достаём эту карту
let previousHasCard = false;

const mapContainer = document.createElement('div');
mapContainer.id = 'map-container';

// Базовые стили для "широких" экранов
mapContainer.style.position = 'fixed';
mapContainer.style.right = '0';
mapContainer.style.top = '50%';
mapContainer.style.transform = 'translateY(-50%) translateX(100%)';
mapContainer.style.width = '40%';
mapContainer.style.height = '70%';
mapContainer.style.background = 'black';
mapContainer.style.border = '1px solid #B0AE66';
mapContainer.style.borderRadius = '10px 0 0 10px';
mapContainer.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
mapContainer.style.display = 'none';
mapContainer.style.zIndex = '1000';
mapContainer.style.padding = '10px';
mapContainer.style.textAlign = 'center';
mapContainer.style.transition = 'transform 0.3s ease';


if (window.innerWidth <= 600) {
  mapContainer.style.top = 'auto';
  mapContainer.style.bottom = '0';
  mapContainer.style.left = '50%';

  mapContainer.style.transform = 'translateX(-50%) translateY(100%)';
  mapContainer.style.width = '90vw';
  mapContainer.style.height = '40vh';
  mapContainer.style.borderRadius = '10px 10px 0 0';

  let startY = 0;
  let deltaY = 0;
  mapContainer.addEventListener('touchstart', (e) => {
    startY = e.touches[0].clientY;
    mapContainer.style.transition = ''; 
  }, { passive: false });
  mapContainer.addEventListener('touchmove', (e) => {
    e.preventDefault(); 
    const currentY = e.touches[0].clientY;
    deltaY = currentY - startY;
    if (deltaY > 0) { 
      mapContainer.style.transform = `translateX(-50%) translateY(${deltaY}px)`;
    }
  }, { passive: false });
  mapContainer.addEventListener('touchend', (e) => {
    mapContainer.style.transition = 'transform 0.3s ease';
    if (deltaY > 50) {
      hideMap();
    } else {
      mapContainer.style.transform = 'translateX(-50%) translateY(0)';
    }
  }, { passive: false });
}

const mapImage = document.createElement('img');
mapImage.style.width = '100%';
mapImage.style.height = 'calc(100% - 65px)';
mapImage.style.objectFit = 'contain';
mapImage.style.borderRadius = '5px';
mapContainer.appendChild(mapImage);

const closeButton = document.createElement('button');
closeButton.textContent = 'Свернуть';
closeButton.style.marginTop = '5px';
closeButton.style.marginBottom = '5px';
closeButton.style.fontSize = '25px';
closeButton.style.padding = '10px 15px';
closeButton.style.border = '1px solid #B0AE66';
closeButton.style.fontFamily = 'involve';
closeButton.style.background = '#B0AE66';
closeButton.style.color = 'black';
closeButton.style.borderRadius = '30px';
closeButton.style.cursor = 'pointer';
closeButton.style.transition = 'background 0.3s ease';
mapContainer.appendChild(closeButton);

closeButton.addEventListener('mouseenter', () => {
    closeButton.style.background = 'black';
    closeButton.style.color = '#B0AE66';
});
closeButton.addEventListener('mouseleave', () => {
    closeButton.style.background = '#B0AE66';
    closeButton.style.color = 'black';
});
closeButton.addEventListener('click', () => {
    hideMap();
});

document.body.appendChild(mapContainer);

function showMap(cardUrl) {
    mapImage.src = cardUrl;
    mapContainer.style.display = 'block';
    setTimeout(() => {
        if (window.innerWidth <= 600) {
          mapContainer.style.transform = 'translateX(-50%) translateY(0)';
        } else {
          mapContainer.style.transform = 'translateY(-50%) translateX(0)';
        }
    }, 0);
}

function hideMap() {
    if (window.innerWidth <= 600) {
      mapContainer.style.transform = 'translateX(-50%) translateY(100%)';
    } else {
      mapContainer.style.transform = 'translateY(-50%) translateX(100%)';
    }
    setTimeout(() => {
        mapContainer.style.display = 'none';
    }, 300);
}

let prevHasCard = false;
const originalUpdateInfoByIndex = updateInfoByIndex;
updateInfoByIndex = function (index) {
    originalUpdateInfoByIndex(index);
    const { card } = yearsData[index];
    
    if (card) {
        if (prevHasCard) {
            if (window.innerWidth <= 600) {
              mapContainer.style.transform = 'translateX(-50%) translateY(100%)';
            } else {
              mapContainer.style.transform = 'translateY(-50%) translateX(100%)';
            }
            setTimeout(() => showMap(card), 600);
        } else {
            showMap(card);
        }
        prevHasCard = true;
    } else {
        if (window.innerWidth <= 600) {
          mapContainer.style.transform = 'translateX(-50%) translateY(100%)';
        } else {
          mapContainer.style.transform = 'translateY(-50%) translateX(100%)';
        }
        setTimeout(() => { mapContainer.style.display = 'none'; }, 300);
        prevHasCard = false;
    }
};
