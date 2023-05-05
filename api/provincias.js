const express = require('express')
const {Provincias} = require("../SqLiteDataBase");
const router = express.Router()

router.post('/annadir', async (req, res) => {
    const {object} = req.body
    try {
        await Provincias.AnnadirProvincia(object);
        const data = await Provincias.ObtenerProvincia()
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error)
    }
})

router.get('/obtener', async (req, res) => {
    try {
        const data = await Provincias.ObtenerProvincia()
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error)
    }
})

router.post('/eliminar', async (req, res) => {
    const {id} = req.body
    try {
        await Provincias.EliminarProvincia(id);
        const data = await Provincias.ObtenerProvincia()
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error)
    }
})

router.post('/modificar', async (req, res) => {
    const {object} = req.body
    try {
        await Provincias.ModificarProvincia(object);
        const data = await Provincias.ObtenerProvincia()
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error)
    }
})

module.exports = {
    router: router,
}
