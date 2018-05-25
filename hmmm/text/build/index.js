const bySentence = require('./sentences');
const byWord = require('./tokenize');
const Term = require('../../term');

//
const build = function(str) {
  let sentences = bySentence(str);
  let phrases = sentences.map((sentence) => {
    let words = byWord(sentence);
    words = words.map((w) => new Term(w));
    return words;
  });
  return phrases;
};
module.exports = build;
