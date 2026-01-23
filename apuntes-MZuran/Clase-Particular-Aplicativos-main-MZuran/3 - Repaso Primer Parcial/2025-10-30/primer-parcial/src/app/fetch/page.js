// src/app/ejemplo/page.js
"use client"

import { useState, useEffect } from 'react';
import Tarjeta from '@/components/Tarjeta';

export default function EjemploFetch() {

  const url = "https://pokeapi.co/api/v2/pokemon/ditto"

  const [data, setData] = useState('');                   // Acá se guarda la información descargada
  const [loading, setLoading] = useState(true);           // Acá se guarda la infromación acerca de si la descarga terminó (opcional)
  const [tarjetaPokemon, setTarjetaPokemon] = useState()  // Acá se guarda la información que se renderiza en pantalla

  // Este useEffect es el encargado de descargar la información
  useEffect(() => {

    // Fetch al cargar el componente
    fetch(url)

      .then(response => response.json())

      .then(response => {
        // Acá ya podemos empezar a manipular los datos que nos devuelve el url
        console.log(response);

        // response se llama lo que acabamos de descargar del servidor
        // data se llama la variable de estado en la cual podemos guardar la respuesta
        // loading es una variable de estado cuyo valor define si aparece el cartel de "Cargando..."

        setData(response);
        setLoading(false);

      });


  }, []); // Si un useEffect tiene un array de dependencias vacío, sólo se ejecuta el efecto 1 vez


  // Este segundo useEffect DEPENDE de la información descargada y la plasma en componentes renderizables
  // Nosotros queremos que cuando se descarguen los datos del pokemon, se guarde una tarjeta dentro de la variable de estado tarjetaPokemon
  useEffect(() => {
      
      // Nos tenemos que asegurar que la descarga haya terminado
      // ¿Cómo nos fijamos si se completó la descarga?
      // Con un if que devuelva un truthy si existe cierto valor

      if (data) {
        
        // Lo de acá adentro se ejecuta sólamente si se completó la descarga de datos
        // Ahora queremos asignarle un valor a la variable de estado tarjetaPokemon
        
        setTarjetaPokemon(<Tarjeta nombre={data.name}/>)

      }
    },
    [data] )

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Respuesta del Backend</h1>
      {tarjetaPokemon}
    </div>
  );
}