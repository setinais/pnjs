const db = require("./database/database");
const ex = require("express");
const express = ex();
const Category = require("./models/CategoryModel");
const Product = require("./models/ProductModel");
const WeightType = require("./models/WeightTypeModel");

// express.set('view engine', 'ejs');

db.authenticate().then(() => {
    console.log("Conectado no DB");
}).catch((error) => {
    console.log(error);
})

express.get("/", (req, res) => {
    res.send("<h1>Testeando servidor</h1>");
});

express.listen(1212, () => {});