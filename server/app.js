const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

const apiRoutes = require('./routes/api-routes');

const app = express();

//connect to database
const userName = 'kidso';
const password = '123';
const connectToDb = mongoose.connect(`mongodb://${userName}:${password}@ds253959.mlab.com:53959/kidso`);
connectToDb.then(() => {
    console.log('Connected to the database');
}, (err) =>{
    console.log(`Error connecting to the database`);
    console.log(err);
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});


app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(apiRoutes);

// Send all other requests to Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

module.exports = app;
