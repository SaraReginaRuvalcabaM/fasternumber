//Esta función hace que todo el codigo se ejecute al abrirse la ventana
window.onload=function(){
          // crea números al azar en rango de 1 y 100 para las variables numi, numi2, numi3, numi4, numi5,numi6, numi7, numi8, numi9, numi10
    setTimeout(function(){var numi = Math.floor((Math.random()*(101-1))+1);
var numi2 = Math.floor((Math.random()*(101-1))+1);
var numi3 = Math.floor((Math.random()*(101-1))+1);
var numi4 = Math.floor((Math.random()*(101-1))+1);
var numi5 = Math.floor((Math.random()*(101-1))+1);
var numi6 = Math.floor((Math.random()*(101-1))+1);
var numi7 = Math.floor((Math.random()*(101-1))+1);
var numi8 = Math.floor((Math.random()*(101-1))+1);
var numi9 = Math.floor((Math.random()*(101-1))+1);
var numi10 = Math.floor((Math.random()*(101-1))+1);
//Crea operaciones entre los numeros al azar
var num=numi+"+"+numi2;
var num2=numi3+"-"+numi4;
var num3=numi5+"+"+numi6;
var num4=numi7+"-"+numi8;
var num5=numi9+"+"+numi10;
  // Asigna números al azar a los campos num1, num2, num3, num4, num5
document.getElementById("num1").value = num;
document.getElementById("num2").value = num2;
document.getElementById("num3").value = num3;
document.getElementById("num4").value = num4;
document.getElementById("num5").value = num5;},0.1)
//Después de 100 segundos de iniciar la ventana se sube el elemento con id form que implica el contador
    setTimeout('document.form.submit()', 100001)
}
function evaluar(){
       //Reproduce el audio
    var audio = new Audio('SonidoDeCaballoRelinchando.mp3');
    audio.play();
     //Extrae el número de el campo con el id contador en una variable llamada contador
    var contador=Number(document.getElementById("contador").value);
      //Extrae la operación de el campo con el id num1 en una variable llamada num1
    var num=document.getElementById("num1").value;
    // Se realiza la operación con la función eval y entre paréntesis la variable num de tipo var 
    var numi=eval(num);
    if (numi%2!=0 && contador>0){
           // Resta 1 al contador si la variable numi es un numero impar y si contador es mayor que cero
        var re=contador-1;
        //Asigna a el elemento con id contador el valor de la variable re
        document.getElementById("contador").value=re;
          // Genera nuevos números al azar para crear la operación para num que se mostrarán en el botón
        var numi = Math.floor((Math.random()*(101-1))+1);
        var numi2 = Math.floor((Math.random()*(101-1))+1);
              //crea una suma entre numi y numi2
        var num=numi+"+"+numi2;
        //Asigna a el elemento con id num1 el valor de la variable num que es la operación que aparecerá en el botón
        document.getElementById("num1").value = num;
    }
    else if(numi%2!=0){//Si la variable numi es un número impar
          // Genera nuevos números al azar para crear la operación para num que se mostrarán en el botón
        var numi = Math.floor((Math.random()*(101-1))+1);
        var numi2 = Math.floor((Math.random()*(101-1))+1);
        //crea una suma entre numi y numi2
        var num=numi+"+"+numi2;
        //Asigna a el elemento con id num1 el valor de la variable num que es la operación que aparecerá en el botón
        document.getElementById("num1").value = num;
    }
    else{
            //Si el número es par el contador suma 1
        var re=contador+1;
        //Asigna a el elemento con id contador el valor de la variable re
        document.getElementById("contador").value=re;
          // Genera nuevos números al azar para crear la operación para num que se mostrarán en el botón
        var numi = Math.floor((Math.random()*(101-1))+1);
        var numi2 = Math.floor((Math.random()*(101-1))+1);
              //crea una suma entre numi y numi2
        var num=numi+"+"+numi2;
        //Asigna a el elemento con id num1 el valor de la variable num que es la operación que aparecerá en el botón
        document.getElementById("num1").value = num;
    }


}

