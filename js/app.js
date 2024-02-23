
// Carrusel Slider 
let sliderButtons = [
    document.getElementById('btnSlider1'),
    document.getElementById('btnSlider2'),
    document.getElementById('btnSlider3')
];
let sliderContainer = document.querySelector('.container-slider');
let slides = document.querySelectorAll('.container-slider > li');
let totalSlides = slides.length;
let currentIndex = 0;

function updatePosition() {
    slides.forEach((slide, index) => {
        slide.style.opacity = index === currentIndex ? '1' : '0';
    });
    sliderButtons.forEach((btn) => {
        btn.classList.remove('buttonActive');
    });
    sliderButtons[currentIndex].classList.add('buttonActive');

    let currentSlide = slides[currentIndex];
    let contentElement = currentSlide.querySelector('.content-slider');
    contentElement.style.opacity = '0';
    contentElement.style.transform = 'translateX(-100px)';
    setTimeout(() => {
        contentElement.style.opacity = '1';
        contentElement.style.transform = 'translateX(0)';
    }, 200);
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updatePosition();
}

sliderButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        currentIndex = index;
        updatePosition();
    });
});
setInterval(nextSlide, 10000);

updatePosition();