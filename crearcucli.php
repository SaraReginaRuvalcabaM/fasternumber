<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="crear.css">
    <title>Document</title>
</head>
<body>
    <?php
    $nombre = $_GET["nombre"];
    $cargo="1";
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
    $instru_SQL = "SELECT usuario From registrodecuentas where usuario='$nombre'";
    $re=mysqli_query($connexion,$instru_SQL);
    if( $nombre=="" ){
        ?>
        <h1><?php echo "Faltan datos por digitar para dar de alta la cuenta";?></h1>
    <?php
    
}
    else if($reg=$re->fetch_array()){
        if($reg['usuario']==$nombre){
            ?>
            <h1><?php echo "Ya existe el usuario";?></h1>
        <?php
    }}
   else{
    $instru_SQL = "INSERT INTO registrodecuentas(usuario,id_cargo) VALUES('$nombre','$cargo');";
    $re2=mysqli_query($connexion,$instru_SQL);
    if($re2==false){
        ?><h1><?php echo "error";?></h1>
        <?php
    }
    else{
        $instru_SQL = "SELECT id_registro,usuario From registrodecuentas where usuario='$nombre'";
    $re3=mysqli_query($connexion,$instru_SQL);
    $reg1=$re3->fetch_array(); ?>
        <h1><?php echo "Cuenta creada";?></h1>
        <h1>Su ID_registro es: <?php echo $reg1['id_registro'];?></h1>
        <h1>Su usuario es: <?php echo $reg1['usuario'];?></h1>
        <?php }}
    
    mysqli_close($connexion);
    
    ?><input type="button" class=usuario value="Regresar a login" onclick="top.location='login.html'" />
    
</body>
</html>