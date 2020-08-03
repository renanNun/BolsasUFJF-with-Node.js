const express = require("express"); //Importando o Express
const app = express();
const bodyParser = require("body-parser"); //Importando o Body-Parser


//Informando o express para usar o EJS como engine na criação de HTML
app.set('view engine','ejs');
app.use(express.static('public'));

//Body-Parser
app.use(bodyParser.urlencoded ({ extended: false }));
app.use(bodyParser.json());

//Rotas
app.get("/", (req,res) => {
    res.render("index.ejs");
});