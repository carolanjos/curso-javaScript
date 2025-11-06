// OPERADORES DE ATRIBUIÇÃO 
// Os operadores de atribuição em JavaScript são usados para atribuir valores a variáveis ou para realizar operações aritméticas e lógicas enquanto atribuem o resultado a uma variável. 
//x = 10 e y = 5 

let x = y; 
let x = y; 
x = 5

let x += y;
let x = x + y;
x = 15

let x -= y;
let x = x - y;
x = 5

let x *= y;
let x = x * y;
x = 50

let x /= y;
let x = x / y;
x = 2

let x %= y;
let x = x % y; // isso faz x receber o resto da divisão de x por y
x = 0

// 2.8.7 Operador condicional (ternário)
// O operador condicional (também chamado de operador ternário) é uma forma concisa de fazer uma decisão baseada em uma condição. Ele permite avaliar uma expressão e retornar um valor se a condição for verdadeira e outro valor se a condição for falsa. 
// A sintaxe do operador condicional é mostrada no quadro abaixo:

// condicao ? valor1 : valor2
// Se condicao for verdadeira, o operador terá o valor de valor1. Caso contrário, terá o valor de valor2. 

let a = 5;
let b = 10;
let maior = (a > b) ? a : b; // Retorna a variável maior
console.log(maior); // Saída: 10