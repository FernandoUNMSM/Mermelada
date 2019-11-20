const preloader = document.getElementById('preloader');
setTimeout(()=>preloader.style.display="none", 3000);

const boton = document.getElementById('button');
const info = document.getElementById('info-container');
const caja = document.getElementById('caja');
const cajaContainer = document.getElementById('caja-container');
boton.addEventListener('click',mapa);

var n=0;

function mapa() {
    n++;
    info.classList.toggle('info-0');
    caja.classList.toggle('info-0');
    boton.classList.toggle('button-on');
    if(n%2 != 0) { 
        boton.innerHTML="Ver informacion de contacto";
    }
    else {
        boton.innerHTML="Ver ubicacion del mapa";
    }
}

var tituloMenu = document.querySelector('#titulo-menu');
var menu = document.querySelector(".menu-container-fluid");
window.onscroll = ()=>{ 
    if(window.pageYOffset > 0) {
        tituloMenu.style.opacity="1";
        menu.style.backgroundColor="var(--plomo)";
        menu.style.borderBottom="4px solid var(--naranja)";
    }
    else {
        tituloMenu.style.opacity="0";
        menu.style.backgroundColor="transparent";
        menu.style.borderBottom="none";

    }
}

