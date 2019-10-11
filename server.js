const express = require('express')

const TaskRouter = require('./tasks/task-router.js')

const server = express()

server.use(express.json())
server.use('/api/projects', TaskRouter)

module.exports = server