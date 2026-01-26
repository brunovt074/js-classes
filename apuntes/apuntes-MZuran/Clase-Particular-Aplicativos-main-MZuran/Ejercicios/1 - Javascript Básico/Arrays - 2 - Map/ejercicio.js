const personas = [
  { nombre: "Ana", notas: [8, 9, 10, 7, 9] },
  { nombre: "Bruno", notas: [6, 5, 7, 8, 6] },
  { nombre: "Carla", notas: [10, 9, 10, 10, 9] },
  { nombre: "Diego", notas: [4, 6, 5, 7, 6] },
  { nombre: "Elena", notas: [9, 8, 9, 10, 9] },
  { nombre: "Fernando", notas: [3, 4, 5, 6, 5] },
  { nombre: "Lucía", notas: [7, 8, 8, 9, 7] },
  { nombre: "Martín", notas: [5, 6, 6, 7, 6] },
  { nombre: "Nadia", notas: [10, 10, 9, 10, 10] },
  { nombre: "Pablo", notas: [2, 4, 3, 5, 4] }
];

function calcularPromedio(listaNumeros) {
  let suma = 0

  listaNumeros.forEach(x => {
    suma = suma + x
  });

  return suma/listaNumeros.length
}

nuevaLista = personas.map(
    () => {}
)

console.log("La lista con promedios incluídos: ", nuevaLista)