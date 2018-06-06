
//
const match = function(term, token) {
  if (token.dot === true) {
    return true;
  }
  if (token.normal !== undefined && token.normal === term.normal) {
    return true;
  }
  if (token.tag !== undefined && term.tags[token.tag] === true) {
    return true;
  }
  return false;
};
module.exports = match;
