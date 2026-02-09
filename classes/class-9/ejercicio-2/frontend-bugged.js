// frontend-bugged.js
const URL_API = 'http://localhost:4000/tareas';

// ------------------------------------
// 1️⃣ GET – Traer tareas
// ------------------------------------
function traerTareas() {
    fetch(URL_API)
        .then(r => r.json())
        .then(data => {
            const tabla = document.getElementById('tablaTareas');
            const select = document.getElementById('selectTareas');

            tabla.innerHTML = '';
            select.innerHTML = '';

            data.tareas.forEach(t => {
                tabla.innerHTML += `
                    <tr>
                        <td>${t.id}</td>
                        <td>${t.descripcion}</td>
                        <td>${t.estado}</td>
                    </tr>
                `;

                select.innerHTML += `
                    <option value="${t.id}">
                        ${t.descripcion}
                    </option>
                `;
            });
        });
}

// ------------------------------------
// 2️⃣ POST – Crear tarea
// ------------------------------------
function crearTarea() {
    const descripcion = document.getElementById('descripcionInput').value;
    const estado = document.getElementById('estadoInput').value;

    fetch(URL_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({ descripcion })
    })
    .then(r => r.json())
    .then(() => traerTareas());
}

// ------------------------------------
// 3️⃣ PUT – Modificar tarea
// ------------------------------------
function modificarTarea() {
    const id = document.getElementById('selectTareas').value;
    const nuevoEstado = document.getElementById('nuevoEstadoInput').value;

    fetch(URL_API, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, estadoNuevo })
    })
    .then(r => r.json())
    .then(() => traerTareas());
}

// ------------------------------------
// 4️⃣ DELETE – Eliminar tarea
// ------------------------------------
function eliminarTarea() {
    const id = document.getElementById('selectTareas').value;

    fetch(URL_API, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    })
    .then(r => r.json())
    .then(() => traerTareas());
}

traerTareas();


