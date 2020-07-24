const express = require('express')
const json = require('body-parser').json()

const Pets = require('./pets.service')
const People = require('../people/people.service')
// const { dogs } = require('../../store/dogs')
// const { cats } = require('../../store/cats')

const router = express.Router()

router.get('/', (req, res) => {})
  // Return all pets currently up for adoption.
  // .route('/all')
  // .get((req, res, next) => {
  //   res.status(200).json(cats, dogs)
  // })


router.delete('/', json, (req, res) => {
  // Remove a pet from adoption.
})

module.exports = router
