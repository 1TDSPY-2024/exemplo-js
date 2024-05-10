

//Recuperando o token através da session Storage
let tokenUser = sessionStorage.getItem("token");

if(tokenUser != "" && tokenUser != undefined){ 
    const usuario = JSON.parse(localStorage.getItem("usuario-logado"));
    const elViewUser = document.querySelector("#view-user");
 elViewUser.innerText = usuario.emailUsuario;

 const elLogoutUser = document.querySelector("#logout-user");
 elLogoutUser.addEventListener("click",()=>{
    sessionStorage.removeItem("token");
    localStorage.removeItem("usuario-logado");
    window.location.href = "../index.html";
 });
}
else{
    window.location.href = "../erro.html";
}