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


if(localStorage.getItem("base-dados") == null){
    localStorage.setItem("base-dados",JSON.stringify(listaUsuarios));
}

// console.log(listaUsuarios[1].emailUsuario);

// listaUsuarios.forEach(function(usuario){
//     if(usuario.emailUsuario == "lucas@gmail.com"){
//         console.log(usuario.emailUsuario)
//     }
// });

let iconOlho = document.querySelector("i");
let senha = document.querySelector("#idSenha");
iconOlho.addEventListener('click',function(){
    if(this.className == "fa-regular fa-eye-slash"){
        this.setAttribute("class", "fa-regular fa-eye");
        senha.setAttribute("type", "text");
    }else{
        this.setAttribute("class", "fa-regular fa-eye-slash");
        senha.setAttribute("type", "password");

    }
});

//console.log(Math.random().toString(16).substring(2)+Math.random().toString(16).substring(2));

function validaCampos(input1, input2){

    let listaUsuarios = JSON.parse(localStorage.getItem("baseDados"));

    const elMsg = document.querySelector(".valida");

    for(let x = 0; x < listaUsuarios.length; x++){
        if((listaUsuarios[x].emailUsuario == input1.value) && (listaUsuarios[x].senhaUsuario == input2.value)){

            localStorage.setItem("usuario-logado", JSON.stringify(listaUsuarios[x]));
            const tokenUser = Math.random().toString(16).substring(2)+Math.random().toString(16).substring(2);
            sessionStorage.setItem("token", tokenUser);

            elMsg.setAttribute("class","sucesso");
            elMsg.innerText = "Login Realizado com sucesso";

            setTimeout(()=>{
                elMsg.setAttribute("class","valida");
                elMsg.innerText = "";
                window.location.href = "../serviço/sucesso.html";
           },3000);
            console.log("valido");
            return false
        }
    }
    elMsg.setAttribute("class","erro");
    elMsg.innerText = "Nome de usuário ou senha incorretos!";
    return false;
}