import express, { NextFunction, Request, Response } from 'express';
import path from 'path';
import logger from  'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import {CustomError} from '../models/error.model';
import router from './router';


var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', router);

// all public files served from the public folder
// app.use(express.static(path.join(__dirname, 'public')));



// catch 404 and forward to error handler
app.use(function(req:  Request, res: Response, next: NextFunction) {
// create a new error object with a message of 'Not Found' and set the status to 404
    

    var err: CustomError = new Error('Not Found');

    err.status = 404;


  next(err);
});

// error handler
app.use(function(err: CustomError, req:  Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
