const express = require('express');
const dogs = require('../../store/dogs')
const { Queue } = require('../queue/queue')

const DogRouter = express.Router();

DogRouter
.route('/')
.get((req, res, next) => {

     res.status(200).json(show(dogs))
})

module.exports = DogRouter