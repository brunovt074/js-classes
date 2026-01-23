/*
    Consigna:
    Filtrar a las personas mayores de edad y mapear el array resultante para sólo obtener los nombres completos
*/

const personasEjercicio = [
  {
    id: 1,
    nombre: "Ana",
    apellido: "García",
    edad: 17,
    comidasFavoritas: ["pizza", "helado", "pasta"]
  },
  {
    id: 2,
    nombre: "Luis",
    apellido: "Martínez",
    edad: 25,
    comidasFavoritas: ["sushi", "tacos", "ensalada"]
  },
  {
    id: 3,
    nombre: "María",
    apellido: "López",
    edad: 14,
    comidasFavoritas: ["hamburguesa", "fresas", "chocolate"]
  },
  {
    id: 4,
    nombre: "Javier",
    apellido: "Ruiz",
    edad: 32,
    comidasFavoritas: ["pollo al horno", "paella", "ramen"]
  },
  {
    id: 5,
    nombre: "Sofía",
    apellido: "Torres",
    edad: 19,
    comidasFavoritas: ["arepas", "empanadas", "café"]
  }
];

// 1. Debemos crear el personasFiltradasEjercicio
const personasFiltradasEjercicio = personasEjercicio.filter( elemento => elemento.edad >= 18 )

// 2. Debemos crear el personasMapeadasEjercicio
const personasMapeadasEjercicio = personasFiltradasEjercicio.map(
    elemento => elemento.nombre + " " + elemento.apellido
)