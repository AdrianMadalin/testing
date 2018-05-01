const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const passport = require('passport');
const config = require('./utils/config');
const jwt = require('jsonwebtoken');

const apiRoutes = require('./routes/api-routes');
const apiUpload = require('./routes/api-upload');

const app = express();

//connect to database
const connectToDb = mongoose.connect(config.database);
connectToDb.then(() => {
    console.log('Connected to the database');
}, (err) => {
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

app.use(passport.initialize());
app.use(passport.session());
require('./utils/passport')(passport);

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});


app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(apiRoutes);
app.use(apiUpload);

// Send all other requests to Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjVhZGYzZDU5MzZlZTcyMWY3MDQ0ZjVhYiIsInVzZXJuYW1lIjoiYWRpIiwicGFzc3dvcmQiOiIkMmIkMTAkVFcxd2s1MWdzeHR2eG5FdTcyMy8wZWx2L0ZjME5kM1oyelg1bnhKQVluRmNOSU05b1lDLi4iLCJfX3YiOjB9LCJpYXQiOjE1MjUxMjgzMDcsImV4cCI6MTUyNTEzMTkwN30.cHCd0Y6_eBS7qQpwD3v03uUGlso8axHj6kl-RIfkK_M'
// jwt.verify(token, 'qqq', (err, decoded) => {
//     if(err){
//         console.log(err)
//     } else {
//         console.log(`is ok`)
//         console.log(decoded)
//     }
// })

module.exports = app;
