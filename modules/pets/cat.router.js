const express = require('express');
const cats = require('../../store/cats')
const { Queue } = require('../queue/queue')

const CatRouter = express.Router();

CatRouter
     .route('/')
     .get((req, res, next) => {
          let cat = []

          // if (!cats.first) {
          //      res.status(200).json(["None"])
          // }
          // else {
               let currNode = cats.first;
               while (currNode !== null) {
                    cat.push(currNode.value)
                    currNode = currNode.next
               }
          // }
          res.status(200).json(cat)
     })

module.exports = CatRouter
