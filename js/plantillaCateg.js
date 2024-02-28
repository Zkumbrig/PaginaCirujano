// const cirugias = {
//     facial: [
//         { titulo: "Bichectomia", imagen: "img/quirurgicas/bichectomia.jpg", descripcion: "Descripción de la bichectomía." },
//         { titulo: "Mentoplastia", imagen: "img/quirurgicas/facial-menton.jpg", descripcion: "Descripción de la mentoplastia." },
//         { titulo: "Rinoplastia", imagen: "img/quirurgicas/facial-rinoplastia.jpg", descripcion: "Descripción de la rinoplastia." },
//         // Agrega más cirugías faciales si es necesario
//     ],
//     mamas: [
//         { titulo: "Aumento de senos", imagen: "img/quirurgicas/aumento-de-mamas.jpg", descripcion: "Descripción del aumento de senos." },
//         { titulo: "Levantamiento", imagen: "img/quirurgicas/levantamiento-mamas.jpg", descripcion: "Descripción del levantamiento." },
//         // Agrega más cirugías de mamas si es necesario
//     ],
//     corporal: [
//         { titulo: "Liposucción", imagen: "img/quirurgicas/lipoaspiracion.jpg", descripcion: "Descripción de la liposucción." },
//         { titulo: "Abdominoplastia", imagen: "img/quirurgicas/abdominoplastia.jpg", descripcion: "Descripción de la abdominoplastia." },
//         // Agrega más cirugías corporales si es necesario
//     ]
// };

// // Función para cargar los cards según la categoría
// function cargarCards(categoria) {
//     const cardsContainer = document.querySelector('.procedimientosQui');
//     const cardTemplate = document.getElementById("card-template");

//     // Limpiar el contenedor de cards antes de cargar nuevos
//     cardsContainer.innerHTML = '';

//     // Obtener las cirugías de la categoría seleccionada
//     const cirugiasCategoria = cirugias[categoria];

//     // Crear y agregar los cards al contenedor
//     cirugiasCategoria.forEach(cirugia => {
//         const cardClone = cardTemplate.content.cloneNode(true);

//         cardClone.querySelector("img").src = cirugia.imagen;
//         cardClone.querySelector("img").alt = cirugia.titulo;
//         cardClone.querySelector("h3").innerText = cirugia.titulo;
//         cardClone.querySelector("p").innerText = cirugia.descripcion;

//         cardsContainer.appendChild(cardClone);
//     });
// }

// // Llama a la función para cargar los cards de la categoría "facial" al cargar la página por defecto
// window.addEventListener("load", function() {
//     cargarCards("facial");
// });

