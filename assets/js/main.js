window.onload = function(){
	alert("La página está cargada");
}

var boton = document.getElementById("demo");
	 boton.addEventListener("click", function(){
	alert("¡HOLA MUNDO!");
})

document.getElementById("input").addEventListener("mouseover", function(){
	alert("Estás Sobre mi");
})

document.getElementById("input").addEventListener("mouseout", function(){
	alert("No estás sobre mi");
})