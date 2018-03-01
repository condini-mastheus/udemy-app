const todos = require('../models/todo-model');
const bodyParser = require('body-parser');

module.exports = (app) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // get todos from username
    app.get('/api/:username/todos', (req, res) => {
        todos.find({ username: req.params.username }, (err, userTodos) => {
            if (err) throw err;

            res.send(userTodos);
        });
    });

    // get single todo
    app.get('/api/todos/:id', (req, res) => {
        todos.findById({ _id: req.params.id }, (err, todo) => {
            if (err) throw err;

            res.send(todo);
        });
    });

    // add/update todo
    app.post('/api/todos/', (req, res) => {
        const newTodo = todos({
            username: 'Test',
            todo: req.body.todo,
            isDone: req.body.isDone,
            hasAttachement: req.body.hasAttachement 
        });

        newTodo.save((err, todo) => {
            if (err) throw err;

            res.send(todo);
        });
    });

    app.put('/api/todos/:id', (req, res) => {
        todos.findByIdAndUpdate(req.params.id, {
            todo: req.body.todo,
            isDone: req.body.isDone,
            hasAttachement: req.body.hasAttachement 
        }, (err, todo) => {
            res.send(todo);
        });
    });
  
    // add/update todo
    app.delete('/api/todos/:id', (req, res) => {
        todos.findByIdAndRemove(req.params.id, (err) => {
            if (err) throw err;

            res.send('Sucess');
        });
    });
};
