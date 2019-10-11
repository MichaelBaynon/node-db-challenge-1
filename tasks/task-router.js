const express = require('express')
const db = require('../data/db-config')
const Tasks = require('./task-model')
const {isValidTask} = require('./task-helpers')

const router = express.Router()
  
////// projects ///////////////////////////////////

router.get('/', (req, res) => {
    Tasks.find()
    .then(projects => {
        projects.map(project => project.completed = project.completed?true:false)
        res.json(projects)
    })
    .catch(err => {
        res.status(500).json({message: 'failed to get projects'})
    })
})

router.post('/', (req, res) => {
    const projectData = req.body
    console.log(projectData)

    db('projects')
    .insert(projectData)
    .then(project => {
        res.status(201).json({created: 'succesful project post'})
    })
    .catch(err => {
        res.status(500).json({message: 'failed to create new project!'})
    })
})







module.exports = router