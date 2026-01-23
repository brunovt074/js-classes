/*
    Cómo usar el socket dentro de un
*/

useEffect(() => {
    socket.on("newMessage", (data) => {
        console.log("Llegó un nuevo mensaje!", data)
    })

    return () => {
        socket.removeAllListeners("newMessage")
        socket.disconnect()
    }
}, [])

// Funcion de marche
import { useSocket } from "@/hooks/useSocket"
const { socket, isConnected } = useSocket();

useEffect(() => {
    if (!socket) return;
    
    //aca pongo los socket.on

}, [socket, isConnected]);