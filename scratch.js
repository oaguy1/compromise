// var nlp = require('./src/index');
var nlp = require('./hmmm');
// nlp.verbose('tagger');


let doc = nlp('he is really good. She goes to school.');
// doc.debug();

doc.match('#Verb').debug();
// console.log(doc.match('really').text());
