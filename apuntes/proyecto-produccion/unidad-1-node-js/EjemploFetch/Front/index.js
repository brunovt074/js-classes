async function llamadoAlGet() {
    //El get no manda body, si quiero mandar parametros lo sumo a la url con el ?
    const response = await fetch('http://localhost:4000/students',{
        method:"GET", //GET, POST, PUT o DELETE
        headers: {
            "Content-Type": "application/json",
          },
    })

    console.log(response)
    //Desarma el json y lo arma como un objeto
    let result = await response.json()
    console.log(result)
}
//Los datos en el post se mandan dentro de un objeto 
async function envioPost(datos) {
    const response = await fetch('http://localhost:4000/students',{
        method:"POST", //GET, POST, PUT o DELETE
        headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(datos) //JSON.stringify convierte de objeto a JSON
    })

    console.log(response)
    //Desarma el json y lo arma como un objeto
    let result = await response.json()
    console.log(result)
}

function tomarDatos() {
    //Los parametros del objeto se tienen que llamar como los espera el BACKEND
    let datos = {
        id: getId(),
        FirstName: getNombre(),
        LastName: getApellido(),
        mail: getMail(),
        id_grade: getCurso()
    }
    envioPost(datos)
}