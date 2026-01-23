function leerRutas(req, res) {
    res.json({
        mensaje: "Hiciste un GET al localhost4000 sin ninguna ruta u endpoint. Tenés que especificar alguna.",
        listaRutas: [
            { 
                método: "GET",
                endpoint: "/tareas",
                descripción: "Te devuelve un array con la lista de tareas para hacer el parcial"
            },
            {
                método: "POST",
                endpoint: "/crearTarea",
                descripción: "Permite crear una nueva tarea especificando el nombre y responsable en el body"
            }
        ]
    });
}

module.exports = { leerRutas };