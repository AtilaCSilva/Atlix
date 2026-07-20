// Alternador de Tema (Light/Dark Mode)
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    htmlElement.classList.add('dark');
} else if (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    htmlElement.classList.add('dark');
}

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        htmlElement.classList.toggle('dark');
        localStorage.setItem('theme', htmlElement.classList.contains('dark') ? 'dark' : 'light');
    });
}

// Menu Mobile (Hamburguer)
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    const setMenuState = (isOpen) => {
        menuToggle.classList.toggle('active', isOpen);
        menuToggle.setAttribute('aria-expanded', String(isOpen));
        menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação');
        document.body.classList.toggle('menu-open', isOpen);
    };

    menuToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('active');
        setMenuState(isOpen);
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            setMenuState(false);
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            setMenuState(false);
            menuToggle.focus();
        }
    });
}

// Parallax Glassmorphism — Hero Section
const heroSection = document.querySelector('.hero-section');
const parallaxElements = document.querySelectorAll('.parallax-element');

if (heroSection && parallaxElements.length) {
    const isMobileViewport = () => window.matchMedia('(max-width: 768px)').matches;

    heroSection.addEventListener('mouseenter', () => {
        if (isMobileViewport()) return;
        parallaxElements.forEach(el => {
            el.style.transition = 'none';
        });
    });

    heroSection.addEventListener('mousemove', (e) => {
        if (isMobileViewport()) return;

        const rect = heroSection.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const relX = e.clientX - centerX;
        const relY = e.clientY - centerY;

        parallaxElements.forEach(el => {
            const speed = parseFloat(el.dataset.speed) || 0;
            const x = relX * speed;
            const y = relY * speed;
            el.style.transform = `translate(${x}px, ${y}px)`;
        });
    });

    heroSection.addEventListener('mouseleave', () => {
        if (isMobileViewport()) return;

        parallaxElements.forEach(el => {
            el.style.transition = 'transform 0.5s ease';
            el.style.transform = 'translate(0, 0)';
        });
    });

    window.addEventListener('resize', () => {
        if (isMobileViewport()) {
            parallaxElements.forEach(el => {
                el.style.transition = '';
                el.style.transform = '';
            });
        }
    });
}

// Lightbox — zoom de imagens (somente na página do case study)
const zoomableImages = document.querySelectorAll('.zoomable-image');
const lightboxOverlay = document.querySelector('.lightbox-overlay');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.querySelector('.lightbox-close');

if (zoomableImages.length && lightboxOverlay && lightboxImg && lightboxClose) {
    const closeLightbox = () => {
        lightboxOverlay.classList.remove('active');
    };

    zoomableImages.forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.currentSrc || img.src;
            lightboxImg.alt = img.alt;
            lightboxOverlay.classList.add('active');
            lightboxClose.focus();
        });
    });

    lightboxClose.addEventListener('click', closeLightbox);

    lightboxOverlay.addEventListener('click', (e) => {
        if (e.target === lightboxOverlay) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightboxOverlay.classList.contains('active')) {
            closeLightbox();
        }
    });
}

// Logo — efeito typewriter (uma vez no carregamento)
function initLogoTypewriter() {
    const logoElement = document.querySelector('.logo');
    if (!logoElement) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const BRAND = 'Atlix';
    const NAME = 'Atila';
    const PAUSE_MS = 2500;
    const TYPE_SPEED = 90;
    const DELETE_SPEED = 60;

    let typewriterEl = logoElement.querySelector('.logo-typewriter');

    if (!typewriterEl) {
        typewriterEl = document.createElement('span');
        typewriterEl.className = 'logo-typewriter';
        typewriterEl.setAttribute('aria-hidden', 'true');

        const existingWord = logoElement.textContent.trim().replace(/\.$/, '') || BRAND;
        logoElement.textContent = '';
        logoElement.appendChild(typewriterEl);
        typewriterEl.innerHTML = `${existingWord}<span class="logo-accent">.</span>`;
    } else {
        typewriterEl.setAttribute('aria-hidden', 'true');
    }

    logoElement.classList.add('typing-cursor');

    let displayWord = BRAND;

    const render = (word) => {
        displayWord = word;
        typewriterEl.innerHTML = `${word}<span class="logo-accent">.</span>`;
    };

    const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    const deleteWord = async () => {
        let word = displayWord;
        while (word.length > 0) {
            word = word.slice(0, -1);
            render(word);
            await wait(DELETE_SPEED);
        }
    };

    const typeWord = async (target) => {
        let word = '';
        for (const char of target) {
            word += char;
            render(word);
            await wait(TYPE_SPEED);
        }
    };

    const runIntro = async () => {
        await deleteWord();
        await typeWord(NAME);
        await wait(PAUSE_MS);
        await deleteWord();
        await typeWord(BRAND);
        logoElement.classList.remove('typing-cursor');
    };

    runIntro();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLogoTypewriter);
} else {
    initLogoTypewriter();
}
