//Simple module for searching values in array of objects
var Lookup = function () {};

Lookup.prototype.find = function (array, element, callback) {

  var found=-1;

  for(let i=0;i<array.length;i++){
    if(array[i].equals(element)){
      found=i;
      break;
    }
  }
  callback(found);
}

 module.exports = new Lookup();
