const build = require('./build');
const Cache = require('../cache');
const Stack = require('./stack');
const Phrase = require('../phrase');

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
  }
  phrases() {
    let list = this.stack.current();
    return list.map((obj) => new Phrase(obj, this));
  }
  text() {
    return this.phrases.reduce((str, p) => str + p.text(), '');
  }
}
module.exports = Doc;
