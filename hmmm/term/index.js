const normalize = require('./normalize');
const buildWhitespace = require('./whitespace');
const uuid = require('./uuid');

class Term {
  constructor(str) {
    let parts = buildWhitespace(str);
    this.text = parts.text;
    this.before = parts.before;
    this.after = parts.after;
    this.tags = {};
    this.normal = normalize(this.text);
    this.id = uuid(this.normal);
  }
  tag(tag) {
    this.tags[tag] = true;
  }
  match(reg) {
    if (this.normal === reg || this.text === reg) {
      return true;
    }
    if (this.tags.hasOwnProperty(reg) === true) {
      return true;
    }
    return false;
  }
  json(obj) {
    //set defaults
    obj = obj || {};
    let keys = Object.keys(obj);
    if (keys.length === 0) {
      keys = ['text', 'normal'];
    }
    return keys.reduce((h, k) => {
      h[k] = this[k];
      return h;
    }, {});
  }
}
module.exports = Term;
