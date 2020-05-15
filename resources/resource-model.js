const db = require('../data/dbConfig.js');

module.exports = {
    add,
    find,
    findById,
};

function add(resource){
    return db('resources').insert(resource)
        .then(resource => {
            console.log("resource in add in model: ", resource)
            return resource;
        })
}

function find(){
    return db('resources')
}

function findById(id){
    return db('resources').where('id', id).first();
}
