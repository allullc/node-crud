const express = require('express')
const {Categoria} = require("../SqLiteDataBase");
const router = express.Router()


router.post('/annadir', async (req, res) => {
    const {object} = req.body
    try {
        await Categoria.AnnadirCategoria(object);
        const data = await Categoria.ObtenerCategoria()
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error)
    }
})

router.get('/obtener', async (req, res) => {
    try {
        const data = await Categoria.ObtenerCategoria()
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error)
    }
})

router.post('/eliminar', async (req, res) => {
    const {id} = req.body
    try {
        await Categoria.EliminarCategoria(id);
        const data = await Categoria.ObtenerCategoria()
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error)
    }
})

router.post('/modificar', async (req, res) => {
    const {object} = req.body
    try {
        await Categoria.ModificarCategoria(object);
        const data = await Categoria.ObtenerCategoria()
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error)
    }
})

module.exports = {
    router: router,
}
