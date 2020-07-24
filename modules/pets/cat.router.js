const express = require('express');
const { fullCatQ } = require('../../store/cats')
const { Queue } = require('../queue/queue')
const { show } = require('../queue/queue')
const People = require('../../store/people');
const { cats } = require('../../store/cats');

const CatRouter = express.Router();
const jsonParser = express.json()

CatRouter
     .route('/')
     .get((req, res, next) => {
          res.status(200).json(show(fullCatQ))
     })

     .delete((req, res, next) => {
          const adopt = fullCatQ.dequeue()
          if (adopt === null) {
               return res.status(404).json({ message: 'No cats found.' });
          }
          return res.sendStatus(204)
     })
     .post(jsonParser, (req, res, next) => {
          // Add a new cat to the queue.
          const { age, breed, description, gender, imageURL, name, story } = req.body;
          fullCatQ.enqueue(req.body);
          return res.status(201).json(req.body)
        })

CatRouter
.route('/all')
.get((req,res,next) => {
     res.status(200).json(cats)
})

module.exports = CatRouter
