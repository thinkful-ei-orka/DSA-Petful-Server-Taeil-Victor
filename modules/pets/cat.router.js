const express = require('express');
const cats = require('../../store/cats')
const { Queue } = require('../queue/queue')
const { show } = require('../queue/queue')

const CatRouter = express.Router();

CatRouter
     .route('/')
     .get((req, res, next) => {

          res.status(200).json(show(cats))
     })

module.exports = CatRouter
