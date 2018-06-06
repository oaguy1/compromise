const syntax = require('./syntax');

class Reg {
  constructor(str) {
    this.tokens = syntax(str);

    //cache the easy-lookups here
    this.words = [];
    this.tokens.forEach((t) => {
      if (t.normal && !t.optional) {
        this.words.push(t.normal);
      }
    });
  }
}
module.exports = Reg;
