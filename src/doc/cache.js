
class Cache {
  constructor() {
    this.obj = {};
  }
  buildUp(sentences) {
    sentences.forEach((terms) => {
      terms.forEach((term, i) => {
        if (terms[i - 1]) {
          term.lastID = terms[i - 1].id;
        }
        if (terms[i + 1]) {
          term.nextID = terms[i + 1].id;
        }
        this.obj[term.id] = term;
      });
    });
  }
  get(id) {
    return this.obj[id];
  }
}
Cache.prototype.clone = function() {
  let c = new Cache();
  c.obj = Object.keys(this.obj).reduce((h, k) => {
    h[k] = this.obj[k].clone();
    return h;
  }, {});
  return c;
};
module.exports = Cache;
