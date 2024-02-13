const buttons = [
    document.getElementById('btnSlider1'),
    document.getElementById('btnSlider2'),
    document.getElementById('btnSlider3')
]

let totalSlides = document.querySelectorAll('.container-slide' > li).length;
let currentIndex = 0;