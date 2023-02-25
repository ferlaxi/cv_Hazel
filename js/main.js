let boton_twitter = document.querySelector('.infotw');
let contenedor_twitter = document.querySelector('.info_tw');

let boton_adidas = document.querySelector('.infoadidas');
let contenedor_adidas = document.querySelector('.info_adidas');

boton_twitter.addEventListener('click', ()=>{
    contenedor_twitter.style.display = 'block';
})

boton_adidas.addEventListener('click', ()=>{
    contenedor_adidas.style.display = 'block';
})