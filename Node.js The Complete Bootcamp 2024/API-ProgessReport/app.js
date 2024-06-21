const express = require('express');
const morgan = require('morgan');

const cidadeRouter = require('./routes/cidadeRoutes');
const clienteRouter = require('./routes/clienteRoutes');

const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }

app.use(express.json());

//routes
app.use('/api/cidade', cidadeRouter);
app.use('/api/cliente', clienteRouter);


module.exports = app;