'use strict';
const hasPlural = require('./hasPlural');
const makeArticle = require('./makeArticle');
const toPlural = require('./inflect/toPlural');
const toSingle = require('./inflect/toSingle');

const info = {

  /** can this word become a plural? Some words like 'peace' cannot.*/
  hasplural: (t) => {
    return hasPlural(t);
  },
  /** decide whether to use a/an/this/those */
  article: (t) => {
    return makeArticle(t);
  },
  /** inflect/pluralize a word like 'shoe' into 'shoes' */
  plural: (t) => {
    if (.noun.hasPlural() && !t.is('Plural')) {
      return toPlural(t.normal);
    }
    return t.normal;
  },
  /** inflect/pluralize a word like 'shoe' into 'shoes' */
  singular: (t) => {
    if (.noun.hasPlural() && t.is('Plural')) {
      return toSingle(t.normal);
    }
    return t.normal;
  }
};
module.exports = info;
