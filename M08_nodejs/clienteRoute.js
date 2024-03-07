const express = require('express');
const service = require('./clinteService');

const router = express.Router();

router.get('/', async (req, res)=>{
    const clientes = await service.getClientes();
    return res.status(200).json(clientes);
});

router.get('/:id', async (req,res)=>{
    const { id } = req.params;

    const cliente = await service.getClienteById(id);

    if(cliente === null || cliente === undefined)
        return res.status(404).json({message:'cliente não encontrado'});
    else
        return res.status(200).json(cliente);
});

router.post('/',async (req,res)=>{
    const cliente = req.body;

    const clienteNovo = await service.createCliente(cliente);

    return res.status(201).json(clienteNovo);
});

router.put('/:id',async (req,res)=>{
    const { id } = req.params;

    const clienteInput = req.body;

    const cliente = await service.updateCliente(id,clienteInput);

    return cliente === null ? res.status(404).json({message:'cliente não encontrado'}) :
                              res.status(200).json(cliente);
});

router.delete('/:id', async (req, res)=>{
    const { id } = req.params;

    const cliente = await service.deleteCliente(id);

    return cliente === null? res.status(404).json({message:'cliente não encontrado'}) :
                             res.status(204).json(cliente);
});

module.exports = router;