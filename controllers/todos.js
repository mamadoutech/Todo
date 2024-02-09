const Todo = require('../models/todo');

const index = (req, res, next) => {
  Todo.find({})
    .then(todos => {
      res.render('todos/index', {
        todos: todos,
        pageTitle: 'todo list',
      });
    })
    .catch(err => {
      console.log(err);
    });
};
const newTodo = (req, res, next) => {
  res.render('todos/new');
};
const create = (req, res, next) => {
  Todo.create(req.body)
    .then(todo => {
      res.status(200).redirect('/todos');
    })
    .catch(err => console.log(err));
};
const show = (req, res, next) => {
  const id = req.params.id;
  Todo.findById(id)
    .then(todo => {
      res.render('todos/todo', {
        todo: todo,
        pageTitle: 'my todo',
      });
    })
    .catch(err => console.log(err));
};
const edit = (req, res, next) => {
  const id = req.params.id;
  Todo.findById(id)
    .then(todo => {
      res.render('todos/edit', {
        todo: todo,
        pageTitle: 'Edit todo',
      });
    })
    .catch(err => console.log(err));
};
const update = (req, res, next) => {
  Todo.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(todo => {
      res.status(200).redirect(`/todos/${todo._id}`);
    })
    .catch(err => console.log(err));
};
const deletec = (req, res, next) => {
  const id = req.params.id;
  Todo.findByIdAndDelete(id).then(todo => {
    res.redirect('/todos');
  });
};
module.exports = { update, edit, show, index, newTodo, create, deletec };
