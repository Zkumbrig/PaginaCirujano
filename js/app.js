const slides = document.querySelectorAll('.container-slider');
const indicators = document.querySelectorAll( '.slider-indicators li' );
let currentSlide = 0;

function showSlide(index){
    slides.forEach(slide => {
        slide.style.opacity = '0';
    });
    slides[index].style.opacity = '1'
}
