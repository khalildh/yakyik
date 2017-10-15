var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/createzone', function(req, res) {
  res.render('createzone', { title: 'Express' });
});
router.get('/createcomment', function(req, res) {
  res.render('createcomment', { title: 'Express' });
});

module.exports = router;
