module.exports = {
    isValidTask
}

function isValidTask(project) {
    return !!project.project_name
}