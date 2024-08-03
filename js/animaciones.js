document.addEventListener(
    "DOMContentLoaded",
    cargando
);

function cargando() {
    const carga = document.querySelector(".cargando");
    setTimeout(() => {
        carga.style.opacity = "0";
        setTimeout(() => {
            carga.style.visibility = "hidden";
        }, 2000);
    }, //2000
    );
    carousel();
}

let carousel = () => {
    let carouselContainer;
    let carousel;
    let items;
    let totalItems;
    let prevIndex;
    let currentIndex;
    let timeOutID = null;

    function init() {
        carouselContainer = document.querySelector(".carouselContainer");
        carousel = document.querySelector(".carouselCards");
        currentIndex = 0;
        items = document.querySelectorAll(".carouselItem");
        totalItems = items.length;
        startCarousel();
    }

    function startCarousel() {
        tick();
    }

    function moveSegmentToIndex() {

        clearTimeout(timeOutID);

        prevIndex = currentIndex
        
        carousel.appendChild(items[prevIndex]);
        carousel.style.transition = 'none';
        carousel.style.transform = 'translateX(0px)';
        currentIndex = (currentIndex + 1) % totalItems;
        tick();
    }

    function tick() {
        timeOutID = setTimeout(() => {
            carousel.style.transition = 'transform 1s ease-in-out';
            carousel.style.transform = 'translateX(-100vw)';
            setTimeout(() => {
                
                moveSegmentToIndex();
            }, 1000);
        }, 4000);
    }
    init();
}