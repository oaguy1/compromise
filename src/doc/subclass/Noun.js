const makeNoun = function(Doc) {

  class Noun extends Doc {
    constructor(cache, stack) {
      super(cache, stack);
      this.subclass = 'Noun';
      let doc = this.match('#Pronoun');
      let matches=doc.stack.current()
      matches.forEach((o) => o.class='Noun')
      console.log(matches)
      this.stack.add(matches)
    }
    article() {
      return 'an';
    }
  }
  return Noun;
};
module.exports = makeNoun;
