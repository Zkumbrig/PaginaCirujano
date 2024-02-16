// Nav
document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('.nav').classList.toggle('active');
});

// Desplegables
const membresias = [
    document.getElementById('mem1'),
    document.getElementById('mem2'),
    document.getElementById('mem3'),
    document.getElementById('mem4')
]

membresias.forEach((memb)=>{
    memb.addEventListener("click",()=>{
        memb.classList.toggle('active');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const titulosSecciones = document.querySelectorAll('.secciones .titlemem');

    titulosSecciones.forEach(titulo => {
        titulo.addEventListener("click", () => {
            const infomembresia = titulo.nextElementSibling;
            infomembresia.classList.toggle('active');
            if (infomembresia.classList.contains('active')) {
                infomembresia.style.maxHeight = infomembresia.scrollHeight + 'px';
            } else {
                infomembresia.style.maxHeight = '0';
            }
        });
    });
});
