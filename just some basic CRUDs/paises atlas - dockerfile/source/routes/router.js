const router = require('express').Router();
const Person = require('../models/person.js');

/// insert ///
router.post('/', async (req,res) => {
    const { name, gender, salary, cell, work } = req.body

    const guri = {
        name,
        gender,
        salary,
        cell,
        work
    }

    try {
        await Person.create(guri)
        res.status(201).json({message: 'pessoa inserida com sucesso' })
    }  
    catch (error) {
        res.status(500).json({error: "erro encontrado" })
    }
});

/// get all ///
router.get('/', async (req, res) => {
    try {
        const gurizada = await Person.find();
        res.status(201).json({gurizada});

    } catch (error) {
        res.status(500).json({erro: "algo não deu certo :(" });
    }
});

/// get one ///
router.get('/:id', async (req, res) => {
    try {
        const guri = await Person.findOne({_id: req.params.id});
        
        if(!guri){
            res.status(424).json({erro: "usuario não existe"});
            return;
        }

        res.status(201).json(guri);

    } catch (error) {
        res.status(500).json({erro: "algo não deu certo :("});
    }
});

/*
    PUT -> atualiza com um obj COMPLETO
    PATCH -> atualiza com um obj completo OU NÂO
*/

/// update one ///
router.patch('/:id', async (req, res) => {
    const { name, gender, salary, cell, work } = req.body

    const newguri = {
        name,
        gender,
        salary,
        cell,
        work
    }

    if(!req.params.id){
        res.status(224).json({erro:"usuário não existe"}); 
        return
    }

    try {
        await Person.updateOne({_id:req.params.id}, newguri);
        res.status(201).json(newguri);

    } catch (error) {
        res.status(500).json({erro: "algo não deu certo :("});
    }
})

/// delete one /// 

router.delete('/:id', async (req, res) => {
    const id = req.params.id;

    const person = await Person.findOne({ _id: id });

    if(!person){
        res.status(422).json({message: "usuário não encontrado"});
        return;
    }

    try {
        await Person.deleteOne({ _id: id });
        res.status(200).json({message:"usuário removido com sucesso"});

    } catch (error) {
        res.status(500).json({erro: "algo não deu certo :("});
    }

});

module.exports = router;