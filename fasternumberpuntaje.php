<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
   
    <title>Document</title>
</head>
<body>
    <?php
    $cosas=$_GET["contador"];
   
    
   ?>
        <h1><?php echo $cosas;?></h1>
        <?php
    
   
    
    ?>
    

    <input type=button value="Volver a jugar" class=usuario onclick="history.go(-1)">
    <input type=button value="Regresar a página principal" class=usuario onclick="top.juego.location='juegoenter.html'">
    <input type=button value="Seleccionar otra dificultad" class=usuario onclick="top.juego.location='juegoenter.html'">
</body>
</html>