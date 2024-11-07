//Este codigo hace que al casi iniciar la pagina del Login se reproduzca la cancion de fondo
window.onload=function(){setTimeout(function(){
var audio = new Audio('Bienvenida.mp3');
// Hce que se reproduzca en bucle con un breve tiempo de inicio
audio.loop = true;
audio.play();},0.1)}