function evaluar2(){
       //Reproduce el audio
    var audio = new Audio('SonidoDeCaballoRelinchando.mp3');
    audio.play();
     //Extrae el número de el campo con el id contador en una variable llamada contador
    var contador=Number(document.getElementById("contador").value);
    //Extrae la operación de el campo con el id num2 en una variable llamada num
    var num=document.getElementById("num2").value;
    // Se realiza la operación con la función eval y entre paréntesis la variable num de tipo var 
    var numi=eval(num);
    if (numi%2!=0 && contador>0){
           // Resta 1 al contador si la variable numi es un numero impar y si contador es mayor que cero
        var re=contador-1;
        //Asigna a el elemento con id contador el valor de la variable re
        document.getElementById("contador").value=re;
          // Genera nuevos números al azar para crear la operación para num que se mostrarán en el botón
        var numi = Math.floor((Math.random()*(101-1))+1);
        var numi2 = Math.floor((Math.random()*(101-1))+1);
              //crea una resta entre numi y numi2
        var num=numi+"-"+numi2;
        //Asigna a el elemento con id num2 el valor de la variable num que es la operación que aparecerá en el botón
        document.getElementById("num2").value = num;
    }
    else if(numi%2!=0){//Si la variable numi es un número impar
          // Genera nuevos números al azar para crear la operación para num que se mostrarán en el botón
        var numi = Math.floor((Math.random()*(101-1))+1);
        var numi2 = Math.floor((Math.random()*(101-1))+1);
              //crea una resta entre numi y numi2
        var num=numi+"-"+numi2;
        //Asigna a el elemento con id num2 el valor de la variable num que es la operación que aparecerá en el botón
        document.getElementById("num2").value = num;
    }
    else{
            //Si el número es par el contador suma 1
        var re=contador+1;
        //Asigna a el elemento con id contador el valor de la variable re
        document.getElementById("contador").value=re;
         // Genera nuevos números al azar para crear la operación para num que se mostrarán en el botón
        var numi = Math.floor((Math.random()*(101-1))+1);
        var numi2 = Math.floor((Math.random()*(101-1))+1);
              //crea una resta entre numi y numi2
        var num=numi+"-"+numi2;
        //Asigna a el elemento con id num2 el valor de la variable num que es la operación que aparecerá en el botón
        document.getElementById("num2").value = num;
    }
}

