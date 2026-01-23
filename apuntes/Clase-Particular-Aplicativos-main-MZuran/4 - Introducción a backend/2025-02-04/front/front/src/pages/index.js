import React from 'react'
import { BotonSwal } from '@/components/botonSwal';
import { BotonFetch } from '@/components/botonFetch';
import { PersonasDisplay } from '@/components/personasDisplay';
import { useState, useEffect } from 'react';
import { BotonAñadirPersona } from '@/components/botonAñadirPersona';

export default function Home() {

  /*
    Pasarle al componente button un prop
    ese prop se llama
    onClick={}

    Dentro del onClick ponemos la DEFINICION (en lugar de la ejecucion) de la funcion
  */

  /*
    El useEffect se encarga de ejecutar el callback las veces que se lo indique el array de dependencias
    Si no tiene dependencias, el callback se ejecuta una sola vez al principio
    Si tiene dependencias, el callback se ejecuta CADA VEZ QUE LA DEPENDENCIA CAMBIE

    Java
    Script
    Object
    Notation
  */
  useEffect(
    () => {}, // El efecto. El callback.
    []        // Array de dependencias
  )

  return (
    <div>
      <h1>Aplicacion Backend 1</h1>
      <BotonSwal/>
      <BotonFetch/>
      <BotonAñadirPersona/>
      <PersonasDisplay/>
    </div>
  )
}
