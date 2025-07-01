// Анимка для переноса на якорь с учетом разных смещений
function scrollToAnchor(anchorId) {
    const target = document.getElementById(anchorId) || document.querySelector(`.${anchorId}`);
    if (target) {
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;

        // Функция для получения смещения в зависимости от ширины экрана
        function getOffset() {
            if (window.innerWidth < 768) {
                return -120; 
            } else {
                return -75; 
            }
        }

        const offset = getOffset(); 

        window.scrollTo({
            top: targetPosition + offset,
            behavior: 'smooth'
        });
    }
}

// Анимка чтения
(function() {
    const header = document.querySelector('header');
    const progressBar = document.createElement('div');
    const progressText = document.createElement('span');

    progressBar.style.position = 'fixed';
    progressBar.style.top = '0';
    progressBar.style.left = '0';
    progressBar.style.height = '5px';
    progressBar.style.backgroundColor = 'black';
    progressBar.style.width = '0';
    progressBar.style.zIndex = '1000';

    progressText.style.position = 'fixed';
    progressText.style.top = '13px';
    progressText.style.right = '620px';
    progressText.style.fontSize = '25px';
    progressText.style.color = 'black';
    progressText.style.zIndex = '1000';
    progressText.style.fontFamily = "'Involve', sans-serif"; 
    
    document.body.appendChild(progressBar);
    document.body.appendChild(progressText);

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;

        progressBar.style.width = scrollPercent + '%';
    });
})();
