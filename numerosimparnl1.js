//Esta función hace que todo el codigo se ejecute al abrirse la ventana
window.onload=function(){
    // crea números al azar en rango de 1 y 1000 para las variables numi, numi2, numi3, numi4, numi5
    setTimeout(function(){var numi = Math.floor((Math.random()*(1001-1))+1);
var numi2 = Math.floor((Math.random()*(1001-1))+1);
var numi3 = Math.floor((Math.random()*(1001-1))+1);
var numi4 = Math.floor((Math.random()*(1001-1))+1);
var numi5 = Math.floor((Math.random()*(1001-1))+1);
// Asigna los valores de las variables numi, numi2, numi3, numi4, numi5 a los campos num1, num2, num3, num4, num5
document.getElementById("num1").value = numi;
document.getElementById("num2").value = numi2;
document.getElementById("num3").value = numi3;
document.getElementById("num4").value = numi4;
document.getElementById("num5").value = numi5;},0.1)
//Después de 100 segundos de iniciar la ventana se sube el elemento con id form que implica el contador
    setTimeout('document.form.submit()', 100001) 
}
function evaluar(){
     //Reproduce el audio
    var audio = new Audio('Sonido_De_Globo_Explota.mp3');
    audio.play();
    //Extrae el numero de el campo con el id contador en una variable llamada contador
    var contador=Number(document.getElementById("contador").value);
      //Extrae el número de el campo con el id num1 en una variable llamada num
    var num=document.getElementById("num1").value;
    if (num%2==0 && contador>0){
         // Resta 1 al contador si num es un número par y si contador es mayor que cero
        var re=contador-1;
        //Asigna a el elemento con id contador el valor de la variable re
        document.getElementById("contador").value=re;
        //Crea un número al azar del 1 al 1000
        var numi = Math.floor((Math.random()*(1001-1))+1);
        // Asignamos el número aleatorio impar al elemento con el id "num1"
        document.getElementById("num1").value = numi;
    }
    else if(num%2==0){//Si num es un número par
        //Crea un número al azar del 1 al 1000
        var numi = Math.floor((Math.random()*(1001-1))+1);
        // Asignamos el número aleatorio impar al elemento con el id "num1"
        document.getElementById("num1").value = numi;
    }
    else{
        //Si el número es impar el contador suma 1
        var re=contador+1;
        //Asigna a el elemento con id contador el valor de la variable re
        document.getElementById("contador").value=re;
         //Crea un número al azar del 1 al 1000
        var numi = Math.floor((Math.random()*(1001-1))+1);
         // Asignamos el número aleatorio impar al elemento con el id "num1"
        document.getElementById("num1").value = numi;
    }


}

function evaluar2(){
    //Reproduce el audio
   var audio = new Audio('Sonido_De_Globo_Explota.mp3');
   audio.play();
   //Extrae el número de el campo con el id contador en una variable llamada contador
   var contador=Number(document.getElementById("contador").value);
     //Extrae el número de el campo con el id num2 en una variable llamada num
   var num=document.getElementById("num2").value;
   if (num%2==0 && contador>0){
        // Resta 1 al contador si num es un número par y si contador es mayor que cero
       var re=contador-1;
       //Asigna a el elemento con id contador el valor de la variable re
       document.getElementById("contador").value=re;
       //Crea un número al azar del 1 al 1000
       var numi = Math.floor((Math.random()*(1001-1))+1);
       // Asignamos el número aleatorio impar al elemento con el id "num2"
       document.getElementById("num2").value = numi;
   }
   else if(num%2==0){//Si num es un número par
       //Crea un número al azar del 1 al 1000
       var numi = Math.floor((Math.random()*(1001-1))+1);
       // Asignamos el número aleatorio impar al elemento con el id "num2"
       document.getElementById("num2").value = numi;
   }
   else{
       //Si el número es impar el contador suma 1
       var re=contador+1;
       //Asigna a el elemento con id contador el valor de la variable re
       document.getElementById("contador").value=re;
        //Crea un número al azar del 1 al 1000
       var numi = Math.floor((Math.random()*(1001-1))+1);
        // Asignamos el número aleatorio impar al elemento con el id "num2"
       document.getElementById("num2").value = numi;
   }


}

function evaluar3(){
    //Reproduce el audio
   var audio = new Audio('Sonido_De_Globo_Explota.mp3');
   audio.play();
   //Extrae el número de el campo con el id contador en una variable llamada contador
   var contador=Number(document.getElementById("contador").value);
     //Extrae el número de el campo con el id num3 en una variable llamada num
   var num=document.getElementById("num3").value;
   if (num%2==0 && contador>0){
        // Resta 1 al contador si num es un número par y si contador es mayor que cero
       var re=contador-1;
       //Asigna a el elemento con id contador el valor de la variable re
       document.getElementById("contador").value=re;
       //Crea un número al azar del 1 al 1000
       var numi = Math.floor((Math.random()*(1001-1))+1);
       // Asignamos el número aleatorio impar al elemento con el id "num3"
       document.getElementById("num3").value = numi;
   }
   else if(num%2==0){//Si num es un número par
       //Crea un número al azar del 1 al 1000
       var numi = Math.floor((Math.random()*(1001-1))+1);
       // Asignamos el número aleatorio impar al elemento con el id "num3"
       document.getElementById("num3").value = numi;
   }
   else{
       //Si el número es impar el contador suma 1
       var re=contador+1;
       //Asigna a el elemento con id contador el valor de la variable re
       document.getElementById("contador").value=re;
        //Crea un número al azar del 1 al 1000
       var numi = Math.floor((Math.random()*(1001-1))+1);
        // Asignamos el número aleatorio impar al elemento con el id "num3"
       document.getElementById("num3").value = numi;
   }


}

