var mongoose=require('mongoose');

var animalSchema=mongoose.Schema({
  farm: {type: mongoose.Schema.Types.ObjectId, ref: 'Farm'},
  numero: Number,
  especie: String,
  raza: String,
  sexo: String,
  foto: String,
  descripcion: String
});

module.exports = mongoose.model('Animal', animalSchema);
