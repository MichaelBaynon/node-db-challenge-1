const express = require('express')

const TaskRouter = require('./tasks/task-router.js')
const ActualTaskRouter = require('./actual tasks/actual-task-router')
const ResourceRouter = require('./resources/resource-router')

const server = express()

server.use(express.json())
server.use('/api/projects', TaskRouter)
server.use('/api/tasks', ActualTaskRouter)
server.use('/api/resources', ResourceRouter)

module.exports = server