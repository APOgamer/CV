document.addEventListener('DOMContentLoaded', () => {
    const contactBtn = document.querySelector('.btn');
    if (contactBtn) {
        contactBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.open(contactBtn.href, '_blank');
        });
    }

    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.1)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1)';
        });
    });

    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        // Guardar preferencia
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
            themeToggle.textContent = '☀️';
        } else {
            localStorage.setItem('darkMode', null);
            themeToggle.textContent = '🌙';
        }
    });

    const langToggle = document.getElementById('langToggle');
    let currentLang = localStorage.getItem('language') || 'en';

    function setLanguage(lang) {
        const elements = document.querySelectorAll('[data-en]');
        elements.forEach(element => {
            // Si el elemento contiene un enlace, preservarlo
            if (element.querySelector('a')) {
                const link = element.querySelector('a').cloneNode(true);
                element.textContent = element.getAttribute(`data-${lang}`);
                element.appendChild(document.createTextNode(' '));
                element.appendChild(link);
            } else {
                element.textContent = element.getAttribute(`data-${lang}`);
            }
        });
        localStorage.setItem('language', lang);
        langToggle.textContent = lang === 'en' ? '🇪🇸' : '🇺🇸';
    }

    setLanguage(currentLang);
    langToggle.textContent = currentLang === 'en' ? '🇪🇸' : '🇺🇸';

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'es' : 'en';
        setLanguage(currentLang);
    });
});