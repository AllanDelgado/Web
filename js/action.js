/*var Numeros = new array();
function getNumber() {
	for (var i = 10 - 1; i >= 0; i--) {
		Numeros[i] = prompt("Numero:" + 1);
  }
}

function comparar() {
	for (var i = 10 - 1; i >= 0; i--) {
	Numeros[i]= prompt("Numero: " + 1);
}
for (var i = 10 - 1; i >= 0; i--) {
     if (i>0) {
		document.write([i] + "positivo");
	}else{
		document.write([i] +"negativo");
	}
}
window.addEventListener('load',getNumber());*/

function login () {
	var usuario = document.getElementById('Usuario').value;
	var	pass = document.getElementById('pass').value;
	if (usuario == "Allan" && pass == "123") 
	{
      Inicio();
	}
	else
	{
		alert("Inicio de sesion incorrecto");
	}
}function Inicio () {
	window.location = "./pages/inicio.html";
}