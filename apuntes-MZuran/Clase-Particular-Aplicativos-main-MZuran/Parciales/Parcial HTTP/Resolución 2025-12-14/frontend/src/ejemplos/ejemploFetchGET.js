// GET es el método por defecto, no es necesario especificar el tipo de método
// Generalmente metemos las peticiones HTTP de un callback o buttonhandler

// Recordar que se debe modificar el url y incluso es posible que se necesite hacer una query
// como por ejemplo /estudiantes?nombre=Ramiro&apellido=Molina

fetch('http://localhost:3001/estudiantes')
    .then(response => response.json())
    .then((data) => {

        // Acá adentro hacemos lo que querramos con lo que nos llega del GET
        console.log(data)

    })