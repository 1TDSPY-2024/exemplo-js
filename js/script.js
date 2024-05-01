//  "use strict";
// Variáveis não declaradas: O strict mode impediria o uso de variáveis não declaradas. 
//Por exemplo:
// a = "Joaquim";
// console.log(a);
// var eval = "strict";
// console.log(eval);
// Em strict mode, todas as atribuições devem ser feitas a variáveis previamente declaradas, caso contrário, um erro de referência será lançado. Isso ajuda a evitar comportamentos indesejados e erros silenciosos, tornando o código mais seguro e previsível.

//Capturar o botão testar através do id com o objeto document do DOM.
// const btnElemento = document.getElementById("botao");
// //Atrelar ao botão um evento de click.
// btnElemento.addEventListener("click",function(){
//     console.log("Testando o botão...");
// });

//Diferença entre var e let:
// Hoisting
let nome = "Joaquim";

if(true)
{
    let nome = "João";
}

console.log(nome);

// Declaração de variáveis (var, let, const):
// Usando var
var x = 10;
console.log(x);

// Usando let
let y = 20;
console.log(y);
y = "teste";
console.log(y);
// Usando const (constante, valor não pode ser alterado)
const z = 30;
console.log(z);
// z = 20;

// Tipos de dados em JavaScript:
// Number
let num = 10;
console.log(num);

// String
let str = "Olá, mundo!";
console.log(str.charAt(0));
console.log(str.indexOf("mundo"));
str = str.replace("mundo", "pessoas");
console.log(str);
// Boolean
let bool = true;
console.log(bool);

// Array numérico
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6,7,8,9,10];
console.log(arr1);
console.table(arr1);
// Mesclar Arrays com concat()
let arr3 = arr1.concat(arr2);
console.log(arr3);
// Mesclar Arrays com SPREAD
let arr4 = [...arr1, ...arr2];
console.log(arr4);

// Array de strings
let arr5 = ["João", "Maria", "José"];
console.log(arr5);
console.table(arr5);

// Object
let obj = { nome: "João", idade: 25, devedor: true};
console.log(obj);
console.table(obj);
console.log(obj.nome);
console.log(obj.idade);
console.log(obj.devedor);
console.log(obj["nome"]);
//Quero carregar um atributo do objeto utilizando uma variável
let atributo = "idade";
console.log("ATRIBUTO VARIADO : " + obj[atributo]);
//Adicionando um nova propriedade ao objeto OBJ e utilizando o operador SPREAD para preencher
obj = {...obj, cidade: "São Paulo", estado: "SP"};
console.log(obj);

//DESTRUCTURING
const pessoa = {nome2 : 'Maria', idade2: 34, cidade: 'Florianópolis'};

const {nome2, idade2, cidade} = pessoa;
console.log(nome2);
console.log(idade2);
console.log(cidade);

// Conversão entre tipos de dados:
// Converter string para número
let strNumero = "10";
let numero = parseInt(strNumero);
console.log(numero); // Saída: 10 (número)

// Converter número para string
let numeroStr = 20;
let strNumero2 = numeroStr.toString();
console.log(strNumero2); // Saída: "20" (string)

// Converter para booleano
let valor = 1;
let booleano = Boolean(valor);
console.log(booleano); // Saída: false (0 é considerado false)

//Estruturas condicionais

// O operador ternário, é uma expressão condicional que permite fazer uma atribuição com base em uma condição. Ele é uma forma compacta de escrever uma instrução if-else em uma única linha.
// A sintaxe básica do if ternário é a seguinte:

// condição ? expressão_se_verdadeira : expressão_se_falsa

//     Se a condição for avaliada como verdadeira, a expressão_se_verdadeira será executada.
//     Se a condição for avaliada como falsa, a expressão_se_falsa será executada.
// Por exemplo:

let idade = 20;
let result = (idade >= 18) ? "Maior de idade" : "Menor de idade";
console.log(result);

// Neste exemplo, se a idade for maior ou igual a 18, a variável result receberá a string "Maior de idade"; caso contrário, receberá a string "Menor de idade".

// O if tradicional em JavaScript é uma estrutura de controle de fluxo que permite executar um bloco de código se uma condição for verdadeira. Aqui está a sintaxe básica do if tradicional:
// if (condição) {
//   Bloco de código a ser executado se a condição for verdadeira
// }

let age = 20;

