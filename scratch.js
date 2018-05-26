// var nlp = require('./src/index');
var nlp = require('./hmmm');
// nlp.verbose('tagger');


let doc = nlp('he is really good. She goes to school.');

let m = doc.match('before (during) after');
m = doc.match('before before');
m = doc.match('before (during|during) after (more)');
m = doc.match('(during) after');
console.log(m.json());

// doc.debug();
// let doc = nlp('i walked to the open door');
// doc.match('#Adjective #Noun').tag('Noun');
// console.log(doc.nouns().data());
