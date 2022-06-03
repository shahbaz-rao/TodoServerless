const Router = require('express').Router();
const TodoController = require('../Controller/todo');

Router.get('/', TodoController.getTodos);
Router.post('/create', TodoController.createTodos);
module.exports = Router;