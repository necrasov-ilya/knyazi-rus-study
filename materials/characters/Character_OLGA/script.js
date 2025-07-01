// Смена фона
let currentStateolga = 0;
const backgroundImageolga = document.getElementById('background-image-olga');

const statesolga = [
    {
        backgroundImage: 'materials/characters/Character_OLGA/background/background-1.png' // Измените путь при необходимости
    },
    {
        backgroundImage: 'materials/characters/Character_OLGA/background/background-2.png' // Измените путь при необходимости
    },
    {
        backgroundImage: 'materials/characters/Character_OLGA/background/background-3.png' // Измените путь при необходимости
    }
];

function obnovlenieolga() {
    backgroundImageolga.src = statesolga[currentStateolga].backgroundImage;
    for (let i = 0; i < statesolga.length; i++) {
        const stateButton = document.getElementById(`state-olga-${i}`);
        if (i === currentStateolga) {
            stateButton.classList.add('active');
        } else {
            stateButton.classList.remove('active');
        }
    }
}

function changeStateolga(index) {
    currentStateolga = index;
    obnovlenieolga();
}

function prevStateolga() {
    currentStateolga = (currentStateolga - 1 + statesolga.length) % statesolga.length;
    obnovlenieolga();
}

function nextStateolga() {
    currentStateolga = (currentStateolga + 1) % statesolga.length;
    obnovlenieolga();
}

// Инфа
const yearsDataolga = [
    {
        year: '903',
        title: 'Начало правление',
        text: 'После замужества Ольга получила статус княгини и стала близкой соратницей князя Игоря. Она разделяла его политику и путешествия, наблюдала за устройством древнерусского государства. Брак с Игорем укрепил её позиции при дворе и дал ей возможность влиять на государственные дела. Поворотным моментом стал 945 год, когда Игорь был убит древлянами во время сбора дани. После его смерти Ольга стала регентом при малолетнем сыне Святославе, что дало ей полное право управлять Киевской Русью.'
    },
    {
        year: '945',
        title: 'Переломный момент',
        card: "materials/characters/Character_OLGA/map/OLGA_KILLING_POSLOV.jpeg",
        text: 'Одним из самых драматичных моментов правления Ольги стала её месть древлянам за смерть мужа. Она продемонстрировала свою жесткость и стратегическое мышление, устроив несколько хитроумных расправ над древлянами. Важными эпизодами стали сожжение древлянских посольств, убийство представителей старейшин и, наконец, поджог столицы древлян — Искоростеня. Значение этого события заключалось в мести древлянам принесла Ольге уважение и страх со стороны врагов, а также укрепила её власть в Киевской Руси.'
    },
    {
        year: '945',
        title: 'Реформы и результаты',
        card: "materials/characters/Character_OLGA/map/sbor-dani.jpg",
        text: 'Ольга ввела реформы, связанные с управлением данью, известные как “уставы” и “погосты” — места сбора дани. Это облегчило систему налогообложения и дало возможность лучшего контроля над регионами. Ольга установила свои “погосты” по всей Руси, что также помогло упрочить государственный контроль над землями. Значением её реформы стали первыми шагами к централизованному управлению, что сделало княжескую власть более эффективной и стабильной.'
    },
    {
        year: '957',
        title: 'Принятие христианства',
        text: 'Ольга стала первым правителем Киевской Руси, который принял христианство, что ознаменовало важный этап в истории. В 957 году она посетила Константинополь, где приняла крещение под именем Елена. Поездка к византийскому императору Константину Багрянородному стала дипломатическим и культурным событием, что установило прочные связи с Византией. Значением стало крещения Ольги сыграло значительную роль в подготовке будущего крещения Руси при её внуке Владимире и укрепило её авторитет как правительницы.'
    },
    {
        year: '969',
        title: 'Последние годы',
        text: 'К концу жизни Ольга постепенно передавала власть своему сыну Святославу. Она продолжала поддерживать христианскую веру и стремилась к её распространению, несмотря на сопротивление сына. Ольга умерла в 969 году в Киеве, оставив после себя наследие мудрой правительницы и одной из первых христианских лидеров Руси. Значением стало то, что после смерти Ольга была канонизирована как святая в Православной церкви, и её память продолжает чтиться как память одной из первых христианских правительниц Киевской Руси.'
    }
];

// Собираем информейшен
const infoTitleolga = document.getElementById('info-title-olga');
const infoTextolga = document.getElementById('info-text-olga');
const draggableBlockolga = document.getElementById('draggable-block-olga');
const yearsElementsolga = document.querySelectorAll('.year-olga');
const sliderolga = document.querySelector('.slider-olga');

