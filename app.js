var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var Dumbell = require("./models/dumbells");

require('dotenv').config();
const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect('mongodb+srv://mahesh0115:mahesh115@cluster0.c8afwux.mongodb.net/?retryWrites=true&w=majority');

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var dumbellsRouter = require('./routes/dumbells');
var boardRouter = require('./routes/board');
var chooseRouter = require('./routes/choose');
var resourceRouter = require('./routes/resource');


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
app.use('/dumbells', dumbellsRouter);
app.use('/board', boardRouter);
app.use('/choose', chooseRouter);
app.use('/resource', resourceRouter);

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
// We can seed the collection if needed on server start
async function recreateDB(){
// Delete everything
await Dumbell.deleteMany();
let instance1 = new
Dumbell({ dumbell_name: 'Heavy Dumbell', weight: 20, material: 'Iron' });
instance1.save().then(doc=>{
console.log("First object saved")}
).catch(err=>{
console.error(err)
});

let instance2 = new
Dumbell({ dumbell_name: 'Light Dumbell', weight: 10, material: 'Plastic' });
instance2.save().then(doc=>{
console.log("Second object saved")}
).catch(err=>{
console.error(err)
});

let instance3 = new
Dumbell({ dumbell_name: 'Medium Dumbell', weight: 15, material: 'Steel' });
instance3.save().then(doc=>{
console.log("Third object saved")}
).catch(err=>{
console.error(err)
});

}
let reseed = true;
if (reseed) {recreateDB();}

module.exports = app;