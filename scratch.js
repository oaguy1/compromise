var nlp = require('./src/index');
// nlp.verbose('tagger');


let doc = nlp('he is really good. She goes to school. She is really damn cool.');
// console.log(doc.termList());
// doc.debug();
// console.log(doc.text());
// doc.debug();

doc.match('really damn? #Adjective').debug();
// doc.match('#Verb+ and (cool|times and)?+ fun').debug();
// console.log(doc.match('really').text());
