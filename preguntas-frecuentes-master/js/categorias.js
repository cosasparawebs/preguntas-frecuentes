const categorias = document.querySelectorAll('#categorias .categoria');
const contenedorPreguntas = document.querySelectorAll('.contenedor-preguntas');
let categoriaActiva = null;

categorias.forEach((categoria) => {
	categoria.addEventListener('click', (e) => {
		categorias.forEach((elemento) => {
			elemento.classList.remove('activa');
		});
		e.currentTarget.classList.toggle('activa');
		categoriaActiva = categoria.dataset.categoria;

		//Activa el contenedor de preguntas
		contenedorPreguntas.forEach((contenedor) => {
			contenedor.dataset.categoria === categoriaActiva ? contenedor.classList.add('activo') : contenedor.classList.remove('activo');
		})
	});
});