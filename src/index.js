const Doc = require('./doc/Doc');

const main = function(str) {
  let doc = new Doc().build(str);
  return doc;
};

module.exports = main;
