const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const cors = require('cors');

app.use(express.json({ extended: true, limit: '50mb' }));
app.use(express.urlencoded());
app.use(cors({
  origin: 'https://shimmering-cobbler-8dccda.netlify.app/',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}));

app.use('/api', require('./src/routes'));

mongoose.connect(process.env.DB_URL).then(() => {
  console.log('conectado a mongodb');
  server = app.listen(process.env.API_PORT, () => {
    console.log(`aplicacion escuchando en puerto ${process.env.API_PORT}`);
  })
})
