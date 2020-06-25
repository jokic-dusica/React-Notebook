const express = require('express');

const app = express();

const signUpRoutes = require('./api/routes/sign-up')

app.use('/sign-up',signUpRoutes)

module.exports = app;