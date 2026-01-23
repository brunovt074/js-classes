const { personas } = require("../utils/personasData.js")

function personasHandler(req, res){
	res.json(
        {
            data: personas
        }
    )
}

// Para exportar
module.exports = { personasHandler }