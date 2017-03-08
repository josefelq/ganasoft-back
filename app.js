"use strict";
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var users = require('./routes/users');
var farms = require('./routes/farms');
var animals = require('./routes/animals');
var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// seria una buena practica
// configurar la aplicacion para manejar CORS requests
// app.use(function(req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', '*'); //esto permite solicitudes desde cualquier tipo
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT'); //limita el tipo de solicitudes que se pueden hacer
//   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');// y lo que se envia por el header
//   next();
// });

//Pueden darle mayor modularidad a la aplicacion si en vez de usar las rutas aca
app.use('/users', users);
app.use('/farms', farms);
app.use('/animals', animals);
//las ponen en un archivo aparte
//var apiRoutes = require('./app/routes/api'); aqui tendran una carpeta donde un index.js manera todas las rutas y pueden tener un archivo por ruta, para manejar las solicitudes de cada sub ruta
//app.use('/api', apiRoutes); donde /api sera la raiz de las URIS y apiRoutes 
//

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
