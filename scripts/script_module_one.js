function saudacao() {
  alert("Olá! Bem-vindo ao nosso site.");
}

let x = 5;
x += 10;
console.log(x);

let x = 5;
x += 1;
console.log(x);

// exemplo de declaração de variáveis
simpleValue = "Esta também é uma variável global";

var globalVar = "Eu sou uma variável global";

let blockScopedVar = "Eu sou uma variável com escopo de bloco";

// VAR - a variável é acessível em qualquer parte do código após a declaração
var x = 10; // declaração global
function exemplo() { // declaração com escopo de função
  var y = 20;
}

// LET - ela é válida apenas dentro do bloco em que foi declarada
let x = 10; // escopo global ou do bloco em que é declarado
if (x > 5) {
  let y = 20; // escopo restrito ao bloco if
}

var a; 
console.log("o valor de a é " + a); // undefined
console.log("o valor de b é " + b); // ReferenceError: b is not defined pq somente a é declarado

// CONST - O VALOR NÃO PODE SER ALTERADO
const minhaConstante = 42;
const _constante = "Texto";
const $constante = true;

// EXEMPLO CONST
const x = 10; // constante de escopo de bloco
x = 20; // Isso causará um erro porque x é uma constante e não é possivel alterar

const array = [1, 2, 3];
array.push(4); // Isso é permitido, pois estamos modificando o conteúdo do array, não a referência