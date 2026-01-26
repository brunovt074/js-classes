//  Proyecto de Producción - 5to Informática

// Docentes: Matías Marchesi, Martín Rivas

// Año 2025

// Cargo librerías instaladas y necesarias
const express = require('express');						// Para el manejo del web server
const bodyParser = require('body-parser'); 				// Para el manejo de los strings JSON
const cors = require('cors');


const app = express();                                  // Inicializo express para el manejo de las peticiones

app.use(cors());            							// Inicializo express para el manejo de las peticiones

app.use(bodyParser.urlencoded({ extended: false }));	// Inicializo el parser JSON
app.use(bodyParser.json());

const LISTEN_PORT = 4000;								// Puerto por el que estoy ejecutando la página Web

const server = app.listen(LISTEN_PORT, () => {
	console.log(`Servidor NodeJS corriendo en http://localhost:${LISTEN_PORT}/`);
});;


let alimentos = [
	{
		nombre: "Manzana",
		stock: 50,
		precio: 12
	},
	{
		nombre: "Banana",
		stock: 30,
		precio: 8
	},
	{
		nombre: "Leche",
		stock: 20,
		precio: 15
	},
	{
		nombre: "Pan",
		stock: 40,
		precio: 10
	},
	{
		nombre: "Queso",
		stock: 15,
		precio: 25
	}
];

app.get('/alimentos', function (req, res) {
	res.send({ alimentos: obtenerNombres(alimentos) })
})

function obtenerNombres(alimentos) { return alimentos.map(alimento => alimento.nombre); }

app.post('/detalleAlimento', function (req, res) {
	let entro = false
	for (let i = 0; i < alimentos.length; i++) {
		const element = alimentos[i];
		if (element.nombre == req.body.nombre) {
			entro = true;
			res.send({ detalle: element })
		}
	}
	if (!entro) {
		res.send({ detalle: "No se encontro el alimento" })
	}
})

app.put('/stockAlimento', function (req,res) {
    let entro = false
	for (let i = 0; i < alimentos.length; i++) {
		const element = alimentos[i];
		if (element.nombre == req.body.nombre) {
			entro = true;
            alimentos[i].stock = req.body.stock
			res.send({ detalle: "Se modifico el stock" })
		}
	}
	if (!entro) {
		res.send({ detalle: "No se encontro el alimento" })
	}
})