document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    let currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.body.classList.toggle('dark', currentTheme === 'dark');
    } else {
        document.body.classList.toggle('dark', prefersDarkScheme);
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        let theme = 'light';
        if (document.body.classList.contains('dark')) {
            theme = 'dark';
        }
        localStorage.setItem('theme', theme);
        themeToggle.innerText = theme === 'dark' ? '🌞' : '🌙';
    });

    // Initial toggle button state
    themeToggle.innerText = document.body.classList.contains('dark') ? '🌞' : '🌙';

    // Carousel functionality
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showSlide(index) {
        carouselItems.forEach((item, i) => {
            item.style.transform = `translateX(${100 * (i - index)}%)`;
        });
    }

    document.querySelector('.carousel-control.prev').addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? carouselItems.length - 1 : currentIndex - 1;
        showSlide(currentIndex);
    });

    document.querySelector('.carousel-control.next').addEventListener('click', () => {
        currentIndex = (currentIndex === carouselItems.length - 1) ? 0 : currentIndex + 1;
        showSlide(currentIndex);
    });

    showSlide(currentIndex);
});
