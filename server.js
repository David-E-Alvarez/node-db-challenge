const express = require('express');

const projectRouter = require('./projects/projects-router.js');
const resourceRouter = require('./resources/resources-router.js');
const taskRouter = require('./tasks/tasks-router.js');

const server = express();

server.use(express.json());
server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/tasks', taskRouter);

module.exports = server;