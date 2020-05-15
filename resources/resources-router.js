const express = require('express');

const Resource = require('./resource-model.js');

const router = express.Router();

router.post('/', (req, res) => {
    const resource = req.body;  
    Resource.add(resource)
        .then(resource => {
            console.log('resource: ', resource)
            res.status(201).json({created: resource});
        })
        .catch (err => {
            res.status(500).json({ message: 'Failed to create new resource' });
        });
  });

  //GET projects
  router.get('/', (req,res) => {
      Resource.find()
        .then(resource => {
            res.json(resource);
        })
        .catch(error => {
            res.status(500).json({message: "failed to get resources"})
        })
  })

  //GET resource by id
  router.get('/:id', (req,res) => {
    const { id } = req.params;
    Resource.findById(id)
        .then(resource => {
            if(resource){
                res.json(resource)
            }else{
                res.status(404).json({message: "no resource with given id"});
            }
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to get resource" });
        });
  })

module.exports = router;