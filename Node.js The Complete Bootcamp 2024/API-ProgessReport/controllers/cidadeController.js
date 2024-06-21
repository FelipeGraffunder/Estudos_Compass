const Cidade = require('./../models/cidadeModel');
const APIFeatures = require('./../utils/apiFeatures');

exports.createCidade = async (req,res) => {
    try{
        const newCidade = await Cidade.create(req.body);
        res.status(201).json({
            status: 'Sucesso',
            data:{
                cidade: newCidade
            }
        });
    }catch(err){
        console.log(err);
        res.status(400).json({
            status: 'Fail',
            message: err.message
        });
    }
}

exports.getAllCidades = async (req,res)=>{
    try{
        const features = new APIFeatures(Cidade.find(), req.query)
        .filter()
        .limitFields()
        .paginate();
        console.log(features);
        const cidade = await features.query;
        console.log(cidade);

        res.status(200).json({
            status: 'success',
            results: cidade.length,
            data: {
              cidade
            }
        });

    }
    catch(err) {
        res.status(404).json({
          status: 'fail',
          message: err
        });
      }
}

exports.getCidadeByNome = async (req,res)=>{
    try{
        const cidade = await Cidade.find({nome : req.params.nome});

        res.status(200).json({
            status: 'success',
            data: {
                cidade,
            },
          });

    }catch (err) {
        res.status(404).json({
        status: 'fail',
        message: err,
        });
    }
}

exports.getCidadeByEstado = async (req, res) => {
    try {

      const cidade = await Cidade.find({ estado: req.params.estado });

      res.status(200).json({
        status: 'success',
        results: cidade.length,
        data: {
          cidade
        }
      });
      
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err
      });
    }
  };