function evaluar4(){
    //Reproduce el audio
   var audio = new Audio('Sonido_De_Globo_Explota.mp3');
   audio.play();
   //Extrae el número de el campo con el id contador en una variable llamada contador
   var contador=Number(document.getElementById("contador").value);
     //Extrae el número de el campo con el id num4 en una variable llamada num
   var num=document.getElementById("num4").value;
   if (num%2==0 && contador>0){
        // Resta 1 al contador si num es un número par y si contador es mayor que cero
       var re=contador-1;
       //Asigna a el elemento con id contador el valor de la variable re
       document.getElementById("contador").value=re;
       //Crea un número al azar del 1 al 1000
       var numi = Math.floor((Math.random()*(1001-1))+1);
       // Asignamos el número aleatorio impar al elemento con el id "num4"
       document.getElementById("num4").value = numi;
   }
   else if(num%2==0){//Si num es un número par
       //Crea un número al azar del 1 al 1000
       var numi = Math.floor((Math.random()*(1001-1))+1);
       // Asignamos el número aleatorio impar al elemento con el id "num4"
       document.getElementById("num4").value = numi;
   }
   else{
       //Si el número es impar el contador suma 1
       var re=contador+1;
       //Asigna a el elemento con id contador el valor de la variable re
       document.getElementById("contador").value=re;
        //Crea un número al azar del 1 al 1000
       var numi = Math.floor((Math.random()*(1001-1))+1);
        // Asignamos el número aleatorio impar al elemento con el id "num4"
       document.getElementById("num4").value = numi;
   }


}

function evaluar5(){
    //Reproduce el audio
   var audio = new Audio('Sonido_De_Globo_Explota.mp3');
   audio.play();
   //Extrae el número de el campo con el id contador en una variable llamada contador
   var contador=Number(document.getElementById("contador").value);
     //Extrae el número de el campo con el id num5 en una variable llamada num
   var num=document.getElementById("num5").value;
   if (num%2==0 && contador>0){
        // Resta 1 al contador si num es un número par y si contador es mayor que cero
       var re=contador-1;
       //Asigna a el elemento con id contador el valor de la variable re
       document.getElementById("contador").value=re;
       //Crea un número al azar del 1 al 1000
       var numi = Math.floor((Math.random()*(1001-1))+1);
       // Asignamos el número aleatorio impar al elemento con el id "num5"
       document.getElementById("num5").value = numi;
   }
   else if(num%2==0){
       //Crea un número al azar del 1 al 1000
       var numi = Math.floor((Math.random()*(1001-1))+1);
       // Asignamos el número aleatorio impar al elemento con el id "num5"
       document.getElementById("num5").value = numi;
   }
   else{
       //Si el número es impar el contador suma 1
       var re=contador+1;
       //Asigna a el elemento con id contador el valor de la variable re
       document.getElementById("contador").value=re;
        //Crea un número al azar del 1 al 1000
       var numi = Math.floor((Math.random()*(1001-1))+1);
        // Asignamos el número aleatorio impar al elemento con el id "num5"
       document.getElementById("num5").value = numi;
   }


}



    
// Habilitar el campo contador después de 100 segundos
   setTimeout(function(){
    document.getElementById('contador').disabled=false;
   }
    
   , 100000);
//Repite cada un segundo la función que agarra en una variable de tipo var llamada tiempo el número que hay en el elemento con el id t
setInterval( function(){
    var tiempo=Number(document.getElementById("t").value);
    //Crea la variable tipo var llamada total y su valor es igual a que resta 1 a la variable tiempo
    var total=tiempo-1;
    //Asigna a el elemento con id t el valor de la variable total
    document.getElementById("t").value = total;
},1000)

// Cada 3 segundos crea números al azar en rango de 1 y 1000 para las variables numi, numi2, numi3, numi4, numi5
setInterval(
    function(){
var numi = Math.floor((Math.random()*(1001-1))+1);
var numi2 = Math.floor((Math.random()*(1001-1))+1);
var numi3 = Math.floor((Math.random()*(1001-1))+1);
var numi4 = Math.floor((Math.random()*(1001-1))+1);
var numi5 = Math.floor((Math.random()*(1001-1))+1);
// Asigna los valores de las variables numi, numi2, numi3, numi4, numi5 a los campos num1, num2, num3, num4, num5
document.getElementById("num1").value = numi;
document.getElementById("num2").value = numi2;
document.getElementById("num3").value = numi3;
document.getElementById("num4").value = numi4;
document.getElementById("num5").value = numi5;}
,3000)
//Este codigo hace que al iniciar el juego de los numeros impares del nivel 1
var audio = new Audio('MusicaUp.mp3');
// se reproduce la cancion de fondo en bucle 
audio.loop = true;
audio.play();