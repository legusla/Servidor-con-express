const express = require('express');

const Contenedor = require('./Contenedor');
const contenedor = new Contenedor('./productos.json');

const server = express();

const PORT = 8080;

const obtenerRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const PATH = '/';
const callback = (request, response, next) => {
    response.send({ mensaje: 'HOLA NACHO'});
};
server.get(PATH, callback);

server.get('/productos', async (req, res) => {
    const productos = await contenedor.getAll();
    res.json(productos);
});

server.get('/productosRandom', async (req, res) => {
    const productos = await contenedor.getAll();
    const productoRandom = obtenerRandom(0, productos.length - 1);
    res.json(productos[productoRandom]);
});

const callbackInit = () => {
    console.log(`Servidor iniciado en el puerto: ${PORT}`);
}

server.listen(PORT, callbackInit);

server.on('error', (error) => console.log('Error: ', error));


