const Sequelize = require("sequelize");
const db = require("../database/database");
const Category = require("./CategoryModel");
const WeightType = require("./WeightTypeModel");

const ProductModel = db.define('products',{
     name:{
        type: Sequelize.STRING,
        allowNull: false
     },weight:{
         type: Sequelize.INTEGER,
         allowNull: false
     }
});

Category.hasMany(ProductModel); 
ProductModel.belongsTo(Category);
ProductModel.belongsTo(WeightType);

// ProductModel.sync({force: true})

module.exports = ProductModel;