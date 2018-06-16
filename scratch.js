var nlp = require('./old_one/index');
// var nlp = require('./hmm/index');
// nlp.verbose('tagger');


let doc = nlp('Lietenant John Smith');
// let two = doc.clone();
// two.tag('cool');
// two.debug();

// let m = doc.match('#Adverb #Adjective');
// let m2 = doc.match('#Adjective');
// m2.tag('cool');
// doc.debug();

doc.debug();
// console.log(doc.nouns().toUpperCase().debug().article());
