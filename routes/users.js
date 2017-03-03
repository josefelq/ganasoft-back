var express = require('express');
var router = express.Router();
var User = require('../models/user');

//Add user
router.post('/', function(req, res, next) {

  let user = new User();
  user.firstname=req.body.firstname;
  user.lastname=req.body.lastname;
  user.email=req.body.email;
  user.password=req.body.password;

  user.save(function(err){
    if(err){
      res.status(500).send(err);
    }
    else{
      res.json({message: 'User created!'});
    }
  });
});

//Get user with email and password
router.get('/', function(req, res, next){
  if(Object.keys(req.query).length !== 0){
    User.findOne({'email':req.query.email, 'password':req.query.password}, function(err, users){
      if(err){
        res.status(500).send(err);
      }
      res.json(users);
    });
  }
  else{
    next();
  }
});

//Get all users
router.get('/', function(req, res, next){
  User.find(function(err, users){
    if(err){
      res.status(500).send(err);
    }
    res.json(users);
  });

});



module.exports = router;
