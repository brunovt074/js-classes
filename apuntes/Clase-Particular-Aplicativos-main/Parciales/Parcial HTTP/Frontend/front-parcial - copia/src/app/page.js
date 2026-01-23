"use client"

import React from 'react'
import { Editar } from '@/components/Editar'

import { useEffect, useState } from 'react'

function Home() {

  const [productos, setProductos] = useState([])
  const [productoSeleccionado, setProductoSeleccionado] = useState()
  const [valorCheckbox, setValorCheckbox] = useState(false)

  function clickHandlerCheckbox() {
    // Cada vez que hacemos click, queremos que el valor de checkbox sea su opuesto
    // true -> false
    // false -> true
    // ! (NOT) Toma la variable y devuelve su valor opuesto
    setValorCheckbox( !valorCheckbox )
  }

  // Cuando carga la página, este useEffect hace un fetch y actualiza
  // la variable de estado productos
  useEffect(
    () => {

      // Debemos hacer un pedido de tipo GET a http://localhost:4000/productos
      fetch('http://localhost:4000/productos',
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        }).then(response => response.json())

        .then(data => {
          console.log(data)
          setProductos(data.productos)
        })

    }, []) // Array de dependencias vacío

  return (
    <div>
      <h1>Home</h1>
      <p>Esta pagina hace el fetch cuando la cargamos</p>

      <select name="select">
        {
          productos.map(
            elemento =>
              <option value={elemento.nombre} key={elemento.id} >{elemento.nombre} - {elemento.stock}</option>
          )
        }
      </select>

        <br/>

      <label>Checkbox:</label>

      <input
        type='checkbox'
        value={valorCheckbox}
        onClick={clickHandlerCheckbox}
      ></input>

      <br/>

      {
        valorCheckbox && <Editar/>
      }

    </div>
  )
}

export default Home
