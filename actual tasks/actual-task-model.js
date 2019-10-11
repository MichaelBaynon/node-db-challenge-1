const db = require('../data/db-config')

module.exports = {
    find,
    add
}

function find() {
    return db('tasks')
}

function add(task) {
    return db('tasks')
    .insert(task, 'id')
}