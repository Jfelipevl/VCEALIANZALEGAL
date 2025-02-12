document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Gracias por contactarnos. Nos pondremos en contacto contigo pronto.");
            contactForm.reset();
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const carouselInner = document.querySelector(".carousel-inner");
    const prevButton = document.querySelector(".carousel-control.prev");
    const nextButton = document.querySelector(".carousel-control.next");
    const items = document.querySelectorAll(".carousel-item");
    let currentIndex = 0;

    // Función para actualizar el carrusel
    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselInner.style.transform = `translateX(${offset}%)`;
    }

    // Función para mover al siguiente elemento
    function nextItem() {
        if (currentIndex < items.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Vuelve al primer elemento
        }
        updateCarousel();
    }

    // Función para mover al elemento anterior
    function prevItem() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = items.length - 1; // Vuelve al último elemento
        }
        updateCarousel();
    }

    // Evento para el botón "Anterior"
    prevButton.addEventListener("click", prevItem);

    // Evento para el botón "Siguiente"
    nextButton.addEventListener("click", nextItem);

    // Desplazamiento automático cada 5 segundos
    let autoCarousel = setInterval(nextItem, 4000);

    // Detener el desplazamiento automático cuando el usuario interactúa con el carrusel
    carouselInner.addEventListener("mouseenter", () => {
        clearInterval(autoCarousel);
    });

    // Reanudar el desplazamiento automático cuando el usuario deja de interactuar
    carouselInner.addEventListener("mouseleave", () => {
        autoCarousel = setInterval(nextItem, 4000);
    });

    // Inicializar el carrusel
    updateCarousel();
});