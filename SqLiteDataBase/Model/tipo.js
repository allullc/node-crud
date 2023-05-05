const {sequelize} = require('../dbConection');
const {DataTypes} = require('sequelize');


const Tipo = sequelize.define('Tipo', {
    nombre: DataTypes.TEXT,
    id_categoria: DataTypes.INTEGER,
});


const AnnadirTipo = async (tipo) => {
    try {
        return await Tipo.create({
            nombre: tipo.nombre,
            id_categoria: tipo.id_provincia,
        })
    } catch (error) {
        throw error;
    }
}

const EliminarTipo = async (id) => {
    try {
        return await Tipo.destroy({
            where: {
                id: id
            }
        });
    } catch (error) {
        throw error;
    }
}

const ModificarTipo = async (tipo) => {
    try {
        return await Tipo.update({
            nombre: tipo.nombre,
            id_categoria: tipo.id_categoria
        }, {
            where: {
                id: id
            }
        })
    } catch (error) {
        throw error;
    }
}

const ObtenerTipo = async () => {
    try {
        return await Tipo.findAll();
    } catch (error) {
        throw error;
    }
}

module.exports = {
    AnnadirTipo: AnnadirTipo,
    EliminarTipo: EliminarTipo,
    ModificarTipo: ModificarTipo,
    ObtenerTipo: ObtenerTipo
}
