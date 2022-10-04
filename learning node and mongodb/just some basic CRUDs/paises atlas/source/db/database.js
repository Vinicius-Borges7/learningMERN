const mongoose = require('mongoose');

async function connect(){
    mongoose
        .connect('mongodb+srv://vinicius:senha@teste.byskiqr.mongodb.net/?retryWrites=true&w=majority')
        .then(() => {
            console.log('conectado com sucesso ao mongoDB atlas');
            let token = true;
            return token;
        })
        .catch((error) => {
            console.log(error);
            let token = false;
            return token;
        });   
}

module.exports = connect;