// Seleciona os elementos necessários
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');

// Alterna a classe 'open' ao clicar no botão de menu
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Fecha o menu ao clicar em qualquer link
navLinksItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const carouselPrev = document.querySelector('.carousel-nav.prev');
    const carouselNext = document.querySelector('.carousel-nav.next');
    let scrollAmount = 0;
    let autoScrollInterval;

    function autoScroll() {
        if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
            scrollAmount = 0;
        } else {
            scrollAmount += carousel.clientWidth;
        }
        carousel.scrollTo({
            top: 0,
            left: scrollAmount,
            behavior: 'smooth'
        });
    }

    function startAutoScroll() {
        autoScrollInterval = setInterval(autoScroll, 3000); // Ajuste o tempo conforme necessário
    }

    function stopAutoScroll() {
        clearInterval(autoScrollInterval);
    }

    startAutoScroll();

    carouselItems.forEach(item => {
        item.addEventListener('mouseenter', stopAutoScroll);
        item.addEventListener('mouseleave', startAutoScroll);
    });

    carouselPrev.addEventListener('click', () => {
        scrollAmount -= carousel.clientWidth;
        if (scrollAmount < 0) {
            scrollAmount = carousel.scrollWidth - carousel.clientWidth;
        }
        carousel.scrollTo({
            top: 0,
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    carouselNext.addEventListener('click', () => {
        scrollAmount += carousel.clientWidth;
        if (scrollAmount >= carousel.scrollWidth) {
            scrollAmount = 0;
        }
        carousel.scrollTo({
            top: 0,
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    const experiencesCarousel = document.querySelector('.experiences-carousel');
    const experienceCards = document.querySelectorAll('.experience-card');
    const experiencesPrev = document.querySelector('.experiences-nav.prev');
    const experiencesNext = document.querySelector('.experiences-nav.next');
    let experiencesScrollAmount = 0;
    let experiencesAutoScrollInterval;

    function autoScrollExperiences() {
        if (experiencesScrollAmount >= experiencesCarousel.scrollWidth - experiencesCarousel.clientWidth) {
            experiencesScrollAmount = 0;
        } else {
            experiencesScrollAmount += experiencesCarousel.clientWidth;
        }
        experiencesCarousel.scrollTo({
            top: 0,
            left: experiencesScrollAmount,
            behavior: 'smooth'
        });
    }

    function startAutoScrollExperiences() {
        experiencesAutoScrollInterval = setInterval(autoScrollExperiences, 3000); // Ajuste o tempo conforme necessário
    }

    function stopAutoScrollExperiences() {
        clearInterval(experiencesAutoScrollInterval);
    }

    startAutoScrollExperiences();

    experienceCards.forEach(card => {
        card.addEventListener('mouseenter', stopAutoScrollExperiences);
        card.addEventListener('mouseleave', startAutoScrollExperiences);
    });

    experiencesPrev.addEventListener('click', () => {
        experiencesScrollAmount -= experiencesCarousel.clientWidth;
        if (experiencesScrollAmount < 0) {
            experiencesScrollAmount = experiencesCarousel.scrollWidth - experiencesCarousel.clientWidth;
        }
        experiencesCarousel.scrollTo({
            top: 0,
            left: experiencesScrollAmount,
            behavior: 'smooth'
        });
    });

    experiencesNext.addEventListener('click', () => {
        experiencesScrollAmount += experiencesCarousel.clientWidth;
        if (experiencesScrollAmount >= experiencesCarousel.scrollWidth) {
            experiencesScrollAmount = 0;
        }
        experiencesCarousel.scrollTo({
            top: 0,
            left: experiencesScrollAmount,
            behavior: 'smooth'
        });
    });

    // Swipe navigation for mobile
    let isDown = false;
    let startX;
    let scrollLeft;

    function handleMouseDown(e) {
        isDown = true;
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
        stopAutoScroll();
    }

    function handleMouseLeave() {
        isDown = false;
        startAutoScroll();
    }

    function handleMouseUp() {
        isDown = false;
        startAutoScroll();
    }

    function handleMouseMove(e) {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 3; // Adjust scroll speed
        carousel.scrollLeft = scrollLeft - walk;
    }

    carousel.addEventListener('mousedown', handleMouseDown);
    carousel.addEventListener('mouseleave', handleMouseLeave);
    carousel.addEventListener('mouseup', handleMouseUp);
    carousel.addEventListener('mousemove', handleMouseMove);

    // Swipe navigation for mobile - Experiences Carousel
    let isDownExperiences = false;
    let startXExperiences;
    let scrollLeftExperiences;

    function handleMouseDownExperiences(e) {
        isDownExperiences = true;
        startXExperiences = e.pageX - experiencesCarousel.offsetLeft;
        scrollLeftExperiences = experiencesCarousel.scrollLeft;
        stopAutoScrollExperiences();
    }

    function handleMouseLeaveExperiences() {
        isDownExperiences = false;
        startAutoScrollExperiences();
    }

    function handleMouseUpExperiences() {
        isDownExperiences = false;
        startAutoScrollExperiences();
    }

    function handleMouseMoveExperiences(e) {
        if (!isDownExperiences) return;
        e.preventDefault();
        const x = e.pageX - experiencesCarousel.offsetLeft;
        const walk = (x - startXExperiences) * 3; // Adjust scroll speed
        experiencesCarousel.scrollLeft = scrollLeftExperiences - walk;
    }

    experiencesCarousel.addEventListener('mousedown', handleMouseDownExperiences);
    experiencesCarousel.addEventListener('mouseleave', handleMouseLeaveExperiences);
    experiencesCarousel.addEventListener('mouseup', handleMouseUpExperiences);
    experiencesCarousel.addEventListener('mousemove', handleMouseMoveExperiences);

    experiencesCarousel.addEventListener('touchstart', (e) => handleMouseDownExperiences(e.touches[0]));
    experiencesCarousel.addEventListener('touchend', handleMouseUpExperiences);
    experiencesCarousel.addEventListener('touchmove', (e) => handleMouseMoveExperiences(e.touches[0]));
});
