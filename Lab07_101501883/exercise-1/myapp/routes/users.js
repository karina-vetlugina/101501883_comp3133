var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

// Middleware
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// GET route
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// POST route
router.post('/', function(req, res, next) {
  console.log('First Name:', req.body.firstname);
  console.log('Last Name:', req.body.lastname);
  res.send('POST received!');
});

module.exports = router;