const { readFileSync , writeFileSync }= require('fs');
//readFileSync is a function it has to be written as it is 
const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');
console.log(first,second);

writeFileSync('./content/result-file-sync.txt','This is result of first and second'+first+second);
// to append something to something already existing 
writeFileSync('./content/result-file-sync.txt','     This is appended',{flag:'a'});