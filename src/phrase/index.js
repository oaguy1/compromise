const tagger = require('./tagger');

class Phrase {
  constructor(obj, context) {
    this.start = obj.start;
    this.end = obj.end;
    this.context = context;
  }
  tagger() {
    tagger(this);
    return this;
  }
  terms() {
    let cache = this.context.cache;
    let t = cache.get(this.start);
    let terms = [t];
    while (t.nextID && t.id !== this.end) {
      t = cache.get(t.nextID);
      terms.push(t);
    }
    return terms;
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
module.exports = Phrase;
