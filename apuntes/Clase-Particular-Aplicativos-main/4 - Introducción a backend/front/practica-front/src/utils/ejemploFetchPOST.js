/*
    El app.post del backend se comporta igual que el put y el delete
*/

const url = "http://localhost:4000"
const urlFetch = url + "/api/page/3"
const metodo = "POST" // puede ser "GET", "POST", etc
const reqBody = { nombre: "Juan", edad: 30 }; // Modificar

try {
    const response = await fetch(urlFetch, {
        method: metodo,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(reqBody),
    });

    const responseData = await response.json();

    /*
        ************************************ A PARTIR DE ACÁ HASTA EL CATCH PROGRAMAR ************************************
    */

    console.log('Respuesta del servidor:', responseData);

} catch (error) { console.error('Hubo un error en la solicitud:', error); }