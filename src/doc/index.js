const build = require('./build');
const Cache = require('./cache');
const Stack = require('./stack');
const match = require('./match');
const Phrase = require('../phrase');
const debug = require('./methods/debug');

class Doc {
  constructor(str) {
    //setup word bucket
    this.cache = new Cache();
    let sentences = build(str);
    this.cache.buildUp(sentences);

    //setup the stack
    let phraseList = sentences.map((terms) => {
      //keep only the start/end terms..
      return {
        start: terms[0].id,
        end: terms[terms.length - 1].id,
      };
    });
    //build-up the history
    this.stack = new Stack();
    this.stack.add(phraseList);
    this.tagger();
  }
  phrases() {
    let list = this.stack.current();
    return list.map((obj) => new Phrase(obj, this));
  }
  termList() {
    return this.phrases().map((p) => p.terms());
  }
  tagger() {
    this.phrases().forEach((p) => p.tagger());
    return this;
  }
  match(str) {
    let matches = match(this, str);
    console.log(matches);
    return this;
  }
  out() {
    return this.phrases().reduce((str, p) => str + p.text(), '');
  }
  debug() {
    debug(this);
    return this;
  }
}
Doc.prototype.text = Doc.prototype.out;
module.exports = Doc;
