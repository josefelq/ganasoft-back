var mongoose=require('mongoose');

var userSchema=mongoose.Schema({
  firstname: String,
  lastname: String,
  email: {type: String, unique: true},
  password: String,
  farms: [{type: mongoose.Schema.Types.ObjectId, ref: 'Farm'}]
});

module.exports = mongoose.model('User', userSchema);
