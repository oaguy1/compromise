

const end = function(str) {
  return str[str.length - 1];
};
const start = function(str) {
  return str[0];
};
const stripStart = function(str) {
  return str.substr(1);
};
const stripEnd = function(str) {
  return str.substr(0, str.length - 1);
};
const stripBoth = function(str) {
  str = stripStart(str);
  str = stripEnd(str);
  return str;
};

//
const token = function(w) {
  let obj = {};

  //collect any flags
  for(let i = 0; i < 2; i += 1) {
    //back-flags
    if (end(w) === '+') {
      obj.greedy = true;
      w = stripEnd(w);
    }
    if (end(w) === '?') {
      obj.optional = true;
      w = stripEnd(w);
    }
    if (end(w) === '$') {
      obj.end = true;
      w = stripEnd(w);
    }
    //front-flags
    if (start(w) === '^') {
      obj.start = true;
      w = stripStart(w);
    }
    //wrapped-flags
    if (start(w) === '(' && end(w) === ')') {
      obj.choices = w.split('|');
      w = '';
    }
    //capture group
    if (start(w) === '[' && end(w) === ']') {
      obj.capture = true;
      w = stripBoth(w);
    }
    //regex
    if (start(w) === '/' && end(w) === '/') {
      obj.regex = true;
      w = stripBoth(w);
    }
  }

  //do the actual token content
  if (start(w) === '#') {
    obj.tag = stripStart(w);
    return obj;
  }
  if (w === '.') {
    obj.dot = true;
    return obj;
  }
  if (w === '*') {
    obj.astrix = true;
    return obj;
  }
  if (w) {
    obj.normal = w;
  }
  return obj;
};
module.exports = token;
