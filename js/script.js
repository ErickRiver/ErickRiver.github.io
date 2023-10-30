const adivinarNumero = document.getElementById("adivinarNumero");
const conversorMonetario = document.getElementById("conversorMonetario");
const pokedex = document.getElementById("pokedex");
const calculadora = document.getElementById("calculadora");
const validarCR = document.getElementById("validarCR");
const reloj = document.getElementById("reloj");

adivinarNumero.addEventListener("click", function () {
    window.open(`./paginas/adivinarNumero/`, "blank_");
});

conversorMonetario.addEventListener("click", function () {
    window.open(`./paginas/conversorMonetario/`, "blank_");
});

pokedex.addEventListener("click", function () {
    window.open(`./paginas/pokedex/`, "blank_");
});

calculadora.addEventListener("click", function () {
    window.open(`./paginas/calculadora/`, "blank_");
});

validarCR.addEventListener("click", function () {
    window.open(`./paginas/validarCR/`, "blank_");
});

reloj.addEventListener("click", function () {
    window.open(`./paginas/reloj/`, "blank_");
});


var verCVButton = document.getElementById("bntVerCV");
verCVButton.addEventListener("click", function () {
    window.open("./img/CV.pdf", "_black");
});



function toggleNavbar() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}


function closeNavbarOutsideClick(event) {
    var navbar = document.querySelector('.navbar');
    var icon = document.querySelector('#navbar-icon');

    if (!navbar.contains(event.target) && event.target !== icon) {
        navbar.classList.remove('active');
    }
}

document.addEventListener('click', closeNavbarOutsideClick);

var rutaArchivo = './img/CV.pdf';
var enlaceDescarga = document.querySelector('.btn.btn2');

enlaceDescarga.addEventListener('click', function () {
    var link = document.createElement('a');
    link.href = rutaArchivo;

    link.download = rutaArchivo.substring(rutaArchivo.lastIndexOf('/') + 1);
    link.click();
    document.body.removeChild(link);
});