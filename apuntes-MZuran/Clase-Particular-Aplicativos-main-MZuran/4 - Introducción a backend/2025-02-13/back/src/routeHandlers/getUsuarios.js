const { arrayUsuarios } = require("../utils/usuarios.js");

// Devolver el array usuarios así nomas

async function handlerGetUsuarios(req, res) {

    res.json(
        {
            usuarios: arrayUsuarios
        }
    )
}

module.exports = { handlerGetUsuarios }