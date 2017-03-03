var mongoose=require('mongoose');

var farmSchema=mongoose.Schema({
  owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  name: String,
  size: Number
});

module.exports = mongoose.model('Farm', farmSchema);
