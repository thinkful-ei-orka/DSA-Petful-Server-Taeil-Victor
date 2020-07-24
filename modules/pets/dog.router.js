const express = require('express');
const dogs = require('../../store/dogs')
const { Queue } = require('../queue/queue')

const DogRouter = express.Router();

DogRouter
     .route('/')
     .get((req, res, next) => {
          let dog = []

          // if (!dogs.first) {
          //      res.status(200).json(["None"])
          // }
          // else {
               let currNode = dogs.first;
               while (currNode !== null) {
                    dog.push(currNode.value)
                    currNode = currNode.next
               }
          // }
          res.status(200).json(dog)
     })

module.exports = DogRouter