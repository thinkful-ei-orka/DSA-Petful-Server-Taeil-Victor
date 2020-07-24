const express = require('express')
const { Queue } = require('../queue/queue')
const { show } = require('../queue/queue')

const { fullPeopleQueue } = require('../../store/people')

const PeopleRouter = express.Router()
const jsonParser = express.json()

PeopleRouter
  // Return all the people currently in the queue.
  .route('/')
  .get((req, res, next) => {
    res.status(200).json(show(fullPeopleQueue))
  })

  .post(jsonParser, (req, res, next) => {
    // Add a new person to the queue.
    const { user_name } = req.body;
    fullPeopleQueue.enqueue(user_name);
    return res.status(201).json({ user_name })
  })


  .delete((req, res, next) => {
    const user = fullPeopleQueue.dequeue();
    if (user === null) {
      return res.status(404).json({ message: 'No users found.' });
    }
    return res.sendStatus(204)
  })



module.exports = PeopleRouter