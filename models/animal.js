var mongoose=require('mongoose');

var animalSchema=mongoose.Schema({
  farm: {type: mongoose.Schema.Types.ObjectId, ref: 'Farm'},
  numero: Number,
  especie: String,
  raza: String,
  sexo: String,
  foto: String,
  descripcion: String,
  padre:{type: mongoose.Schema.Types.ObjectId, ref: 'Animal'},
  madre:{type: mongoose.Schema.Types.ObjectId, ref: 'Animal'},
  fecha_nacimiento: String
});

module.exports = mongoose.model('Animal', animalSchema);
