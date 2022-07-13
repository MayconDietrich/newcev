const express = require('express');
const routes = express.Router();

const indexController = require('./controllers/IndexController');
const authorController = require('./controllers/AuthorController');
const booksController = require('./controllers/BookController');
// Index Routes
routes.get('/', indexController.indexAuthor);
// Authors Rotes
routes.get('/authors', authorController.findAll);
routes.post('/authors', authorController.create);

routes.get('/authors/:id', authorController.getById);
routes.delete('/authors/:id', authorController.deleteById);
routes.put('/authors/:id', authorController.put);

// Index Books Routes
routes.get('/books', indexController.indexBook);
// Bokks Routes
routes.get('/books', booksController.findAll);
routes.post('/books', booksController.create);

routes.get('/books/:id', booksController.getById);
routes.delete('/books/:id', booksController.deleteById);
routes.put('/books/:id', booksController.put);

module.exports = routes;