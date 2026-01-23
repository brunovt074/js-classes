// POST es el método que usamos para enviar información
// Generalmente metemos las peticiones HTTP de un callback o buttonhandler

// Recordar que se debe modificar el url y incluso es posible que se necesite hacer una query
// como por ejemplo /estudiantes?nombre=Ramiro&apellido=Molina

const body = {}; // Este es el objeto que enviamos dentro del body.

fetch('http://localhost:3001/estudiantes', {
    method: 'POST', //  Cambiar por PUT, o DELETE si es necesario
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
})

    .then(response => response.json())
    .then(data => {

        console.log(data)
        // Acá adentro hacemos lo que querramos con lo que nos llega del POST
        // Se puede por ejemplo usar el setter de una variable de estado

    });