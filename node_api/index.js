var express = require('express');
var app = express();
var todoList = require('./todoList');
var _ = require('lodash');
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Origin', req.get('origin'));
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

  if ('OPTIONS' == req.method) {
    res.send(200);
  } else {
    next();
  }
});

app.use(function(req, res, next) {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revive');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  next();
});

var todoRouter = express.Router();
app.use('/todo', todoRouter);

todoRouter.get('/', function(req, res) {
  res.status(200).json(todoList);
});

todoRouter.get('/:id', function(req, res) {
  var todoItem = _.find(todoList, i => i.id === +req.params.id);
  res.status(200).json(todoItem);
});

todoRouter.post('/', function(req, res) {
  var data = req.body;

  var maxId = _.max(todoList.map(i => i.id));
  var todoItem = {
    id: (maxId || 0) + 1,
    isDone: data.isDone,
    text: data.text,
    description: data.description,
    time: data.time
  };

  todoList.push(todoItem);
  res.status(201).json(todoItem);
});

todoRouter.put('/:id', function(req, res) {
  var data = req.body;

  var todoItem = {
    id: data.id,
    id: (maxId || 0) + 1,
    isDone: data.isDone,
    text: data.text,
    description: data.description,
    time: data.time
  };

  var existingTodoItem = _.find(todolist, i => i.id === +req.params.id);
  Object.assign(existingTodoItem, todoItem);

  res.status(204).end();
});

todoRouter.delete('/:id', function(req, res) {
  _.remove(todoList, i => i.id === +req.params.id);

  res.status(204).end();
});
// respond with "hello world" when a GET request is made to the homepage
// app.get('/', function(req, res) {
//   res.send('hello world');
// });

app.listen(3333, function () {
  console.log('Example app listening on port 3333!');
});
