const makeNoun = require('./Noun');


const addMethods = function(Doc) {
  let Noun = makeNoun(Doc);

  Doc.prototype.nouns = function() {
    return new Noun(this.cache, this.stack);
  };
  return Doc;
};
module.exports = addMethods;
