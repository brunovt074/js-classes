/**
 * Clase 2: Dominando las listas (Arrays)
 * Parte 1: Manipulación Básica (length, push, pop)
 */

/**
 * Explicación:
 * Antes de recorrer listas, tenemos que saber medirlas y modificarlas.
 * .length (Largo): OJO, es una propiedad, no un método. No lleva paréntesis. Nos dice cuántos elementos hay.
 * .push() (Empujar): Agrega un elemento al final de la lista.
 * .pop() (Sacar): Elimina el último elemento de la lista y te lo devuelve.
 */

// Ejemplo
const carrito = ["Manzana", "Pan"];

// Ver cantidad
console.log(carrito.length); // 2

// Agregar
carrito.push("Leche");
console.log(carrito); // ["Manzana", "Pan", "Leche"]

// Quitar
carrito.pop();
console.log(carrito); // ["Manzana", "Pan"]

/**
 * 📝 Ejercitación 1
 * Consigna:
 * Crea un array vacío llamado invitados.
 * Usa .push() para agregar dos nombres.
 * Muestra por consola el largo del array usando .length.
 * (Opcional) Usa .pop() para sacar al último invitado porque se arrepintió.
 */

// Solución
const invitados = [];
invitados.push("Carlos");
invitados.push("Sofia");
console.log(invitados.length); // 2


/**
 * Parte 2: Los Bucles Clásicos (while y for)
 */

/**
 * Explicación:
 * Antes de que existieran métodos modernos, usábamos while (mientras).
 * En pocas palabras significa: “mientras pase esto, repetí”.
 * Sirve para repetir código mientras una condición sea verdadera.
 *
 * Ejemplo mental:
 * Mientras la rueda no esté llena, seguís inflando.
 */

// Ejemplo 1 – Contar números (muy básico)
let contador = 1;
while (contador <= 5) {
    console.log(contador);
    contador = contador + 1;
}

/**
 * El for es una evolución del while.
 * Tiene 3 partes separadas por punto y coma:
 * Inicialización: let i = 0
 * Condición: i < 5
 * Actualización: i++
 */

// Ejemplo 2 – Contar del 0 al 4
for (let i = 0; i < 5; i++) {
    console.log("Vuelta número: " + i);
}

/**
 * 📝 Ejercitación 2
 * Consigna:
 * Usa un bucle for que empiece en 1 y termine en 10 (incluido).
 * En cada vuelta haz un console.log que diga el número actual.
 */

// Solución
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


/**
 * Parte 3: Transformar Listas (.map)
 */

/**
 * Explicación:
 * El .map es fundamental.
 * Diferencia con forEach: forEach solo recorre, map DEVUELVE un nuevo array.
 * Regla de oro: el array original NO se modifica.
 */

// Ejemplo
const numeros = [2, 4, 6];

// Queremos el doble de cada número
const dobles = numeros.map(numero => numero * 2);

console.log(dobles); // [4, 8, 12]

/**
 * 📝 Ejercitación 3
 * Consigna:
 * Tienes una lista de precios: const precios = [100, 200, 300];
 * Hay una inflación y todo sube un 10%.
 * Usa .map para crear un nuevo array preciosNuevos donde cada precio se multiplique por 1.1.
 */

// Solución
const precios = [100, 200, 300];
const preciosNuevos = precios.map(p => p * 1.1);


/**
 * Parte 4: Filtrar Listas (.filter)
 */

/**
 * Explicación:
 * A veces no queremos transformar todos los datos, sino quedarnos solo con algunos.
 * Si la función devuelve true -> el elemento se queda.
 * Si devuelve false -> el elemento se va.
 * Al igual que map, crea un array nuevo.
 */

// Ejemplo
const edades = [15, 22, 12, 30];

// Solo queremos los mayores de 18
const mayores = edades.filter(edad => edad >= 18);

console.log(mayores); // [22, 30]

/**
 * 📝 Ejercitación 4 (El Desafío)
 * Consigna:
 * Usa .filter para crear una lista nueva que solo tenga los números mayores a 10.
 */

