'use strict';

const express = require('express');
const morgan = require('morgan');

const handlers = require('./data/handlers');

const { users } = require('./data/users');

let currentUser = {};


// -----------------------------------------------------
// server endpoints
express()
  .use(morgan('dev'))
  .use(express.static('public'))
  .use(express.urlencoded({ extended: false }))
  .set('view engine', 'ejs')

  // endpoints
  .get('/homepage', handlers.homepage)
  // a catchall endpoint that will send the 404 message.
  .get('*', handlers.handleFourOhFour)

  .listen(8000, () => console.log('Listening on port 8000'));
