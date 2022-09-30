require("dotenv").config();
const express = require('express');
const app = express();
const routes = require('./routes/router');
const conect = require('./db/database');

app.use(express.json());
app.use('/person', routes);
app.use(express.urlencoded({extended: true}));

const port = 12;

if(conect()){
    app.listen(port, () => {
        console.log(`app rodando na porta ${port}`);
    });
}

