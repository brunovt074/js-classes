const nombre = "Alex"
const apellido = "Ogan"

const primerURL = `http://localhost:3001/estudiantes?nombre=${nombre}&apellido=${apellido}`

// Otra forma de hacerlo

const segundaURL = "http://localhost:3001/estudiantes?nombre=" + nombre + "&apellido=" + apellido

console.log(primerURL)
console.log(segundaURL)