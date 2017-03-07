var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Farm = require('../models/farm');
var Animal = require('../models/animal');
var mongoose=require('mongoose');
var lookup = require('../public/javascripts/lookup');

//Add an animal to a farm
router.post('/', function(req, res, next){
let animal = new Animal();

if(req.body.numero){
  animal.numero=req.body.numero;
}
if(req.body.especie){
  animal.especie=req.body.especie;
}
if(req.body.raza){
  animal.raza=req.body.raza;
}
if(req.body.sexo){
  animal.sexo=req.body.sexo;
}
if(req.body.foto){
  animal.foto=req.body.foto;
}
if(req.body.descripcion){
  animal.descripcion=req.body.descripcion;
}
let someId;
if(req.body.farm){
  someId=req.body.farm;
  animal.farm=mongoose.Types.ObjectId(someId);
}
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
        res.json({message: 'Animal created!'});
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

//Remove animal from farm
router.delete('/', function(req,res,next){
  //id of the farm we want to remove
  let farmid=req.query.farm;

  let animalid=req.query.animal;
  let animalobj=mongoose.Types.ObjectId(animalid);
  Animal.remove({'_id':animalobj},function(err){
    if(err){
      res.status(500).send(err);
    }
    else{
      Farm.findById(farmid, function(err, farm){
        if(err){
          res.status(500).send(err);
        }
        else{
          console.log("WE FOUND IT");
          lookup.find(farm.animals, animalobj, function(animalindex){
            console.log(animalindex);
            if (animalindex > -1) {
              farm.animals.splice(animalindex, 1);
              farm.save(function(err, updatedFarm){
                  res.json({message: 'Animal deleted!'});
              });
            }
          });
        }
      });
    }
  });

});

module.exports = router;
