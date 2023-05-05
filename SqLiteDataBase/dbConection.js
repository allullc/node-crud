const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './SqLiteDataBase/asset/dataBase.db'
});

module.exports={
    sequelize: sequelize,
}
