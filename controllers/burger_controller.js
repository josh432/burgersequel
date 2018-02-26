var express = require('express');
var router = express.Router();
var db = require('../models');

router.get('/', function (req, res) {
  res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
  db.Burger.findAll({}).then(function (data) {
    var hbsObject = { burgers: data };
    res.render('index', hbsObject);
  });
});


router.post('/burgers', function(req, res) {
  db.Burger.create({burger_name: req.body.burger_name}).then(function(data) {
    res.redirect('/burgers');
  });
});

router.put('/burgers/:id', function(req, res){
	
	  db.Burger.update({
      devoured: true}, {where: {id:req.params.id}}).then(function(data) {
        console.log(data);
    res.redirect('/');
  });

});






// Export routes for server.js to use.
module.exports = router;