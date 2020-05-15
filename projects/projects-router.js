const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();

router.post('/', (req, res) => {
    const project = req.body;  
    Projects.add(project)
        .then(project => {
            console.log('project: ', project)
            res.status(201).json({created: project});
        })
        .catch (err => {
            res.status(500).json({ message: 'Failed to create new project' });
        });
  });

  //GET projects
  router.get('/', (req,res) => {
      Projects.find()
        .then(projects => {
            res.json(projects);
        })
        .catch(error => {
            res.status(500).json({message: "failed to get projects"})
        })
  })

  //GET project by id
  router.get('/:id', (req,res) => {
    const { id } = req.params;
    Projects.findById(id)
        .then(project => {
            if(project){
                res.json(project)
            }else{
                res.status(404).json({message: "no project with given id"});
            }
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to get user" });
        });
  })

module.exports = router;