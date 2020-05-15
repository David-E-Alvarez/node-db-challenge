
exports.up = function(knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments('id');
            tbl.string('name').notNullable();
            tbl.text('description');
            tbl.boolean('is_completed').notNullable();
        })
        //resources table
        .createTable('resources', tbl => {
            tbl.increments('id');
            tbl.string('name').notNullable();
            tbl.text('description');
        })
        //tasks table
        .createTable('tasks', tbl => {
            tbl.increments('id');
            tbl.text('description').notNullable();
            tbl.text('notes');
            tbl.boolean('is_completed').notNullable();
        })
        //task_resources
        .createTable('task_resources', tbl => {
            tbl.increments('id');
            //task_id column
            tbl.integer('task_id')
                .notNullable()
                .references('id')
                .inTable('tasks');
            //resource_id column
            tbl.integer('resource_id')
                .notNullable()
                .references('id')
                .inTable('resources');
            //project_id column
            tbl.integer('project_id')
                .notNullable()
                .references('id')
                .inTable('projects');          
        })
};

exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('task_resources')
      .dropTableIfExists('tasks')
      .dropTableIfExists('resources')
      .dropTableIfExists('projects');
};
