const express = require('express')
const router = express()
const Status = require('../models/status')

//show all dogs
router.get('/', async(req, res) =>{
    try{
        const status = await Status.find()
        res.send({
            success: true,
            data: status
        })
    }catch(err){
        console.error(err)
        res.send({
            success: false, 
            data: 'server error'
        })
    }
})
//new
router.post('/', async(req, res)=>{
    try{
        const status = await Status.create(req.body)
        res.send({
            success: true, 
            data: status
        })
    }catch(err){ 
        console.error(err)
        res.send({
            success: false, 
            data: err.message
        })
    }
})

//update/
router.put('/:id', async(req, res) =>{
    try{
        const updatedStatus = await Status.findByIdAndUpdate(req.params.id, req.body, {new:true} )
        res.send({
            success: true, 
            data: updatedStatus
        })
    }catch(err){ 
        console.error(err)
        res.send({
            success: false, 
            data: err.message
        })
    }
})
router.delete('/:id', async(req, res) => {
    try{
        await Status.findByIdAndDelete(req.params.id)
        res.send({
            success: true,
        })
    }catch(err){ 
        console.error(err)
        res.send({
            success: false, 
            data: err.message
        })
    }
})
module.exports = router;
























module.exports = router;