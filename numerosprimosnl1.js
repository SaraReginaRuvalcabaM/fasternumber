//Esta función hace que todo el codigo se ejecute al abrirse la ventana
window.onload=function(){
     // crea números al azar en rango de 1 y 200 para las variables numi, numi2, numi3, numi4, numi5
    setTimeout(
        function(){
    var numi = Math.floor((Math.random()*(201-1))+1);
    var numi2 =Math.floor((Math.random()*(201-1))+1);
    var numi3 = Math.floor((Math.random()*(201-1))+1);
    var numi4 = Math.floor((Math.random()*(201-1))+1);
    var numi5 = Math.floor((Math.random()*(201-1))+1);
// Asigna los valores de las variables numi, numi2, numi3, numi4, numi5 a los campos num1, num2, num3, num4, num5
    document.getElementById("num1").value = numi;
    document.getElementById("num2").value = numi2;
    document.getElementById("num3").value = numi3;
    document.getElementById("num4").value = numi4;
    document.getElementById("num5").value = numi5;}
    ,1)
    //Después de 200 segundos de iniciar la ventana se sube el elemento con id form que implica el contador
    setTimeout('document.form.submit()',200009)
}
function evaluar(){
       //Reproduce el audio
    var audio = new Audio('SonidoAguaAAA.mp3');
audio.play();
//Extrae el número de el elmento con el id contador en una variable var llamada contador
    var contador=Number(document.getElementById("contador").value);
     //Extrae la operación de el campo con el id num1 en una variable llamada num
    var num=document.getElementById("num1").value;
//Se crea la variable de tipo var llamada contador1 el cual se utiliza para contar los divisores del resultado de la operacion en la variable num
    var contador1 = 0;
    // Se crea un bucle for el cual se repetira empezando con i de valor 1 hasta que sea un número menor antes del valor de num
    for (var i=1; i<num; i ++){
        //Si el valor de la variable num entre el valor que tenga la variable i en esta vuelta del bucle for su residuo es 0 suma 1 a la variable contador1
        if (num % i == 0){
          contador1 +=1;  }
      }
      if (contador1 == 1){//Si el contador1 es igual a 1 contador suma 1 dando el valor a la varible re
          var re=contador+1;
          //Asigna a el elemento con id contador el valor de la variable re
          document.getElementById("contador").value=re;
              // Genera un nuevo número aleatorio para num1 que se mostrara en el botón
          var numi = Math.floor((Math.random()*(201-1))+1);
          //Asigna a el elemento con id num1 el valor de la variable numi
          document.getElementById("num1").value = numi;
      }
      else if(contador1 != 1 && contador<=0){//Si el contador1 es diferente a 1 y contador es menor o igual a 0
            // Genera un nuevo número aleatorio para num1 que se mostrara en el botón
        var numi = Math.floor((Math.random()*(201-1))+1);
        //Asigna a el elemento con id num1 el valor de la variable numi
        document.getElementById("num1").value = numi;
      }
      else{
        //Si el número no es primo el contador resta 1 dando el valor a re
          var re=contador-1;
          //Asigna a el elemento con id contador el valor de la variable re
          document.getElementById("contador").value=re;
              // Genera un nuevo número aleatorio para num1 que se mostrara en el botón
          var numi = Math.floor((Math.random()*(201-1))+1);
          //Asigna a el elemento con id num1 el valor de la variable numi
          document.getElementById("num1").value = numi;
      }
}
function evaluar2(){
       //Reproduce el audio
    var audio = new Audio('SonidoAguaAAA.mp3');
audio.play();
//Extrae el número de el elmento con el id contador en una variable var llamada contador
    var contador=Number(document.getElementById("contador").value);
     //Extrae la operación de el campo con el id num2 en una variable llamada num
    var num=document.getElementById("num2").value;
    //Se crea la variable de tipo var llamada contador1 el cual se utiliza para contar los divisores del resultado de la operacion en la variable num
    var contador1 = 0;
    // Se crea un bucle for el cual se repetira empezando con i de valor 1 hasta que sea un número menor antes del valor de num
    for (var i=1; i<num; i ++){
        //Si el valor de la variable num entre el valor que tenga la variable i en esta vuelta del bucle for su residuo es 0 suma 1 a la variable contador1
        if (num % i == 0){
          contador1 +=1;  }
      }
      if (contador1 == 1){//Si el contador1 es igual a 1 contador suma 1 dando el valor a la varible re
          var re=contador+1;
          //Asigna a el elemento con id contador el valor de la variable re
          document.getElementById("contador").value=re;
              // Genera un nuevo número aleatorio para num2 que se mostrara en el botón
          var numi = Math.floor((Math.random()*(201-1))+1);
          //Asigna a el elemento con id num2 el valor de la variable numi
          document.getElementById("num2").value = numi;
      }
      else if(contador1 != 1 && contador<=0){//Si el contador1 es diferente a 1 y contador es menor o igual a 0
            // Genera un nuevo número aleatorio para num2 que se mostrara en el botón
        var numi = Math.floor((Math.random()*(201-1))+1);
        //Asigna a el elemento con id num2 el valor de la variable numi
        document.getElementById("num2").value = numi;
      }
      else{
            //Si el número no es primo el contador resta 1 dando el valor a re
          var re=contador-1;
          //Asigna a el elemento con id contador el valor de la variable re
          document.getElementById("contador").value=re;
              // Genera un nuevo número aleatorio para num2 que se mostrara en el botón
          var numi = Math.floor((Math.random()*(201-1))+1);
          //Asigna a el elemento con id num2 el valor de la variable numi
          document.getElementById("num2").value = numi;
      }
}
function evaluar3(){
       //Reproduce el audio
    var audio = new Audio('SonidoAguaAAA.mp3');
audio.play();
//Extrae el número de el elmento con el id contador en una variable var llamada contador
    var contador=Number(document.getElementById("contador").value);
     //Extrae la operación de el campo con el id num3 en una variable llamada num
    var num=document.getElementById("num3").value;
    //Se crea la variable de tipo var llamada contador1 el cual se utiliza para contar los divisores del resultado de la operacion en la variable num
    var contador1 = 0;
    // Se crea un bucle for el cual se repetira empezando con i de valor 1 hasta que sea un número menor antes del valor de num
    for (var i=1; i<num; i ++){
        //Si el valor de la variable num entre el valor que tenga la variable i en esta vuelta del bucle for su residuo es 0 suma 1 a la variable contador1
        if (num % i == 0){
          contador1 +=1;  }
      }
      if (contador1 == 1){//Si el contador1 es igual a 1 contador suma 1 dando el valor a la varible re
          var re=contador+1;
          //Asigna a el elemento con id contador el valor de la variable re
          document.getElementById("contador").value=re;
              // Genera un nuevo número aleatorio para num3 que se mostrara en el botón
          var numi = Math.floor((Math.random()*(201-1))+1);
          //Asigna a el elemento con id num3 el valor de la variable numi
          document.getElementById("num3").value = numi;
      }
      else if(contador1 != 1 && contador<=0){//Si el contador1 es diferente a 1 y contador es menor o igual a 0
            // Genera un nuevo número aleatorio para num3 que se mostrara en el botón
        var numi = Math.floor((Math.random()*(201-1))+1);
        //Asigna a el elemento con id num3 el valor de la variable numi
        document.getElementById("num3").value = numi;
      }
      else{
          //Si el número no es primo el contador resta 1 dando el valor a re
          var re=contador-1;
          //Asigna a el elemento con id contador el valor de la variable re
          document.getElementById("contador").value=re;
              // Genera un nuevo número aleatorio para num3 que se mostrara en el botón
          var numi = Math.floor((Math.random()*(201-1))+1);
          //Asigna a el elemento con id num3 el valor de la variable numi
          document.getElementById("num3").value = numi;
      }
}
function evaluar4(){
       //Reproduce el audio
    var audio = new Audio('SonidoAguaAAA.mp3');
audio.play();
//Extrae el número de el elmento con el id contador en una variable var llamada contador
    var contador=Number(document.getElementById("contador").value);
     //Extrae la operación de el campo con el id num4 en una variable llamada num
    var num=document.getElementById("num4").value;
//Se crea la variable de tipo var llamada contador1 el cual se utiliza para contar los divisores del resultado de la operacion en la variable num
    var contador1 = 0;
    // Se crea un bucle for el cual se repetira empezando con i de valor 1 hasta que sea un número menor antes del valor de num
    for (var i=1; i<num; i ++){
        //Si el valor de la variable num entre el valor que tenga la variable i en esta vuelta del bucle for su residuo es 0 suma 1 a la variable contador1
        if (num % i == 0){
          contador1 +=1;  }
      }
      if (contador1 == 1){//Si el contador1 es igual a 1 contador suma 1 dando el valor a la varible re
          var re=contador+1;
          //Asigna a el elemento con id contador el valor de la variable re
          document.getElementById("contador").value=re;
              // Genera un nuevo número aleatorio para num4 que se mostrara en el botón
          var numi = Math.floor((Math.random()*(201-1))+1);
          //Asigna a el elemento con id num4 el valor de la variable numi
          document.getElementById("num4").value = numi;
      }
      else if(contador1 != 1 && contador<=0){//Si el contador1 es diferente a 1 y contador es menor o igual a 0
            // Genera un nuevo número aleatorio para num4 que se mostrara en el botón
        var numi = Math.floor((Math.random()*(201-1))+1);
        //Asigna a el elemento con id num4 el valor de la variable numi
        document.getElementById("num4").value = numi;
      }
      else{
            //Si el número no es primo el contador resta 1 dando el valor a re
          var re=contador-1;
          //Asigna a el elemento con id contador el valor de la variable re
          document.getElementById("contador").value=re;
              // Genera un nuevo número aleatorio para num4 que se mostrara en el botón
          var numi = Math.floor((Math.random()*(201-1))+1);
          //Asigna a el elemento con id num4 el valor de la variable numi
          document.getElementById("num4").value = numi;
      }
}
function evaluar5(){
       //Reproduce el audio
    var audio = new Audio('SonidoAguaAAA.mp3');
audio.play();
//Extrae el número de el elmento con el id contador en una variable var llamada contador
    var contador=Number(document.getElementById("contador").value);
     //Extrae la operación de el campo con el id num5 en una variable llamada num
    var num=document.getElementById("num5").value;
    //Se crea la variable de tipo var llamada contador1 el cual se utiliza para contar los divisores del resultado de la operación en la variable num
    var contador1 = 0;
    // Se crea un bucle for el cual se repetira empezando con i de valor 1 hasta que sea un número menor antes del valor de num
    for (var i=1; i<num; i ++){
        //Si el valor de la variable num entre el valor que tenga la variable i en esta vuelta del bucle for su residuo es 0 suma 1 a la variable contador1
        if (num % i == 0){
          contador1 +=1;  }
      }
      if (contador1 == 1){//Si el contador1 es igual a 1 contador suma 1 dando el valor a la varible re
          var re=contador+1;
          //Asigna a el elemento con id contador el valor de la variable re
          document.getElementById("contador").value=re;
              // Genera un nuevo número aleatorio para num5 que se mostrara en el botón
          var numi = Math.floor((Math.random()*(201-1))+1);
          //Asigna a el elemento con id num5 el valor de la variable numi
          document.getElementById("num5").value = numi;
      }
      else if(contador1 != 1 && contador<=0){//Si el contador1 es diferente a 1 y contador es menor o igual a 0
            // Genera un nuevo número aleatorio para num5 que se mostrara en el botón
        var numi = Math.floor((Math.random()*(201-1))+1);
        //Asigna a el elemento con id num5 el valor de la variable numi
        document.getElementById("num5").value = numi;
      }
      else{
          //Si el número no es primo el contador resta 1 dando el valor a re
          var re=contador-1;
          //Asigna a el elemento con id contador el valor de la variable re
          document.getElementById("contador").value=re;
              // Genera un nuevo número aleatorio para num5 que se mostrara en el botón
          var numi = Math.floor((Math.random()*(201-1))+1);
          //Asigna a el elemento con id num5 el valor de la variable numi
          document.getElementById("num5").value = numi;
      }
}


    
   
