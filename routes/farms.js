var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Farm = require('../models/farm');
var Animal = require('../models/animal');
var mongoose=require('mongoose');
var lookup = require('../public/javascripts/lookup');


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
  if(Object.keys(req.query).length !== 0){
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
 }
 else{
   next();
 }
});

//Get all farms
router.get('/', function(req, res, next){
  Farm.find(function(err, farms){
    if(err){
      res.status(500).send(err);
    }
    else{
      res.json(farms);
    }
  });
});

//Delete farm
router.delete('/', function(req,res,next){
  let userid=req.query.owner;
  let farmid=req.query.farm;
  let userobj=mongoose.Types.ObjectId(userid);
  let farmobj=mongoose.Types.ObjectId(farmid);

  Farm.remove({'_id':farmid}, function(err){
    if(err){
      res.status(500).send(err);
    }
    else{
      User.findById(userid, function(err, user){
        if(err){
          res.status(500).send(err);
        }
        else{
          lookup.find(user.farms, farmobj, function(index){
              if (index > -1) {
                user.farms.splice(index, 1);
                user.save(function(err,updatedUser){
                  Animal.remove({'farm': farmobj}, function(err){
                    res.json({message: 'Farm deleted!'});
                  });
                });
              }
          });
        }
      });
    }
  });
});

module.exports = router;
