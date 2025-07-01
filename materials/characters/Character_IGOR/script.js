// Смена фона
let currentStateIgor = 0;
const backgroundImageIgor = document.getElementById('background-image-igor');

const statesIgor = [
    {
        backgroundImage: 'materials/characters/Character_IGOR/background/background-1.png' // Измените путь при необходимости
    },
    {
        backgroundImage: 'materials/characters/Character_IGOR/background/background-2.png' // Измените путь при необходимости
    },
    {
        backgroundImage: 'materials/characters/Character_IGOR/background/background-3.png' // Измените путь при необходимости
    }
];

function obnovlenieIgor() {
    backgroundImageIgor.src = statesIgor[currentStateIgor].backgroundImage;
    for (let i = 0; i < statesIgor.length; i++) {
        const stateButton = document.getElementById(`state-igor-${i}`);
        if (i === currentStateIgor) {
            stateButton.classList.add('active');
        } else {
            stateButton.classList.remove('active');
        }
    }
}

function changeStateIgor(index) {
    currentStateIgor = index;
    obnovlenieIgor();
}

function prevStateIgor() {
    currentStateIgor = (currentStateIgor - 1 + statesIgor.length) % statesIgor.length;
    obnovlenieIgor();
}

function nextStateIgor() {
    currentStateIgor = (currentStateIgor + 1) % statesIgor.length;
    obnovlenieIgor();
}



// Инфа
const yearsDataIgor = [
    {
        year: '912',
        title: 'Начало правления',
        text: 'После смерти князя Олега, Игорь, взошёл на престол Киевской Руси. Его правление началось с укрепления власти и продолжения политики объединения восточнославянских земель. Значением стало наследование престола обеспечило преемственность династии и стабильность государства, что способствовало дальнейшему развитию Киевской Руси.'
    },
    {
        year: '914',
        title: 'Подчинение Древлян',
        text: 'Столкнувшись с отказом древлян платить дань, Игорь организовал военный поход против них. Он успешно подавил сопротивление и вновь подчинил древлян власти Киева. Значением стало подчинение древлян укрепило центральную власть и подтвердило авторитет Игоря как сильного правителя.'
    },
    {
        year: '915',
        title: 'Мир с печенегами',
        text: 'Игорь заключил мирный договор с печенегами, которые представляли угрозу для южных границ государства. Это временное соглашение обеспечило безопасность на юге и позволило сосредоточиться на внутренних делах. Значением стало то, что мир с печенегами способствовал стабилизации обстановки и укреплению международных позиций Киевской Руси.'
    },
    {
        year: '920',
        title: 'Защита границ',
        text: 'Возобновившиеся набеги печенегов заставили Игоря предпринять военные действия против них. Он успешно защитил территории государства от врага. Значением стало то, что военные успехи против печенегов укрепили безопасность границ и показали военную мощь Киевской Руси.'
    },
    {
        year: '922',
        title: 'Расширение влияния',
        card: "materials/characters/Character_IGOR/map/map-plemena.png",
        text: 'Игорь продолжил политику расширения влияния, подчиняя племена уличей и тиверцев. Это расширило границы государства до Чёрного моря и усилило контроль над торговыми путями. Значением стало расширение территорий способствовало экономическому росту и укреплению стратегического положения государства.'
    },
    {
        year: '944',
        title: 'Неудачный поход',
        card: 'materials/characters/Character_IGOR/map/pohod-na-vizantiu.jpg',
        text: 'Второй поход на Византию завершился успешным заключением мирного договора. Были восстановлены торговые отношения, и Русь получила ряд привилегий. Значением события стал договор, который в свою очередь укрепил экономические связи и повысил статус Киевской Руси на международной арене.'
    },
    {
        year: '945',
        title: 'Последние годы',
        card: 'materials/characters/Character_IGOR/map/ubitiy-igor.jpg',
        text: 'Желая увеличить доходы, Игорь решил повторно собрать дань с древлян, что вызвало их негодование. Во время сбора дани он был захвачен и убит древлянами в ходе восстания. Значение этого события было настолько велико, что вызвало много поворотных моментов, приведшим к реформам княгини Ольги и изменению системы управления государством.'
    }
];

// Собираем информейшен
const infoTitleIgor = document.getElementById('info-title-igor');
const infoTextIgor = document.getElementById('info-text-igor');
const draggableBlockIgor = document.getElementById('draggable-block-igor');
const yearsElementsIgor = document.querySelectorAll('.year-igor');
const sliderIgor = document.querySelector('.slider-igor');

