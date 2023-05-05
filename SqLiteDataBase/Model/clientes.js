const {sequelize} = require('../dbConection');
const {DataTypes} = require('sequelize');


const Cliente = sequelize.define('Cliente', {
    no_cliente: DataTypes.INTEGER,
    nombre_apellidos: DataTypes.TEXT,
    nombre_negosio: DataTypes.TEXT,
    gravamen: DataTypes.FLOAT,
    telefono: DataTypes.INTEGER,
    Whatsapp: DataTypes.TEXT,
    email: DataTypes.TEXT,
    direccion: DataTypes.TEXT,
    ubicacion_gps: DataTypes.TEXT,
    id_provincia: DataTypes.INTEGER,
    id_municipio: DataTypes.INTEGER,
    id_categoria: DataTypes.INTEGER,
    id_tipo: DataTypes.INTEGER,
});


const AnnadirCliente = async (cliente) => {
    try {
        return await Cliente.create({
            no_cliente: cliente.no_cliente,
            nombre_apellidos: cliente.nombre_apellidos,
            nombre_negosio: cliente.nombre_negosio,
            gravamen: cliente.gravamen,
            telefono: cliente.telefono,
            Whatsapp: cliente.Whatsapp,
            email: cliente.email,
            direccion: cliente.direccion,
            ubicacion_gps: cliente.ubicacion_gps,
            id_provincia: cliente.id_provincia,
            id_municipio: cliente.id_municipio,
            id_categoria: cliente.id_categoria,
            id_tipo: cliente.id_tipo,
        })
    } catch (error) {
        throw error;
    }
}

const EliminarCliente = async (id) => {
    try {
        return await Cliente.destroy({
            where: {
                id: id
            }
        });
    } catch (error) {
        throw error;
    }
}

const ModificarCliente = async (cliente) => {
    try {
        return await Cliente.update({
                no_cliente: cliente.no_cliente,
                nombre_apellidos: cliente.nombre_apellidos,
                nombre_negosio: cliente.nombre_negosio,
                telefono: cliente.telefono,
                Whatsapp: cliente.Whatsapp,
                email: cliente.email,
                direccion: cliente.direccion,
                ubicacion_gps: cliente.ubicacion_gps,
                id_provincia: cliente.id_provincia,
                id_municipio: cliente.id_municipio,
                id_categoria: cliente.id_categoria,
                id_tipo: cliente.id_tipo,
                id_servicio: cliente.id_servicio,
                id_productos: cliente.id_productos,
            },
            {
                where: {
                    id: cliente.id
                }
            })
    } catch (error) {
        throw error;
    }
}


const ObtenerClientes = async () => {
    try {
        return await Cliente.findAll();
    } catch (error) {
        throw error;
    }
}

//Cliente.sync({ force: true });

module.exports = {
    AnnadirCliente: AnnadirCliente,
    EliminarCliente: EliminarCliente,
    ModificarCliente: ModificarCliente,
    ObtenerClientes: ObtenerClientes
}
