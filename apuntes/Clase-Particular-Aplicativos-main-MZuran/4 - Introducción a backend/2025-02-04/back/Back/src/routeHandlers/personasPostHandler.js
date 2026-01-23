const { personas } = require("../utils/personasData.js")

// Podemos hacer que la info venga por req.query, req.body o req.params

/*
    req.body 
    {
        nombre: <string>,
        ciudad: <string>,
        edad: <number>
    }
*/
function personasPostHandler(req, res) {

    // Nos aseguramos que nombre, ciudad y edad existan dentro del body
    if (req.body.nombre && req.body.ciudad && req.body.edad) {

        personas.push(req.body)

        res.json(
            { mensaje: "Persona añadida con exito" }
        )
    }
    
    res.json(
        { mensaje: "Error añadiendo la persona" }
    )

}


module.exports = { personasPostHandler }