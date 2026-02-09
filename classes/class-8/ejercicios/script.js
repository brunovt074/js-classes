// 1. Buscar el select del DOM

const select = document.getElementById("selectProductos")

// 2. Hacer un fetch a la siguiente URL:
// https://fakestoreapi.com/products

fetch("https://fakestoreapi.com/products")
// 3. Convertir la respuesta a JSON
    .then(response => {
        return response.json()
    })

// 4. Mostrar los datos por consola
    .then(data => {
        console.log("Datos recibidos: ", data)

        // 5. Llamar a una función para llenar el select
        llenarSelect(data)
    })

// 6. Crear una función llenarSelect(productos)
//    - Limpiar el select
//    - Crear una option por cada producto
//    - Mostrar: nombre del producto y precio

function llenarSelect(productos) {
    select.innerHTML = ''

    productos.forEach(producto => {
        const option = document.createElement("option")

        option.value = producto.id;

        option.textContent = `${producto.title} - $${producto.price}`;

        select.appendChild(option);
    })
}