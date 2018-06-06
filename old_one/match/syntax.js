//split-up by (these things)
const byParentheses = function(str) {
  let arr = str.split(/\((.*?)\)/);
  arr = arr.map((a, i) => {
    if (i % 2 !== 0) {
      a = '(' + a + ')';
    }
    return a;
  });
  arr = arr.filter((a) => a);
  return arr;
};

const byWords = function(arr) {
  let words = [];
  arr.forEach((a) => {
    let list = a.split(' ');
    list = list.filter(w => w);
    words = words.concat(list);
  });
  return words;
};

const parseWord = function(w) {
  return {
    normal: w
  };
};

//
const syntax = function(str) {
  let arr = byParentheses(str);
  arr = byWords(arr);
  arr = arr.map(parseWord);
  return arr;
};
module.exports = syntax;
