//directory of files to pack with `node scripts/pack.js`
//they are stored in compressed form
var lex = require('./words/misc');

//add-in the generic, flat word-lists
var data = [
  //nouns
  [require('./words/nouns/singulars'), 'Noun'],
  // [require('./words/nouns/professions'), 'Noun'],
  // [require('./words/nouns/sportsTeams'), 'Noun'],
  // [require('./words/nouns/uncountables'), 'Noun'],
  [require('./words/nouns/pronouns'), 'Noun'],
  // [require('./words/nouns/organizations'), 'Noun'],
  // [require('./words/nouns/demonyms'), 'Noun'],
  [require('./words/possessives'), 'Noun'], //+pronoun?
  // [require('./words/currencies'), 'Noun'],
  [require('./words/units'), 'Noun'],

  // [require('./words/places/countries'), 'Noun'],
  // [require('./words/places/regions'), 'Noun'],
  // [require('./words/places/places'), 'Noun'],
  // [require('./words/places/cities'), 'Noun'],
  //dates
  [require('./words/dates/days'), 'WeekDay'],
  [require('./words/dates/dates'), ['Date', 'Noun']],
  [require('./words/dates/holidays'), 'Holiday'],
  [require('./words/dates/months'), 'Month'],
  [require('./words/dates/durations'), 'Duration'],
  [require('./words/dates/times'), 'Time'],
  //people
  // [require('./words/people/firstnames'), 'Noun'],
  // [require('./words/people/lastnames'), 'Noun'],
  // [require('./words/people/maleNames'), 'Noun'],
  // [require('./words/people/femaleNames'), 'Noun'],
  [require('./words/people/honorifics'), 'Honorific'],
  // [require('./words/people/people'), 'Noun'],
  //verbs
  [require('./words/verbs/infinitives'), 'Infinitive'],
  [require('./words/verbs/verbs'), 'Verb'],
  // [require('./words/verbs/phrasals'), 'PhrasalVerb'],
  [require('./words/verbs/modals'), 'Modal'],
  //adjectives
  // [require('./words/adjectives/adjectives'), 'Adjective'],
  [require('./words/adjectives/comparables'), 'Comparable'],
  [require('./words/adverbs'), 'Adverb'],
  //misc
  [require('./words/expressions'), 'Expression'],
  [require('./words/prepositions'), 'Preposition'],
  [require('./words/determiners'), 'Determiner'],
  [require('./words/conjunctions'), 'Conjunction']
];
for (var i = 0; i < data.length; i++) {
  var list = data[i][0];
  for (var o = 0; o < list.length; o++) {
    //log duplicates
    // if (lex[list[o]]) {
    //   console.log(list[o] + '  ' + lex[list[o]] + ' ' + data[i][1]);
    // }
    lex[list[o]] = data[i][1];
  }
}

module.exports = lex;
// console.log(Object.keys(lex).length);
// console.log(lex['is']);
