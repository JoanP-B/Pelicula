let cargarmasBtn1 = document.querySelector("#cargar-mas-1");
let cargarmenosBtn1 = document.querySelector("#cargar-menos-1");

let articuloactual1 = 4;

cargarmasBtn1.onclick =  () => {
    let cajas = [...document.querySelectorAll(
        '.caja-contenedor-1 .caja-1'
    )];
    for(var i = articuloactual1; i < articuloactual1 + 4; i++) {
        cajas[i].style.display =  'inline-block';
    }
    articuloactual1 += 4;
    if(articuloactual1 >= cajas.length) {
        cargarmasBtn1.style.display = 'none'
        cargarmenosBtn1.style.display = 'inline-block'; 
    }
}
cargarmenosBtn1.onclick = () => {
    let cajas = [...document.querySelectorAll(
        '.caja-contenedor-1 .caja-1'
    )];
    for (var i = 4; i < cajas.length; i++) {
        cajas[i].style.display = 'none';
    }
    articuloactual1 = 4;
    cargarmenosBtn1.style.display = 'none';
    cargarmasBtn1.style.display = 'inline-block';
}

let cargarmasBtn2 = document.querySelector("#cargar-mas-2");
let cargarmenosBtn2 = document.querySelector("#cargar-menos-2");

let articuloactual2 = 4;

cargarmasBtn2.onclick =  () => {
    let cajas = [...document.querySelectorAll(
        '.caja-contenedor-2 .caja-2'
    )];
    for(var i = articuloactual2; i < articuloactual2 + 4; i++) {
        cajas[i].style.display =  'inline-block';
    }
    articuloactual2 += 4;
    if(articuloactual2 >= cajas.length) {
        cargarmasBtn2.style.display = 'none'
        cargarmenosBtn2.style.display = 'inline-block'; 
    }
}
cargarmenosBtn2.onclick = () => {
    let cajas = [...document.querySelectorAll(
        '.caja-contenedor-2 .caja-2'
    )];
    for (var i = 4; i < cajas.length; i++) {
        cajas[i].style.display = 'none';
    }
    articuloactual2 = 4;
    cargarmenosBtn2.style.display = 'none';
    cargarmasBtn2.style.display = 'inline-block';
}

let cargarmasBtn3 = document.querySelector("#cargar-mas-3");
let cargarmenosBtn3 = document.querySelector("#cargar-menos-3");

let articuloactual3 = 4;

cargarmasBtn3.onclick =  () => {
    let cajas = [...document.querySelectorAll(
        '.caja-contenedor-3 .caja-3'
    )];
    for(var i = articuloactual3; i < articuloactual3 + 4; i++) {
        cajas[i].style.display =  'inline-block';
    }
    articuloactual3 += 4;
    if(articuloactual3 >= cajas.length) {
        cargarmasBtn3.style.display = 'none'
        cargarmenosBtn3.style.display = 'inline-block'; 
    }
}
cargarmenosBtn3.onclick = () => {
    let cajas = [...document.querySelectorAll(
        '.caja-contenedor-3 .caja-3'
    )];
    for (var i = 4; i < cajas.length; i++) {
        cajas[i].style.display = 'none';
    }
    articuloactual3 = 4;
    cargarmenosBtn3.style.display = 'none';
    cargarmasBtn3.style.display = 'inline-block';
}
