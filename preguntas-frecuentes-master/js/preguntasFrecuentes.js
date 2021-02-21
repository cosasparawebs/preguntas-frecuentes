const preguntas = document.querySelectorAll('.preguntas .contenedor-pregunta');

preguntas.forEach((pregunta) => {
	pregunta.addEventListener('click', (e) => {

		// Abre solo la pregunta que se cliquea
		preguntas.forEach((elemento) => {
			if (pregunta !== elemento){
				elemento.classList.remove('activa');
				elemento.querySelector('.respuesta').style.maxHeight = null 
			};
		});

		e.currentTarget.classList.toggle('activa');

		const respuesta = pregunta.querySelector('.respuesta');
		const alturaRealRespuesta = respuesta.scrollHeight;

		respuesta.style.maxHeight === '' ? respuesta.style.maxHeight = alturaRealRespuesta + 'px' : respuesta.style.maxHeight = null;
	});
});