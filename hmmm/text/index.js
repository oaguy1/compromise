const Phrase = require('../phrase');
const Cache = require('./cache');
const build = require('./build');

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

Text.prototype.match = function(tag) {
  let phrases = [];
  this.phrases.forEach((phrase) => {
    let matches = phrase.match(tag);
    phrases = phrases.concat(matches);
  // matches.forEach((m) => arr.push(m));
  });
  return this.derivative(phrases);
};

module.exports = Text;
