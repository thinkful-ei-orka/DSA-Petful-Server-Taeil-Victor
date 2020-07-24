const express = require('express');
const { fullDogQ } = require('../../store/dogs')
const { Queue } = require('../queue/queue')
const { show } = require('../queue/queue');
const dogs = require('../../store/dogs');


const DogRouter = express.Router();

DogRouter
     .route('/')
     .get((req, res, next) => {
          res.status(200).json(show(fullDogQ))
     })

     .delete((req, res, next) => {
          const adopt = fullDogQ.dequeue()
          if (adopt === null) {
               return res.status(404).json({ message: 'No dogs found.' });
          }
          return res.sendStatus(204)
     })

     DogRouter
     .route('/all')
     .get((req,res,next) => {
          res.status(200).json(dogs)
     })

module.exports = DogRouter