const db = require('../data/dbConfig.js');

module.exports = {
    add,
    find,
    findById,
};

function add(project){
    return db('projects').insert(project)
        .then(project => {
            console.log("project in add in model: ", project)
            return project;
        })
}

function find(){
    return db('projects')
}

function findById(id){
    return db('projects').where('id', id).first();
}
