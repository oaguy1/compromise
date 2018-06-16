
class Doc {
  constructor(str, stack) {
    this.stack = stack || [str];
  }
  match() {
    this.stack.push('match');
    return this;
  }
}
class Noun extends Doc {
  constructor(str, stack) {
    super(str, stack);
  }
  article() {
    return 'an';
  }
}

Doc.prototype.nouns = function() {
  return new Noun();
};

//
const hmm = function(str) {
  return new Doc(str);
};
module.exports = hmm;
