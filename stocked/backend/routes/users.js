var express = require('express');
var router = express.Router();

const db = require('./database_stocks');




router.get('/', (req, res) => {
  res.send('/users path in users.js');
});


module.exports = router;
