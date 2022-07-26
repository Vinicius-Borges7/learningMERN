const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.get('/home', (req, res) => {
    res.render('../views/home');
});

app.listen(1234, () => {console.log("o servidor está rodando!")});