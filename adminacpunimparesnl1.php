<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="admin.css">
    <title>Document</title>
</head>
<body bgcolor="#B11502">
<?php
    $id=$_GET["id_registro"];
    $contador = $_GET["contador"];
    $server = "localhost";
    $db = "fasternumber";
    $user = "root";
    $pass = "1234";
    $connexion = mysqli_connect($server, $user, $pass,$db);
    if(mysqli_connect_errno()){
        ?>
        <h1><?php echo "no conecto";?></h1>
        <?php
        exit();
    }
    mysqli_select_db($connexion, $db) or die("no");
    mysqli_set_charset($connexion, "utf8");
    $instru_SQL ="UPDATE puntajejuegosimpares SET num_impares_pun_nl1='$contador' where id_registro='$id';";
    $re=mysqli_query($connexion,$instru_SQL);
    if($re==false){
        ?>
        <h1><?php echo "No existe el registro";?></h1>
        <?php
    }
    else{
        ?> <h1><?php echo "Puntaje actualizado";?></h1>
        <?php }
    mysqli_close($connexion);
    
    ?>
    <input type=button value="Hacer otra actualización"  class="usuario" onclick="top.cap.location='menu.html'">
</body>
</html>