const usuario = {
    nombre: "Valentina",
    edad: 25,
    direccion: {
        ciudad: "Buenos Aires",
        barrio: "Palermo",
        coordenadas: { lat: -34.588, lon: -58.430 }
    },
    mascotas: [
        { nombre: "Luna", tipo: "perro" },
        { nombre: "Milo", tipo: "gato" }
    ],
    cursos: [
        { titulo: "JavaScript Avanzado", duracion: "3 meses" },
        { titulo: "React desde cero", duracion: "2 meses" },
        { titulo: "Node.js Profesional", duracion: "4 meses" }
    ],
    historialCompras: {
        ultimaActualizacion: "2025-10-19",
        compras: [2500, 3200, 1500, 4000, 2750]
    },
    proyectos: {
        activos: [
            { nombre: "App de Tareas", nivel: "Intermedio" },
            { nombre: "Portfolio Web", nivel: "Básico" }
        ],
        archivados: [
            { nombre: "Juego en JS", completado: true }
        ]
    },
    hobbies: ["leer", "programar", "viajar", "fotografía"],
    calcularEdad: function () {
        const nacimiento = 2000;
        return new Date().getFullYear() - nacimiento;
    },
    mostrarResumen: function () {
        return `Usuario: ${this.nombre}, edad: ${this.calcularEdad()}, ciudad: ${this.direccion.ciudad}`;
    }
};

console.log("El nombre del usuario es " + usuario);
console.log("El nivel del primer proyecto activo del usuario es " + usuario);
console.log("El usuario tiene " + usuario + " mascotas");
console.log("El nombre de la segunda mascota es " + usuario);
console.log("El último número del historial de compras es " + usuario);
console.log("El título del segundo curso es " + usuario);
console.log("La definición del método mostrarResumen es:", usuario);
console.log("El resultado de invocar mostrarResumen() es:", usuario);
