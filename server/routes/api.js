var express = require('express');
var router = express.Router();
var file = require('../assets/deliveries-sample.json')

router.get('/loadData', function(req, res, next) {
  console.log("Served deliveries-json");
  res.json(file);
});


module.exports = router;
