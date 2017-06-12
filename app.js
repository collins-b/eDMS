const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const jwt = require('jsonwebtoken');
require('newrelic');

process.env.SECRET_KEY = 'collinsmmoja';

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser('collinsmmoja'));
app.use(session());

require('./server/routes')(app);
app.get('*', (req, res) => res.status(200).send({
  message: 'eDMS: A document handling system API ready to be consumed.',
}));

module.exports = app;
