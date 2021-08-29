const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    nome: {type: String, unique: false, required: true},
    dataNascimento: {type: String, unique: false, required: true},
    estadoCivil: {type: String, unique: false, required: false},
    genero: {type: String, unique: false, required: false},
    cargo: {type: String, unique: false, required: true},
    email:{type: String, unique: true, required: true},
    celular: {type: String, required: true},
    telFixo: {type: String, required: false},
    endereco: {type: String, unique: false, required: true},
    bairro: {type: String, unique: false, required: true},
    cidade: {type: String, unique: false, required: true},
    cep: {type: String, unique: false, required: true},
    RG: {type: String, unique: true, required: true},
    CPF: {type: String, unique: true, required: true},
    veiculo: {type: Boolean, unique: false, required: false},
    cnh: {type: Boolean, unique: false, required: false}
}, {
    timestamps:true
});

module.exports = mongoose.model ('Candidate', CandidateSchema);