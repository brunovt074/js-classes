import { PrimerComponente } from "@/components/primerComponente";

const personas = [
    { nombre: "María", apellido: "Gómez", edad: 25 },
    { nombre: "Juan", apellido: "Pérez", edad: 30 },
    { nombre: "Carlos", apellido: "Sánchez", edad: 40 },
    { nombre: "Ana", apellido: "Martínez", edad: 35 }
];

function ArrayMap() {

    return (
        <>
            <h1>Ejercicio array.map con componentes</h1>
            {
                personas.map(
                    (elemento, index) => 
                    <PrimerComponente nombre={elemento.nombre} apellido={elemento.apellido} edad={elemento.edad} key={index} />
                )
            }
        </>
    )
}

export default ArrayMap
