<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="admin.css">
    <title>Document</title>
</head>
<body >
    <?php
    $id_registro = $_GET["id_registro"];
    $usuario = $_GET["usuario"];
    
    $server = "localhost";
    $db = "fasternumber";
    $user = "root";
    $pass = "1234";
    $connexion = mysqli_connect($server, $user, $pass,$db);
    if(mysqli_connect_errno()){
        echo "no conecto";
        exit();
    }
    mysqli_select_db($connexion, $db) or die("no");
    mysqli_set_charset($connexion, "utf8");
    $instru_SQL = "TRUNCATE TABLE iniciosesion";
    $re1=mysqli_query($connexion,$instru_SQL);
    $instru_SQL = "SELECT * From registrodecuentas where id_registro='$id_registro' and usuario='$usuario'";
    $re=mysqli_query($connexion,$instru_SQL);
    if($reg=$re->fetch_array()){
    if($reg['id_cargo']=='1'){
            header('location:inicio.html');
            $instru_SQL = "INSERT INTO iniciosesion(id_registro,usuario) VALUES('$id_registro','$usuario');";
            $re2=mysqli_query($connexion,$instru_SQL);
        }
    
    if($reg['id_cargo']=='2'){
            header('location:pagina.html');
        }
    }

    else{?>
        <h1><?php echo 'El usuario o el id_registro son incorrectos';?></h1><?php
    }
    mysqli_close($connexion);
    
    ?>
    
</body>
</html>