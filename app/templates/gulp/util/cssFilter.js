
var path = require("path");

// Filters out non .coffee and .js files. Prevents
// accidental inclusion of possible hidden files
module.exports = function (name) {
  return /(\.(css|css.map)$)/i.test(path.extname(name));
};
