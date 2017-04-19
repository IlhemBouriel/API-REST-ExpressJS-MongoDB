var bodyParser = require('body-parser');
var validator = require('express-validator');

module.exports = function(app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(validator());
};
