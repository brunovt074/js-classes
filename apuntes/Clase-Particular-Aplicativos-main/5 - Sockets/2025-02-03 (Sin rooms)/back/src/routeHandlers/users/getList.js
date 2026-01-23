const { personas } = require("../../utils/personasData.js")

const getListHandler = (req, res) => {


    res.json({
        results: personas
    })

}

module.exports = { getListHandler }