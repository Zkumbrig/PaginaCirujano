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
        slide.style.opaci
    })
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
setInterval(nextSlide, 5000);

updatePosition();