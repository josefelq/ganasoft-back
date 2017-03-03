var mongoose=require('mongoose');

var animalSchema=mongoose.Schema({
  farm: {type: mongoose.Schema.Types.ObjectId, ref: 'Farm'},
  numero: String,
  especie: String,
  raza: String,
  sexo: String,
  foto: String,
  descripcion: String
});

module.exports = mongoose.model('Animal', animalSchema);
