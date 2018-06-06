'use strict';
const fns = require('../../fns');

const colors = {
  Noun: 'blue',
  Date: 'red',
  Value: 'red',
  Verb: 'green',
  Auxiliary: 'green',
  Negative: 'green',
  VerbPhrase: 'green',
  Preposition: 'cyan',
  Condition: 'cyan',
  Conjunction: 'cyan',
  Determiner: 'cyan',
  Adjective: 'magenta',
  Adverb: 'cyan'
};

const chooseColor = function(tags) {
  for(let i = 0; i < tags.length; i += 1) {
    if (colors[tags[i]]) {
      return colors[tags[i]];
    }
  }
  return 'blue';
};

//pretty-print a term on the nodejs console
const printTerm = function(t) {
  let tags = Object.keys(t.tags);
  let color = chooseColor(tags);
  tags = fns[color](tags.join(', '));
  let word = t.text;
  word = '\'' + fns.yellow(word || '-') + '\'';
  let silent = '';
  if (t.silent_term) {
    silent = '[' + t.silent_term + ']';
  }
  word = fns.leftPad(word, 20);
  word += fns.leftPad(silent, 8);
  console.log('   ' + word + '   ' + '     - ' + tags);
};

const debug = function(doc) {
  console.log(fns.green('\n\n===== '));
  doc.phrases.forEach((p) => {
    console.log('  ---------');
    p.terms().forEach((t) => printTerm(t));
  });
};
module.exports = debug;
