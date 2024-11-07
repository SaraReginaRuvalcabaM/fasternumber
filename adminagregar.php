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
    
    
    $usuario=$_GET["usuario"];
    $id_cargo=$_GET["id_cargo"];
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
    $instru_SQL = "SELECT * From registrodecuentas where usuario='$usuario'";
    $re=mysqli_query($connexion,$instru_SQL);
    if( $usuario=="" | $id_cargo=="" ){
            ?>
            <h1><?php echo "Faltan datos por digitar para dar de alta al usuario";?></h1>
        <?php
        
    }
    elseif($id_cargo>2| $id_cargo<0){
        ?>
        <h1><?php echo "El cargo es inválido";?></h1>
    <?php
    }
    elseif($reg=$re->fetch_array()){
        
        if($reg['usuario']==$usuario){
            ?>
            <h1><?php echo "Ya existe un usuario con ese nombre";?></h1>
        <?php
        
    }}else{
    $instru_SQL = "INSERT INTO registrodecuentas(usuario,id_cargo) VALUES('$usuario','$id_cargo');";
    $re2=mysqli_query($connexion,$instru_SQL);
    if($re2==false){
        ?><h1><?php echo "error";?></h1>
        <?php
    }
    else{
        ?>
        <h1><?php echo "Registro realizado";?></h1>
        <?php }}
    
    mysqli_close($connexion);
    
    ?>
    <input type=button value="Hacer otro registro" class=usuario onclick="history.go(-1)">
</body>
</html>