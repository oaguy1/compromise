var nlp = require('./src/index');
// nlp.verbose('tagger');


let doc = nlp('he is really good. She goes to school. She is really damn cool.');
// let two = doc.clone();
// doc.clone().tag('cool').debug();
doc.debug();
// m.debug();
// doc.debug();
// m2.debug();
// doc.match('#Verb+ and (cool|times and)?+ fun').debug();
// console.log(doc.match('really').text());
