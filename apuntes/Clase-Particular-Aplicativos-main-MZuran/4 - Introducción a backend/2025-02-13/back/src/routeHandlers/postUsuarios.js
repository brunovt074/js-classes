const { arrayUsuarios } = require("../utils/usuarios.js");

// Debemos recibir por body el nombre, apellido y edad de los usuarios
// Debemos asegurarnos que todo exista en el body
// Añadimos el usuario al array
// Devolver el array usuarios así nomas

async function handlerPostUsuarios(req, res) {

    nuevoNombre = req.body.nombre
    nuevoApellido = req.body.apellido
    nuevaEdad = req.body.edad

    // Si no existe el nombre, apellido o edad...
    if (!nuevoNombre || !nuevoApellido || !nuevaEdad) {
        return res.json( { mensaje: "Faltan datos" } )
    }

    arrayUsuarios.push(
        {
            nombre: nuevoNombre,
            apellido: nuevoApellido,
            edad: nuevaEdad
        }
    )

    res.json( 
        { 
            mensaje: "Usuario añadido con éxito",
            usuarios: arrayUsuarios 
        } 
    )
}

module.exports = { handlerPostUsuarios }