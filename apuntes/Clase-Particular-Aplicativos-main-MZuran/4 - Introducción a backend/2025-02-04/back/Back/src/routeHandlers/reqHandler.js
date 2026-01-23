function reqHandler(req, res) {

    /*
        Req guarda un montón de info acerca del cliente y su peticion
        Entre las cosas que nos interesan se encuentran:

            req.body
            req.query
            req.params

        Estas 3 llaves guardan objetos los cuales el usuario puede llenar

        req.query: 
            Es un objeto cuyas claves y valores las define el usuario
            Siempre van al final de las urls y el "objeto query" se empieza a escribir luego de un signo de pregunta
            La url es una string así que cualquier cosa escrita en la query se interpreta como string
            Su sintaxis es:
                <url>?clave=valor&nombre=matias&apellido=zuran
                Hay que notar que las duplas clave valor usan el signo igual y & para separarlos

        req.params:
            Es un objeto cuyas claves las define el servidor y cuyos valores los define el usuario
            Siempre van despues del url pero ANTES que el query
            Su sintaxis es:

                backend:
                    app.get( '/pruebaReq/:<clave>', <callback> )

                frontend:
                    <url>/<valor>

            Si el usuario le está mandando params de más o params de menos al servidor, el usuario recibe un 404

        req.body:
            Es un objeto enviado por el CÓDIGO de la peticion
            No se pueden enviar req.body si usamos el navegador
            Puede tener cualquier forma, cualquier valor y cualquier cantidad de claves
            Todas definidas por el usuario
            Como no se escribe sobre el url, entonces los tipos de datos no se pasan a string automaticamente
    */

    // if (req.query.edad) {req.query.edad = Number(req.query.edad)}

    res.json(
        {
            query: req.query,
            body: req.body,
            params: req.params,
            mensaje: "Hola grupo"
        }
    );
}

module.exports = { reqHandler }