const build = require('./build');
const Cache = require('./cache');
const Stack = require('./stack');
const match = require('./match');
const Phrase = require('../phrase');
const debug = require('./methods/debug');

class Doc {
  constructor(cache, stack) {
    //setup word bucket
    this.cache = cache || new Cache();
    //build-up the history
    this.stack = stack || new Stack();
  }
  build(str) {
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
    this.stack.add(phraseList);
    this.tagger();
    return this;
  }
  phrases() {
    let list = this.stack.current();
    return list.map((obj) => new Phrase(obj, this));
  }
  termList() {
    return this.phrases().map((p) => p.terms());
  }
  terms() {
    return this.phrases().reduce((arr, p) => {
      arr = arr.concat(p.terms());
      return arr;
    }, []);
  }
  tagger() {
    this.phrases().forEach((p) => p.tagger());
    return this;
  }
  tag(tag) {
    this.terms().forEach((t) => t.tag(tag));
    return this;
  }
  parent() {
    this.stack.pop();
    return this;
  }
  match(str) {
    let matches = match(this, str);
    return this.branch(matches);
  }
  out() {
    return this.phrases().reduce((str, p) => str + p.text(), '');
  }
  debug() {
    debug(this);
    return this;
  }
}

//create a new Doc object, based on this one
Doc.prototype.branch = function(matches) {
  //share the cache, but only borrow the stack-history
  let doc = new Doc(this.cache, this.stack.clone());
  doc.stack.add(matches);
  return doc;
};
Doc.prototype.clone = function() {
  let doc = new Doc(this.cache.clone(), this.stack.clone());
  return doc;
};
Doc.prototype.text = Doc.prototype.out;
module.exports = Doc;
