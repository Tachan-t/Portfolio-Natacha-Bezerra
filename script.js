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

    const experiencesCarousel = document.querySelector('.experiences-carousel');
    const experienceCards = document.querySelectorAll('.experience-card');
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
});
