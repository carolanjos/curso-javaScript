// ESCOPO - refere-se ao contexto em que uma variável é acessível dentro de um código

// VARIAVEL DE ESCOPO GLOBAL
// Uma variável é global quando é declarada fora de qualquer função ou bloco de código específico. 
// Como resultado, ela está disponível para qualquer parte

var globalVar = "Sou uma variavel global";
function exemploEscopo() {
  console.log(globalVar); // Acessa a variável global
}

// VARIAVEL DE ESCOPO LOCAL
// Uma variável é local quando é declarada dentro de uma função. 
// Isso significa que ela só está acessível dentro dessa função

function exemplo() {
  var localVar = "Sou uma variavel local";
  console.log(localVar); // Acessa a variável local
}
console.log(localVar); // Isso causará um erro, pois localVar não está definida fora da função do código

// VARIAVEL DE ESCOPO DE BLOCO
// Variáveis declaradas com let ou const dentro de um bloco (delimitado por chaves {}) têm escopo de bloco.
// Agora, uma variável declarada com let dentro de um bloco só é acessível nesse bloco, não afetando o escopo da função ou global. 

function exemplo() {
  if (true) {
    let x = 5;
  }
  console.log(x); // Isso causará um erro, pois x não está definida fora do bloco if
}
exemplo(); // executa a função exemplo

// 7 TIPOS DE DADOS
// TIPOS PRIMITIVOS: Eles são imutáveis, o que significa que seu valor não pode ser alterado após a inicialização
// 1. Number: representa números, tanto inteiros quanto de ponto flutuante
let number = 42;

// 2. String: representa sequências de caracteres
let greeting = "Olá, mundo!";

// 3. Boolean: representa valores verdadeiros ou falsos
let isActive = true;

// 4. Undefined: representa uma variável que foi declarada, mas não inicializada
let name;
console.log(name); // undefined

// 5. Null: representa a ausência intencional de um valor
let value = null;
//
// 6. Symbol: representa um identificador único e imutável
const symbol = Symbol("unique identifier");

// TIPOS COMPLEXOS
// Object -> pode conter propriedades e métodos. 
// Objetos são recipientes para armazenar valores, podendo ser representados como pares chave-valor ou como estruturas mais complexas.

let person = {
  name: "João",
  age: 30,
}

// FUNCTION - bloco de código projetado para executar uma tarefa específica
function add(a, b) {
  return a + b;
}

// ARRAY - uma coleção ordenada de valores - permite armazenar uma coleção ordenada de valores
let array = [1, 2, 3, 4, 5]; // array de números
let name = ["João", "Maria", "Pedro"]; // array de strings
let mixed = [1, "dois", true, null]; // array com tipos mistos

// CONVERSAO IMPLICITA DE TIPOS - o processo pelo qual o JavaScript converte automaticamente um valor de um tipo de dado para outro quando necessário
// CONCATENAÇÃO DE STRINGS - O operador + é usado para concatenar (juntar) strings
let num = 10;
let str = "O numero é: " + num; // num é convertido para string e resultado é "O numero é: 10"

// OPERAÇÕES MATEMÁTICAS - Quando você usa operadores matemáticos com diferentes tipos de dados, o JavaScript pode converter implicitamente os tipos
let x = "10";
let y = x * 2; // x é convertido para número e resultado é 20

// COMPARAÇÃO DE TIPOS DIFERENTES: - O JavaScript também realiza conversão de tipos ao comparar valores de tipos diferentes
let a = 10;
let b = "10";
console.log(a == b); // true, porque b é convertido para número antes da comparação

// CONVERSÃO EXPLICITA DE TIPOS DE DADOS - refere-se ao processo pelo qual o programador converte manualmente um valor de um tipo de dado para outro usando funções ou métodos específicos

// parseInt() - converte uma string em um número inteiro
let str = "42";
let num = parseInt(str); // num agora é 42 (número inteiro)

// parseFloat() - converte uma string em um número de ponto flutuante
let str = "3.14";
let num = parseFloat(str); // num agora é 3.14 (número de ponto flutuante)

// String() - converte um valor em uma string
let num = 100;
let str = String(num); // str agora é "100" (string)

// Number() - converte um valor em um número
let str = "56";
let num = Number(str); // num agora é 56 (número)

// operador + (operador de soma)
// o operadpr de + quando usado em duas strings une elas em uma unica
let saudacao = "Olá";
let nome = "Maria";
let mensagem = saudacao + ", " + nome + "!"; // mensagem é "Olá, Maria!"

// quando usado com um número e uma string, o número é convertido em string e as duas são concatenadas
let idade = 30;
let mensagemIdade = "Eu tenho " + idade + " anos."; // mensagemIdade é "Eu tenho 30 anos."

// TEMPLATE LITERALS - uma forma mais moderna e conveniente de criar strings em JavaScript, permitindo a inclusão de expressões embutidas e a criação de strings multilinha de maneira mais legível
let saudacao = "Olá";
let nome = "Ana";
let mensagem = `${saudacao}, ${nome}`; // Usando template literals
console.log(mensagem); // Output: "Olá, Ana"

// METODO CONCAT() - é usado para unir duas ou mais strings em uma única string
let saudacao = "Olá";
let nome = "Carlos";
let mensagem = saudacao.concat(", ", nome, "! Seja bem-vindo."); // Usando concatenação tradicional
console.log(mensagem); // Output: "Olá, Carlos! Seja bem-vindo."

// SPREAD OPERATOR - permite expandir elementos de um array ou objeto em locais onde múltiplos elementos ou propriedades são esperados
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let newArray = [...array1, ...array2]; // Combina array1 e array2
console.log(newArray); // Output: [1, 2, 3, 4, 5, 6]