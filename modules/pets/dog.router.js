const express = require('express');
const { fullDogQ } = require('../../store/dogs')
const { Queue } = require('../queue/queue')
const { show } = require('../queue/queue');
const { dogs } = require('../../store/dogs');
const { fullPeopleQueue } = require('../../store/people');
const { adopted } = require('../adopted/adopted.service')


const DogRouter = express.Router();
const jsonParser = express.json()

DogRouter
     .route('/')
     .get((req, res, next) => {
          res.status(200).json(show(fullDogQ))
     })

     .delete((req, res, next) => {
          const adopt = fullDogQ.dequeue();
          const newOwner = fullPeopleQueue.dequeue();
          if (adopt === null) {
               return res.status(404).json({ message: 'No dogs found.' });
          }
          adopt.newOwner = newOwner
          adopted.enqueue(adopt)
          console.log(newOwner)
          console.log(adopt)
          return res.status(200).json(newOwner.people)
     })

     .post(jsonParser, (req, res, next) => {
          // Add a new dog to the queue.
          const { age, breed, description, gender, imageURL, name, story } = req.body;
          fullDogQ.enqueue(req.body);
          dogs.push(req.body)
          console.log(fullCatQ);
          return res.status(201).json({ age, breed, description, gender, imageURL, name, story })
        })

DogRouter
     .route('/all')
     .get((req, res, next) => {
          res.status(200).json(dogs)
     })

module.exports = DogRouter