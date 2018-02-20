var express = require('express');
var router = express.Router();
var db = require('../models');

router.get('/', function (req, res) {
  res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
  db.Burger.findAll().then(function (data) {
    var hbsObject = { burger: data };
    res.render('index', hbsObject);
  });
});

// router.post('/burgers', function(req, res) {
//   burger.insertOne(['burger_name'], [req.body.burger_name], function(data) {
//     res.redirect('/');
//   });
// });

// router.put('/burgers/:id', function(req, res){
// 	var condition = "id = " + req.params.id;
// 	  burger.updateOne({
//       devoured: true
//    }, condition, function(data) {
//     res.redirect('/');
//   });

// });






// Export routes for server.js to use.
module.exports = router;