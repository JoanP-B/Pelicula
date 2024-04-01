var imagenesFondo = ["blue-beetle.jpg" , "mision-imposible.png", "scream.jpg", "aquaman.jpg"];

var colores = ["rgb(66, 89, 219)", "rgb(209, 109, 42)", "rgb(233, 229, 226)", "rgb(92, 245, 237)"];

var navula = ["rgb(255,255,255)", "rgb(0, 0, 0)", "rgb(255, 255, 255)", "rgb(0, 0, 0)"];

var logos = ["Blue_Beetle_logo.png", "mision-imposible.png", "scream-6.png", "logo-acuaman.png"];

var video = ["blue-beetle.mp4","mision-imposible.mp4","scream-6.mp4","aquaman-2.mp4"];

var cabeza = document.querySelector('body');

var root = document.documentElement;

var contador = 0;

function cambiarFondo() {

    //var indiceAleatorio = Math.floor(Math.random() * imagenesFondo.length);

    var rutaImagen = "imagenes/" + imagenesFondo[contador];

    var nuevaImagen = "imagenes/logos/" + logos[contador];

    var nuevoVideo = "imagenes/logos/trailers/" + video[contador];

    var nuevoColor = colores[contador];

    var nuevonavula = navula[contador];

    var enlaces = document.querySelectorAll('.navbar ul a');

    enlaces.forEach(function(enlace) {

        enlace.style.color = nuevonavula;
    });


    cabeza.style.backgroundImage = "url('" + rutaImagen + "')";

    var imagenCabeza = document.querySelector('.cabeza-1 img');

    var videoCabeza = document.querySelector('.cabeza-1 a');

    imagenCabeza.src = nuevaImagen;

    videoCabeza.href = nuevoVideo;

    root.style.setProperty('--principal-color', nuevoColor);

    contador = (contador + 1) % imagenesFondo.length;
    
    /*contador = contador+1

    if (contador == imagenesFondo.length) {
        contador = 0
    }*/
}

setInterval(cambiarFondo, 4000);
