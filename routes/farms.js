var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Farm = require('../models/farm');
var mongoose=require('mongoose');

//create a farm
router.post('/', function(req, res, next){

  let farm = new Farm();
  farm.name=req.body.name;
  farm.size=req.body.size;
  let someId=req.body.owner;
  farm.owner=mongoose.Types.ObjectId(someId);

  farm.save(function(err){
    if(err){
      res.status(500).send(err);
    }
    else{
      User.findById(someId,function(err, user){
        if(err){
          res.status(500).send(err);
        }
        else{
            user.farms.push(farm);
            user.save(function(err, updatedUser){
            res.json({message: 'Farm created!'});
          });
        }
      });
    }
  });
});

//Get all farms given a user Id
router.get('/', function(req,res,next){
   let userId=req.query.owner;
   let objId=mongoose.Types.ObjectId(userId);
   Farm.find({'owner': objId}, function(err, farms){
     if(err){
       res.status(500).send(err);
     }
     else{
       res.json(farms);
     }
   });
});

module.exports = router;
