const db = require("./database/database");
const ex = require("express");
const session = require('express-session');
const app = ex();
const Category = require("./models/CategoryModel");
const Product = require("./models/ProductModel");
const WeightType = require("./models/WeightTypeModel");
const ProductController = require("./controllers/ProductController");
require("dotenv/config");
const URL = process.env.URL_PROJECT + process.env.PORT;

app.set('view engine', 'ejs');
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json);

//Adicionar pasta de arquivos public
app.use(ex.static('public'));

//Adicionar rotas do Controller
app.use('/',ProductController);

//Autenticação de DB
db.authenticate().then(() => {}).catch((error) => {});

app.get("/", (req, res) => {
    res.render("product_create");
});

app.listen(process.env.PORT, () => {});