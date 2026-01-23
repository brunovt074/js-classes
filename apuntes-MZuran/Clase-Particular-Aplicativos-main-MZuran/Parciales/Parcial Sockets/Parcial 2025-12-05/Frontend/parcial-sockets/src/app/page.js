"use client"

import React from 'react'

function Page() {

  function buttonHandler() {
    console.log("Se detectó el evento del click y se ejecutó el callback")
  }

  return (
    <div>
      <h1>Home</h1>

      <button onClick={buttonHandler} >Haceme click</button>

    </div>
  )
}

export default Page
