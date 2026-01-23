/*
    El app.post del backend se comporta igual que el put y el delete
*/

const customFetch = async () => {
    const url = "http://localhost:4000"
    const ruta = url + "/api/page/3"
    const metodo = "POST" // puede ser "GET", "POST", etc
    const reqBody = { edad: 40, dni: 20200020 }; // Modificar

    try {
        const response = await fetch(ruta, {
            method: metodo,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reqBody),
        });

        const responseData = await response.json();

        /* ************************************ A PARTIR DE ACÁ HASTA EL CATCH PROGRAMAR ************************************ */

        console.log('Respuesta del servidor:', responseData);

        /* ************************************ DEJAR DE PROGRAMAR ************************************ */

    } catch (error) { console.error('Hubo un error en la solicitud:', error); }
}

customFetch()