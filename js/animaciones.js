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
        /*
        console.log(carouselContainer);
        console.log(carousel);
        console.log(items);
        console.log(totalItems);
        */

        startCarousel();

        //Inicializacion de los componentes hasta que 

    }

    function startCarousel() {
        //addNavigator();
        tick();
    }
    /*
    function addNavigator() {
        const navigator = document.createElement('div');
        navigator.classList.add('carousel-navigator');
        for (let i = 0; i < totalItems; i++) {
            const dot = document.createElement('div');
            dot.classList.add('carousel-navigator-dot');
            if (i === 0) {
                dot.classList.add('active');
            }
            dot.addEventListener('click', (e) => {
                moveSegmentToIndex(i);
            });
            navigator.appendChild(dot);
        }

        carouselContainer.appendChild(navigator);
    }

    function setDotAsActive(index) {
        const dots = carouselContainer.querySelectorAll('.carousel-navigator-dot');
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        //console.log(dots[index]);
        dots[index].classList.add('active');
    }
*/
    function moveSegmentToIndex() {

        clearTimeout(timeOutID);

        prevIndex = currentIndex
        
        carousel.appendChild(items[prevIndex]);
        carousel.style.transition = 'none';
        carousel.style.transform = 'translateX(0px)';
        currentIndex = (currentIndex + 1) % totalItems;
       // setDotAsActive(currentIndex);
        tick();


    }

    function tick() {
        timeOutID = setTimeout(() => {
            carousel.style.transition = 'transform 1s ease-in-out';
            carousel.style.transform = 'translateX(-100vw)';
            setTimeout(() => {
                
                moveSegmentToIndex();
            }, 1000);
            //tick();
        }, 4000);
    }

    init();

}