// Alternador de Tema (Light/Dark Mode)
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    htmlElement.classList.add('dark');
} else if (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    htmlElement.classList.add('dark');
}

themeToggleBtn.addEventListener('click', () => {
    htmlElement.classList.toggle('dark');
    localStorage.setItem('theme', htmlElement.classList.contains('dark') ? 'dark' : 'light');
});

// Menu Mobile (Hamburguer)
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('active');
        menuToggle.classList.toggle('is-active', isOpen);
        menuToggle.setAttribute('aria-expanded', isOpen);
        document.body.classList.toggle('menu-open', isOpen);
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('is-active');
            menuToggle.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('menu-open');
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('is-active');
            menuToggle.setAttribute('aria-expanded', 'false');
            document.body.classList.remove('menu-open');
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
