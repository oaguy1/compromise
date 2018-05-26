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
Phrase.prototype.derive = function(ids) {
  return new Phrase(ids, this.context);
};

module.exports = Phrase;
