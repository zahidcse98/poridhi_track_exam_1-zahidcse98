require('dotenv').config('../.env');
const http = require('http');
const express = require('express');
const cors = require('cors');
const app = express();

const routes = require('../routes/index');

app.use(express.json())
app.use(cors())
app.use(routes);

module.exports = app;
