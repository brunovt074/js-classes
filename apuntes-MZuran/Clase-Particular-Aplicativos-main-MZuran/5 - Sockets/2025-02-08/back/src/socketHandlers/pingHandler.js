const pingHandler = () => {
    console.log("Me pingearon")
    io.emit("pong")
}

module.exports = { pingHandler }