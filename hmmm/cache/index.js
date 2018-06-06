
class Cache {
  constructor() {
    this.obj = {};
  }
  addWord(term) {
    this.obj[term.id] = term;
  }
  addList(list) {
    list.forEach((term, i) => {
      term.previous = list[i - 1];
      term.next = list[i + 1];
      this.obj[term.id] = term;
    });
  }
  get(id) {
    return this.obj[id];
  }
}
module.exports = Cache;