let isDraggingIgor = false;
let sliderRectIgor = sliderIgor.getBoundingClientRect();
let minLeftIgor = 14;
let maxLeftIgor = sliderRectIgor.width - draggableBlockIgor.offsetWidth - 14; 

function updateInfoByIndexIgor(index) {
    const data = yearsDataIgor[index];
    const titleParts = data.title.match(/(.*?)(\S+)$/);
    const formattedTitle = `${titleParts[1]}<span style="color: red;">${titleParts[2]}</span>`;
    
    infoTitleIgor.innerHTML = formattedTitle;
    infoTextIgor.textContent = data.text;
}

// Раздвигаем границы
function moveDraggableBlockToIndexIgor(index) {
    const yearElement = yearsElementsIgor[index];
    let leftPosition = yearElement.offsetLeft - (draggableBlockIgor.offsetWidth / 11) + (yearElement.offsetWidth / 2);
    // не даём зайти за рамки дозволенного :)
    leftPosition = Math.max(minLeftIgor, Math.min(leftPosition, maxLeftIgor));
    draggableBlockIgor.style.left = leftPosition + 'px';
    currentYearIndexIgor = index;
    updateInfoByIndexIgor(index);
}


let currentYearIndexIgor = 0;
moveDraggableBlockToIndexIgor(currentYearIndexIgor);
updateInfoByIndexIgor(currentYearIndexIgor);

// Чтобы кликалось
yearsElementsIgor.forEach((yearElem, index) => {
    yearElem.addEventListener('click', () => {
        moveDraggableBlockToIndexIgor(index);
        resetButtonStylesIgor();
    });
});

// Мое чудо, передвигаемый блок
draggableBlockIgor.addEventListener('mousedown', (e) => {
    isDraggingIgor = true;
    sliderRectIgor = sliderIgor.getBoundingClientRect(); 
    maxLeftIgor = sliderRectIgor.width - draggableBlockIgor.offsetWidth;

    requestAnimationFrame(() => {
        draggableBlockIgor.style.transition = 'all 0.3s ease'; 
    });
});

document.addEventListener('mousemove', (e) => {
    if (isDraggingIgor) {
        let x = e.clientX - sliderRectIgor.left - (draggableBlockIgor.offsetWidth / 2);
        // не даём зайти за рамки дозволенного :)
        x = Math.max(minLeftIgor, Math.min(x, maxLeftIgor));
        draggableBlockIgor.style.left = x + 'px';
    }
});

document.addEventListener('mouseup', (e) => {
    if (isDraggingIgor) {
        isDraggingIgor = false;
        // Магнитим к ближайшему году
        let closestIndex = 0;
        let closestDistance = Infinity;
        yearsElementsIgor.forEach((yearElem, index) => {
            const yearCenter = yearElem.offsetLeft + (yearElem.offsetWidth / 2);
            const blockLeft = parseFloat(draggableBlockIgor.style.left);
            const blockCenter = blockLeft + (draggableBlockIgor.offsetWidth / 2);
            const distance = Math.abs(yearCenter - blockCenter);
            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = index;
            }
        });
        moveDraggableBlockToIndexIgor(closestIndex);
        resetButtonStylesIgor();
    }
});

// ФАКТЫ
const factsIgor = [
    {
        title: "Торговые связи",
        text: " Игорь укрепил торговые связи с Византией и другими соседними государствами. Его правление считается временем стабилизации и развития внешней торговли, в частности через реки, связывающие Киевскую Русь с Черным морем и Средиземноморьем."
    },
    {
        title: "Брак c Ольгой",
        text: "Игорь был первым супругом княгини Ольги, которая позже стала одной из самых известных правительниц Древней Руси. Этот брак сыграл ключевую роль в укреплении его власти, ведь Ольга принесла с собой политический опыт и мудрость, которые помогли укрепить Киевское княжество после его смерти."
    },
    {
        title: "Система дани",
        text: "Игорь был одним из первых, кто начал систематически собирать дань с разных племён, вводя её регулярный характер и создавая своего рода «данные» договоры. Это позволило Руси обеспечить стабильный поток финансов для своего развития, а также сыграло важную роль в дальнейшей экспансии."
    }
];

