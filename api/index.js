const express = require('express')
const app = express()

const reservas = require('./reservas')
const clientes = require('./clientes')
const provincias = require('./provincias')
const municipio = require('./municipio')
const categoria = require('./categoria')
const tipo = require('./tipo')

app.use('/reservas', reservas.router)
app.use('/clientes', clientes.router)
app.use('/provincias', provincias.router)
app.use('/municipio', municipio.router)
app.use('/categoria', categoria.router)
app.use('/tipo', tipo.router)

module.exports = {
    api: app
}
