const express = require('express');
const { fullCatQ } = require('../../store/cats')
const { Queue } = require('../queue/queue')
const { show } = require('../queue/queue')
const { fullPeopleQueue } = require('../../store/people');
const { cats } = require('../../store/cats');
const { adopted } = require('../adopted/adopted.service')


const CatRouter = express.Router();
const jsonParser = express.json()

CatRouter
     .route('/')
     .get((req, res, next) => {
          res.status(200).json(show(fullCatQ))
     })

     .delete((req, res, next) => {
          const adopt = fullCatQ.dequeue();
          const newOwner = fullPeopleQueue.dequeue();
          if (adopt === null) {
               return res.status(404).json({ message: 'No cats found.' });
          }
          adopt.newOwner = newOwner
          adopted.enqueue(adopt)
          console.log(newOwner)
          console.log(adopt)
          return res.status(200).json(newOwner.people)
     })
     
     .post(jsonParser, (req, res, next) => {
          // Add a new cat to the queue.
          const { age, breed, description, gender, imageURL, name, story } = req.body;
          fullCatQ.enqueue(req.body);
          cats.push(req.body)
          console.log(fullCatQ);
          return res.status(201).json({ age, breed, description, gender, imageURL, name, story })
        })

CatRouter
.route('/all')
.get((req,res,next) => {
     res.status(200).json(cats)
})

module.exports = CatRouter
