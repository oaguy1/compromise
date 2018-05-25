const tagger = require('./tagger');

// //a stretch of words
class Phrase {
  constructor(ids, context) {
    this.ids = ids;
    this.context = context;
  }
  terms() {
    let cache = this.context.cache;
    return this.ids.map((id) => cache.get(id));
  }
  tagger() {
    return tagger(this);
  }
  text() {
    return this.terms().reduce((str, term) => {
      return str + term.before + term.text + term.after;
    }, '');
  }
  normal() {
    return this.terms().map(t => t.normal).join(' ');
  }
  json(obj) {
    return this.terms().map(t => t.json(obj));
  }
}
//return a list of phrase objects
Phrase.prototype.match = function(str) {
  let phrases = [];
  let phrase = [];
  let terms = this.terms();
  for(let i = 0; i < terms.length; i += 1) {
    if (terms[i].match(str) === true) {
      phrase.push(terms[i].id);
    } else if (phrase.length > 0) {
      phrase = new Phrase(phrase, this.context);
      phrases.push(phrase);
      phrase = [];
    }
  }
  return phrases;
};
module.exports = Phrase;
