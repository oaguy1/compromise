var nlp = require('./src/index');
// nlp.verbose('tagger');


let doc = nlp('he is really good. She goes to school.');
// console.log(doc.termList());
doc.debug();
console.log(doc.text());
// doc.debug();

// doc.match('#Verb').debug();
// console.log(doc.match('really').text());
