
class Cache {
  constructor() {
    this.obj = {};
  }
  addWord(term) {
    this.obj[term.id] = term;
  }
  addList(list) {
    list.forEach((term) => {
      this.obj[term.id] = term;
    });
  }
  get(id) {
    return this.obj[id];
  }
}
module.exports = Cache;
