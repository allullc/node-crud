const clientes = require('./Model/clientes');
const reservas = require('./Model/reservas');
const categoria = require('./Model/categoria');
const municipio = require('./Model/municipio');
const provincias = require('./Model/provincias');
const tipo = require('./Model/tipo');

module.exports = {
    Clientes: clientes,
    Reservas: reservas,
    Categoria: categoria,
    Municipio: municipio,
    Provincias: provincias,
    Tipo: tipo
}
