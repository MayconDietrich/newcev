const express = require('express');
const routes = express.Router();

const indexController = require('./controllers/IndexController');
const courseController = require('./controllers/CourseController');
const teacherController = require('./controllers/TeacherController');
const classController = require('./controllers/ClassController');
// index
routes.get('/', indexController.index);

// course 
routes.get('/course', courseController.getAllCourses);
routes.post('/course', courseController.create);

routes.get('/course/:id', courseController.getById);
routes.delete('/course/:id', courseController.delete);
routes.put('/course/:id', courseController.put);

// teachers
routes.get('/teacher', teacherController.getAllTeachers);

// classes
routes.get('/class', classController.getAllLessons);

module.exports = routes;