const Phrase = require('../phrase');
const Cache = require('../cache');
const Stack = require('../stack');
const match = require('../match');
const build = require('./build');
const debug = require('./methods/debug');

//a list of phrases
class Text {
  constructor(str) {
    let self = this;
    this.cache = new Cache();
    this.stack = new Stack(this.cache);
    //put words into the index...
    let sentences = build(str);
    sentences.forEach((terms) => {
      this.cache.addList(terms);
    });
    //remember phrase-objects
    this.phrases = sentences.map((terms) => {
      let start = terms[0].id;
      let end = terms[terms.length - 1].id;
      return new Phrase(start, end, self);
    });
    this.stack.add(this.idList());
    //tag them
    this.tagger();
  }
  idList() {
    return this.phrases.map((p) => [p.startID, p.endID]);
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
  match(str) {
    let matches = [];
    this.phrases.forEach((ph) => {
      let terms = ph.terms();
      for(let i = 0; i < terms.length; i += 1) {
        let t = terms[i];
        if (t.tags.Verb) {
          matches.push([t.id, t.id]);
        }
      }
    });
    this.stack.add(matches);
    this.stack.debug();
    // console.log(matches);
    return this;
  }
  debug() {
    debug(this);
    return this;
  }
}

module.exports = Text;
