var mongoose=require('mongoose');

var farmSchema=mongoose.Schema({
  owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  name: String,
  size: Number,
  animals: [{type:mongoose.Schema.Types.ObjectId, ref: 'Animal'}]
});

module.exports = mongoose.model('Farm', farmSchema);