let isDraggingolga = false;
let sliderRectolga = sliderolga.getBoundingClientRect();
let minLeftolga = 14; 
let maxLeftolga = sliderRectolga.width - draggableBlockolga.offsetWidth - 14;

function updateInfoByIndexolga(index) {
    const data = yearsDataolga[index];
    const titleParts = data.title.match(/(.*?)(\S+)$/);
    const formattedTitle = `${titleParts[1]}<span style="color: red;">${titleParts[2]}</span>`;
    
    infoTitleolga.innerHTML = formattedTitle;
    infoTextolga.textContent = data.text;
}

// Раздвигаем границы
function moveDraggableBlockToIndexolga(index) {
    const yearElement = yearsElementsolga[index];
    let leftPosition = yearElement.offsetLeft - (draggableBlockolga.offsetWidth / 11) + (yearElement.offsetWidth / 2);
    // не даём зайти за рамки дозволенного :)
    leftPosition = Math.max(minLeftolga, Math.min(leftPosition, maxLeftolga));
    draggableBlockolga.style.left = leftPosition + 'px';
    currentYearIndexolga = index;
    updateInfoByIndexolga(index);
}


let currentYearIndexolga = 0;
moveDraggableBlockToIndexolga(currentYearIndexolga);
updateInfoByIndexolga(currentYearIndexolga);

// Чтобы кликалось
yearsElementsolga.forEach((yearElem, index) => {
    yearElem.addEventListener('click', () => {
        moveDraggableBlockToIndexolga(index);
        resetButtonStylesolga();
    });
});

// Мое чудо, передвигаемый блок
draggableBlockolga.addEventListener('mousedown', (e) => {
    isDraggingolga = true;
    sliderRectolga = sliderolga.getBoundingClientRect();
    maxLeftolga = sliderRectolga.width - draggableBlockolga.offsetWidth;

    requestAnimationFrame(() => {
        draggableBlockolga.style.transition = 'all 0.3s ease'; 
    });
});

document.addEventListener('mousemove', (e) => {
    if (isDraggingolga) {
        let x = e.clientX - sliderRectolga.left - (draggableBlockolga.offsetWidth / 2);
        x = Math.max(minLeftolga, Math.min(x, maxLeftolga));
        draggableBlockolga.style.left = x + 'px';
    }
});

document.addEventListener('mouseup', (e) => {
    if (isDraggingolga) {
        isDraggingolga = false;
        // Магнитим к ближайшему году
        let closestIndex = 0;
        let closestDistance = Infinity;
        yearsElementsolga.forEach((yearElem, index) => {
            const yearCenter = yearElem.offsetLeft + (yearElem.offsetWidth / 2);
            const blockLeft = parseFloat(draggableBlockolga.style.left);
            const blockCenter = blockLeft + (draggableBlockolga.offsetWidth / 2);
            const distance = Math.abs(yearCenter - blockCenter);
            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = index;
            }
        });
        moveDraggableBlockToIndexolga(closestIndex);
        resetButtonStylesolga();
    }
});

// ФАКТЫ
const factsolga = [
    {
        title: "Месть Ольги",
        text: "После убийства её мужа древляне предложили Ольге выйти замуж за их князя Мала, считая, что таким образом смогут подчинить себе Киев и укрепить своё влияние. Ольга с хитростью согласилась на это предложение, но решила воспользоваться ситуацией для мести. Она пригласила первых сватов к себе, где велела заживо закопать в большой яме. Когда отправили второе посольство, княгиня обманом заманила его членов в баню и сожгла её с ними внутри. Кульминацией стало полное уничтожение древлянской столицы Искоростеня."
    },
    {
        title: "Крещение Ольги",
        text: "Принятие христианства княгиней Ольгой стало важным событием. Она крестилась под именем Елена, что сблизило её с византийским императором Константином VII и его семьей. Этот шаг укрепил связи Руси с Византией, открыл новые пути для дипломатии и торговли. Более того, Ольга пыталась привить христианские ценности своему сыну Святославу, однако он остался верен языческим традициям. Ольга продолжала поддерживать христианскую общину в Киеве, что сыграло важную роль в подготовке будущего крещения Руси её внуком"
    },
    {
        title: "Канонизация церковью",
        text: "Ольга стала первой женщиной на Руси, канонизированной православной церковью. Её канонизация символизировала одобрение христианства на Руси и признание её вклада в распространение веры. Её образ святой и правительницы долго служил примером для русских княгинь и цариц, а её духовное наследие помогло сформировать почву для принятия христианства.."
    }
];

