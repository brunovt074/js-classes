"use client"
// src/hooks/useSocket.js

/*
    Recordar que debemos cambiar el serverUrl de ser necesario

    const { socket, isConnected } = useSocket()
    
        useEffect(
            () => {
    
                if (!socket) { return }
    
                // Acá ya podemos poner las suscripciones
    
            },
            [socket]
        )
*/

import { useState, useEffect } from 'react';
import io from 'socket.io-client';

const useSocket = (options = { withCredentials: false }, serverUrl = "ws://localhost:4000/") => {
    const [socket, setSocket] = useState(null);
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        // Crear una conexión con el backend usando Socket.IO
        const socketIo = io(serverUrl, options);

        // Actualizar el estado de la conexión
        socketIo.on('connect', () => {
            setIsConnected(true);
            console.log('WebSocket conectado.');
        });

        socketIo.on('disconnect', () => {
            setIsConnected(false);
            console.log('WebSocket desconectado');
        });

        // Guardar la instancia del socket en el estado
        setSocket(socketIo);

        // Limpiar la conexión cuando el componente se desmonte
        return () => {
            socketIo.disconnect();
        };
    }, [serverUrl, JSON.stringify(options)]);

    return { socket, isConnected };
};

export { useSocket };
