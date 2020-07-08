'use strict';

const express = require('express');
const morgan = require('morgan');

const handlers = require('./data/handlers');


let currentUser = {};


// -----------------------------------------------------
// server endpoints
express()
  .use(morgan('dev'))
  .use(express.static('public'))
  .use(express.urlencoded({ extended: false }))
  .set('view engine', 'ejs')

  // endpoints
  .post('/getname', handlers.submitName)

  .get('/signin', handlers.signIn)
  .get('/users/:id', handlers.profilePage)
  .get('/homepage', handlers.homepage)
  // a catchall endpoint that will send the 404 message.
  .get('*', handlers.handleFourOhFour)

  
  .listen(8000, () => console.log('Listening on port 8000'));
