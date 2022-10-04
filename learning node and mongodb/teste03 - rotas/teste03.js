const express = require('express');
const app = express();

app.get('/', function (req, res){
    res.send("AAAAAAAAAAAAAAAAAAAAAAAA");
});

app.get('/batata', (req,res) => {
    res.send("frita");
});

app.get('/ab/:a/:b', (req,res) => {
    res.send(req.params);
});

app.get('/nome/:nome/:idade', (req, res) => {
    res.send("seja bem-vindo "+ req.params.nome);
});

app.listen(1234, () => {console.log("o servidor está rodando!")});