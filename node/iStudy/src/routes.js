const express = require('express');
const routes = express.Router();

const indexController = require('./controllers/IndexController');
const courseController = require('./controllers/CourseController');
const teacherController = require('./controllers/TeacherController');
const lessonController = require('./controllers/LessonsController');
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
routes.post('/teacher', teacherController.create);

routes.get('/teacher/:id', teacherController.getById);
routes.delete('/teacher/:id', teacherController.delete);
routes.put('/teacher/:id', teacherController.put);

// classes
routes.get('/lesson', lessonController.getAllLessons);
routes.post('/lesson', lessonController.create);

routes.get('/lesson/:id', lessonController.getById);
routes.delete('/lesson/:id', lessonController.delete);
routes.put('/lesson/:id', lessonController.put);

module.exports = routes;