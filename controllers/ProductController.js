const ProductModel = require("../models/ProductModel");
const app = require("express");
const CategoryModel = require("../models/CategoryModel");
const WeightTypeModel = require("../models/WeightTypeModel");
const router = app.Router();

router.get("/product", (req, res) => {

});
router.get("/product/create", (req, res) => {
    WeightTypeModel.findAll().then(weightTypes => {
        CategoryModel.findAll().then(categories => {
            res.render("product/create", {weightTypesView: weightTypes, categoriesView: categories});
        });
    });
});
router.get("/product/update", (req, res) => {
    res.render("product/create");
});
router.post("/product/save", (req, res) => { 
    var name = req.body.name;
    var weight = req.body.weight;

    ProductModel.create({
        name: name,
        weight: weight
    }).then(() => {
        res.render("product/list"); 
    });
    
});
router.put("/product/updated", (req, res) => { 
    res.render("product/create"); 
});
router.delete("/product/delete", (req, res) => { 
    res.render("product/create"); 
});

module.exports = router;