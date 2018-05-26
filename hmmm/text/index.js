const Phrase = require('../phrase');
const Cache = require('./cache');
const build = require('./build');
const match = require('./match');


//a list of phrases
class Text {
  constructor(str) {
    let self = this;
    this.cache = new Cache();
    //put words into the index...
    let sentences = build(str);
    sentences.forEach((terms) => {
      this.cache.addList(terms);
    });
    //remember phrase-objects
    this.phrases = sentences.map((terms) => {
      let ids = terms.map((t) => t.id);
      return new Phrase(ids, self);
    });
    //tag them
    this.tagger();
  }
  tagger() {
    this.phrases.forEach((p) => p.tagger());
  }
  text() {
    return this.phrases.reduce((str, p) => str + p.text(), '');
  }
  normal() {
    return this.phrases.reduce((str, p) => {
      return str + p.normal();
    }, '');
  }
  json(obj) {
    return this.phrases.map(p => p.json(obj));
  }
}

Text.prototype.derivative = function(phrases) {
  let text = new Text('', this);
  text.phrases = phrases;
  return text;
};

Text.prototype.match = function(str) {
  let phrases = match(str, this);
  return this.derivative(phrases);
};

module.exports = Text;
