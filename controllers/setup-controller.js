const todos = require('../models/todo-model');

module.exports = (app) => {
    app.get('/api/seed-todos', (req, res) => {
        const seedTodos = [
            {
                username: 'Test',
                todo: 'Task 1',
                isDone: false,
                hasAttachement: false 
            },
            {
                username: 'Test',
                todo: 'Task 2',
                isDone: false,
                hasAttachement: false 
            },
            {
                username: 'Test',
                todo: 'Task 3',
                isDone: false,
                hasAttachement: false 
            },
        ];

        todos.create(seedTodos, (err, results) => {
            res.send(results);
        });
    });
};
