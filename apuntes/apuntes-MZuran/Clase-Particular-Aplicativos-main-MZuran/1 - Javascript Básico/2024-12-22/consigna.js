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

/* 
Ejercicio 1 (array.map):
Crea un nuevo array con los nombres completos (nombre + apellido) de todas las personas.
Muestra el array resultante.

Ejercicio 2 (array.filter):
Filtra las personas que son mayores de edad (18 años o más).
Muestra el nuevo array con solo las personas mayores.

Ejercicio 3 (array.forEach):
Recorre el array e imprime un mensaje como:
"Juan Pérez tiene 25 años".
Hazlo para cada elemento del array.
*/

// Ejercicios sobre arrays mezclados con objetos y métodos

const productos = [
    { nombre: "Laptop", precio: 1500, descuento: () => { return 0.1; } },           // Función Flecha
    { nombre: "Teléfono", precio: 800, descuento: function () { return 0.2; } },    // Función Declarada
    { nombre: "Monitor", precio: 300, descuento: () => 0.15 }                       // Función Flecha Retorno Implícito
];


/* 
Se puede usar cualquier tipo de funcion en los metodos, pero la gente por lo general usa flechas.
Más adelante vamos a ver una diferencia entre estos métodos.

1.  

    Usa array.map para crear un array llamado productosMapeados que contenga:

    {nombre: <nombreDeProducto>, precioAjustado: <precioOriginal - descuento>}

    Para conseguir el descuento, se debe ejecutar el método descuento() multiplicado por el precio original
            
 2. 

    Muestra por consola algo como: "Laptop tiene un descuento de $150" usando productosMapeados.forEach

*/

const estudiantes = [
    { nombre: "María", notas: [8, 9, 10] },
    { nombre: "José", notas: [6, 7, 8] },
    { nombre: "Lucía", notas: [9, 9, 10] }
];

/* 
1.  
    Usa estudiantes.map para generar un array de estudiantesMapeados que sólo contenga

    { nombre: <nombre del alumno>, promedio: <promedio del alumno> }

    Acordate que el promedio de notas de un alumno se calcula sumando todas las notas y dividiendo su suma por la cantidad
*/

 
//  Muestra por consola quién tiene el promedio más alto. Usa array.forEach.


/* 
    Ejercicio adicional (diferencia entre funciones flecha y declaradas):
    Usa este array para experimentar:
*/
const arrayMetodos = [
    { nombre: "Pepe", presentarse: function() { console.log(this) } },   // Función Declarada
    { nombre: "Pedro", presentarse: () => { console.log(this) } }        // Función Flecha
];

/*
Consigna:
    Observa la diferencia entre arrayMetodos[0].presentarse() y arrayMetodos[1].presentarse()
    La palabra clave "this", SÓLO FUNCIONA EN LAS FUNCIONES DECLARADAS

    ¿A quién hace referencia la palabra clave "this"?
    ¿Y si el console.log de pepe fuera sólo de this en lugar de this.nombre?
    Proba experimentando y modificando el metodo presentarse.
*/
