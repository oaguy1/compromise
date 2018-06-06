const tagger = require('./tagger');

// //a stretch of words
class Phrase {
  constructor(startID, endID, context) {
    this.startID = startID;
    this.endID = endID;
    this.context = context;
  }
  terms() {
    let cache = this.context.cache;
    let t = cache.get(this.startID);
    let terms = [t];
    while (t.next && t.id !== this.endID) {
      t = t.next;
      terms.push(t);
    }
    return terms;
  }
  tagger() {
    return tagger(this);
  }
  text() {
    return this.terms().reduce((str, term) => {
      return str + term.preText + term.text + term.postText;
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
