const personas = [
    { nombre: "Juan", apellido: "Pérez", edad: 25 },
    { nombre: "Ana", apellido: "Gómez", edad: 17 },
    { nombre: "Luis", apellido: "Martínez", edad: 32 },
    { nombre: "Marta", apellido: "Rodríguez", edad: 15 },
    { nombre: "Carlos", apellido: "Fernández", edad: 20 },
    { nombre: "Laura", apellido: "Sánchez", edad: 12 },
    { nombre: "Pedro", apellido: "Díaz", edad: 40 },
    { nombre: "Sofía", apellido: "Hernández", edad: 16 }
];

import { Tarjeta } from "@/components/tarjeta";

export default function EjercicioMapeo() {

    const personasMapeadas = personas.map( 
        elemento => 
        <Tarjeta nombre={elemento.nombre} apellido={elemento.apellido} edad={elemento.edad}/> 
    )

    return (
        <>
            <h1>Ejercicio Mapeo</h1>
            {personasMapeadas}
        </>
    )
}