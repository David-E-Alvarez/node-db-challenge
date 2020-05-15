const express = require('express');

const Task = require('./task-model.js');

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

module.exports = router;