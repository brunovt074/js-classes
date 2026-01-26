const { arrayTareas } = require("../utils/arrayTareas.js")

const respuestaNegativa = {
    mensaje: "Error en la petición! Fijarse que el nombre sea único y que existan el nombre y responsable en el body!",
    tareas: arrayTareas
}

const respuestaPositiva = {
    mensaje: "Tarea añadida con éxito!",
    tareas: arrayTareas
}

function crearTarea(req, res) {
	const nombre = req.body.nombre
    const responsable = req.body.responsable

    // Nos fijamos que existan el nombre y el responsable
    if (!nombre || !responsable) { return res.json(respuestaNegativa) }

    // Nos fijamos que no exista una tarea con el nombre ingresado
    const nombresIguales = arrayTareas.filter( tarea => tarea.nombre == nombre )
    if ( nombresIguales.length >= 1 ) { return res.json(respuestaNegativa) }

    // Creamos la tarea nueva y la añadimos al array
    const tareaNueva = {
        nombre,
        responsable,
        estado: "Pendiente"
    }

    arrayTareas.push(tareaNueva)
    res.json(respuestaPositiva)
}

module.exports = { crearTarea }