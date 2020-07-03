const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
// const logger = require('morgan');
const {ApolloServer} = require('apollo-server-express');
const {typeDefs} = require('./graphql/typeDefs');
const {resolvers} = require('./graphql/resolvers');
const models = require('./models');

const assets = require('../webapp/build/asset-manifest.json');

const indexRouter = require('./routes/index');

const app = express();

/**
 * Set the `etag` to `false` to disable sesssion/tab based call caching
 * For more details on Etags: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/ETag
 */
app.set('etag', true);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(
    '/static',
    express.static(path.join(__dirname, '../webapp/build/static')),
);

app.locals.assets = {
  mainCss: assets.files['main.css'],
  mainJs: assets.files['main.js'],
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {models},
});

server.applyMiddleware({app});

app.use('/', indexRouter);

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
