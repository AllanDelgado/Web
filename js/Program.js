this.logueado = false;

$("#entrar").click(function(){
	if ($("#usuario").val() == "Admin" && $("#contrasena").val() == '123'){
		logueado = true;
		if (logueado == true) {
			window.location = "./pages/Galeria.html"
		}
	}else {
		Swal.fire ('Error');  
	}
});
$("Galeria").click(function(){
	window.location = "./galeria.html"
});

$("Salir").click(function(){
	window.location = "./galeria.html"
});
window.addEventListener('load',function(){
	$('.container').fadeIn(1000);
});