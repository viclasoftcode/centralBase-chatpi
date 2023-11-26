const express   = require('express');
const router    = express.Router();
const hierbaMalaController = require('./controller.hierbamala')

router.get('/',(req,res)=>{
    res.send('Petición Get a hierba mala')
})
router.post('/',(req,res)=>{
    console.log(req.body);
    const {name,cellphone,product,flavor,quantity} = req.body
    hierbaMalaController.addNewInfoHierbaMala(name,cellphone,product,flavor,quantity)
        .then(answer=>{
            res.send(answer)
        })
        .catch(e=>{
            res.send(e)
        })
})

module.exports = router