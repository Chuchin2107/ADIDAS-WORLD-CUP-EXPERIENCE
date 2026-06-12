// 1. Lógica del Carrusel
let index = 0;
const track = document.getElementById('track');
const items = document.querySelectorAll('.foto-item');

function mover(direccion) {
    index += direccion;
    
    // Lógica circular (vuelve al inicio o va al final)
    if (index >= items.length) index = 0;
    if (index < 0) index = items.length - 1;
    
    track.style.transform = `translateX(-${index * 100}%)`;

    // Resetear el temporizador al interactuar manualmente
    clearInterval(autoSlide);
    autoSlide = setInterval(() => mover(1), 3000);
}

let autoSlide = setInterval(() => mover(1), 3000);

// 2. Lightbox (Imágenes grandes)
const modalImg = document.getElementById("modal-img");
const imgGrande = document.getElementById("img-grande");

items.forEach(item => {
    item.onclick = () => {
        modalImg.style.display = "flex";
        imgGrande.src = item.querySelector('img').src;
    }
});

function cerrarImg() { 
    modalImg.style.display = "none"; 
}

// 3. Lógica del Modal (Programa)
const modal = document.getElementById("modal-programa");
const btn = document.getElementById("btn-abrir-programa");

if (btn) {
    btn.onclick = () => modal.style.display = "block";
}

function cerrarModal() {
    modal.style.display = "none";
}

// 4. Lógica de las pestañas (Tabs)
function abrirDia(evt, diaName) {
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(diaName).style.display = "block";
}

// Cerrar modales si se hace clic fuera
window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == modalImg) {
        cerrarImg();
    }
}