const express   = require('express');
const router    = express.Router();

router.get('/',(req,res)=>{
    res.send('Petición Get a hierba mala')
})
router.post('/',(req,res)=>{
    console.log(req.body);
    res.send('Petición Post a hierba mala')
})

module.exports = router