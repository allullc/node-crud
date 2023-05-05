const {sequelize} = require('../dbConection');
const {DataTypes} = require('sequelize');


const Municipio = sequelize.define('Municipio', {
    nombre: DataTypes.TEXT,
    id_provincia: DataTypes.INTEGER,
});


const AnnadirMunicipio = async (municipio) => {
    try {
        return await Municipio.create({
            nombre: municipio.nombre,
            id_provincia: municipio.id_provincia,
        })
    } catch (error) {
        throw error;
    }
}

const EliminarMunicipio = async (id) => {
    try {
        return await Municipio.destroy({
            where: {
                id: id
            }
        });
    } catch (error) {
        throw error;
    }
}

const ModificarMunicipio = async (municipio) => {
    try {
        return await Municipio.update({
            nombre: municipio.nombre,
            id_provincia: municipio.id_provincia
        }, {
            where: {
                id: municipio.id
            }
        })
    } catch (error) {
        throw error;
    }
}


const ObtenerMunicipio = async () => {
    try {
        return await Municipio.findAll();
    } catch (error) {
        throw error;
    }
}

module.exports = {
    AnnadirMunicipio: AnnadirMunicipio,
    EliminarMunicipio: EliminarMunicipio,
    ModificarMunicipio: ModificarMunicipio,
    ObtenerMunicipio: ObtenerMunicipio
}
