var mongoose = require('mongoose');
var mongoUrl = process.env.MONGO_URL || 'mongodb://ilhem:ilhem@ds133311.mlab.com:33311/ilhem';

var mongoose = require('mongoose');
var DB = "mongodb://Projetheroku94:ilhem@ds133311.mlab.com:33311/ilhem" ;

module.exports = function(app) {
  mongoose.connect(mongoUrl, {
    mongoose: {
      safe: true
    }
  }, function(err) {
    if (err) {
      return console.log('Mongoose - connection error:', err);
    }
  });


  return mongoose;
};