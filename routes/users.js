var express = require('express');
var router = express.Router();
var User = require('../models/user');
var bcrypt =require('bcrypt-nodejs');

//Add user
router.post('/', function(req, res, next) {

  let user = new User();
  if(req.body.firstname){
    user.firstname=req.body.firstname;
  }
  if(req.body.lastname){
    user.firstname=req.body.firstname;
  }
  if(req.body.email){
    user.email=req.body.email;
  }

  if(req.body.password){
    var salt = bcrypt.genSaltSync(10);
    var hash=bcrypt.hashSync(req.body.password, salt);
    user.password=hash;
  }

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
    User.findOne({'email':req.query.email}, function(err, user){
      if(err){
        res.status(500).send(err);
      }
      else{
        if(bcrypt.compareSync(req.query.password, user.password)){
          res.json(user);
        }
        else{
          res.json({message: 'Wrong login!'});
        }
      }
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
    else{
        res.json(users);
    }
  });
});



module.exports = router;
