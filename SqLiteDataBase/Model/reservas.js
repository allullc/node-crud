const { sequelize } = require('../dbConection');
const { DataTypes } = require('sequelize');

const Reservas = sequelize.define('Reservas', {
    datos_r_html: DataTypes.TEXT,
    no_cliente: DataTypes.INTEGER,
    fecha_reserva: DataTypes.DATE
});

const AnnadirReserva = async (reserva) => {
    try {
        return await Reservas.create({
            datos_r_html: reserva.datos_r_html,
            no_cliente: reserva.no_cliente,
            fecha_reserva: reserva.fecha_reserva
        })
    } catch (error) {
        throw error;
    }
}

const LeerReservas = async () => {
    try {
        return await Reservas.findAll();
    } catch (error) {
        throw error;
    }
}

module.exports = {
    AnnadirReserva: AnnadirReserva,
    LeerReservas: LeerReservas
}
