const fns = require('../fns');

//our nested history of match results, so we can 'zoom-in/out' of our document
class Stack {
  constructor(cache) {
    this.cache = cache;
    this.history = [];
  }
  add(arr) {
    this.history.push(arr);
    return this;
  }
  current() {
    return this.history[this.history.length - 1];
  }
  pop() {
    if (this.history.length > 1) {
      this.history.pop();
    }
    return this;
  }
  debug() {
    console.log(fns.yellow('\n---stack---'));
    this.history.forEach((ls, depth) => {
      ls.forEach((arr) => {
        let margin = '';
        for(let i = 0; i < depth; i += 1) {
          margin += '   ';
        }
        let start = this.cache.get(arr[0]);
        let end = this.cache.get(arr[1]);
        console.log(`${margin}· ${start.normal} → ${end.normal}`);
      });
    });
  }
}
module.exports = Stack;
