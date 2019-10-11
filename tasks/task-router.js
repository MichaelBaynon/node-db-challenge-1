const express = require('express')

const Tasks = require('./task-model')
const {isValidTask} = require('./task-helpers')

const router = express.Router

// router.get('/', (req, res) => {
//     Tasks.find()
//     .then(projects => {
//         res.json(projects)
//     })
//     .catch(err => {
//         res.status(500).json({message: 'failed to get projects'})
//     })
// })




module.exports = router