function evaluar3(){
       //Reproduce el audio
    var audio = new Audio('SonidoDeCaballoRelinchando.mp3');
    audio.play();
     //Extrae el número de el campo con el id contador en una variable llamada contador
    var contador=Number(document.getElementById("contador").value);
    //Extrae la operación de el campo con el id num3 en una variable llamada num
    var num=document.getElementById("num3").value;
    // Se realiza la operación con la función eval y entre paréntesis la variable num de tipo var 
    var numi=eval(num);
    if (numi%2!=0 && contador>0){
          // Resta 1 al contador si la variable numi es un numero impar y si contador es mayor que cero
        var re=contador-1;
        //Asigna a el elemento con id contador el valor de la variable re
        document.getElementById("contador").value=re;
          // Genera nuevos números al azar para num1 que se mostraran en el boton
        var numi = Math.floor((Math.random()*(101-1))+1);
        var numi2 = Math.floor((Math.random()*(101-1))+1);
              //crea una suma entre numi y numi2
        var num=numi+"+"+numi2;
        //Asigna a el elemento con id num3 el valor de la variable num que es la operación que aparecerá en el botón
        document.getElementById("num3").value = num;
    }
    else if(numi%2!=0){//Si la variable numi es impar
          // Genera nuevos números al azar para crear la operación para num que se mostrarán en el botón
        var numi = Math.floor((Math.random()*(101-1))+1);
        var numi2 = Math.floor((Math.random()*(101-1))+1);
              //crea una suma entre numi y numi2
        var num=numi+"+"+numi2;
        //Asigna a el elemento con id num3 el valor de la variable num que es la operación que aparecerá en el botón
        document.getElementById("num3").value = num;
    }
    else{
            //Si el número es par el contador suma 1
        var re=contador+1;
        //Asigna a el elemento con id contador el valor de la variable re
        document.getElementById("contador").value=re;
          // Genera nuevos números al azar para crear la operación para num que se mostrarán en el botón
        var numi = Math.floor((Math.random()*(101-1))+1);
        var numi2 = Math.floor((Math.random()*(101-1))+1);
              //crea una suma entre numi y numi2
        var num=numi+"+"+numi2;
        //Asigna a el elemento con id num3 el valor de la variable num que es la operación que aparecerá en el botón
        document.getElementById("num3").value = num;
    }
}
function evaluar4(){
       //Reproduce el audio
    var audio = new Audio('SonidoDeCaballoRelinchando.mp3');
    audio.play();
     //Extrae el número de el campo con el id contador en una variable llamada contador
    var contador=Number(document.getElementById("contador").value);
    //Extrae la operación de el campo con el id num4 en una variable llamada num
    var num=document.getElementById("num4").value;
    // Se realiza la operación con la función eval y entre paréntesis la variable num de tipo var 
    var numi=eval(num);
    if (numi%2!=0 && contador>0){
           // Resta 1 al contador si la variable numi es un numero impar y si contador es mayor que cero
        var re=contador-1;
        //Asigna a el elemento con id contador el valor de la variable re
        document.getElementById("contador").value=re;
          // Genera nuevos números al azar para crear la operación para num que se mostrarán en el botón
        var numi = Math.floor((Math.random()*(101-1))+1);
        var numi2 = Math.floor((Math.random()*(101-1))+1);
              //crea una resta entre numi y numi2
        var num=numi+"-"+numi2;
        //Asigna a el elemento con id num4 el valor de la variable num que es la operación que aparecerá en el botón
        document.getElementById("num4").value = num;
    }
    else if(numi%2!=0){//Si la variable numi es un número impar
          // Genera nuevos números al azar para crear la operación para num que se mostrarán en el botón
        var numi = Math.floor((Math.random()*(101-1))+1);
        var numi2 = Math.floor((Math.random()*(101-1))+1);
              //crea una resta entre numi y numi2
        var num=numi+"-"+numi2;
        //Asigna a el elemento con id num4 el valor de la variable num que es la operación que aparecerá en el botón
        document.getElementById("num4").value = num;
    }
    else{
            //Si el número es par el contador suma 1
        var re=contador+1;
        //Asigna a el elemento con id contador el valor de la variable re
        document.getElementById("contador").value=re;
          // Genera nuevos números al azar para crear la operación para num que se mostrarán en el botón
        var numi = Math.floor((Math.random()*(101-1))+1);
        var numi2 = Math.floor((Math.random()*(101-1))+1);
              //crea una resta entre numi y numi2
        var num=numi+"-"+numi2;
        //Asigna a el elemento con id num4 el valor de la variable num que es la operación que aparecerá en el botón
        document.getElementById("num4").value = num;
    }
}
function evaluar5(){
       //Reproduce el audio
    var audio = new Audio('SonidoDeCaballoRelinchando.mp3');
    audio.play();
     //Extrae el número de el campo con el id contador en una variable llamada contador
    var contador=Number(document.getElementById("contador").value);
    //Extrae la operación de el campo con el id num5 en una variable llamada num
    var num=document.getElementById("num5").value;
    // Se realiza la operación con la función eval y entre paréntesis la variable num de tipo var 
    var numi=eval(num);
    if (numi%2!=0 && contador>0){
           // Resta 1 al contador si la variable numi es un numero impar y si contador es mayor que cero
        var re=contador-1;
        //Asigna a el elemento con id contador el valor de la variable re
        document.getElementById("contador").value=re;
          // Genera nuevos números al azar para crear la operación para num que se mostrarán en el botón
        var numi = Math.floor((Math.random()*(101-1))+1);
        var numi2 = Math.floor((Math.random()*(101-1))+1); 
              //crea una suma entre numi y numi2
        var num=numi+"+"+numi2;
        //Asigna a el elemento con id num5 el valor de la variable num que es la operación que aparecerá en el botón
        document.getElementById("num5").value = num;
    }
    else if(numi%2!=0){//Si la variable numi es un número impar
         // Genera nuevos números al azar para crear la operación para num que se mostrarán en el botón
        var numi = Math.floor((Math.random()*(101-1))+1);
        var numi2 = Math.floor((Math.random()*(101-1))+1);
              //crea una suma entre numi y numi2
        var num=numi+"+"+numi2;
        //Asigna a el elemento con id num5 el valor de la variable num que es la operación que aparecerá en el botón
        document.getElementById("num5").value = num;
    }
    else{
            //Si el número es par el contador suma 1
        var re=contador+1;
        //Asigna a el elemento con id contador el valor de la variable re
        document.getElementById("contador").value=re;
          // Genera nuevos números al azar para crear la operación para num que se mostrarán en el botón
        var numi = Math.floor((Math.random()*(101-1))+1);
        var numi2 = Math.floor((Math.random()*(101-1))+1);
              //crea una suma entre numi y numi2
        var num=numi+"+"+numi2;
        //Asigna a el elemento con id num5 el valor de la variable num que es la operación que aparecerá en el botón
        document.getElementById("num5").value = num;
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

//Repite cada 4 segundos crear números al azar en rango de 1 y 100 para las variables de tipo var numi, numi2, numi3, numi4, numi5,numi6, numi7, numi8, numi9, numi10
setInterval(
    function(){var numi = Math.floor((Math.random()*(101-1))+1);
        var numi2 = Math.floor((Math.random()*(101-1))+1);
        var numi3 = Math.floor((Math.random()*(101-1))+1);
        var numi4 = Math.floor((Math.random()*(101-1))+1);
        var numi5 = Math.floor((Math.random()*(101-1))+1);
        var numi6 = Math.floor((Math.random()*(101-1))+1);
        var numi7 = Math.floor((Math.random()*(101-1))+1);
        var numi8 = Math.floor((Math.random()*(101-1))+1);
        var numi9 = Math.floor((Math.random()*(101-1))+1);
        var numi10 = Math.floor((Math.random()*(101-1))+1);
        //Crea operaciones entre los números al azar para variables de tipo var num, num2, num3, num4, num5
        var num=numi+"+"+numi2;
        var num2=numi3+"-"+numi4;
        var num3=numi5+"+"+numi6;
        var num4=numi7+"-"+numi8;
        var num5=numi9+"+"+numi10;
        // Asigna los valores de las variables num, num2, num3, num4, num5 a elementos con id num1, num2, num3, num4, num5
        document.getElementById("num1").value = num;
        document.getElementById("num2").value = num2;
        document.getElementById("num3").value = num3;
        document.getElementById("num4").value = num4;
        document.getElementById("num5").value = num5;}
,3000)
//Este codigo hace que al iniciar el juego de los numeros pares del nivel 2 se reproduzca la cancion de fondo en bucle 
var audio = new Audio('LaCarreraDeCaballos.mp3');
audio.loop = true;
audio.play();