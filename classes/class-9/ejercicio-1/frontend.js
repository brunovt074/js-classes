// frontend.js
const URL_API = 'http://localhost:3000/peliculas';

// ------------------------------------
// 1️⃣ y 3️⃣ GET - Traer películas y mostrarlas
// ------------------------------------
function traerPeliculas() {
    fetch(URL_API)
        .then(response => response.json())
        .then(data => {
            const tabla = document.getElementById('tablaPeliculas');
            const select = document.getElementById('selectPeliculas');

            tabla.innerHTML = '';
            select.innerHTML = '';

            data.peliculas.forEach(pelicula => {
                tabla.innerHTML += `
                    <tr>
                        <td>${pelicula.titulo}</td>
                        <td>${pelicula.puntuacion}</td>
                    </tr>
                `;

                select.innerHTML += `
                    <option value="${pelicula.titulo}">
                        ${pelicula.titulo}
                    </option>
                `;
            });
        });
}


// ------------------------------------
// 2️⃣ POST - Guardar nueva película
// ------------------------------------
function guardarPelicula() {
    const titulo = document.getElementById('tituloInput').value;
    const puntuacion = document.getElementById('puntuacionInput').value;

    fetch(URL_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            titulo: titulo,
            puntuacion: puntuacion
        })
    })
    .then(res => res.json())
    .then(() => {
        traerPeliculas();
    });
}

// ------------------------------------
// 5️⃣ PUT - Modificar puntuación
// ------------------------------------
function modificarPuntuacion() {
    const titulo = document.getElementById('selectPeliculas').value;
    const nuevaPuntuacion = document.getElementById('nuevaPuntuacionInput').value;

    fetch(URL_API, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            titulo: titulo,
            nuevaPuntuacion: nuevaPuntuacion
        })
    })
    .then(res => res.json())
    .then(() => {
        traerPeliculas();
    });
}

// ------------------------------------
// 6️⃣ DELETE - Eliminar película
// ------------------------------------
function eliminarPelicula() {
    const titulo = document.getElementById('selectPeliculas').value;

    fetch(URL_API, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ titulo: titulo })
    })
    .then(res => res.json())
    .then(() => {
        traerPeliculas();
    });
}

// ------------------------------------
// Cargar datos al iniciar
// ------------------------------------
// traerPeliculas();