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
    const carousels = document.querySelectorAll('.carousel, .experiences-carousel');
    const carouselItems = document.querySelectorAll('.carousel-item, .experience-card');
    const carouselNavs = document.querySelectorAll('.carousel-nav, .experiences-nav');
    let scrollAmounts = {};
    let autoScrollIntervals = {};

    carousels.forEach((carousel, index) => {
        scrollAmounts[index] = 0;

        function autoScroll() {
            if (scrollAmounts[index] >= carousel.scrollWidth - carousel.clientWidth) {
                scrollAmounts[index] = 0;
            } else {
                scrollAmounts[index] += carousel.clientWidth;
            }
            carousel.scrollTo({
                top: 0,
                left: scrollAmounts[index],
                behavior: 'smooth'
            });
        }

        function startAutoScroll() {
            autoScrollIntervals[index] = setInterval(autoScroll, 3000); // Ajuste o tempo conforme necessário
        }

        function stopAutoScroll() {
            clearInterval(autoScrollIntervals[index]);
        }

        startAutoScroll();

        carouselItems.forEach(item => {
            item.addEventListener('mouseenter', stopAutoScroll);
            item.addEventListener('mouseleave', startAutoScroll);
            item.addEventListener('click', stopAutoScroll); // Para o auto-scroll ao clicar em um card
        });

        carouselNavs.forEach(nav => {
            nav.addEventListener('click', () => {
                if (nav.classList.contains('prev')) {
                    scrollAmounts[index] -= carousel.clientWidth;
                    if (scrollAmounts[index] < 0) {
                        scrollAmounts[index] = carousel.scrollWidth - carousel.clientWidth;
                    }
                } else {
                    scrollAmounts[index] += carousel.clientWidth;
                    if (scrollAmounts[index] >= carousel.scrollWidth) {
                        scrollAmounts[index] = 0;
                    }
                }
                carousel.scrollTo({
                    top: 0,
                    left: scrollAmounts[index],
                    behavior: 'smooth'
                });
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

        carousel.addEventListener('touchstart', (e) => handleMouseDown(e.touches[0]));
        carousel.addEventListener('touchend', handleMouseUp);
        carousel.addEventListener('touchmove', (e) => handleMouseMove(e.touches[0]));
    });
});

