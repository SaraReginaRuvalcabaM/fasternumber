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
    $id_registro=$_GET["id_registro"];
    $usuario=$_GET["usuario"];
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
    $instru_SQL = "SELECT * From registrodecuentas where id_registro='$id_registro'";
    $re=mysqli_query($connexion,$instru_SQL);
    if($reg=$re->fetch_array()){
        
        if($reg['id_registro']==$id_registro && $reg['usuario']==$usuario){
            $instru_SQL = "DELETE FROM registrodecuentas where id_registro='$id_registro' AND usuario='$usuario';";
            $re2=mysqli_query($connexion,$instru_SQL);
                ?>
                <h1><?php echo "Usuario eliminado";?></h1>
                <?php }
        else{
            ?>
        <h1><?php echo "El id del usuario a eliminar es incorrecto";?></h1>
    <?php
        }
        
    }
    elseif($id_registro=="" | $usuario=="" ){
        ?>
        <h1><?php echo "No existe ese usuario";?></h1>
    <?php }
    else{
        ?>
    <h1><?php echo "No existe ese usuario";?></h1>
<?php
    }

    
    mysqli_close($connexion);
    
    ?>
    <input type=button value="Hacer otra eliminación" onclick="history.go(-1)" class=usuario>
</body>
</html>