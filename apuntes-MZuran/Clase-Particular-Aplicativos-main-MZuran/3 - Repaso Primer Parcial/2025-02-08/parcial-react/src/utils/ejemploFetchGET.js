const customFetch = async () => {
    const url = "http://localhost:4000"
    const ruta = url + "/api/page/3"
    const metodo = "GET" // puede ser "GET", "POST", etc

    try {
        const response = await fetch(ruta, {
            method: metodo,
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const responseData = await response.json();

        /* ************************************ A PARTIR DE ACÁ HASTA EL CATCH PROGRAMAR ************************************ */

        console.log('Respuesta del servidor:', responseData);

        /* ************************************ DEJAR DE PROGRAMAR ************************************ */


    } catch (error) { console.error('Hubo un error en la solicitud:', error); }
}

customFetch()