// Меняем инфу в титле и тексте
function updateInfoolga(index) {
    const infoTitle = document.querySelector(".info-title-olga");
    const infoText = document.querySelector(".info-text-olga");

    if (infoTitle && infoText) {
        const titleParts = factsolga[index].title.split(" ");
        const formattedTitle = `${titleParts[0]} <span style="color: red;">${titleParts[1]}</span>`;
        
        infoTitle.innerHTML = formattedTitle;
        infoText.textContent = factsolga[index].text;
    }
}

function updateButtonStylesolga(activeButton) {
    const buttons = document.querySelectorAll(".fact-button-olga");
    buttons.forEach(btn => {
        btn.style.border = "1px solid transparent";
        btn.style.background = "#AEAE63";
        btn.style.color = "black";
    });

    activeButton.style.border = "1px solid #AEAE63";
    activeButton.style.background = "transparent";
    activeButton.style.color = "#AEAE63";
}

// шоб кликалось, обработчики коротка говоря
const leftFactButtonolga = document.querySelector(".left-fact-button.fact-button-olga");
const middleFactButtonolga = document.querySelector(".middle-fact-button.fact-button-olga"); 
const rightFactButtonolga = document.querySelector(".right-fact-button.fact-button-olga");

if (leftFactButtonolga && middleFactButtonolga && rightFactButtonolga) {
    leftFactButtonolga.addEventListener("click", function () {
        updateInfoolga(0);
        updateButtonStylesolga(this);
    });
    middleFactButtonolga.addEventListener("click", function () {
        updateInfoolga(1);
        updateButtonStylesolga(this);
    });
    rightFactButtonolga.addEventListener("click", function () {
        updateInfoolga(2);
        updateButtonStylesolga(this);
    });
}

// ФУНКЦИЯ СБРОСА ВНЕШНЕГО ВИДА КНОПОК FAСЕ-BUTTOn при взаимодействии со слайдером
function resetButtonStylesolga() {
    document.querySelectorAll(".fact-button-olga").forEach(btn => {
        btn.style.border = "1px solid transparent";
        btn.style.background = "#AEAE63";
        btn.style.color = "black";
    });
}

document.addEventListener('mouseup', () => {
    if (typeof isDraggingolga !== 'undefined' && isDraggingolga) {
        resetButtonStylesolga();
    }
});

if (typeof yearsElementsolga !== 'undefined') {
    yearsElementsolga.forEach((yearElem) => {
        yearElem.addEventListener('click', () => {
            resetButtonStylesolga(); 
        });
    });
}





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

    ['updateInfoolga', 'updateInfoByIndexolga', 'obnovlenieolga'].forEach(fn => {
        if (typeof window[fn] === 'function') {
            const original = window[fn];
            window[fn] = (...args) => {
                original(...args);
                const elements = fn === 'obnovlenieolga' 
                    ? [document.getElementById('background-image-olga')] 
                    : ['info-title-olga', 'info-text-olga'].map(id => document.getElementById(id) || document.querySelector(`.${id}`));
                elements.forEach(animate);
            };
        }
    });
})();

// Дополнение драг-блоку класс инактива при взаимодействии с фактами
document.querySelectorAll('.fact-button-olga').forEach(button => {
    button.addEventListener('click', () => {
        draggableBlockolga.classList.add('inactive');
    });
});

document.querySelectorAll('.year-olga').forEach(yearElem => {
    yearElem.addEventListener('click', () => {
        draggableBlockolga.classList.remove('inactive');
    });
});



// если в массиве йеарсдата у нас есть card, тогда мы достаём эту карту
let previousHasCardolga = false;

const mapContainerolga = document.createElement('div');
mapContainerolga.id = 'map-container';

// Базовые стили для "широких" экранов
mapContainerolga.style.position = 'fixed';
mapContainerolga.style.right = '0';
mapContainerolga.style.top = '50%';
mapContainerolga.style.transform = 'translateY(-50%) translateX(100%)';
mapContainerolga.style.width = '40%';
mapContainerolga.style.height = '70%';
mapContainerolga.style.background = 'black';
mapContainerolga.style.border = '1px solid #B0AE66';
mapContainerolga.style.borderRadius = '10px 0 0 10px';
mapContainerolga.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
mapContainerolga.style.display = 'none';
mapContainerolga.style.zIndex = '1000';
mapContainerolga.style.padding = '10px';
mapContainerolga.style.textAlign = 'center';
mapContainerolga.style.transition = 'transform 0.3s ease';


