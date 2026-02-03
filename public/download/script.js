// ===== Lessons Data =====
const lessons = [
    { id: 1, title: "Front-End nima? Web dasturlash asoslari" },
    { id: 2, title: "HTML asoslari va tuzilishi" },
    { id: 3, title: "HTML teglar bilan ishlash" },
    { id: 4, title: "CSS asoslari va selektor turlari" },
    { id: 5, title: "CSS Box Model va Layout" },
    { id: 6, title: "Flexbox - moslashuvchan joylashuv" },
    { id: 7, title: "CSS Grid - ikki o'lchovli layout" },
    { id: 8, title: "Responsive dizayn va Media Queries" },
    { id: 9, title: "CSS animatsiyalar va o'tishlar" },
    { id: 10, title: "JavaScript asoslari" },
    { id: 11, title: "JavaScript - DOM bilan ishlash" },
    { id: 12, title: "JavaScript - Hodisalar (Events)" },
    { id: 13, title: "JavaScript - Massiv va Ob'ektlar" },
    { id: 14, title: "JavaScript - Asinxron dasturlash" },
    { id: 15, title: "React kirish va Komponentlar" },
    { id: 16, title: "React Hooks (useState, useEffect)" },
    { id: 17, title: "React Router va Navigatsiya" },
    { id: 18, title: "API bilan ishlash" },
    { id: 19, title: "Git va GitHub asoslari" },
    { id: 20, title: "Yakuniy loyiha va portfolio" }
];

// ===== Initialize Lessons Grid =====
function initLessons() {
    const lessonsGrid = document.getElementById('lessonsGrid');
    if (!lessonsGrid) return;

    lessonsGrid.innerHTML = lessons.map(lesson => `
        <a href="#lesson-${lesson.id}" class="lesson-card">
            <div class="lesson-content">
                <div class="lesson-number">${lesson.id}</div>
                <div class="lesson-info">
                    <h3 class="lesson-title">${lesson.title}</h3>
                    <div class="lesson-meta">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                        </svg>
                        <span>Dars ${lesson.id}</span>
                    </div>
                </div>
            </div>
            <svg class="lesson-arrow" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
            </svg>
        </a>
    `).join('');
}

// ===== Smooth Scroll for Anchor Links =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===== Intersection Observer for Animations =====
function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe elements
    document.querySelectorAll('.stat-card, .feature-card, .lesson-card').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.5s ease ${index * 0.05}s, transform 0.5s ease ${index * 0.05}s`;
        observer.observe(el);
    });
}

// ===== Header Background on Scroll =====
function initHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.boxShadow = 'var(--shadow-md)';
        } else {
            header.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
}

// ===== Initialize Everything =====
document.addEventListener('DOMContentLoaded', () => {
    initLessons();
    initSmoothScroll();
    initAnimations();
    initHeaderScroll();
});

// ===== Console Welcome Message =====
console.log('%c🚀 front-end.uz', 'font-size: 24px; font-weight: bold; color: #0ea5e9;');
console.log('%cO\'zbek tilida bepul front-end kursi!', 'font-size: 14px; color: #64748b;');
console.log('%c© 2026 Xudarganov Farrux', 'font-size: 12px; color: #94a3b8;');
