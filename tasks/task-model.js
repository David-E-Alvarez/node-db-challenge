const db = require('../data/dbConfig.js');

module.exports = {
    add,
    find,
    findById,
    // findTasksForProject,
};

function add(task){
    return db('tasks').insert(task)
        .then(task => {
            console.log("task in add in model: ", task)
            return task;
        })
}

function find(){
    return db('tasks')
}

function findById(id){
    return db('tasks').where('id', id).first();
}

// function findTasksForProject(id){
// //     select name, description, project_id, projects.name, projects.description from tasks
// // join projects on tasks.project_id = projects.id;
// return db('tasks').where("tasks.id",id)
//         .join('projects', 'tasks.id', 'steps.scheme_id')
//         .select('schemes.scheme_name', 'steps.step_number', 'steps.instructions')

// }
// return db('schemes').where("schemes.id",id)
//         .join('steps', 'schemes.id', 'steps.scheme_id')
//         .select('schemes.scheme_name', 'steps.step_number', 'steps.instructions')
