/*
    Los métodos GET no necesitan el tercer parámetro
    Url es un string
    Method es un string
    Data es un objeto
*/

export async function customFetch(url, method, data = {}) {

    // Se valida si el método es correcto
    const validMethods = ["GET", "POST", "PUT", "DELETE"];
    if (!validMethods.includes(method)) {
        console.error(`Invalid method: ${method}`);
        return;
    }

    // Se intenta hacer el fetch
    try {

        // Objeto de configuración del método
        const options = {
            method,
            headers: { 'Content-Type': 'application/json', },
            credentials: 'include',
        };

        // Si el método no es GET, añadimos el body
        if (method !== "GET") {
            options.body = JSON.stringify(data);
        }

        // Se hace el fetch
        const response = await fetch(url, options);

        // Validar si la respuesta fue exitosa
        if (!response.ok) {
            console.error(`Fetch failed with status: ${response.status}`);
            return;
        }

        const result = await response.json();
        return result;

    } catch (error) {
        console.error(`Fetch error: ${error}`);
    }
};
