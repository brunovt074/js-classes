// Archivo: src/components/ListaProductos.js (MODIFICADO)
"use client";
import { useState, useEffect } from "react";

export default function ListaProductos() {
    const [productos, setProductos] = useState([]);

    // 2. EFECTO: Se ejecuta apenas carga la página
    useEffect(() => {
        // Hacemos el pedido a nuestra API falsa
        fetch('/productos.json') 
            .then((res) => res.json()) // Convertimos la respuesta a JSON legible
            .then((data) => {
                // Guardamos los datos en el estado
                setProductos(data); 
                console.log("Datos cargados:", data); // Para verificar en consola
            })
            .catch((error) => console.error("Error cargando productos:", error));
    }, []); // Array vacío = Ejecutar solo al montar

    return (
        <div style={{ padding: "20px", border: "1px solid #ddd", maxWidth: "400px" }}>
            <h2>Seleccionar Producto</h2>
            
            <label>Elija un producto: </label>
            
            {/* EL SELECT DEL EXAMEN */}
            <select style={{ padding: "10px", width: "100%", marginTop: "10px" }}>
                
                <option value="">-- Seleccione una opción --</option>
                
                {/* Usamos MAP para transformar los datos en opciones */}
                {
                    productos.map((prod) => (
                        <option key={prod.id} value={prod.id}>
                            {/* Formato pedido: Nombre - Stock */}
                            {prod.nombre} - Stock: {prod.stock}
                        </option>
                    ))
                }
                
            </select>
        </div>
    );
}