function updateInfoIgor(index) {
    const infoTitle = document.querySelector(".info-title-igor");
    const infoText = document.querySelector(".info-text-igor");

    if (infoTitle && infoText) {
        const titleParts = factsIgor[index].title.split(" ");
        
        // Форматируем так, чтобы последнее слово было красным
        const formattedTitle = `${titleParts.slice(0, -1).join(" ")} <span style="color: red;">${titleParts[titleParts.length - 1]}</span>`;
        
        infoTitle.innerHTML = formattedTitle;
        infoText.textContent = factsIgor[index].text;
    }
}



function updateButtonStylesIgor(activeButton) {
    const buttons = document.querySelectorAll(".fact-button-igor");
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
const leftFactButtonIgor = document.querySelector(".left-fact-button.fact-button-igor");
const middleFactButtonIgor = document.querySelector(".middle-fact-button.fact-button-igor"); // Исправлено: удалён пробел
const rightFactButtonIgor = document.querySelector(".right-fact-button.fact-button-igor");

if (leftFactButtonIgor && middleFactButtonIgor && rightFactButtonIgor) {
    leftFactButtonIgor.addEventListener("click", function () {
        updateInfoIgor(0);
        updateButtonStylesIgor(this);
    });
    middleFactButtonIgor.addEventListener("click", function () {
        updateInfoIgor(1);
        updateButtonStylesIgor(this);
    });
    rightFactButtonIgor.addEventListener("click", function () {
        updateInfoIgor(2);
        updateButtonStylesIgor(this);
    });
}

// ФУНКЦИЯ СБРОСА ВНЕШНЕГО ВИДА КНОПОК FAСЕ-BUTTOn при взаимодействии со слайдером
function resetButtonStylesIgor() {
    document.querySelectorAll(".fact-button-igor").forEach(btn => {
        btn.style.border = "1px solid transparent";
        btn.style.background = "#AEAE63";
        btn.style.color = "black";
    });
}

document.addEventListener('mouseup', () => {
    if (typeof isDraggingIgor !== 'undefined' && isDraggingIgor) {
        resetButtonStylesIgor();
    }
});

if (typeof yearsElementsIgor !== 'undefined') {
    yearsElementsIgor.forEach((yearElem) => {
        yearElem.addEventListener('click', () => {
            resetButtonStylesIgor(); 
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

    ['updateInfoIgor', 'updateInfoByIndexIgor', 'obnovlenieIgor'].forEach(fn => {
        if (typeof window[fn] === 'function') {
            const original = window[fn];
            window[fn] = (...args) => {
                original(...args);
                const elements = fn === 'obnovlenieIgor' 
                    ? [document.getElementById('background-image-igor')] 
                    : ['info-title-igor', 'info-text-igor'].map(id => document.getElementById(id) || document.querySelector(`.${id}`));
                elements.forEach(animate);
            };
        }
    });
})();

// Дополнение драг-блоку класс инактива при взаимодействии с фактами
document.querySelectorAll('.fact-button-igor').forEach(button => {
    button.addEventListener('click', () => {
        draggableBlockIgor.classList.add('inactive');
    });
});

document.querySelectorAll('.year-igor').forEach(yearElem => {
    yearElem.addEventListener('click', () => {
        draggableBlockIgor.classList.remove('inactive');
    });
});


// если в массиве йеарсдата у нас есть card, тогда мы достаём эту карту
let previousHasCardIgor = false;

const mapContainerigor = document.createElement('div');
mapContainerigor.id = 'map-container';

// Базовые стили для "широких" экранов
mapContainerigor.style.position = 'fixed';
mapContainerigor.style.right = '0';
mapContainerigor.style.top = '50%';
mapContainerigor.style.transform = 'translateY(-50%) translateX(100%)';
mapContainerigor.style.width = '40%';
mapContainerigor.style.height = '70%';
mapContainerigor.style.background = 'black';
mapContainerigor.style.border = '1px solid #B0AE66';
mapContainerigor.style.borderRadius = '10px 0 0 10px';
mapContainerigor.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
mapContainerigor.style.display = 'none';
mapContainerigor.style.zIndex = '1000';
mapContainerigor.style.padding = '10px';
mapContainerigor.style.textAlign = 'center';
mapContainerigor.style.transition = 'transform 0.3s ease';


if (window.innerWidth <= 600) {
  mapContainerigor.style.top = 'auto';
  mapContainerigor.style.bottom = '0';
  mapContainerigor.style.left = '50%';

  mapContainerigor.style.transform = 'translateX(-50%) translateY(100%)';
  mapContainerigor.style.width = '90vw';
  mapContainerigor.style.height = '40vh';
  mapContainerigor.style.borderRadius = '10px 10px 0 0';

  let startY = 0;
  let deltaY = 0;
  mapContainerigor.addEventListener('touchstart', (e) => {
    startY = e.touches[0].clientY;
    mapContainerigor.style.transition = ''; 
  }, { passive: false });
  mapContainerigor.addEventListener('touchmove', (e) => {
    e.preventDefault(); 
    const currentY = e.touches[0].clientY;
    deltaY = currentY - startY;
    if (deltaY > 0) { 
      mapContainerigor.style.transform = `translateX(-50%) translateY(${deltaY}px)`;
    }
  }, { passive: false });
  mapContainerigor.addEventListener('touchend', (e) => {
    mapContainerigor.style.transition = 'transform 0.3s ease';
    if (deltaY > 50) {
      hideMapigor();
    } else {
      mapContainerigor.style.transform = 'translateX(-50%) translateY(0)';
    }
  }, { passive: false });
}

const mapImageigor = document.createElement('img');
mapImageigor.style.width = '100%';
mapImageigor.style.height = 'calc(100% - 65px)';
mapImageigor.style.objectFit = 'contain';
mapImageigor.style.borderRadius = '5px';
mapContainerigor.appendChild(mapImageigor);

const closeButtonigor = document.createElement('button');
closeButtonigor.textContent = 'Свернуть';
closeButtonigor.style.marginTop = '5px';
closeButtonigor.style.marginBottom = '5px';
closeButtonigor.style.fontSize = '25px';
closeButtonigor.style.padding = '10px 15px';
closeButtonigor.style.border = '1px solid #B0AE66';
closeButtonigor.style.fontFamily = 'involve';
closeButtonigor.style.background = '#B0AE66';
closeButtonigor.style.color = 'black';
closeButtonigor.style.borderRadius = '30px';
closeButtonigor.style.cursor = 'pointer';
closeButtonigor.style.transition = 'background 0.3s ease';
mapContainerigor.appendChild(closeButtonigor);

closeButtonigor.addEventListener('mouseenter', () => {
    closeButtonigor.style.background = 'black';
    closeButtonigor.style.color = '#B0AE66';
});
closeButtonigor.addEventListener('mouseleave', () => {
    closeButtonigor.style.background = '#B0AE66';
    closeButtonigor.style.color = 'black';
});
closeButtonigor.addEventListener('click', () => {
    hideMapigor();
});

document.body.appendChild(mapContainerigor);

function showMapigor(cardUrl) {
    mapImageigor.src = cardUrl;
    mapContainerigor.style.display = 'block';
    setTimeout(() => {
        if (window.innerWidth <= 600) {
          mapContainerigor.style.transform = 'translateX(-50%) translateY(0)';
        } else {
          mapContainerigor.style.transform = 'translateY(-50%) translateX(0)';
        }
    }, 0);
}

function hideMapigor() {
    if (window.innerWidth <= 600) {
      mapContainerigor.style.transform = 'translateX(-50%) translateY(100%)';
    } else {
      mapContainerigor.style.transform = 'translateY(-50%) translateX(100%)';
    }
    setTimeout(() => {
        mapContainerigor.style.display = 'none';
    }, 300);
}

let prevHasCardIgor = false;
const originalUpdateInfoByIndexIgor = updateInfoByIndexIgor;
updateInfoByIndexIgor = function (index) {
    originalUpdateInfoByIndexIgor(index);
    const { card } = yearsDataIgor[index];
    
    if (card) {
        if (prevHasCardIgor) {
            if (window.innerWidth <= 600) {
              mapContainerigor.style.transform = 'translateX(-50%) translateY(100%)';
            } else {
              mapContainerigor.style.transform = 'translateY(-50%) translateX(100%)';
            }
            setTimeout(() => showMapigor(card), 600);
        } else {
            showMapigor(card);
        }
        prevHasCardIgor = true;
    } else {
        if (window.innerWidth <= 600) {
          mapContainerigor.style.transform = 'translateX(-50%) translateY(100%)';
        } else {
          mapContainerigor.style.transform = 'translateY(-50%) translateX(100%)';
        }
        setTimeout(() => { mapContainerigor.style.display = 'none'; }, 300);
        prevHasCardIgor = false;
    }
};
