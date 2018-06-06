
class Cache {
  constructor() {
    this.obj = {};
  }
  buildUp(sentences) {
    sentences.forEach((terms) => {
      terms.forEach((term, i) => {
        term.previous = terms[i - 1];
        term.next = terms[i + 1];
        this.obj[term.id] = term;
      });
    });
  }
  get(id) {
    return this.obj[id];
  }
}
module.exports = Cache;
