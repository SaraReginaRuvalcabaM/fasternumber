window.onload=function(){
    setTimeout('document.form.submit()', 200000)
}
function evaluar(){
    var audio = new Audio('SonidoAguaAAA.mp3');
audio.play();
    var contador=Number(document.getElementById("contador").value);
    var num=document.getElementById("num1").value;
    for (var i=0; i<num; i ++){
        if (num % i == 0);
          contador1 +=1;  
      }
      if (contador1 == 2){
          var re=contador+1;
          document.getElementById("contador").value=re;
          var numi = Math.floor(Math.random()*101);
          document.getElementById("num1").value = numi;
      }
      else{
          var re=contador-1;
          document.getElementById("contador").value=re;
          var numi = Math.floor(Math.random()*101);
          document.getElementById("num1").value = numi;
      }


}

function evaluar2(){
    var audio = new Audio('SonidoAguaAAA.mp3');
audio.play();
    var contador=Number(document.getElementById("contador").value);
    var num=document.getElementById("num2").value;
    var contador1 = 0;
    for (var i=0; i<num; i ++){
        if (num % i == 0);
          contador1 +=1;  
      }
      if (contador1 == 2){
          var re=contador+1;
          document.getElementById("contador").value=re;
          var numi = Math.floor(Math.random()*101);
          document.getElementById("num2").value = numi;
      }
      else{
          var re=contador-1;
          document.getElementById("contador").value=re;
          var numi = Math.floor(Math.random()*101);
          document.getElementById("num2").value = numi;
      }
}

function evaluar3(){
    var audio = new Audio('SonidoAguaAAA.mp3');
audio.play();
    var contador=Number(document.getElementById("contador").value);
    var num=document.getElementById("num3").value;
    var contador1 = 0;
    for (var i=0; i<num; i ++){
      if (num % i == 0);
        contador1 +=1;  
    }
    if (contador1 == 2){
        var re=contador+1;
        document.getElementById("contador").value=re;
        var numi = Math.floor(Math.random()*101);
        document.getElementById("num3").value = numi;
    }
    else{
        var re=contador-1;
        document.getElementById("contador").value=re;
        var numi = Math.floor(Math.random()*101);
        document.getElementById("num3").value = numi;
    }
}
function evaluar4(){
    var audio = new Audio('SonidoAguaAAA.mp3');
audio.play();
    var contador=Number(document.getElementById("contador").value);
    var num=document.getElementById("num4").value;
    var contador1 = 0;
    for (var i=0; i<num; i ++){
        if (num % i == 0);
          contador1 +=1;  
      }
      if (contador1 == 2){
          var re=contador+1;
          document.getElementById("contador").value=re;
          var numi = Math.floor(Math.random()*101);
          document.getElementById("num4").value = numi;
      }
      else{
          var re=contador-1;
          document.getElementById("contador").value=re;
          var numi = Math.floor(Math.random()*101);
          document.getElementById("num4").value = numi;
      }
}
function evaluar5(){
    var audio = new Audio('SonidoAguaAAA.mp3');
audio.play();
    var contador=Number(document.getElementById("contador").value);
    var num=document.getElementById("num5").value;
    var contador1 = 0;
    for (var i=0; i<num; i ++){
        if (num % i == 0);
          contador1 +=1;  
      }
      if (contador1 == 2){
          var re=contador+1;
          document.getElementById("contador").value=re;
          var numi = Math.floor(Math.random()*101);
          document.getElementById("num5").value = numi;
      }
      else{
          var re=contador-1;
          document.getElementById("contador").value=re;
          var numi = Math.floor(Math.random()*101);
          document.getElementById("num5").value = numi;
      }
}


    

   setTimeout(function(){
    document.getElementById('contador').disabled=false;
   }
    
   , 200000);
setInterval( function(){
    var tiempo=Number(document.getElementById("t").value);
    var total=tiempo-1;
    document.getElementById("t").value = total;
},1000)


setInterval(
    function(){
var numi = Math.floor((Math.random()*(201-1))+1);
var numi2 =Math.floor((Math.random()*(201-1))+1);
var numi3 = Math.floor((Math.random()*(201-1))+1);
var numi4 = Math.floor((Math.random()*(201-1))+1);
var numi5 = Math.floor((Math.random()*(201-1))+1);
document.getElementById("num1").value = numi;
document.getElementById("num2").value = numi2;
document.getElementById("num3").value = numi3;
document.getElementById("num4").value = numi4;
document.getElementById("num5").value = numi5;}
,5000)


var audio = new Audio('DeBajoDelMarLASIRENITA.mp3');
audio.loop = true;
audio.play();                                                         