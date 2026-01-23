"use client"

import React from 'react'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import DetalleAlimento from '@/components/DetalleAlimento'

function Page() {

    const searchParams = useSearchParams()
    const [detalleComida, setDetalleComida] = useState({})
    const [stockIngresado, setStockIngresado] = useState(0)

    useEffect(
        () => {

            const body = {
                nombre: searchParams.get("alimento")
            };

            fetch('http://localhost:4000/detalleAlimento', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            })
                .then(response => response.json())
                .then(data => {

                    console.log("El servidor respondió con", data)
                    setDetalleComida(data.detalle)

                });

        },
        []
    )

    function buttonClickHandler() {
        const body = {
            nombre: detalleComida.nombre,
            stock: stockIngresado
        };

        fetch('http://localhost:4000/stockAlimento', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        })

            .then(response => response.json())
            .then(data => {

                console.log(data)

            });
    }

    return (
        <div>
            <h1>Detalle</h1>

            <div>
                <input
                    type='number'
                    onChange={(e) => { setStockIngresado(e.target.value) }}
                    value={stockIngresado}
                    min={0}
                ></input>

                <button onClick={buttonClickHandler} >Actualizar Stock</button>

                <DetalleAlimento nombre={detalleComida.nombre} precio={detalleComida.precio} stock={detalleComida.stock} />
            </div>

            {detalleComida.nombre ? <p>El producto existe. Acá deberíamos poner todo lo que queremos que se muestre si existe.</p> : <p>El producto no existe</p>}

        </div>
    )
}

export default Page
