const { arrayUsuarios } = require("../utils/usuarios.js")

// Esta funcion se ejecutará cuando modificar un usuario existente
// Vamos a suponer que el objeto que representa al usuario modificado viene en req.body
// Vamos a suponer que LA POSICION EN EL ARRAY DEL USUARIO QUE QUEREMOS MODIFICAR viene en req.params.pos
// usando el método arrayUsuarios.push, meter el req.body adentro

const putUsuariosHandler = (req, res) => {

    // arrayUsuarios es el array original
    // req.params.pos es la posicion del array a modificar
    // req.body es el usuario modificado

    // recuerden que todos los params vienen como si fueran strings
    // hay que pasarlos a numeros
    req.params.pos = Number(req.params.pos)

    arrayUsuarios[req.params.pos] = req.body

    res.json({
        results: arrayUsuarios
    })
}

module.exports = { putUsuariosHandler }