const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const cors = require('cors');

app.use(express.json({ extended: true, limit: '50mb' }));
app.use(express.urlencoded());
app.use(cors());

app.use('/api', require('./src/routes'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

mongoose.connect(process.env.DB_URL).then(() => {
  console.log('conectado a mongodb');
  server = app.listen(process.env.API_PORT, () => {
    console.log(`aplicacion escuchando en puerto ${process.env.API_PORT}`);
  })
})
