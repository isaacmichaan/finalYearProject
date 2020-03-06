// Variables
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const db = require('./routes/database_stocks');

// Retrieve
const MongoClient = require('mongodb').MongoClient;

// Replace the uri string with your connection string.
const uri = "mongodb+srv://<username>:<password>@cluster0-ocmyg.mongodb.net/test?retryWrites=true&w=majority\n"



/*MongoClient.connect(uri, function(err, client) {
  if(err) {
    console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
  }
  console.log('Connected...');
  // perform actions on the collection object
const collection = client.db("tests").collection("devices");
  var myobj = { name: "Company Inc", address: "Highway 37" };
  /*collection.insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
  });*/
//const collection = client.db("tests").collection("devices");

 /* collection.find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
  });*/


//  client.close();
//});


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var stocksRouter = require('./routes/stocks');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/stocks',stocksRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
