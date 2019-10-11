const express = require('express')
const db = require('../data/db-config')
const Resources = require('./resource-model')


const router = express.Router()
  
////// resources ///////////////////////////////////

router.get('/', (req, res) => {
    Resources.find()
    .then(resources => {
        res.json(resources)
    })
    .catch(err => {
        res.status(500).json({message: 'failed to get resources'})
    })
})

router.post('/', (req, res) => {
    const resourceData = req.body
    

    db('resources')
    .insert(resourceData)
    .then(resource => {
        res.status(201).json({created: 'succesful resource post'})
    })
    .catch(err => {
        res.status(500).json({message: 'failed to create new resource!'})
    })
})







module.exports = router