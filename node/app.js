var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//Connecting to the database
// mongoose.connect("mongodb://54.71.18.74:27017/Tradequiry",{ useNewUrlParser: true })
mongoose.connect('mongodb://dheeraj:dheeraj123@ds123645.mlab.com:23645/tradequiry',{ useNewUrlParser: true })
.then(() => {
        console.log("Successfully connected to the database");
    }).catch(err => {
       // console.log(err);
        console.log('Could not connect to the database. Exiting now.zdzs..');
        process.exit();
    });


// mongoose.connection.on("open", function(ref) {
//   console.log("Connected to mongo server.");
// });

// mongoose.connection.on("error", function(err) {
//   console.log("Could not connect to mongo server!");
//   return console.log(err);
// });

// const mongoURI = 'mongodb://localhost:27017/test';
// const mongoURI = 'mongodb://user123:password123@ds125932.mlab.com:25932/dbtest';
// const mongoURI = 'mongodb://MSA-Server:MSA-Server%40!!@127.0.0.1:27017/MSA-Server';

// const db = mongoose.connect(mongoURI, { useNewUrlParser: true });

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));

app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use('/', indexRouter);
app.use('/api/user', usersRouter);
app.use('/api/data', require('./routes/IEXData/crud'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// define a simple route
app.get('/', (req, res) => {
    res.json({ "message": "Welcome to user application" });
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
