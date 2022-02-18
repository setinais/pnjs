const Sequelize = require("sequelize");

const db = new Sequelize("estoque","root","root",{
    host: '127.0.0.1',
    dialect: 'mysql',
    timezone: "-03:00"
});

module.exports = db;