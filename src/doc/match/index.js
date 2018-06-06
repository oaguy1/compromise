const Reg = require('./reg');

//try to keep going on a match
const greedPlus = function(terms, token) {
  let len = 0;
  for(let i = 0; i < terms.length; i += 1) {
    let term = terms[i];
    if (term.match(token) === true) {
      len += 1;
    }
  }
  return len;
};

const fromHere = function(terms, tokens) {
  let len = 0;
  for(let i = 0; i < tokens.length; i += 1) {
    let token = tokens[i];
    // console.log(terms[len].normal, token);
    if (terms[len].match(token) === false) {
      if (token.optional === true) {
        continue;
      }
      //end here
      return null;
    }
    len += 1;
    if (token.greedy) {
      let plus = greedPlus(terms.slice(i + 1), token);
      len += plus;
    }
  }
  return len;
};

const matchTerms = function(terms, reg) {
  let found = [];
  //look for a starting match, somewhere
  for(let i = 0; i < terms.length; i += 1) {
    let term = terms[i];
    //try this term this token
    if (term.match(reg.tokens[0]) === true) {
      let len = fromHere(terms.slice(i), reg.tokens);
      if (len !== null) {
        //found a match
        found.push({
          start: term.id,
          end: terms[i + len - 1].id
        });
        i += len;
      }
    }
  }
  return found;
};

//
const matchDoc = function(doc, str) {
  let phrases = [];
  let reg = new Reg(str);
  doc.termList().forEach((terms) => {
    let matches = matchTerms(terms, reg);
    if (matches) {
      phrases = phrases.concat(matches);
    }
  });
  return phrases;
};
module.exports = matchDoc;
