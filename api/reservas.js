const express = require('express')
const {Reservas} = require("../SqLiteDataBase");
const router = express.Router()

router.get('/obtener', async (req, res) => {
    try {
        const data = await Reservas.LeerReservas()
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error)
    }
})

module.exports = {
    router: router,
}
