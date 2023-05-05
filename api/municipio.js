const express = require('express')
const {Municipio} = require("../SqLiteDataBase");
const router = express.Router()

router.post('/annadir', async (req, res) => {
    const {object} = req.body
    try {
        await Municipio.AnnadirMunicipio(object);
        const data = await Municipio.ObtenerMunicipio()
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error)
    }
})

router.get('/obtener', async (req, res) => {
    try {
        const data = await Municipio.ObtenerMunicipio()
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error)
    }
})

router.post('/eliminar', async (req, res) => {
    const {id} = req.body
    try {
        await Municipio.EliminarMunicipio(id);
        const data = await Municipio.ObtenerMunicipio()
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error)
    }
})

router.post('/modificar', async (req, res) => {
    const {object} = req.body
    try {
        await Municipio.ModificarMunicipio(object);
        const data = await Municipio.ObtenerMunicipio()
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error)
    }
})

module.exports = {
    router: router,
}
