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
    let t = cache.get(this.startID);
    let terms = [t];
    while (t.next && t.id !== this.endID) {
      t = t.next;
      terms.push(t);
    }
    return terms;
  }
}
module.exports = Phrase;
