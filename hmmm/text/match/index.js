const syntax = require('./syntax');
//
const match = function(str, self) {
  let regs = syntax(str);
  console.log(regs);
  // let phrases = [];
  // let phrase = [];
  // let terms = p.terms();
  // for(let i = 0; i < terms.length; i += 1) {
  //   if (terms[i].match(str) === true) {
  //     phrase.push(terms[i].id);
  //   } else if (phrase.length > 0) {
  //     phrase = p.derive(phrase);
  //     phrases.push(phrase);
  //     phrase = [];
  //   }
  // }
  return self.phrases;
};
module.exports = match;
