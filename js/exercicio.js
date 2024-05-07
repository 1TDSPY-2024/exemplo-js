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
    {emailUsuario: "lucas@gmail.com", senhaUsuario: "1013"},
    {emailUsuario: "beto@gmail.com", senhaUsuario: "1013"},
];

// console.log(listaUsuarios[1].emailUsuario);

// listaUsuarios.forEach(function(usuario){
//     if(usuario.emailUsuario == "lucas@gmail.com"){
//         console.log(usuario.emailUsuario)
//     }
// });


function validaCampos(input1, input2){
    const elMsg = document.querySelector(".valida");

    for(let x = 0; x < listaUsuarios.length; x++){
        if((listaUsuarios[x].emailUsuario == input1.value) && (listaUsuarios[x].senhaUsuario == input2.value)){

            elMsg.setAttribute("class","sucesso");
            elMsg.innerText = "Login Realizado com sucesso";

            console.log("valido");
            return true;
        }
        else{
            console.log("Alou")
        }
    }
    elMsg.setAttribute("class","erro");
    elMsg.innerText = "Usuario ou senha incorreto";
    return false;
}