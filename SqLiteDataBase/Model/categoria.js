const {sequelize} = require('../dbConection');
const {DataTypes} = require('sequelize');


const Categoria = sequelize.define('Categoria', {
    nombre: DataTypes.TEXT,
});


const AnnadirCategoria = async (categoria) => {
    try {
        return await Categoria.create({
            nombre: categoria.nombre
        })
    } catch (error) {
        throw error;
    }
}

const EliminarCategoria = async (id) => {
    try {
        return await Categoria.destroy({
            where: {
                id: id
            }
        });
    } catch (error) {
        throw error;
    }
}

const ModificarCategoria = async (categoria) => {
    try {
        return await Categoria.update({
            nombre: categoria.nombre
        }, {
            where: {
                id: categoria.id
            }
        })
    } catch (error) {
        throw error;
    }
}

const ObtenerCategoria = async () => {
    try {
        return await Categoria.findAll();
    } catch (error) {
        throw error;
    }
}

module.exports = {
    AnnadirCategoria: AnnadirCategoria,
    EliminarCategoria: EliminarCategoria,
    ModificarCategoria: ModificarCategoria,
    ObtenerCategoria: ObtenerCategoria
}
