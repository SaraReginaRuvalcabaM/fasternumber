<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="registropunpri.css">
    <title>Document</title>
</head>
<body >
    
      <center><h1>¡Se registro su puntaje!</h1>
        <h1>Tabla de puntajes más altos</h1>
    <table>
        <tr>
        <td class=d>Nombre de usuario</td>
        <td class=d>Puntaje</td>
       
    </tr>
    <?php
    
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
    $instru_SQL = "SELECT registrodecuentas.usuario,puntajejuegosprimos.num_primos_pun_nl1 From registrodecuentas,puntajejuegosprimos where registrodecuentas.id_registro=puntajejuegosprimos.id_registro  order by puntajejuegosprimos.num_primos_pun_nl1  desc ;";
    $re=mysqli_query($connexion,$instru_SQL);
    if($re){
        while($reg=mysqli_fetch_array($re)){
            ?>
            
        <tr>
        <td class=d><?php echo $nombre=$reg['usuario'];?></td>
        <td class=d><?php echo $contra=$reg['num_primos_pun_nl1'];?></td>
        </tr>
            
            
            
            
    <?php }
    }
    
    mysqli_close($connexion);
    ?>
    </table>
    <input type=button value="Volver a página principal" class=botones onclick="top.juego.location='bienvenida.html'">
    <input type=button value="Volver a jugar" class=botones onclick="top.juego.location='juego.html'"></center>

</body>
</html>