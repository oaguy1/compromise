var nlp = require('./src/index');
// nlp.verbose('tagger');


let doc = nlp('he is really good. She goes to school. She is really damn cool.');
let m = doc.match('really damn? #Adjective');
let m2 = m.match('really');
// doc.debug();
m.debug();
// m2.debug();
// doc.match('#Verb+ and (cool|times and)?+ fun').debug();
// console.log(doc.match('really').text());
