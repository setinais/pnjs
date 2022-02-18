const Sequelize = require("sequelize");
const db = require("../database/database");

const WeightTypeModel = db.define('weight_types',{
    name:{
        type: Sequelize.STRING,
        allowNull: false
    }
});

// WeightTypeModel.sync({force: true})

module.exports = WeightTypeModel;