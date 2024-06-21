const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema(
    {
        nome:{
            type: String,
            required: [true, 'Cliente deve ter um nome'],
            trim: true
        },
        sexo:{
            type:String,
            required:[true,'Cliente deve ter um sexo'],
            enum: {
                values: ['masculino', 'feminino', 'outro'],
                message: 'sexo deve ser: masculino, feminino, outro'
              }
        },
        dataDeNascimento:{
            type:Date,
            required:[true,'Cliente deve ter uma data de nascimento']
        },
        idade:{
            type: Number,
            required:[true,'Cliente deve ter uma idade']
        },
        cidade: {
            type: mongoose.Schema.ObjectId,
            ref: 'Cidade',
            required: [true, 'Cliente deve ter uma cidade']
          }
    }
);

const Cliente = mongoose.model('Cliente', clienteSchema);

module.exports = Cliente;