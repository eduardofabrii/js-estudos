// Aplicação para usar bancos relacionais
const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/app.db'
});

module.exports = sequelize;