const { arrayUsuarios } = require("../utils/usuarios.js")

// Esta funcion se ejecutará cuando querramos añadir un nuevo usuario
// Vamos a suponer que el objeto que representa al usuario añadido viene en req.body
// [{}, req.body]
// usando el método arrayUsuarios.push, meter el req.body adentro

const postUsuariosHandler = (req, res) => {

    // req.body
    arrayUsuarios.push(req.body)

    res.json({
        results: arrayUsuarios
    })
}

module.exports = { postUsuariosHandler }