const { personas } = require("../../utils/personasData.js")

/*
    El usuario mandará un id y un nuevo nombre 
    Podemos usar cualquier forma de req de mandar datos

    El id se manda por param
    El nuevo contenido se manda por body
    {
        nuevoNombre: "pepe"
    }

    Lo que debe hacer el servidor es tomar el array de personas y cambiar el nombre de el dueño del id
    (se puede usar forEach)
*/

const putListHandler = (req, res) => {
    const id = req.params.id
    const nuevoNombre = req.body.nuevoNombre

    personas.forEach(
        (elemento) => {

            if (elemento.id == id) {
                elemento.nombre = nuevoNombre
            }

        }
    )

    res.json( { mensaje: "Exito" } )
}

module.exports = { putListHandler }