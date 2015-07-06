var express = require('express');
var router = express.Router();

/* GET home page. */
//2015-07-06 Cambiamos titulo Express por Quiz
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

module.exports = router;
