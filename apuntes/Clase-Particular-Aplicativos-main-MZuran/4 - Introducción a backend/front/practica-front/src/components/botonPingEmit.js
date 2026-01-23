

export function BotonPing({ socket }) {

    function buttonHandler() {
        socket.emit("ping", { mensaje: "te fuiste pingeado jaja" })
    }

    return (
        <>
            <button onClick={buttonHandler} >Ping</button>
        </>
    )
}