document.addEventListener('DOMContentLoaded',()=>{
const header = document.getElementById('headerInner');
const footer = document.getElementById('footerInner');

const newHtml = `
<section class="header-info">
<div class="container contentInformation">
    <div class="information">
        <a href=""><i class="fa-solid fa-envelope"></i>consultas@ronaldgamarra.com</a>
        <a href=""><i class="fa-brands fa-whatsapp"></i>984 768 177</a>
        <a href=""><i class="fa-solid fa-location-dot"></i>Av. Javier Prado Este 1684 San Isidro</a>
    </div>
    <div class="links-redes">
        <ul>
            <li>
                <a href=""><i class="fa-brands fa-facebook-f"></i></a>
            </li>
            <li>
                <a href=""><i class="fa-brands fa-instagram"></i></a>
            </li>
            <li>
                <a href=""><i class="fa-brands fa-youtube"></i></a>
            </li>
            <li>
                <a href=""><i class="fa-solid fa-image-portrait"></i></a>
            </li>
        </ul>
        
    </div>
</div>
</section>
<section class="navbar">
<div class="container navbar__content">
    <div class="logoDr">
        <a href="index.html"><img src="img/logo.webp" alt=""></a>
    </div>
    <div class="menu-icon">
        <p>Menu <i class="fa-solid fa-bars"></i></p>
    </div>
    <div class="nav">
        <ul>
            <div class="logoDr">
                <img src="img/logo.webp" alt="">
            </div>
            <li><a href="index.html">Inicio</a></li>
            <li><a href="about.html">Su Cirujano</a></li>
            <li><a href="categoria.html">Procedimientos Quirúrjicos</a></li>
            <li><a href="categoria.html">No Quirúrjicos</a></li>
            <li><a href="galeria.html">Galería</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li class="btn-nav" ><i class="fa-regular fa-calendar"></i><a href="contact.html" >Contactanos</a></li>
        </ul>
    </div>
    <!-- <div class="menu-icon">
        <p>Menu</p>
        <a href=""><i class="fa-solid fa-bars"></i></a>
    </div> -->
</div>
</section>
`;
const newFooter = `<div class="container footer-content">
<div class="row-footer">
    <section class="dr-footer-section">
        <img src="img/logo-blanco-footer.webp" alt="">
        <p>Cirujano Plástico Certificado especializado en BRASIL y EEUU</p>
    </section>
    <section class="ubicanos-footer">
        <h3>Ubícanos</h3>
        <p>Visítanos con una previa cita</p>
        <ul>
            <li><a href=""><i class="fa-solid fa-location-dot"></i>CLÍNICA HIGUERETA - Av. Javier prado este 1684 San Isidro</a></li>
            <li><a href=""><i class="fa-solid fa-location-dot"></i>MEDICENTER SAN LUIS - Jr.Augusto Durand 2639, San Luis 15021</a></li>
        </ul>
    </section>
    <section class="contactenos-footer">
        <h3>Contáctenos</h3>
        <ul>
            <li><a href=""><i class="fa-brands fa-whatsapp"></i>984 768 177</a></li>
            <li><a href=""><i class="fa-solid fa-envelope"></i>consultas@ronaldgamarra.com</a></li>
        </ul>
        <p>Siguenos</p>
        <ul class="links-reades-footer">
            <li>
                <a href=""><i class="fa-brands fa-facebook-f"></i></a>
            </li>
            <li>
                <a href=""><i class="fa-brands fa-instagram"></i></a>
            </li>
            <li>
                <a href=""><i class="fa-brands fa-youtube"></i></a>
            </li>
            <li>
                <a href=""><i class="fa-solid fa-image-portrait"></i></a>
            </li>
        </ul>
    </section>
</div>
</div>
<div class="copyright">
<div class="container textcopy">
    <p>&copy; 2024 Todos los derechos reservados</p>
</div>  
</div>
`;

    header.insertAdjacentHTML('afterbegin', newHtml);
    footer.insertAdjacentHTML('beforeend', newFooter);

    // Nav
    document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('.nav').classList.toggle('active');
});
});