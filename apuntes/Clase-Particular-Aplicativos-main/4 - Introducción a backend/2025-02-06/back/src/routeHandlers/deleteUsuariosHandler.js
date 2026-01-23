const { arrayUsuarios } = require("../utils/usuarios.js")

// Esta funcion se ejecutará cuando se quiera eliminar un usuario existente
// Vamos a suponer que LA POSICION EN EL ARRAY DEL USUARIO QUE QUEREMOS ELIMINAR viene en req.params.pos

const deleteUsuariosHandler = (req, res) => {

    // arrayUsuarios es el array original
    // req.params.pos es la posicion del array a eliminar

    // recuerden que todos los params vienen como si fueran strings
    // hay que pasarlos a numeros
    req.params.pos = Number(req.params.pos)

    // en lugar de n, poner la posicion del elemento a eliminar
    arrayUsuarios.splice(req.params.pos, 1);

    res.json({
        results: arrayUsuarios
    })
}

module.exports = { deleteUsuariosHandler }