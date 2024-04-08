const express = require('express');
const app = express()
const path = require('path');
const bodyParser = require('body-parser')
const home = require('./routes/home');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

mongoose.connect(process.env.connectionString)

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', home)


app.use(express.static(path.join(__dirname, 'src')));
app.listen((3000), () => {
    console.log("Server Started");
})  