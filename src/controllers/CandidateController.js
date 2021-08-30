const Candidate = require('../models/Candidate');

module.exports ={
    async register(req, res){

        const{nome, dataNascimento, estadoCivil, genero, cargo, 
              email, celular, telefoneFixo, endereco, bairro, cidade, estado, 
              cep, RG, CPF, veiculo, cnh
        } = req.body;

        const newCandidate = new Candidate();

        newCandidate.nome =  nome;
        newCandidate.dataNascimento = dataNascimento;
        newCandidate.estadoCivil = estadoCivil;
        newCandidate.genero = genero;
        newCandidate.email = email;
        newCandidate.cargo = cargo;
        newCandidate.email = email;
        newCandidate.celular = celular;
        newCandidate.telefoneFixo = telefoneFixo;
        newCandidate.endereco = endereco;
        newCandidate.bairro = bairro;
        newCandidate.cidade = cidade;
        newCandidate.estado = estado;
        newCandidate.cep = cep;
        newCandidate.RG = RG;
        newCandidate.CPF = CPF;
        newCandidate.veiculo = veiculo;
        newCandidate.cnh = cnh

        newCandidate.save((err, savedCandidate)=>{
            if (err){
                console.log(err);
                return res.status(500).send (err);
            }

            return res.status(200).send(savedCandidate);
        });
    },
};