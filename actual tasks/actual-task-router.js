const express = require('express')
const db = require('../data/db-config')
const ActualTasks = require('./actual-task-model')


const router = express.Router()
  
////// tasks ///////////////////////////////////

router.get('/', (req, res) => {
    ActualTasks.find()
    .then(tasks => {
        res.json(tasks)
    })
    .catch(err => {
        res.status(500).json({message: 'failed to get tasks'})
    })
})

router.post('/', (req, res) => {
    const taskData = req.body
    

    db('tasks')
    .insert(taskData)
    .then(task => {
        res.status(201).json({created: 'succesful task post'})
    })
    .catch(err => {
        res.status(500).json({message: 'failed to create new task!'})
    })
})







module.exports = router