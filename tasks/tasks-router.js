const express = require('express');

const Task = require('./task-model.js');
const Project = require('../projects/project-model.js');

const router = express.Router();

router.post('/', (req, res) => {
    const task = req.body;  
    Task.add(task)
        .then(task => {
            console.log('task: ', task)
            res.status(201).json({created: task});
        })
        .catch (err => {
            res.status(500).json({ message: 'Failed to create new task' });
        });
  });

  //GET projects
  router.get('/', (req,res) => {
      Task.find()
        .then(task => {
            res.json(task);
        })
        .catch(error => {
            res.status(500).json({message: "failed to get tasks"})
        })
  })

  //GET resource by id
  router.get('/:id', (req,res) => {
    const { id } = req.params;
    Task.findById(id)
        .then(task => {
            if(task){
                res.json(task)
            }else{
                res.status(404).json({message: "no task with given id"});
            }
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to get task" });
        });
  })

  //GET tasks for a specific project
  router.get('/project_tasks/:id', (req,res) => {
    //   project_id = req.body.project_id; ?
    //project_id = req.params.id; ?
    Project.findById(req.params.id)
    .then(project => {
        // console.log('---project.id------>', project.id)
        if(project){
            // res.json(project)
            Task.findTasksForProject(project.id)
                .then(tasks => {
                    console.log('tasks in task router------>', tasks)
                    res.status(201).json({message: tasks})
                })
                .catch(error => {
                    res.status(500).json({message: error})
                })
        }else{
            res.status(404).json({message: "no project with given id"});
        }
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to get tasks" });
    });
  })

module.exports = router;