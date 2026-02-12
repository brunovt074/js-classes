"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation"; // Para leer los datos de la URL (Punto 1)
import io from "socket.io-client"; // La librería que acabamos de instalar
import EspacioParking from "@/components/EspacioParking"; // Nuestro componente "Ladrillo 1"
import FormularioVehiculo from "@/components/FormularioVehiculo"; // Nuestro componente "Ladrillo 2"

let socket; // Variable para la conexión

export default function ParkingPage() {
    // 1. LEER DATOS DE LA URL (Query Params)
    const searchParams = useSearchParams();
    const empleado = searchParams.get("empleado");
    const alumnoId = searchParams.get("alumnoId");

    // 2. ESTADOS (MEMORIA)
    const [parkingData, setParkingData] = useState(null); // Guardamos toda la info del parking
    const [conectado, setConectado] = useState(false); // ¿Estamos conectados?
    
    // Estados para los inputs del formulario
    const [patenteInput, setPatenteInput] = useState("");
    const [tipoInput, setTipoInput] = useState("auto");

    // 3. CONEXIÓN INICIAL (useEffect) 
    useEffect(() => {
        // Inicializamos la conexión (Usamos localhost:4000 para la práctica)
        socket = io("http://localhost:4000");

        // ESCUCHAR: Cuando nos unimos con éxito 
        socket.on("joined_OK_parking", (data) => {
            console.log("Conectado a la sala:", data.room);
            setParkingData(data.parking); // Guardamos los datos iniciales
            setConectado(true); // Habilitamos la pantalla
        });

        // ESCUCHAR: Cuando algo cambia (entra/sale auto) 
        socket.on("parking_actualizado", (data) => {
            setParkingData(data.parking); // Actualizamos la vista
        });

        // ESCUCHAR: Errores 
        socket.on("error_parking", (data) => {
            alert("ERROR: " + data.mensaje);
        });

        // Limpieza: Desconectar al salir de la página
        return () => { socket.disconnect(); };
    }, []);

    // 4. FUNCIONES DE LOS BOTONES

    // Botón "Conectarse" (Punto 2)
    const conectarSala = () => {
        if (!alumnoId) return alert("Falta ID de alumno");
        socket.emit("join_parking", { alumnoId }); // Enviamos el evento al servidor
    };

    // Botón "Registrar Entrada" (Punto 3)
    const registrarEntrada = () => {
        if (!patenteInput) return alert("Debe escribir una patente"); // Validación
        
        // Enviamos los datos al servidor
        socket.emit("registrar_entrada", { 
            empleado, 
            patente: patenteInput, 
            tipo: tipoInput 
        });
    };

    // Botón "Registrar Salida" (Punto 4) [cite: 114, 116]
    const registrarSalida = () => {
        socket.emit("registrar_salida", { patente: patenteInput });
    };

    // 5. LO QUE SE VE EN PANTALLA (RENDERIZADO)
    return (
        <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
            <h1>Panel de Control - Sala {alumnoId}</h1>
            {/* Requisito: Mostrar nombre del empleado */}
            <h2>Empleado: {empleado}</h2>

            {/* CONDITIONAL RENDERING GLOBAL  */}
            {/* Si NO está conectado, mostramos solo el botón de conectar */}
            {!conectado ? (
                <button 
                    onClick={conectarSala} 
                    style={{ padding: "15px", fontSize: "18px", backgroundColor: "#0070f3", color: "white", cursor: "pointer" }}
                >
                    CONECTARSE AL SISTEMA
                </button>
            ) : (
                // Si SÍ está conectado, mostramos todo el panel
                <>
                    {/* Requisito: Mostrar espacios libres [cite: 126] */}
                    <div style={{ marginBottom: "20px", fontSize: "18px" }}>
                        <strong>Espacios Libres: {parkingData?.espaciosLibres}/10</strong>
                        <p>Total Entradas: {parkingData?.totalEntradas} | Total Salidas: {parkingData?.totalSalidas}</p>
                    </div>

                    {/* GRILLA DE ESPACIOS (Usamos el componente EspacioParking) */}
                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {parkingData?.espacios.map((esp) => (
                            <EspacioParking 
                                key={esp.numero}
                                numero={esp.numero}
                                estado={esp.estado}
                                tipo={esp.tipo}
                                patente={esp.patente}
                            />
                        ))}
                    </div>

                    {/* FORMULARIO DE ACCIONES (Usamos el componente FormularioVehiculo) */}
                    <FormularioVehiculo 
                        onChangePatente={(e) => setPatenteInput(e.target.value)}
                        onChangeSelectTipo={(e) => setTipoInput(e.target.value)}
                        onClickEntrada={registrarEntrada}
                        onClickSalida={registrarSalida}
                    />
                </>
            )}
        </div>
    );
}