// Solución
const numerosFiltro = [5, 12, 8, 130, 44];
const filtrados = numerosFiltro.filter(n => n > 10);


/**
 * Parte 5: Integración (Simulacro de Examen)
 */

/**
 * Consigna Final:
 * Tienes una lista de alumnos con su nota.
 * Usa .filter para crear una lista de aprobados (nota >= 7).
 * Usa .map para crear una lista que solo tenga los nombres.
 * Muestra la lista final por consola.
 */

const alumnos = [
    { nombre: "Juan", nota: 5 },
    { nombre: "Maria", nota: 9 },
    { nombre: "Pedro", nota: 8 },
    { nombre: "Ana", nota: 4 }
];

// 1. Filtrar aprobados
// const aprobados = ...

// 2. Mapear solo nombres
// const nombresAprobados = ...

// 3. Mostrar

// Solución
const aprobados = alumnos.filter(alumno => alumno.nota >= 7);
const nombresAprobados = aprobados.map(alumno => alumno.nombre);
console.log(nombresAprobados); // ["Maria", "Pedro"]


/**
 * Ejercicio 2: Registro de movimientos de dinero
 */

// DATOS INICIALES (NO MODIFICAR)
const movimientos = [
    { concepto: "Sueldo", monto: 120000 },
    { concepto: "Alquiler", monto: -50000 },
    { concepto: "Comida", monto: -20000 },
    { concepto: "Freelance", monto: 30000 },
    { concepto: "Transporte", monto: -10000 }
];

/**
 * PARTE 1 – for
 * Mostrar todos los movimientos con formato:
 * Concepto: Sueldo - Monto: 120000
 */

// PARTE 2 – filter
// Crear array ingresos (monto > 0)

// PARTE 3 – map
// Crear array solo con montos

// PARTE 4 – while
// Calcular total ingresos usando acumulador

// Resolver acá


// SOLUCIÓN

// PARTE 1 - for
for (let i = 0; i < movimientos.length; i++) {
    console.log(
        "Concepto: " + movimientos[i].concepto +
        " - Monto: " + movimientos[i].monto
    );
}

// PARTE 2 - filter
const ingresos = movimientos.filter(mov => mov.monto > 0);

// PARTE 3 - map
const montosIngresos = ingresos.map(ingreso => ingreso.monto);

// PARTE 4 - while (acumulador)
let totalIngresos = 0;
let i = 0;

while (i < montosIngresos.length) {
    totalIngresos = totalIngresos + montosIngresos[i];
    i++;
}

// PARTE 5 - resultado
console.log("Total de ingresos: " + totalIngresos);


/**
 * Ejercicio 3: Simulador de Cartera de Inversiones
 */

// 1. Bucle de control (7 días)
for (let i = 1; i <= 7; i++) {
    console.log("Día " + i + ": Analizando tendencias...");
}

// 2. Map – Actualización por inflación
const acciones = [1500, 2800, 1200, 4500];
const preciosActualizados = acciones.map(p => p * 1.15);

// 3. Filter – Empresas unicornio
const empresas = [
    { nombre: "CryptoBank", valor: 2500 },
    { nombre: "TechNova", valor: 8000 },
    { nombre: "GreenEnergy", valor: 1500 },
    { nombre: "GlobalTrade", valor: 12000 }
];

const oportunidades = empresas.filter(e => e.valor > 5000);


/**
 * El Desafío Final: Informe de Inversión
 */

const activos = [
    { nombre: "Bonos AR", rentabilidad: 5 },
    { nombre: "Acciones Apple", rentabilidad: 12 },
    { nombre: "Bitcoin", rentabilidad: 45 },
    { nombre: "Plazo Fijo", rentabilidad: 2 }
];

const buenosActivos = activos.filter(a => a.rentabilidad > 10);
const reporteNombres = buenosActivos.map(a => a.nombre);

console.log("Invertir en: ", reporteNombres); // ["Acciones Apple", "Bitcoin"]