if (age >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

// Neste exemplo, se a idade for maior ou igual a 18, o programa imprimirá "Maior de idade"; caso contrário, imprimirá "Menor de idade".

//Estruturas condicionais com operadores
// Você pode usar operadores de comparação e operadores lógicos em instruções if/else-if/else para criar condições mais complexas. Aqui está um exemplo de como isso pode ser feito:
let nota = 75;

if (nota >= 90) {
    console.log("Nota A");
} else if (nota >= 80 && nota < 90) {
    console.log("Nota B");
} else if (nota >= 70 && nota < 80) {
    console.log("Nota C");
} else if (nota >= 60 && nota < 70) {
    console.log("Nota D");
} else {
    console.log("Nota F");
}

// Operadores de Comparação:
// Igualdade (==):
// Verifica se dois valores são iguais, convertendo os tipos, se necessário.
// let x = 5;
// let y = "5";
// console.log(x == y); // Saída: true

// Igualdade Estrita (===):
// Verifica se dois valores são iguais e do mesmo tipo.
// let x = 5;
// let y = "5";
// console.log(x === y); // Saída: false


// Diferente (!=):
// Verifica se dois valores não são iguais, convertendo os tipos, se necessário.
// let x = 5;
// let y = "5";
// console.log(x != y); // Saída: false

// Diferente Estrito (!==):
// Verifica se dois valores não são iguais ou não do mesmo tipo.
// let x = 5;
// let y = "5";
// console.log(x !== y); // Saída: true

// Maior que (>):
// Verifica se o operando da esquerda é maior que o operando da direita.
// let x = 10;
// let y = 5;
// console.log(x > y); // Saída: true

// Maior ou igual (>=):
// Verifica se o operando da esquerda é maior ou igual ao operando da direita.
// let x = 10;
// let y = 10;
// console.log(x >= y); // Saída: true

// Menor que (<):
// Verifica se o operando da esquerda é menor que o operando da direita.
// let x = 5;
// let y = 10;
// console.log(x < y); // Saída: true

// Menor ou igual (<=):
// Verifica se o operando da esquerda é menor ou igual ao operando da direita.
// let x = 5;
// let y = 5;
// console.log(x <= y); // Saída: true

// Operadores Lógicos:

// E lógico (&&):
// Retorna verdadeiro se ambos os operandos forem verdadeiros.
// let x = 10;
// let y = 5;
// console.log(x > 5 && y < 10); // Saída: true

//     OU lógico (||):
//         Retorna verdadeiro se pelo menos um dos operandos for verdadeiro.
// let x = 10;
// let y = 5;
// console.log(x > 5 || y > 10); // Saída: true

//     NÃO lógico (!):
//         Inverte o valor do operando; se for verdadeiro, retorna falso e vice-versa.
// let x = 10;
// console.log(!(x > 5)); // Saída: false

// Operadores Relacionais:
// Os operadores relacionais são os mesmos que os operadores de comparação, ou seja: ==, ===, !=, !==, >, >=, <, <=.

// EXERCÍCIOS

// Exercício 1 - Variáveis e Hoisting:
// Qual será o valor de nome após a execução do código abaixo?
// "use strict";
// var nome = "Joaquim";
// if (true) {
//     let nome = "João";
// }
// console.log(nome);

// Exercício 2 - Declaração de Variáveis:
// Declare uma variável estrito utilizando let sem atribuir um valor. Imprima o valor de estrito no console.
// let estrito;
// console.log(estrito); // Saída: undefined

// Exercício 3 - Tipos de Dados:
// Qual é o tipo de dado da variável str?
// let str = "Olá, mundo!";


// Exercício 4 - Mesclar Arrays:
// Crie um novo array chamado arrConcatenado que seja a concatenação dos arrays arr1 e arr2. Imprima arrConcatenado no console.


// Exercício 5 - Acesso a Propriedades de Objetos:
// Acesse a propriedade idade do objeto obj e imprima seu valor no console.
// let obj = { nome: "João", idade: 25, devedor: true };
// console.log(obj.idade); // Saída: 25

// Exercício 6 - Atributo Variável de Objetos:
// Atribua a string "São Paulo" à propriedade cidade do objeto obj. Imprima obj no console.


// Exercício 7 - Conversão de String para Número:
// Converta a string "10" em um número e imprima o resultado no console.

// Exercício 8 - Estrutura Condicional com Operadores:
// Qual será a saída do código abaixo?
// let idade = 20;
// let result = (idade >= 18) ? "Maior de idade" : "Menor de idade";
// console.log(result);

// Exercício 9 - Estrutura Condicional Tradicional:
// Qual será a saída do código abaixo?
// let age = 20;

// if (age >= 18) {
//     console.log("Maior de idade");
// } else {
//     console.log("Menor de idade");
// }

// Exercício 10 - Mesclar Arrays com Spread:
// Crie um novo array chamado arr4 que seja a concatenação dos arrays arr1 e arr2 utilizando o operador spread. Imprima arr4 no console.
