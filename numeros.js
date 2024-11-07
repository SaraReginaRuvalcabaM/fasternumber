window.onload=function(){
    
    setTimeout('document.form.submit()', 100000)
}
function evaluar(){
    var contador=Number(document.getElementById("contador").value);
    var num=document.getElementById("num1").value;
    if (num%2==0){
        var re=contador+1;
        document.getElementById("contador").value=re;
        var num = Math.floor(Math.random()*101);
        var numi=num+1;
        document.getElementById("num1").value = numi;
    }
    else{
        var re=contador-1;
        document.getElementById("contador").value=re;
        var num = Math.floor(Math.random()*101);
        var numi=num+1;
        document.getElementById("num1").value = numi;
    }


}

function evaluar2(){
    var contador=Number(document.getElementById("contador").value);
    var num=document.getElementById("num2").value;
    if (num%2==0){
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
    var contador=Number(document.getElementById("contador").value);
    var num=document.getElementById("num3").value;
    if (num%2==0){
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
    var contador=Number(document.getElementById("contador").value);
    var num=document.getElementById("num4").value;
    if (num%2==0){
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
    var contador=Number(document.getElementById("contador").value);
    var num=document.getElementById("num5").value;
    if (num%2==0){
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
    
   , 1000);
setInterval( function(){
    var tiempo=Number(document.getElementById("t").value);
    var total=tiempo-1;
    document.getElementById("t").value = total;
},1000)


setInterval(
    function(){
var numi = Math.floor(Math.random()*101);
var numi2 = Math.floor(Math.random()*101);
var numi3 = Math.floor(Math.random()*101);
var numi4 = Math.floor(Math.random()*101);
var numi5 = Math.floor(Math.random()*101);
document.getElementById("num1").value = numi;
document.getElementById("num2").value = numi2;
document.getElementById("num3").value = numi3;
document.getElementById("num4").value = numi4;
document.getElementById("num5").value = numi5;}
,2000)