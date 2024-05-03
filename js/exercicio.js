"use strict";

//Exemplo de covstrnsção
let nome = "Lucas";
let idade = 20;
function teste() {
  console.log(nome + idade);
}
//console.log(`Seu nome é ${nome} e sua idade ${idade}`);

const pessoa = {nome: 'Lucas', idade: 20, cidade: 'osasco'}

let novaIdade = parseInt(idade);

let resultado = (idade >= 18) ? "Maior de Idade" : "Menor de Idade"

console.log(novaIdade)
console.log(resultado)

let x = 5
let y = "5"

// if(x == y){
//     console.log(true)
// }else{
//     console.log(false)
// }

let listaUsuarios = [
    {emailUsuario: "lucas@gmail.com", sennhaUsuario: "1013"},
    {emailUsuario: "beto@gmail.com", sennhaUsuario: "1013"},
];

// console.log(listaUsuarios[1].emailUsuario);

// listaUsuarios.forEach(function(usuario){
//     if(usuario.emailUsuario == "lucas@gmail.com"){
//         console.log(usuario.emailUsuario)
//     }
// });

for(let x =0; x < listaUsuarios.length; x++){
    //const element = listaUsuarios[x]
    //console.log(element)

    if(listaUsuarios[x].emailUsuario == "lucas@gmail.com"){
        console.log("valido")
        return "true";
    }
}