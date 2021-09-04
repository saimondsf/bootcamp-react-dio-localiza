let prompt = require('prompt-sync')();
let input = parseInt(prompt());
let vetor = [50];

for(i=0; i<=50; i++){
  vetor[i] = input;
  console.log("N[" + i + "] = " + input);
  //console.log(`N[${i}] = ${input}`);
  input *= 2;
}