// Habilitar el campo contador después de 200 segundos
   setTimeout(function(){
    document.getElementById('contador').disabled=false;
   }
    
   , 190000);
//Repite cada un segundo la función que agarra en una variable de tipo var llamada tiempo el número que hay en el elemento con el id t
setInterval( function(){
    var tiempo=Number(document.getElementById("t").value);
    //Crea la variable tipo var llamada total y su valor es igual a que resta 1 a la variable tiempo
    var total=tiempo-1;
    //Asigna a el elemento con id t el valor de la variable total
    document.getElementById("t").value = total;
},1000)

// Cada 3 segundos crea números al azar en rango de 1 y 200 para las variables numi, numi2, numi3, numi4, numi5
setInterval(
    function(){
var numi = Math.floor((Math.random()*(201-1))+1);
var numi2 =Math.floor((Math.random()*(201-1))+1);
var numi3 = Math.floor((Math.random()*(201-1))+1);
var numi4 = Math.floor((Math.random()*(201-1))+1);
var numi5 = Math.floor((Math.random()*(201-1))+1);
// Asigna los valores de las variables numi, numi2, numi3, numi4, numi5 a los campos num1, num2, num3, num4, num5
document.getElementById("num1").value = numi;
document.getElementById("num2").value = numi2;
document.getElementById("num3").value = numi3;
document.getElementById("num4").value = numi4;
document.getElementById("num5").value = numi5;}
,3000)

//Este codigo hace que al iniciar el juego de los numeros primos del nivel 1 se reproduzca la cancion de fondo en bucle 
var audio = new Audio('DeBajoDelMarLASIRENITA.mp3');
audio.loop = true;
audio.play();