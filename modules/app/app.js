const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('../../config');

const CatRouter = require('../pets/cat.router')
const DogRouter = require('../pets/dog.router')
const PeopleRouter = require('../people/people.router')
const adoptedRouter = require('../adopted/adopted.router')

const app = express();

const morganOption = (NODE_ENV === 'production')
     ? 'tiny'
     : 'common';

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());

app.use('/api/people', PeopleRouter)
app.use('/api/adopted', adoptedRouter)
app.use('/api/cats', CatRouter)
app.use('/api/dogs', DogRouter)

app.get('/', (req, res) => {
     res.send('Hello, world!')
});

app.use(function errorHandler(error, req, res, next) {
     let response;
     console.log(error);
     if (NODE_ENV === 'production') {
          response = { error: { message: 'server error' } };
     } else {
          console.error(error)
          response = { message: error.message, error };
     }
     res.status(500).json(response);
});

module.exports = app
