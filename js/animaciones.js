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
    }, 2000);
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

    function init(){
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

    function startCarousel(){
        addNavigator();
        tick();
    }

    function addNavigator(){
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
        console.log(dots[index]);
        dots[index].classList.add('active');
    }

    function moveSegmentToIndex(index=0){
        clearTimeout(timeOutID);

        if(index === totalItems-2){
            //carousel.insertAfter(items.index +1, carousel.firstElementChild);
        }
        prevIndex = currentIndex;
        currentIndex = index;
        //carousel.appendChild(items[prevIndex]);
        carousel.classList.add('sliding-transition');
        carousel.style.transform = `translateX(-${index*320}px)`
        
        setDotAsActive(currentIndex);

        setTimeout(() => {
            carousel.appendChild(items[prevIndex])
            carousel.style.transform = 'translateX(0)';
            carousel.classList.remove('sliding-transition');
        }, 600);
        //tick();
    }

    function tick(){
        timeOutID = setTimeout(() => {
            moveSegmentToIndex(currentIndex + 1);
            tick();
        }, 5000);
    }

    init();
    
}