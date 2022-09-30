const mongoose = require('mongoose');

const Person = mongoose.model('Person', {//cria tabela Persons, ele sempre passa do singular pro plural
    name: String,
    gender: String,
    salary: String,
    cell: Number,
    work: String
})

module.exports = Person