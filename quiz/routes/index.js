var express = require('express');
var router = express.Router();

//2015-07-07 Importamos controlador
var quizController = require('../controllers/quiz_controller');

/* GET home page. */
//2015-07-06 Cambiamos titulo Express por Quiz
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

//2015-07-07 Importamos nuevas vistas
router.get('/quizes/question', quizController.question);
router.get('/quizes/answer', quizController.answer);
router.get('/author', quizController.author);

module.exports = router;
