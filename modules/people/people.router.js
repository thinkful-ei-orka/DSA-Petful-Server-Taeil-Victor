const express = require('express')
const { Queue } = require('../queue/queue')
const { show } = require('../queue/queue')

const { fullPeopleQueue } = require('../../store/people')
const { people } = require('../../store/people')

const PeopleRouter = express.Router()
const jsonParser = express.json()

PeopleRouter
  // Return all the people currently in the queue.
  .route('/')
  .get((req, res, next) => {
    res.status(200).json(people)
  })

  .post(jsonParser, (req, res, next) => {
    // Add a new person to the queue.
    const { user_name } = req.body;
    // this is currently adding to both the queue and the array
    fullPeopleQueue.enqueue(user_name);
    people.push(user_name);
    return res.status(201).json({ user_name });
  })

  .delete((req, res, next) => {
    // this is currently removing from the queue and the array
    const user = fullPeopleQueue.dequeue();
    people.shift();

    if (user === null) {
      return res.status(404).json({ message: 'No users found.' });
    }
    return res.sendStatus(204)
  })


module.exports = PeopleRouter
