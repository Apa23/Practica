function confirmar(form) {
	var i=0;
	for (i=0; i<form.length-1; i++){
		if(document.getElementById(form[i]).value==""){
			alert("Por favor, ingrese toda la información solicitada")
			document.getElementById(form[i]).style.cssText = "border: 2px solid red;"
			break;
		}
	}
	if (i==4) {
		if(document.getElementById(form[4]).checked){
			if (confirm('¿Está seguro que desea enviar?')) {
				alert("Gracias por contactarse con nosotros")
				parent.location='home.html';
			}
		} else{
			alert("Por favor, acepte los terminos y condiciones")
		}
		
	}
}

function corregir(elemento) {
	document.getElementById(elemento).style.cssText = "border: 1px solid gray;"

}

function mostrar(indice) {

	var resumen = document.getElementById('resumen-'+indice);
	var ampliado = document.getElementById('ampliado-'+indice);
	var link = document.getElementById('link-'+indice);

	console.log(resumen)

	if(resumen.style.display == "block" || resumen.style.display==""){
		resumen.style.display = "none";
		ampliado.style.display = "block";
		link.innerHTML = "Menos info";

	} else {
		resumen.style.display= "block";
		ampliado.style.display = "none";
		link.innerHTML = "Más info"
	}
}
