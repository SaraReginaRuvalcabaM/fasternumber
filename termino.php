<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="admin.css">
    <title>Document</title>
</head>
<body>
    <?php
    $contador=$_GET["contador"];
    
   ?>
        <h1><?php echo $contador;?></h1>
        <?php
    
   
    
    ?>
    <input type=button value="Volver a jugar" class=usuario onclick="history.go(-1)">
    <input type=button value="Registrar" class=usuario onclick="history.go(-1)">
</body>
</html>