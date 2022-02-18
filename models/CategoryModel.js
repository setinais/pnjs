const Sequelize = require("sequelize");
const db = require("../database/database");

const CategoryModel = db.define('categorys',{
    name:{
        type: Sequelize.STRING,
        allowNull: false
    }, description:{
        type: Sequelize.STRING,
        allowNull: false
    }
});

// CategoryModel.sync({force: true});

module.exports = CategoryModel;