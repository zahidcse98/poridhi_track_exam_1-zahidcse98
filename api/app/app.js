require('dotenv').config('../.env');
const http = require('http');
const express = require('express');
const app = express();
const routes = require('../routes/index');

app.use(express.json())
app.use(routes);

module.exports = app;
