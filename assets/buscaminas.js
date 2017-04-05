//alert("buscaminas!!");

var botonesArreglo = document.getElementsByClassName("botonNum");
console.log(botonesArreglo);

/* arreglo de bombas ------------------------------------------------*/
var bombasArreglo = document.getElementsByClassName("bombas");

/* Variables de celdas para cambiar color ------------------------------------------------*/
var celdaUno = document.getElementById("celdaUno");
var celdaDos = document.getElementById("celdaDos");

/* Recorrer arreglo para mostrar valor del boton ------------------------------------------------*/
function recorrerArreglo() {
  var botonesArreglo = document.getElementsByClassName("botonNum");
  for (var i = 0; i < botonesArreglo.length; i++){
    botonesArreglo[i].addEventListener("click", mostrarNumero);
  }
}
// llamar a funcion para recorrer el arreglo de botones
recorrerArreglo(botonesArreglo);

/* Muesta el numero correspondiente al valor del boton dentro de la casilla ------------------------------------------------*/
function mostrarNumero(botonesArreglo){
  var padreSith = this.parentNode;
  console.log(padreSith);
  if (this.value == 2){
    padreSith.innerText = "2";
  }
  else if (this.value == 1) {
    padreSith.innerText = "1";
  }
}

/* cambiar de color las celdas vacías ------------------------------------------------*/
celdaUno.addEventListener("click", cambiarColorCelda);
celdaDos.addEventListener("click", cambiarColorCelda);

function cambiarColorCelda(){
  var padreYedi = this.parentNode;
  padreYedi.innerHTML = padreYedi.style.backgroundColor = '#580EA8';
  padreYedi.innerText = "";
}

/* Aparecer bombas ------------------------------------------------*/
console.log(bombasArreglo);
function mostrarBombas(){
  for (var i = 0; i < bombasArreglo.length; i++){
    bombasArreglo[i].addEventListener("click", explotarBombas);

  }
}
mostrarBombas(bombasArreglo);

function explotarBombas(bombasArreglo){

  var padreBomba = this.parentNode;
  padreBomba.innerHTML = padreBomba.style.backgroundImage = "url(assets/images/buscaminas.png)";
  padreBomba.innerText = "";
  alert("Game Over");
  event.stopPropagation();
}


/* Reset para el juego ------------------------------------------------*/
var botonReinit = document.getElementById("botonReiniciar");

botonReinit.addEventListener("click", reinitJuego);

function reinitJuego(){
   window.location.reload();
}
