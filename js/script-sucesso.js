

//Recuperando o objeto do usuario logado.
let tokenUser = sessionStorage.getItem("token")


if(tokenUser != "" && tokenUser != undefined){ 
   const elViewUser = document.querySelector("#view-user");
   const usuario = JSON.parse(localStorage.getItem("usuario-logado"));
   elViewUser.innerText = usuario.emailUsuario;

const elLogoutUser = document.querySelector("#logout-user");
elLogoutUser.addEventListener("click",()=>{
   localStorage.removeItem("usuario-logado");
   window.location.href = "../index.html";
});
}
else{
   window.location.href = "../index.html";
}