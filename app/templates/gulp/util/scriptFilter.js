var path = require("path");

// Filters out non .coffee, .jsx and .js files. Prevents
// accidental inclusion of possible hidden files
module.exports = function (name) {
  return /(\.(js|jsx|coffee)$)/i.test(path.extname(name));
};
