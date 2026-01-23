const descargaFetch = async () => {
    // -----------------------------------------------------
    const urlFetch = "http://localhost:4000/api/page/3"
    // -----------------------------------------------------

    const metodo = "GET" // puede ser "GET", "POST", etc

    try {
        const response = await fetch(urlFetch, {
            method: metodo,
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const responseData = await response.json();

        /*
            ************************************ A PARTIR DE ACÁ HASTA EL CATCH PROGRAMAR ************************************
        */

        console.log('Respuesta del servidor:', responseData);

        /*
            ************************************ PROGRAMAR ************************************
        */

    } catch (error) { console.error('Hubo un error en la solicitud:', error); }
}

descargaFetch()