module.exports = {
    isValidTask
}

function isValidTask(task) {
    return !!task.task_name
}