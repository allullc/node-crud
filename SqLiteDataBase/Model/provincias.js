const {sequelize} = require('../dbConection');
const {DataTypes} = require('sequelize');


const Provincia = sequelize.define('Provincia', {
    nombre_provincia: DataTypes.TEXT,
});


const AnnadirProvincia = async (provincia) => {
    try {
        return await Provincia.create({
            nombre_provincia: provincia.nombre_provincia
        })
    } catch (error) {
        throw error;
    }
}

const EliminarProvincia = async (id) => {
    try {
        return await Provincia.destroy({
            where: {
                id: id
            }
        });
    } catch (error) {
        throw error;
    }
}

const ModificarProvincia = async (provincia) => {
    try {
        return await Provincia.update({
            nombre_provincia: provincia.nombre_provincia
        }, {
            where: {
                id: provincia.id
            }
        })
    } catch (error) {
        throw error;
    }
}

const ObtenerProvincia = async () => {
    try {
        return await Provincia.findAll();
    } catch (error) {
        throw error;
    }
}

module.exports = {
    AnnadirProvincia: AnnadirProvincia,
    EliminarProvincia: EliminarProvincia,
    ModificarProvincia: ModificarProvincia,
    ObtenerProvincia: ObtenerProvincia
}
