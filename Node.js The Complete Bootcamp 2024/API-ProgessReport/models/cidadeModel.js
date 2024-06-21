const mongoose = require('mongoose');
const slugify = require('slugify');

const cidadeSchema = new mongoose.Schema(
    {
        nome: {
            type: String,
            unique: true,
            trim: true,
            required:[true, 'Cidade deve ter um nome']
        },
        slug: String,
        estado: {
            type: String,
            trim: true,
            required:[true, 'Cidade deve ter um estado']
        }
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true }
    }
);

const Cidade = mongoose.model('Cidade', cidadeSchema);

module.exports = Cidade;