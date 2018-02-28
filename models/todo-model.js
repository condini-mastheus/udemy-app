const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// MongoDB Schema
const todoSchema = new Schema({
    username: String, 
    todo: String,
    isDone: Boolean,
    hasAttachment: Boolean
});

// Model
const todos = mongoose.model('Todos', todoSchema);

module.exports = todos;
