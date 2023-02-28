const express = require("express");
const mongoose = require('mongoose')
const app = express();
require("dotenv").config();
const cors = require("cors");

app.use(express.json({ extended: true, limit: "50mb" }));
app.use(express.urlencoded());

app.use(cors({ origin: process.env.ORIGIN_URL }));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", process.env.ORIGIN_URL);
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Max-Age", "86400");
    next();
});

app.use("/api", require("./src/routes"));

mongoose.connect(process.env.DB_URL).then(() => {
    console.log("conectado a mongodb");
    server = app.listen(process.env.API_PORT, () => {
        console.log(`aplicacion escuchando en puerto ${process.env.API_PORT}`);
    });
});
