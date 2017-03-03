var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Farm = require('../models/farm');
var Animal = require('../models/animal');
var mongoose=require('mongoose');

//Add an animal to a farm
router.post('/', function(req, res, next){
let animal = new Animal();

animal.numero=req.body.numero;
animal.especie=req.body.especie;
animal.raza=req.body.raza;
animal.sexo=req.body.sexo;
animal.foto=req.body.foto;
animal.descripcion=req.body.descripcion;
let someId=req.body.farm;
animal.farm=mongoose.Types.ObjectId(someId);

animal.save(function(err){
  if(err){
    res.status(500).send(err);
  }
  else{
    Farm.findById(someId, function(err, farm){
      if(err){
        res.status(500).send(err);
      }
      else{
        farm.animals.push(animal);
        farm.save(function(err, updatedFarm){
        res.json({message: 'Farm created!'});
      });

      }

    });
  }
});
});

//Get animals given a farm
router.get('/', function(req, res, next){
  if(Object.keys(req.query).length !== 0){
  let farmId=req.query.farm;
  let objId=mongoose.Types.ObjectId(farmId);
  Animal.find({'farm':objId}, function(err, animals){
    if(err){
      res.status(500).send(err);
    }
    else{
      res.json(animals);
    }
  });
}
else{
  next();
}
});

//Get all animals
router.get('/', function(req, res, next){
  Animal.find(function(err, animals){
    if(err){
      res.status(500).send(err);
    }
    else{
      res.json(animals);
    }
  });
});

module.exports = router;
