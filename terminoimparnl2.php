<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="termino.css">
    <title>Document</title>
</head>
<body>
    <?php
    $contador=$_GET["contador"];
    $server = "localhost";
    $db = "fasternumber";
    $user = "root";
    $pass = "1234";
    $connexion = mysqli_connect($server, $user, $pass,$db);
    if(mysqli_connect_errno()){
        ?><h1><?php echo "no conecto";?></h1>
        <?php
        exit();
    }
    mysqli_select_db($connexion, $db) or die("no");
    mysqli_set_charset($connexion, "utf8");
    $instru_SQL = "SELECT id_registro from iniciosesion";
    $re=mysqli_query($connexion,$instru_SQL);
    $reg1=mysqli_fetch_array($re);
    $usuariois=$reg1['id_registro'];
    $instru_SQL = "SELECT count(id_registro) From puntajejuegosimpares where id_registro=$usuariois ;";
    $re2=mysqli_query($connexion,$instru_SQL);
    $reg2=mysqli_fetch_array($re2);
    $puntajen=$reg2;
   ?>   <h1>¡Se ababo el tiempo!</h1>
        <h1>Puntaje hecho:</h1>
        <h1><?php echo $contador;?></h1>
       <?php if ($reg2['count(id_registro)']!=0){
         $instru_SQL ="UPDATE puntajejuegosimpares SET num_impares_pun_nl2='$contador' where id_registro='$usuariois';";
         $re3=mysqli_query($connexion,$instru_SQL); }
        else{
            $instru_SQL = "INSERT INTO puntajejuegosimpares(id_registro,num_impares_pun_nl2) VALUES('$usuariois','$contador');";
            $re4=mysqli_query($connexion,$instru_SQL);
        }
       
    ?>
    <input type=button value="Ver tabla de puntuaciones más altas" class=usuario onclick="top.juego.location='registropuntajeimparnl2.php'">
    <input type=button value="Volver a jugar" class=usuario onclick="top.juego.location='juegoimparnl2.html'">

</body>
</html>