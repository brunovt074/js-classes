const { arrayUsuarios } = require("../utils/usuarios.js")

// Esta funcion se ejecutará cuando nos pidan la lista y no la cambiamos nunca

const getUsuariosHandler = (req, res) => {
    res.json({
        results: arrayUsuarios
    })
}

module.exports = { getUsuariosHandler }