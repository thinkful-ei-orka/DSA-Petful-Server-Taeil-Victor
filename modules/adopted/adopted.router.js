const express = require('express')
const adoptedRouter = express.Router()
const {adopted} = require('./adopted.service')

adoptedRouter 
.get('/', (req, res, next) => {
          res.status(200).json(adopted)
     })

     module.exports = adoptedRouter