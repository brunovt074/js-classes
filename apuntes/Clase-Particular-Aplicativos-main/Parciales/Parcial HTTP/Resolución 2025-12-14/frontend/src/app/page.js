"use client"

import React from 'react'

import { useEffect } from 'react'
import { useState } from 'react'

import { Editar } from '@/components/Editar'

function Home() {

  const [productos, setProductos] = useState([])
  const [casilla, setCasilla] = useState(false)
  const [productoSeleccionado, setProductoSeleccionado] = useState()

  useEffect(
    () => {

      // Debe hacerce acá

      fetch('http://localhost:4000/productos')
        .then(response => response.json())
        .then((data) => {

          // Acá adentro hacemos lo que querramos con lo que nos llega del GET
          console.log("El servidor nos devolvió lo siguiente:")
          console.log(data)

          // Guardamos data.productos dentro de la variable de estado productos
          setProductos(data.productos)

        })

    },
    []
  )

  function changeHandlerSelect(e) {
    setProductoSeleccionado(e.target.value)
  }

  return (
    <div>
      <h1>Home</h1>

      <p>
        El producto seleccionado es: {productoSeleccionado}
      </p>

      <select onChange={changeHandlerSelect} >

        {/* Debe decir <option> {nombre del producto} - {stock del producto} </option> */}
        {productos.map(

          (objetoProducto) => {
            
            return (

              <option
                key={objetoProducto.id} 
                value={objetoProducto.nombre}
                >

                {objetoProducto.nombre} - {objetoProducto.stock}

              </option>
            )
          }
        )}

      </select>

      <input
        type={"checkbox"}
        onChange={(e) => { setCasilla(e.target.checked) }}
      >
      </input>

      {casilla && <Editar nombreProducto={productoSeleccionado} ></Editar>}

    </div>
  )
}

export default Home

/*
  Si queremos que algo SÓLO OCURRA UNA VEZ (Ignorando recargas), debemos utilizar un useEffect SIN DEPENDENCIAS

  El useEffect va a ejecutar el efecto (el callback) si se cumple 1 de 2 condiciones:

    1)  Carga el componente por primera vez (ignorando recargas)
    2)  Una variable dentro del array de dependencias cambia su valor


    Tenemos la variable de estado que guarda el array de productos

    [producto, producto, producto, producto]

    [<option/>,<option/>,<option/>,<option/>]

    mapeo - Viene de array.map

    array.map era un método que recibía un callback y lo pasaba en todo el array

    productos.map(callback) == 
    [callback(producto),callback(producto),callback(producto),callback(producto)]

    El objetivo es crear una función que recibe un producto { id, nombre, stock }
    Y lo transforme a una etiqueta <option></option>
*/