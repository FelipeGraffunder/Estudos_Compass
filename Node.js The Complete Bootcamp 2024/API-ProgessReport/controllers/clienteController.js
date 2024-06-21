const Cliente = require('./../models/clienteModel');
const APIFeatures = require('./../utils/apiFeatures');

exports.createCliente = async (req,res)=>{
    try{
        const newCliente = await Cliente.create(req.body);
        res.status(201).json({
            status: 'Sucesso',
            data:{
                cliente: newCliente
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

exports.getAllClientes = async (req,res)=>{
    try{
        const features = new APIFeatures(Cliente.find(), req.query)
        .filter()
        .limitFields()
        .paginate();
        console.log(features);
        const cliente = await features.query;
        console.log(cliente);

        res.status(200).json({
            status: 'success',
            results: cliente.length,
            data: {
                cliente
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

exports.deleteCliente = async (req, res)=>{
    try {
        await Cliente.findByIdAndDelete(req.params.id);

        res.status(204).json({
          status: 'success',
          data: null,
        });
    } catch (err) {
        res.status(404).json({
        status: 'fail',
        message: err,
        });
    }
};

exports.updateClienteNome = async (req,res)=>{
    try{
        if(!req.body.nome){
            return res.status(400).json({
                status: 'fail',
                message: 'Nome não fornecido',
              });
        }

        const cliente = await Cliente.findByIdAndUpdate(
            req.params.id,
            {nome: req.body.nome},
            {
                new:true,
                runValidators:true
            }
        );

        res.status(200).json({
            status: 'success',
            data: {
              cliente,
            },
          });

    }catch(err){
        res.status(404).json({
            status: 'fail',
            message: err,
          });
    }
}

exports.getClienteByID = async (req,res)=>{
    try{
        const cliente = await Cliente.findById(req.params.id).populate('cidade');

        res.status(200).json({
            status: 'success',
            data: {
              cliente,
            },
          });

    }catch (err) {
        res.status(404).json({
        status: 'fail',
        message: err,
        });
    }
}

exports.getClienteByNome = async (req,res)=>{
    try{
        const cliente = await Cliente.find({nome : req.params.nome}).populate('cidade');

        res.status(200).json({
            status: 'success',
            data: {
              cliente,
            },
          });

    }catch (err) {
        res.status(404).json({
        status: 'fail',
        message: err,
        });
    }
}