//---------------------------------------------------------//
//DEFULT FUNCTION ARGUMENTS
// function multiplicacao(a, b = 1){
//     return a * b;
// }
// //default functions arguments aplicado na variável de entrada "b = 1"
// console.log(multiplicacao(1));
//---------------------------------------------------------//

//---------------------------------------------------------//
//REST E SPREAD
// function soma(...args){
//     return args.reduce((acc, value) => acc + value, 0);
// }

//Neste caso a entrada "a" e "b" são definidas, enquanto o "...rest" armazena na forma de vetor as demais entradas
// const sum = (a, b, ...rest) => { 
//     console.log(a, b, rest);
// };

//Spread é a função inversa do rest ou seja, ele pode transformar uma string em array por exemplo. Ele também tem a capacidade de concatenar itens em um array.
// const str = 'Digital Innovation One';
// const arr = [1, 2, 3, 4];

// function logArgs(...args){
//     console.log(args);
// }

// logArgs(str);

// const arr2 = [...arr, 5, 6, 7];
// console.log(arr2);
//---------------------------------------------------------//

//---------------------------------------------------------//
//NÚMERO RANDÔMICO
// function numeroRandomico(){
//     return Math.random() * 10;
// }
// console.log(numeroRandomico());
//---------------------------------------------------------//

//---------------------------------------------------------//
//DESTRUCTURING
// var arrayFruits = ['Apple', 'Banana', 'Orange'];

// var apple = arrayFruits[0];
// var banana = arrayFruits[1];
// var orange = arrayFruits[2];

// var [apple2, banana2, orange2] = ['Apple', 'Banana', 'Orange'];
// console.log(apple, apple2);
//---------------------------------------------------------//

//---------------------------------------------------------//
//CONTADOR DE TEMPO
// console.time('Log time 1');
// setTimeout(() => {
//     console.timeEnd('Log time 1');
// }, 2000); 

// console.time('Log time 2');
// setTimeout(() => {
//     console.timeEnd('Log time 2');
// }, 4000);

// console.time('Log time');
// setTimeout(() => {
//     console.timeEnd('Finish');
// }, 2000);
//---------------------------------------------------------//

//---------------------------------------------------------//
//FUNÇÕES ANÔNIMAS
// let person = {
//     firstName: 'Paul',
//     lastName: 'McCartney'
// };

// let otherPerson = {
//     firstName: 'John',
//     lastName: 'Lennon'
// };

// (function () {
//     console.log(`${otherPerson.firstName} ${otherPerson.lastName}`);
// })()
//---------------------------------------------------------//

//---------------------------------------------------------//
//SEQUÊNCIA DE FIBONACCI
// let prompt = require('prompt-sync')();
// let limite = parseInt(prompt());

// let fib = Array(limite);

// for(i=0; i< limite; i++){
//     if(i==0){
//         fib[i] = 0;
//     }
//     else if(i==1){
//         fib[i] = 1;
//     }
//     else if(i==2){
//         fib[i] = 1;
//     }
//     else if(i>=3){
//         fib[i] = fib[i-1] + fib[i-2];
//     }
// }
// console.log(fib.join(' '));

// FORMATO PARA ENTREGAR O DESAFIO NA DIO

// let limite = parseInt(gets());
// let fib = Array(limite);

// for(i=0; i< limite; i++){
//     if(i==0){    
//         fib[i] = 0;
//     }
//     else if(i==1){
//         fib[i] = 1;
//     }
//     else if(i==2){
//         fib[i] = 1;
//     }
//     else if(i>=3){
//         fib[i] = fib[i-1] + fib[i-2];
//     }
// }

// console.log(fib.join(' '));
//---------------------------------------------------------//