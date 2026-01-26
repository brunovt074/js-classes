const { usuarios } = require("../../usuarios.js")

function UpdateHandler(req, res) {
    const userId = req.body.userId
    const newPassword = req.body.newPassword

    if (!userId || !newPassword) {

        res.json({
            mensaje: "No me llenaste bien los datos"
        })

    } else {

        // usuarios es un array de objetos
        // los objetos tienen un id
        
        let posicionIdEncontrado = undefined

        usuarios.forEach(
            (elemento, index) => {
                // si el id del elemento es igual a userId, guardar el index en posicionIdEncontrado
                if (elemento.id == userId) {
                    posicionIdEncontrado = index
                }
            }
        )

        if (!posicionIdEncontrado) {
            res.json(
                { mensjae: "No se encontró ese userId" }
            )
        }

        usuarios[posicionIdEncontrado].password = newPassword
        // cambiar la password del ususario encontrado por la new password
        res.json(
            { 
                mensjae: "Contraseña actualizada",
                usuarios 
            }
        )

    }

}

module.exports = { UpdateHandler }