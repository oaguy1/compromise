const lexicon = {
  is: 'Verb',
  goes: 'Verb',
  he: 'Pronoun',
  she: 'Pronoun',
};

//
const tagger = function(p) {
  let terms = p.terms();
  terms.forEach((t) => {
    if (lexicon.hasOwnProperty(t.normal) === true) {
      t.tag(lexicon[t.normal]);
    }
  });
  return p;
};
module.exports = tagger;
