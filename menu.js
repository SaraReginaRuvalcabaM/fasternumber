//Define constantes ham enlaces y barras
const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.opciones');
const barras = document.querySelectorAll('.ham span');
//Al dar click se ralizan las acciones 
ham.addEventListener('click', () => {
enlaces.classList.toggle('activado');
//Se realiza la animación
barras.forEach(child => {child.classList.toggle('animado')});
ham.classList.toggle('girar');
})
