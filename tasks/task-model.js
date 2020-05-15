const db = require('../data/dbConfig.js');

module.exports = {
    add,
    find,
    findById,
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