if (window.innerWidth <= 600) {
  mapContainerolga.style.top = 'auto';
  mapContainerolga.style.bottom = '0';
  mapContainerolga.style.left = '50%';

  mapContainerolga.style.transform = 'translateX(-50%) translateY(100%)';
  mapContainerolga.style.width = '90vw';
  mapContainerolga.style.height = '40vh';
  mapContainerolga.style.borderRadius = '10px 10px 0 0';

  let startY = 0;
  let deltaY = 0;
  mapContainerolga.addEventListener('touchstart', (e) => {
    startY = e.touches[0].clientY;
    mapContainerolga.style.transition = ''; 
  }, { passive: false });
  mapContainerolga.addEventListener('touchmove', (e) => {
    e.preventDefault(); 
    const currentY = e.touches[0].clientY;
    deltaY = currentY - startY;
    if (deltaY > 0) { 
      mapContainerolga.style.transform = `translateX(-50%) translateY(${deltaY}px)`;
    }
  }, { passive: false });
  mapContainerolga.addEventListener('touchend', (e) => {
    mapContainerolga.style.transition = 'transform 0.3s ease';
    if (deltaY > 50) {
      hideMapolga();
    } else {
      mapContainerolga.style.transform = 'translateX(-50%) translateY(0)';
    }
  }, { passive: false });
}

const mapImageolga = document.createElement('img');
mapImageolga.style.width = '100%';
mapImageolga.style.height = 'calc(100% - 65px)';
mapImageolga.style.objectFit = 'contain';
mapImageolga.style.borderRadius = '5px';
mapContainerolga.appendChild(mapImageolga);

const closeButtonolga = document.createElement('button');
closeButtonolga.textContent = 'Свернуть';
closeButtonolga.style.marginTop = '5px';
closeButtonolga.style.marginBottom = '5px';
closeButtonolga.style.fontSize = '25px';
closeButtonolga.style.padding = '10px 15px';
closeButtonolga.style.border = '1px solid #B0AE66';
closeButtonolga.style.fontFamily = 'involve';
closeButtonolga.style.background = '#B0AE66';
closeButtonolga.style.color = 'black';
closeButtonolga.style.borderRadius = '30px';
closeButtonolga.style.cursor = 'pointer';
closeButtonolga.style.transition = 'background 0.3s ease';
mapContainerolga.appendChild(closeButtonolga);

closeButtonolga.addEventListener('mouseenter', () => {
    closeButtonolga.style.background = 'black';
    closeButtonolga.style.color = '#B0AE66';
});
closeButtonolga.addEventListener('mouseleave', () => {
    closeButtonolga.style.background = '#B0AE66';
    closeButtonolga.style.color = 'black';
});
closeButtonolga.addEventListener('click', () => {
    hideMapolga();
});

document.body.appendChild(mapContainerolga);

function showMapolga(cardUrl) {
    mapImageolga.src = cardUrl;
    mapContainerolga.style.display = 'block';
    setTimeout(() => {
        if (window.innerWidth <= 600) {
          mapContainerolga.style.transform = 'translateX(-50%) translateY(0)';
        } else {
          mapContainerolga.style.transform = 'translateY(-50%) translateX(0)';
        }
    }, 0);
}

function hideMapolga() {
    if (window.innerWidth <= 600) {
      mapContainerolga.style.transform = 'translateX(-50%) translateY(100%)';
    } else {
      mapContainerolga.style.transform = 'translateY(-50%) translateX(100%)';
    }
    setTimeout(() => {
        mapContainerolga.style.display = 'none';
    }, 300);
}

let prevHasCardolga = false;
const originalUpdateInfoByIndexolga = updateInfoByIndexolga;
updateInfoByIndexolga = function (index) {
    originalUpdateInfoByIndexolga(index);
    const { card } = yearsDataolga[index];
    
    if (card) {
        if (prevHasCardolga) {
            if (window.innerWidth <= 600) {
              mapContainerolga.style.transform = 'translateX(-50%) translateY(100%)';
            } else {
              mapContainerolga.style.transform = 'translateY(-50%) translateX(100%)';
            }
            setTimeout(() => showMapolga(card), 600);
        } else {
            showMapolga(card);
        }
        prevHasCardolga = true;
    } else {
        if (window.innerWidth <= 600) {
          mapContainerolga.style.transform = 'translateX(-50%) translateY(100%)';
        } else {
          mapContainerolga.style.transform = 'translateY(-50%) translateX(100%)';
        }
        setTimeout(() => { mapContainerolga.style.display = 'none'; }, 300);
        prevHasCardolga = false;
    }
};
